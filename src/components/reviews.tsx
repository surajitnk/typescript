"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const feedbacks = [
    {
      quote: "The music lessons have completely transformed my understanding of rhythm and melody. The instructor is incredibly knowledgeable and patient.",
      name: "Emily Roberts",
      title: "Beginner Guitar Student"
    },
    {
      quote: "I've always wanted to learn piano, and these classes made it so easy! The pace was perfect, and I could see improvement every week.",
      name: "Michael Smith",
      title: "Piano Enthusiast"
    },
    {
      quote: "Amazing experience! The focus on music theory really helped me connect the dots between what I was playing and how it all fits together.",
      name: "Samantha Lee",
      title: "Intermediate Violinist"
    },
    {
      quote: "The online sessions are just as engaging as in-person classes. The instructor ensures every student gets personal attention.",
      name: "David Johnson",
      title: "Drums Student"
    },
    {
      quote: "I've taken a few music classes before, but this was by far the best. The teaching style is clear, and the feedback is always constructive.",
      name: "Olivia Brown",
      title: "Advanced Vocal Student"
    },
    {
        quote: "The lessons were structured perfectly, allowing me to progress at my own pace. I highly recommend this class to anyone wanting to improve their guitar skills.",
        name: "John Doe",
        title: "Advanced Guitar Student"
      },
      {
        quote: "Learning music has always been a dream of mine, and this class made it a reality. The instructor's passion is infectious, and I felt supported every step of the way.",
        name: "Ava Martinez",
        title: "Beginner Piano Student"
      }
  ];
  
export default function Reviews() {
  return (
   <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
    <div className="mt-40">
      <h1 className="text-center text-4xl font-semibold">Hear our Harmony: Voices of success</h1>
      <div className="p-10">
      <InfiniteMovingCards
        items={feedbacks}
        direction="right"
        speed="medium"
      />
      </div>

    </div>
    </div> 
  )
}
