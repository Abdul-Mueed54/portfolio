import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { IconArrowRight } from "@tabler/icons-react";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto p-8 pt-16">

      {/* --- TOP SECTION: Intro & Image --- */}
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-16">

        {/* Left Side: The Image */}
        <div className="w-full md:w-1/3 max-w-[320px] shrink-0">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/profile1.jpeg"
              alt="Abdul Mueed"
              fill
              className="rounded-full object-cover object-top border-4 border-muted shadow-xl"
              priority
            />
          </AspectRatio>
        </div>

        {/* Right Side: Introduction & CTA */}
        <div className="w-full md:w-2/3 space-y-8">
          <div>
            <h1 className="text-5xl lg:text-5xl md:text-5xl font-bold tracking-tight mb-2">
              About Me
            </h1>
            <h1 className="text-3xl lg:text-4xl md:text-3xl group flex font-extrabold uppercase tracking-wider">
              <span className="text-zinc-400">ABDUL</span>{" "}
              <span className="text-primary"> MUEED</span>
            </h1>
          </div>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p className="text-justify">
              I am an engineering student in the Computer and Information
              Systems department at NED University of Engineering & Technology.
              I love to learn new things, my areas of interest are problem
              solving, and building new things.
            </p>
          </div>

          {/* Call to Action moved up to be part of the intro */}
          <div className="pt-4">
            <p className="mb-4 text-lg font-medium text-foreground">
              Interested in collaborating?
            </p>
            <Link href="/contact" passHref>
              <Button size="lg" className="group">
                Get In Touch
                <IconArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION: Timelines (Left Aligned & Full Width) --- */}
      <div className="w-full space-y-12">

        {/* Professional Experience Section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-foreground">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {/* Straviam */}
            <div className="border-l-2 border-primary/50 pl-6 ml-2 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
              <h3 className="font-semibold text-xl text-foreground">
                Straviam
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-1 mb-3">
                <span className="font-medium text-primary">Founding Software Developer</span>
                <span className="hidden md:inline text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground border px-2 py-0.5 rounded-full w-fit">
                  Present
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Spearheading the core software development, designing scalable architectures, and laying down the technical foundation for the startup's products.
                {/* Note: Update this text with your specific tech stack and achievements! */}
              </p>
            </div>
          </div>
        </section>

        {/* Co-Curricular Activities Section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-foreground">
            Co-Curricular Activities
          </h2>
          <div className="space-y-10">

            {/* CIS Community Timeline */}
            <div className="border-l-2 border-primary/50 pl-6 ml-2 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
              <h3 className="font-semibold text-xl text-foreground mb-4">
                CIS Community, NEDUET
              </h3>

              <ul className="space-y-6">
                <li className="relative">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="font-medium text-foreground">Vice President</span>
                    <span className="hidden md:inline text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground border px-2 py-0.5 rounded-full w-fit">
                      Jul 2026 - Present
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Leading the community's strategic initiatives, overseeing small departmental events, and ensuring smooth collaboration between different operational wings.
                  </p>
                </li>

                <li className="relative">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="font-medium text-foreground">Director of Operations</span>
                    <span className="hidden md:inline text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground border px-2 py-0.5 rounded-full w-fit">
                      Jul 2025 - Jul 2026
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Managed the logistics and day-to-day operations for society events, ensuring efficient resource allocation and execution.
                  </p>
                </li>

                <li className="relative">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="font-medium text-foreground">Member</span>
                    <span className="hidden md:inline text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground border px-2 py-0.5 rounded-full w-fit">
                      Mar 2025 - Jul 2025
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* NED Naat Society */}
            <div className="border-l-2 border-muted-foreground/50 pl-6 ml-2 relative">
              <div className="absolute w-3 h-3 bg-muted-foreground rounded-full -left-[7px] top-1.5" />
              <h3 className="font-semibold text-xl text-foreground">
                NED Naat Society
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-1 mb-3">
                <span className="font-medium text-foreground">Executive Member</span>
                <span className="hidden md:inline text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground border px-2 py-0.5 rounded-full w-fit">
                  Present
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Assisting with the management and organization of society gatherings, promoting cultural and spiritual engagement among students.
              </p>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}