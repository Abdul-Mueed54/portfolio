import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconArrowRight } from "@tabler/icons-react";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-2 pt-16 pb-16 space-y-32">
      {/* 2. ABOUT SNIPPET */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
        <div className="flex justify-center">
          <Image
            src="/profile.jpeg"
            alt="Abdul Mueed"
            width={200}
            height={200}
            className="rounded-3xl border shadow-xl object-cover"
          />
        </div>
        <div className="">
          <div className="flex flex-col ">
            <p className="text-zinc-500 text-lg font-medium">Hello, I'm</p>

            <h1 className="text-4xl lg:text-5xl md:text-4xl group flex font-extrabold uppercase tracking-wider">
              <span className="text-zinc-400">ABDUL</span>{" "}
              <span className="text-primary"> MUEED</span>
            </h1>
          </div>
          <p className="text-lg text-muted-foreground text-justify">
            Software Developer and Computer Systems Engineering Student. My
            passion is to learn new things each day everyday.
          </p>
          <Link href="/about" className="inline-block mt-4">
            <Button variant="outline" className="group">
              More About Me
              <IconArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
      <hr />
      {/* 3. PROJECTS SNIPPET */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Recent Work</h2>
          <Link
            href="/projects"
            className="hidden md:flex text-primary hover:underline items-center text-sm font-medium"
          >
            View All Projects <IconArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
              <Link href="/projects/hms" className="no-underline">
          <Card className="overflow-hidden border-border/50 h-90 shadow-sm">
            <div className="relative w-full h-48 bg-muted overflow-hidden">
              <Image
                src="/HMS.png"
                alt="hms"
                width={350}
                height={350}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              {" "}
              <CardTitle>Hospital Management System</CardTitle>{" "}
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                A real world system made for Hospitals or Clinics.
              </p>
                {" "}
                <Button size="sm"> About Project </Button>{" "}
            </CardContent>
          </Card>
              </Link>

          {/* Project Card 2 */}
          <Link href="/projects/prolog" className="no-underline">
            <Card className="overflow-hidden border-border/50 h-90 shadow-sm">
              <div className="relative w-full h-48 bg-muted">
                <Image
                  src="/prolog.png"
                  alt="Prolog"
                  height={400}
                  width={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Prolog</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Prolog is a final year projects archiving system.
                </p>
                <Button size="sm"> About Project </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Mobile View All Button */}
        <Link href="/projects" className="md:hidden block w-full">
          <Button variant="outline" className="">
            {" "}
            View All Projects →
          </Button>
        </Link>
      </section>

      <hr />

      {/* 4. BLOGS SNIPPET */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">Latest Thoughts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="mb-2">
                {" "}
                <Badge>Tech</Badge>
              </div>
              <CardTitle>My Portfolio with Next.js</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                A practical guide to make Portfolios with @next/mdx
              </p>
              <Link
                href="/blogs/tech/my-portfolio"
                className="text-primary hover:underline text-sm font-medium"
              >
                {" "}
                Read Post →
              </Link>
            </CardContent>
          </Card>
        </div>

        <Link href="/blogs" className="inline-block">
          <Button variant="outline" className="group">
            Read More Writings
            <IconArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

      <hr />

      {/* 5. QUICK CONTACT CTA */}
      <section className="bg-muted/50 rounded-3xl p-6 md:p-12 space-y-4 md:space-y-6 border flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Ready to build something?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground text-center max-w-xl mx-auto">
          I'm currently open to new opportunities and collaborations.
        </p>
        <Link href="/contact" className="inline-block pt-2">
          <Button size="lg">Send a Message</Button>
        </Link>
      </section>
    </main>
  );
}
