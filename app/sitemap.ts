import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const supabase = await createClient()

    // Fetch all published blogs
    const { data: blogs } = await supabase
        .from('blogs')
        .select('slug, published_at, created_at')
        .eq('status', 'published')

    // Fetch all published careers
    const { data: careers } = await supabase
        .from('careers')
        .select('slug, created_at')
        .eq('status', 'published')

    // Base pages
    const basePages: MetadataRoute.Sitemap = [
        {
            url: 'https://apstic.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://apstic.com/blogs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://apstic.com/careers',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://apstic.com/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    ]

    // Generate blog URLs
    const blogPages: MetadataRoute.Sitemap = (blogs || []).map((blog) => ({
        url: `https://apstic.com/blogs/${blog.slug}`,
        lastModified: new Date(blog.published_at || blog.created_at),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Generate career URLs
    const careerPages: MetadataRoute.Sitemap = (careers || []).map((career) => ({
        url: `https://apstic.com/careers/${career.slug}`,
        lastModified: new Date(career.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...basePages, ...blogPages, ...careerPages]
}
