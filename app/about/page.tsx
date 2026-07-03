import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto p-8 pt-16">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        {/* Left Side: The Image */}

        <div className="w-full md:w-1/3 flex justify-center md:justify-start shrink-0">
          <Image
            src="/profile.jpeg"
            alt="Abdul Mueed"
            width={320}
            height={320}
            className="h-75 md:w-80 md:h-80 rounded-full object-cover border-4 border-muted shadow-xl"
            priority
          />
        </div>

        {/* Right Side: The Introduction */}
        <div className="w-full md:w-2/3 space-y-6">
          <div>
            <h1 className="text-5xl lg:text-5xl md:text-5xl font-bold tracking-tight mb-2">About Me</h1>
            <h1 className="text-3xl lg:text-4xl md:text-3xl group flex font-extrabold uppercase tracking-wider">
              <span className="text-zinc-400">ABDUL</span>{" "}
              <span className="text-primary"> MUEED</span>
            </h1>
          </div>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p className="text-justify">
              I am an engineering student in the Computer and Information
              Systems department at NED University of Engineering & Technology.
              I love to learn new things, my areas of interest are problem solving, teaching, and
              islamic studies.
            </p>

          </div>

          {/* Call to Action */}
          <div className="pt-6 border-t">
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
    </main>
  );
}
