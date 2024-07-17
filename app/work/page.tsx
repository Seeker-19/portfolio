"use client";

import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import SliderBtns from "../../components/SliderBtns";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "TextUtility",
    desc: "Build an app using React Framework which converts the content into uppercase, lowercase and count number of letters and words.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "React Js" }],
    image: "/assets/work/Utility.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "NewsApp",
    desc: "Built a news app using APIs fetching the top headlines in India from the web with a Previous and Next button having various categories like sports, entertanment etc.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "React Js" },
      { name: "Express Js" },
      {
        name: "MongoDB",
      },
    ],
    image: "/assets/work/News.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Utube",
    desc: "A youtube clone consisting of videos with search option built using api call , fetching videos and playing them on youtube with play and pause options.",
    stack: [
      { name: "React Js" },
      { name: "Firebase" },
      { name: "Youtube API" },
      { name: "Material UI" },
    ],
    image: "/assets/work/utube.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "MyAwesomeCart",
    desc: "An ecommerce app where you can buy your favourite products with ease storing them in your cart with contact and checkout form.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      {
        name: "Django",
      },
      {
        name: "Python",
      },
    ],
    image: "/assets/work/ecom.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Fullstack",
    title: "ChatApp",
    desc: "Developed a real-time chat application using  for the front-end, Express.js for the back-end, and MongoDB for data storage. The application features user authentication, real-time messaging with Socket.io, and a responsive design using Tailwind CSS.",
    stack: [
      { name: "React Js" },
      {
        name: "Express",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Socket",
      },
    ],
    image: "/assets/work/chatapp.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange: SwiperProps["onSlideChange"] = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center  xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] py-2">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div className="group">
                <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500">
                  {project.category} Project
                </h2>
              </div>

              <p className="text-black/60">{project.desc}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}

                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-black/30"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/20 flex justify-center items-center group">
                        <BsArrowUpRight className="text-black text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-black/60 text-white rounded-xl">
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/20 flex justify-center items-center group">
                        <BsGithub className="text-black text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-black/60 text-white rounded-xl">
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="flex h-[460px] w-full justify-center relative group items-center bg-black/20 rounded-xl">
                      <div className="absolute top-0 bottom-0 w-full rounded-xl h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          fill
                          alt=""
                          className="object-cover rounded-xl"
                          src={project.image}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <SliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all lg:rounded-xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
