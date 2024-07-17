"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "(+91) 8439711800",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "kanswalanurag123@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    desc: "Majri Mafi Mohkampur, Dehradun",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-5"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-9 bg-slate-200 rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-black/70">
                Feel free to reach out to me through any of the following
                methods. I'm always open to discussing new projects, creative
                ideas, or opportunities to be part of your vision.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent className="bg-black/90 text-white rounded-xl">
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Graphic Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px] flex min-h-[80px] w-full rounded-md border border-white px-4 py-5 text-base placeholder:text-black/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Type your message here."
              />

              <Button size="lg" className="max-w-40 rounded-full">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex flex-1 items-start xl:justify-center order-1 xl:order-none mb-8 xl:mb-0 xl:mt-10 xl:py-20">
            <ul className="flex flex-col gap-10">
              {info?.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#bbbbc1] text-accent rounded-xl flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-black/70">{item.title}</p>
                      <h3 className="text-xl">{item.desc}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
