import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Hardcoded MVP data array
const myProjects = [
  {
    title: "Hospital Management System",
    slug: "hms",
    image: "/HMS.png",
    description: "A real world system made for Hospitals or Clinics."
  },
  {
    title: "Prolog",
    slug: "prolog",
    image: "/prolog.png",
    description: "Prolog is a final year projects archiving system."
  },
  {
    title: "Carento",
    slug: "carento",
    image: "/carento.png",
    description: "Carento is a multivendor car rental system."
  },
  {
    title: "Portfolio",
    slug: "portfolio",
    image: "/portfolio.png",
    description: "This Portfolio is build with @next/mdx."
  },

]

export default function ProjectsIndex() {
  return (
    <main className="max-w-6xl mx-auto p-8 pt-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">My Projects</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A collection of my recent work, spanning software development, AI integration, and hardware acceleration. Click on any project to read the full case study.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {myProjects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="group">
            <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
              {/* Image Container */}
              <div className="relative w-full h-48 bg-muted overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} snapshot`}
                  height={400}
                  width={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Text Content */}
              <CardHeader className="pb-2">
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}