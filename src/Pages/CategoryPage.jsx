import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const category = location.pathname.split("/").at(-1);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">

      <Header/>

      <div className="mt-[75px] w-11/12 max-w-[670px] ">

        <button
        className="border-2 border-gray-300 py-1 px-4 rounded-md"
        onClick={() => navigate(-1)}
        >
            Back
        </button>

        <h2 className="font-bold text-3xl mt-5"> 

            Blogs on <span className='underline'>{category}</span>

        </h2>

      </div>

      <div className='mt-[-50px]'>
            <Blogs/>
        </div>

      <Pagination/>
    </div>
  )
}

export default CategoryPage
