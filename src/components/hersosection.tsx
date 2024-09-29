import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
export default function Herosection(){
    return(
        <div className="md:py-0 py-10 h-screen w-full flex flex-col items-center justify-center relative">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="green"
        />
            <h1 className="p-4 text-4xl md:text-7xl mt-4">Master the class of music</h1>
            <p className="max-w-lg mx-auto text-base md:text-lg mt-4 p-4">Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <Link className="p-4" href={'/courses'}>
            <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </Button></Link>
        </div>
    )
}