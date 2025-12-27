"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Work = {
  id: number;
  image: string;
  category: string;
};

const allWorks: Work[] = [
  { id: 1, image: "/Lumi1.png", category: "events" },
  { id: 2, image: "/Lumi2.png", category: "products" },
  { id: 3, image: "/Lumi3.png", category: "lifestyle" },
  { id: 4, image: "/Lumi4.png", category: "events" },
  { id: 5, image: "/Lumi1.png", category: "events" },
  { id: 6, image: "/Lumi2.png", category: "products" },
  { id: 7, image: "/Lumi3.png", category: "lifestyle" },
  { id: 8, image: "/Lumi4.png", category: "events" },
];

const SpecificPhotograph = () => {
  const [category, setCategory] = useState("events");

  return (
    <motion.div className="py-12 text-center">
      Check out specific photograph component.
      <div>
        <button
          onClick={() => setCategory("events")}
          className="py-2 px-6 border-accent2 border-2"
        >
          Events
        </button>
        <button
          onClick={() => setCategory("products")}
          className="py-2 px-6 mx-3 border-accent2 border-2"
        >
          Products
        </button>
        <button
          onClick={() => setCategory("lifestyle")}
          className="py-2 px-6 border-accent2 border-2"
        >
          Lifestyle
        </button>
      </div>
      <div>
        <p className="my-4">
          The below are examples of {category} photography.
        </p>
        <div className="my-4 md:grid-cols-2 grid gap-4 max-w-4xl mx-auto">
          {allWorks
            .filter((work) => work.category === category)
            .map((work) => (
              <div key={work.id}>
                <Image
                  blurDataURL={work.image}
                  width={300}
                  height={200}
                  src={work.image}
                  alt={`Work ${work.id}`}
                  className="w-full h-auto rounded-lg shadow"
                />
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SpecificPhotograph;
