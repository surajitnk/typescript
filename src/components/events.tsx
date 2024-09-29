'use client'
import React from 'react'
import Link from 'next/link';
import { HoverEffect } from "./ui/card-hover-effect";
function Events() {
    const musicEvents = [
        {
          title: "Blues & Brews Festival",
          description: "Enjoy a day of blues music paired with the finest craft beers from local breweries.",
          link: <a href="https://example.com/blues-brews" target="_blank" rel="noopener noreferrer">More Info</a>
        },
        {
          title: "Hip-Hop Underground Bash",
          description: "An electrifying night of hip-hop performances from underground artists and DJs.",
          link: <a href="https://example.com/hiphop-bash" target="_blank" rel="noopener noreferrer">More Info</a>
        },
        {
          title: "Acoustic Sunset Serenade",
          description: "Relax by the beach as acoustic artists perform soothing music during the sunset.",
          link: <a href="https://example.com/acoustic-sunset" target="_blank" rel="noopener noreferrer">More Info</a>
        },
        {
          title: "Global EDM Extravaganza",
          description: "A non-stop electronic music festival with top DJs from across the world.",
          link: <a href="https://example.com/global-edm" target="_blank" rel="noopener noreferrer">More Info</a>
        },
        {
          title: "Soulful Sundays",
          description: "End your weekend with soul music and vibes at this cozy local venue.",
          link: <a href="https://example.com/soulful-sundays" target="_blank" rel="noopener noreferrer">More Info</a>
        },
        {
          title: "Pop Icons Live!",
          description: "Experience live performances of pop hits from some of the most iconic names in the industry.",
          link: <a href="https://example.com/pop-icons" target="_blank" rel="noopener noreferrer">More Info</a>
        }
      ];
        
  return (
    <div className='p-4'>
      <div className='flex flex-col justify-center px-4 sm:px-6'>
        <div className='text-center'>
            <h2 className='text-3xl mt-3 font-bold text-teal-800'>Featured courses</h2>
            <p className='text-4xl mt-3'>Learn with the best</p>
        </div>
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={musicEvents} />
    </div>
        <div className='text-center mt-1'>
            <Link href={'/'} className='bg-white text-black p-1 rounded-lg'>
            View all events</Link>
        </div>
      </div>
    </div>
  )
}

export default Events;
