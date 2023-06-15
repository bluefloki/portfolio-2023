"use client";

import Hero from "@/components/Hero";
import Project from "@/components/Project";
import { projectsList } from "@/app/lib/projectsList";

export default function Home() {
  return (
    <main>
      <Hero />
      {projectsList.map((p) => {
        return <Project key={p.title} {...p} />;
      })}
      <footer className="footer footer-center p-6 text-base-content">
        <div>
          <p>Copyright © 2023 - Made with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
