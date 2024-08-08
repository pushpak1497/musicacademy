"use client";

import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-teal-400 font-semibold tracking-wide uppercase">
          Featured Courses
        </h2>
        <p className="text-3xl font-semibold mt-2">Learn with the best</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="flex flex-col rounded-[22px] dark:bg-zinc-800 overflow-hidden h-full max-w-sm">
                <div className="p-4 items-center text-center flex-grow flex flex-col sm:p-6">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-100 dark:text-neutral-400 flex-grow mb-2">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="bg-white px-4 py-2  hover:bg-gray-100 text-neutral-700 rounded"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="bg-white px-4 py-3 hover:bg-gray-100 text-neutral-700 rounded"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
