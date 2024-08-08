"use client";

import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
  },

  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];

function UpcomingWebinars() {
  return (
    <div className="py-12 bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-blue-400 font-semibold tracking-wide uppercase">
          Featured Webinars
        </h2>
        <p className="text-3xl font-semibold mt-2">
          Enhance your Musical Journey
        </p>
      </div>
      <div className="mt-10">
        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: "/",
          }))}
        />
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="bg-white px-4 py-3 hover:bg-gray-100 text-neutral-700 rounded"
        >
          View All Webinars
        </Link>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
