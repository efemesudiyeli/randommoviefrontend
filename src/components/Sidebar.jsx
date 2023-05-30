import React from 'react'

export default function Sidebar({ getRandomMovie }) {



    return (
        <div className='bg-gray-700 h-screen lg:w-40 w-20'>

            <ul className='text-white flex flex-col justify-between items-center h-full text-center'>
                <li className='p-2 '>
                    <span>awokendev</span>
                </li>
                <li className='w-full'>
                    <ul>
                        <li className='my-2 p-2 bg-slate-600 w-full hover:bg-slate-500 cursor-pointer'><a href="https://strapi-demo-app-nbjg.onrender.com/admin/content-manager/collectionType/api::movie.movie?page=1&pageSize=10&sort=title:ASC">admin panel</a></li>
                        <li className='my-2 p-2 bg-slate-600 w-full hover:bg-slate-500 cursor-pointer' onClick={getRandomMovie}> get movie</li>
                        <li className='my-2 p-2 bg-slate-600 w-full hover:bg-slate-500 cursor-pointer'>c</li>
                    </ul>
                </li>

                <li className='p-2 w-full  '>
                    <span>2023 Copyright</span>
                </li>
            </ul>

        </div>
    )
}
