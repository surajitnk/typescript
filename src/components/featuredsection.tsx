'use client'
import Link from "next/link";
import fcourses from '../data/music_course.json';
import { BackgroundGradient } from "./ui/background-gradient";
interface courss{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}
export default function Featuredsection(){
    const Courses = fcourses.courses.filter((course:courss) => course.isFeatured)
    return(
    <div className="h-screen">    
        <div >
            <h2 className="text-center text-1.5xl text-green-400 font-semibold">FEASTURED COURSES</h2>
            <p className="text-center text-4xl font-bold mt-2">Learn with the best</p>
        </div>
        <div className="mt-5 mx-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 text-center justify-center overflow-hidden">
            {Courses.map((course:courss) => (
                <div className="flex justify-center" key={course.id}>
                    <BackgroundGradient className=" flex flex-col bg-white dark:bg-zinc-900 h-full max-w-lg overflow-hidden rounded-[25px]">
                        <div className="p-4">
                            <p className="text-2xl font-semibold">{course.title}</p>
                            <p className="w-3/5 mx-auto text-base">{course.description}</p>
                            <Link className="" href={`courses/${course.slug}`}>
                            Learn More</Link>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}
            </div>
        </div>
        <div className="text-center mt-20">
            <Link href={'/courses'}
            className="text-1xl p-1.5 rounded-md bg-white text-black">
            View all courses
            </Link>
        </div>
    </div>    
    )
}