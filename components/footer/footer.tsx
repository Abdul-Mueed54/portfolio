import Link from "next/link"
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from "@tabler/icons-react"

export function Footer() {
  return (
    <footer className="border-t  mt-24">
      <div className="mx-auto max-w-5xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abdul Mueed.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Abdul-Mueed54" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <IconBrandGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/-mueed" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <IconBrandLinkedin className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/_mueed54" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <IconBrandInstagram className="w-5 h-5" />
          </a>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            <IconMail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}