import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Hardcoded MVP data array
const blogPosts = [
  {
    title: "My Portfolio with Next.js",
    slug: "tech/my-portfolio",
    category: "Tech",
    date: "July 2, 2026",
    excerpt: "A practical guide to make Portfolios with @next/mdx"
  },

]

export default function BlogsIndex() {
  const techBlogs = blogPosts.filter((post) => post.category === "Tech")
  const islamicBlogs = blogPosts.filter((post) => post.category === "Islamic")

  return (
    <main className="max-w-4xl mx-auto p-8 pt-16 space-y-12">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Writings</h1>
        <p className="text-muted-foreground text-lg">
          A collection of my thoughts on software development, hardware engineering, and life reflections.
        </p>
      </div>

      {/* Tabs Interface */}
      <Tabs defaultValue="tech" className="w-full">
        <TabsList className="grid w-50 grid-cols-2 mb-8">
          <TabsTrigger value="tech">Tech</TabsTrigger>
          <TabsTrigger value="islamic">Religious</TabsTrigger>
        </TabsList>

        <TabsContent value="tech" className="mt-0">
          <div className="grid grid-cols-1 gap-6">
            {techBlogs.map((post) => (
              <Link href={`/blogs/${post.slug}`} key={post.slug} className="no-underline">
                <Card className="hover:border-primary/50 border transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center no-underline mb-2">
                      <Badge>{post.category}</Badge>
                      <span className="text-sm text-muted-foreground no-underline">{post.date}</span>
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="islamic" className="mt-0">
          <div className="grid grid-cols-1 gap-6">
            {islamicBlogs.map((post) => (
              <Link href={`/blogs/${post.slug}`} key={post.slug}>
                <Card className="hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>

    </main>
  )
}