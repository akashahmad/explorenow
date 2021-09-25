import React from 'react'

const AddNews = () => {
    return (
        <div>
            <div className="py-4 mt-6 px-3 bg-offwhite flex justify-center items-center text-center">
               <div>
               <h1 className="text-lg font-bold">Join Newsletter</h1>
                <p className="py-3">Enter your email and we'll keep you posted with news and updates!</p>
                <form className="flex flex-col px-3 ">
                    <input className="py-2 px-2" type="email" placeholder="Email"/>
                    <button className="py-2 bg-blue my-2 text-white">Subscribe</button>
                </form>
               </div>
            </div>
        </div>
    )
}

export default AddNews