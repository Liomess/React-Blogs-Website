import React, { useContext , useState, useEffect } from 'react'
import { useNavigate , useLocation} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';


const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    const [blog, setBlog] = useState(null);
    const[relatedBlogs, setRelatedBlogs] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {

        setLoading(true);

        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

        
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname] )

  return (

    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">

      <Header/>


      {
        loading ?
        
        (<div className="min-h-[80vh] w-full flex justify-center items-center">

            <p className="text-center font-bold text-3xl"> Loading</p>

        </div>) :

        blog ?      
        (
            <div>

                {/* BACK BUTTON */}
                <div className="mt-[75px] w-11/12 max-w-[670px] ">

                    <button
                    className="border-2 border-gray-300 py-1 px-4 rounded-md"
                    onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                </div>


                <div>

                    <BlogDetails post={blog} />

                    <h2 className="font-bold text-3xl"> Related Blogs </h2>

                    {
                        relatedBlogs.map( (post) => (
                            <div key = {post.id}>
                                <BlogDetails post={post} />
                            </div>
                        ) )
                    }

                </div>

            </div>
        ) :

        (<div className="min-h-[80vh] w-full flex justify-center items-center">

            <p className="text-center font-bold text-3xl">No Blog Found !</p>

        </div>)
       
      }


    </div>
  )
}

export default BlogPage
