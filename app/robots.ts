import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
    return {
        rules: {
            // all the user agents from all Search engines
            userAgent: '*',
            allow: ["/"],
            disallow: []
        },
        sitemap: 'https://www.fiziokaspars.lv/sitemap.xml'
    }
}