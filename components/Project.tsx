"use client";

import { useIntersection } from "@/lib/hooks/useIntersection";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  id?: string;
  imgUrl: string;
  title: string;
  url: string;
  description: string;
  order: string;
  techStack: string[];
  gradientColor: string;
  shadowColor: string;
  imageFade: string;
  textFade: string;
};

export default function Project({
  id,
  imgUrl,
  title,
  url,
  description,
  order,
  techStack,
  gradientColor,
  shadowColor,
  imageFade,
  textFade,
}: Props) {
  let count = 0;
  const ref = useRef<any>();
  const inViewport = useIntersection(ref, "-200px");

  if (inViewport && count < 1) {
    document
      .getElementById(`project-image-${title}`)
      ?.classList.add(imageFade, "visible");
    document
      .getElementById(`project-text-${title}`)
      ?.classList.add(textFade, "visible");
    count++;
  }

  return (
    <div
      id={id}
      className="h-screen flex flex-col items-center justify-center py-2 px-4 md:py-12 md:px-20"
    >
      <div className="md:invisible flex flex-col md:grid md:grid-cols-2 items-center gap-10 md:gap-20">
        <Image
          src={imgUrl}
          id={`project-image-${title}`}
          alt="project image"
          width={600}
          height={600}
          className={`rounded-lg ${order} shadow-xl ${shadowColor}`}
        />
        <div id={`project-text-${title}`} className={`flex flex-col gap-6`}>
          <h2
            className={`text-5xl w-fit font-semibold bg-gradient-to-r bg-clip-text text-transparent ${gradientColor}`}
          >
            {title}
          </h2>
          <div className="flex flex-row items-center gap-6 flex-wrap">
            {techStack.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="py-2 px-6 md:text-lg border border-neutral-800 rounded-full"
                >
                  {el}
                </div>
              );
            })}
          </div>
          <p
            ref={ref}
            className="text-xl md:text-2xl font-extralight mt-4 mb-4 md:mb-0"
          >
            {description}
          </p>
          <Link
            className="btn w-fit btn-primary gap-3 hover:gap-6"
            href={url}
            target="_blank"
          >
            Visit Site
            <FiExternalLink className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
