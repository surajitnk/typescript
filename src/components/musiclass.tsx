
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const musicClass = [
    {
      title: "Introduction to Music Theory",
      description: "Learn the basic principles of music, including notes, scales, chords, and rhythm. This class is perfect for beginners who want to understand the fundamentals of music."
    },
    {
      title: "Guitar for Beginners",
      description: "Start your journey to becoming a guitarist with this beginner-friendly class. Learn basic chords, strumming patterns, and simple songs to get you started."
    },
    {
      title: "Piano Basics",
      description: "Discover the joy of playing the piano. This class covers piano technique, scales, and easy-to-learn pieces that will introduce you to the instrument."
    },
    {
      title: "Vocal Training",
      description: "Improve your vocal skills with professional training. Learn breath control, pitch accuracy, and techniques to enhance your singing voice."
    },
    {
      title: "Music Composition",
      description: "This class teaches you how to create your own music. You'll learn about melody, harmony, and song structure, and how to apply them in your compositions."
    },
    {
      title: "Jazz Improvisation",
      description: "Explore the art of improvisation in jazz music. Learn scales, chords, and techniques that will allow you to create your own solos and express yourself musically."
    },
    {
      title: "Electronic Music Production",
      description: "Dive into the world of electronic music. Learn how to use digital audio workstations (DAWs) to create beats, mix tracks, and produce professional-quality music."
    },
    {
      title: "Drumming Essentials",
      description: "Master the basics of drumming, including rhythm, drum patterns, and techniques for various styles of music such as rock, jazz, and pop."
    },
    {
      title: "Advanced Music Theory",
      description: "For those with a foundation in music, this class delves deeper into complex scales, chord progressions, and advanced harmony concepts."
    },
    {
      title: "Music History",
      description: "Learn about the evolution of music through the ages, from classical compositions to contemporary genres, and the key figures who shaped its history."
    }
  ];
  
function Musicclass() {
  return (
    <div className=" mt-10">
      <StickyScroll content={musicClass} />
    </div>
  )
}

export default Musicclass
