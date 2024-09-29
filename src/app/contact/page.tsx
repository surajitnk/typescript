import React from 'react'
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/moving-border";
function page() {
    return (
      <>
        <div className='mt-40'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold'>Contact Us</h1>
                <p className='max-w-[600px] mx-auto text-1xl mt-5'>We're here to help with any questions about our courses,programs,or events. Reach out and let us know how we can assist you in your musical jounrey</p>
            </div>
            <div className='text-center'>
                <div className="flex flex-col max-w-xl mx-auto p-6 rounded-lg shadow-md space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="text-white w-full p-3 border bg-transparent rounded-md focus:outline-none focus:ring-2 "
                    />

                    <textarea
                        placeholder="Enter your message here"
                        className="text-white w-full p-3 h-40 border bg-transparent border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-grey-950"
                    ></textarea>
                    
                </div>

            </div>
            <div className='text-center'>
            <Button
        borderRadius="1.75rem"
        className="bg-green-700 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-green-900"
      >
        Contact Us
      </Button>
            </div>    
        </div>
       <Meteors number={30} /> 
     </>  
    )
}

export default page
