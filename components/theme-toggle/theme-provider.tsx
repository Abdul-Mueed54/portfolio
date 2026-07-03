"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// This wrapper is required because next-themes uses React Context,
// which only works in Client Components.
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}