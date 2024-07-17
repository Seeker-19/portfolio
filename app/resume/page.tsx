"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaAws } from "react-icons/fa6";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a Full Stack Developer proficient in MERN and Cloud Services like AWS S3 and Dynamo DB.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anurag Leela Kanswal",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 8439711800",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "kanswalanurag123@gmail.com",
    },
    {
      fieldName: "Language",
      fieldValue: "English Hindi",
    },
  ],
};

const experiences = {
  icon: "/components/assets/badge.svg",
  title: "My Experience",
  description:
    "My experience involves working withinn different teams which gave me ample opportunities to learn",
  items: [
    {
      company: "DIC PU Chandigarh",
      position: "Frontend Developer",
      desc: "During my tenure, I developed and maintained web applications using modern frameworks such as React and Node.js. I also gained valuable experience working with APIs to integrate and display dynamic content.",
      duration: "May-June 2023",
    },
    {
      company: "SIH Bhopal",
      position: "Frontend Developer",
      desc: "I participated in the SIH hackathon event, working as a Frontend Developer. Our project focused on tree enumeration using machine learning. I was responsible for developing the user interface and ensuring seamless integration with the backend.",
      duration: "Dec 2023",
    },
    {
      company: "Vizio",
      position: "Full Stack Developer",
      desc: "Worked on both backend and frontend functionalities for a video collaboration platform. Utilized AWS for storing videos and managing content metadata. Implemented features for fetching and displaying video content, and integrated backend services to handle user authentication, video uploads, and streaming.",
      duration: "May 2024 - Present",
    },
  ],
};

const education = {
  icon: "/components/assets/cap.svg",
  title: "My Education",
  description: "This is my Education Field.",
  items: [
    {
      institution: "DAV Public School",
      degree: "12th CBSE",
      desc: "Completed secondary and senior secondary education from DAV Public School with outstanding academic performance. Achieved an impressive aggregate of 93.2% in secondary schooling (2018) and an exceptional 96.5% in senior secondary schooling (2020).",
      duration: "2018-20",
    },
    {
      institution: "UIET Chandigarh",
      degree: "BE information Technology",
      desc: "Pursuing a Bachelor of Engineering in Information Technology from UIET Chandigarh. Engaged in comprehensive coursework and hands-on projects, developing a strong foundation in software development, data structures, algorithms, and database management with a current cgpa of 8.16",
      duration: "2025 Grad",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "My Skills Section includes different full stack domains like Frontend , Backend and Cloud Services.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCss",
    },
    {
      icon: <BiLogoPostgresql />,
      name: "PostgreSql",
    },
    {
      icon: <FaAws />,
      name: "AWS S3",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center    
      justify-center xl:py-10 py-10"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col items-center xl:flex-row xl:items-start gap-[100px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-5 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {experiences.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {experiences.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#dad4d4] px-10 py-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl min-h-[39px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <h4 className="text-justify">{item.desc}</h4>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-black/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-5 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#dad4d4] px-10 py-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl min-h-[39px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <h4 className="text-justify">{item.desc}</h4>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-black/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-slate-200 rounded-xl items-center justify-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 flex items-center justify-center">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-slate-900 rounded-xl text-white">
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="ma-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-6 max-w-[620px] mx-auto xl:mx-0">
                  {about?.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-black/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
