import type { MDXComponents } from 'mdx/types'
import { AspectRatio } from './components/ui/aspect-ratio'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    AspectRatio,
    img: (props) => (
      <img
        {...props}
        className="rounded-lg border border-border/50 object-cover w-full h-auto"
        alt={props.alt || "MDX Image"}
      />
    ),
    
    ...components,
  }
}