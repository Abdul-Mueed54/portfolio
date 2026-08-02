import Link from "next/link";
import { IconHome, IconUser, IconBriefcase, IconMail, IconBallpen, } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import Image from "next/image";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: <IconHome className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    name: "About",
    href: "/about",
    icon: <IconUser className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <IconBriefcase className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    name: "Writings",
    href: "/blogs",
    icon: <IconBallpen className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <IconMail className="w-4 h-4 md:w-5 md:h-5" />,
  },
];

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 w-full z-50 pointer-events-none gap-8 px-4 md:px-8 flex items-center justify-between">
      <div className="pointer-events-auto hidden sm:block">
        <Link href="/">
          <Image
            src="/avatar.png"
            width={50}
            height={50}
            alt="avatar"
            className="h-10 w-10"
          />
        </Link>

      </div>

      {/* CENTER: The Floating Pill */}
      <nav className="pointer-events-auto mx-auto bg-background/90 backdrop-blur-md border shadow-lg rounded-full p-1 flex items-center gap-1">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="flex items-center gap-1.5 px-4 py-2 md:px-4 md:py-2.5 rounded-full hover:bg-muted text-xs md:text-sm font-medium transition-colors" >
            {item.icon}
            <span className="hidden sm:inline-block">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* RIGHT: Theme Toggle */}
      <div className="pointer-events-auto ">
        <ThemeToggle />
      </div>
    </div>
  );
}
