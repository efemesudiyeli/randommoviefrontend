import React from 'react'

export default function DisplaySection({ randomlySelectedMovie, isLoading, clickedFirstTime }) {

    console.log(isLoading)

    return (
        <div className='bg-red-500 w-full'>
            <div className='flex justify-center items-center w-full h-full text-white text-3xl'>


                <span className='text-base italic'>

                    {
                        clickedFirstTime ? <></> : <>Click "Get Movie"</>
                    }
                </span>



                {
                    isLoading ? <>Loading...</> : <>{randomlySelectedMovie}</>
                }


            </div>
        </div>
    )
}
