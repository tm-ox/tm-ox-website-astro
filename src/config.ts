import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'work'>['data']

export const SiteMetadata = {
    title: 'TM.OX',
    description: 'Design and stuff.. Design portfolio. Built with Astro, Tailwindcss & AlpineJs',
    author: {
        name: 'TM',
        twitter: '@_tmox',
        url: 'https://tm.oxenfree.net',
        email: 'tm@oxenfree.net',
        summary: 'Designer.'
    },
}

export const NavigationLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Work', href: '/#work' },
    { name: 'Contact', href: '/#contact' },
]
