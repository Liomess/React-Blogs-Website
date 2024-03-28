import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const tag = location.pathname.split("/").at(-1);
    
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">


        <Header/>

        <div className="mt-[75px] w-11/12 max-w-[670px] ">

            <button 
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => navigate(-1)}
            >
                back
            </button>


            <h2 className="font-bold text-3xl mt-5">

                Blogs Tagged <span className="text-blue-700 underline">#{tag}</span>

            </h2>

        </div>


        <div className='mt-[-50px]'>
            <Blogs/>
        </div>

        <Pagination/>
      
    </div>
  )
}

export default TagPage
