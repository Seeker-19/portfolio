"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ServerIcon } from "lucide-react";
const services = [
  {
    num: "01",
    title: "Web Development",
    Description:
      "I am dedicated to delivering exceptional web design solutions. My approach blends cutting-edge design techniques with strategic thinking while Embracing the latest design trends and technologies and working closely with clients .",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    Description:
      "A passionate UI/UX designer dedicated to creating digital experiences that seamlessly blend aesthetics with functionality. With a keen eye for detail and a user-centric approach, I transform ideas into intuitive and visually stunning interfaces.",
    href: "",
  },
  {
    num: "03",
    title: "SEO",
    Description:
      "Improved website performance and load times by optimizing code , reduced page load times and enhanced overall site performance by optimizing images, minifying CSS and JavaScript.",
    href: "",
  },
];

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-14 xl:py-12">
      <div className="container mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-[120px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center group gap-6"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-black/30 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-black text-3xl" />
                  </Link>
                </div>

                <h2 className="text-[32px] font-bold leading-none group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                <p className="text-black/90">{service.Description}</p>

                <div className="border-b border-black/30   w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
