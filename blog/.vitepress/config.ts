import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog/', 
  title: 'Attested Blog',
  description: 'Insights from the frontier',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: 'https://attestedfrontiers.xyz/' },
      { text: 'Blog', link: '/index.html' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/attested-frontiers' },
      { icon: 'twitter', link: 'https://x.com/AttestedFront' },
      { icon: 'mail', link: 'mailto:contact@attestedfrontiers.xyz' }
    ]
  }
})
