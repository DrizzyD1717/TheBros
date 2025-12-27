"use client";

import SpecificPhotograph from "@/app/Components/SpecificPhotograph";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import Image from "next/image";

type Work = {
  id: number;
  image: string;
  category: string;
};

type shoot = {
  shootType: string;
  description: string;
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

const shoots: shoot[] = [
  {
    shootType: "Portrait",
    description:
      "Professional headshots and lifestyle portraits that highlight personality and confidence.",
  },
  {
    shootType: "Product Photography",
    description:
      "Clean, detailed images that make your products stand out in e-commerce and marketing campaigns.",
  },
  {
    shootType: "Event Coverage",
    description:
      "From weddings to corporate gatherings, we capture the energy and emotion of your special occasions.",
  },
  {
    shootType: "Creative & Editorial  ",
    description:
      "Artistic shoots with a magazine-style flair, perfect for campaigns, portfolios, and storytelling.",
  },
];

const testimonials = [
  {
    quote:
      "The photos captured every detail of our wedding day timeless memories we'll cherish forever.",
    name: "Sarah Johnson, Bride",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Our corporate event coverage was flawless. The images perfectly reflected our brand's professionalism.",
    name: "David Okoro",
    title: "Hamlet",
  },
  {
    quote:
      "I've never felt so confident in front of a camera. The portrait session brought out my personality beautifully.",
    name: "Michael Adeyemi",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Creative, reliable, and visionary. The editorial shoot gave our campaign a unique edge.",
    name: "Laura Smith",
    title: "Pride and Prejudice",
  },
];

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-background text-textPrimary px-6 py-20 md:py-24">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <LampContainer className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Photography
          </h1>
          <EncryptedText
            className="mt-10"
            text="Professional photography services designed to capture moments,
          products, and stories that elevate your brand."
          ></EncryptedText>
        </LampContainer>
      </motion.section>

      {/* Services Breakdown */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.55 },
          },
        }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
      >
        {/* Slight Edit */}

        {/* The edit ends here */}
        {shoots.map((shoot) => (
          <motion.div
            key={shoot.shootType}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-card p-6 rounded-xl shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{shoot.shootType}</h3>
            <p className="text-textSecondary">{shoot.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Portfolio / Gallery Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary mb-10 text-center"
        >
          Selected Works
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.52 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {allWorks.map((singleWork) => (
            <motion.div
              key={singleWork.id}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="aspect-square bg-card rounded-xl overflow-hidden shadow"
            >
              {/* You will place your image here */}
              <Image
                src={singleWork.image}
                alt={`Work ${singleWork.id}`}
                width={300}
                height={300}
                className="w-full h-full hover:scale-105 transition-transform duration-300"
              ></Image>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* I can remove this section at any time */}

      <SpecificPhotograph></SpecificPhotograph>

      {/* Remove content above here */}

      <p className="text-textPrimary text-center font-bold text-2xl text-primary">
        Testimonials
      </p>
      <InfiniteMovingCards
        items={testimonials}
        speed="slow"
      ></InfiniteMovingCards>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mt-20"
      >
        <h3 className="text-3xl font-bold mb-4 text-primary">
          Ready to capture your story?
        </h3>
        <p className="text-textSecondary mb-6">
          Book a session today or request a custom quote. Let&apos;s create
          visuals that last a lifetime.
        </p>
        <button className="bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition">
          Contact Us
        </button>
      </motion.section>
    </main>
  );
}
