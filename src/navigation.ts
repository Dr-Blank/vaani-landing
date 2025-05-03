import { getPermalink } from './utils/permalinks';
import { type Props as HeaderProps } from '~/components/widgets/Header.astro';
import { type Props as FooterProps } from '~/components/widgets/Footer.astro';
import { METADATA } from 'astrowind:config';
export const headerData: HeaderProps = {
  showRssFeed: false,
  showToggleTheme: true,
  isSticky: true,
  position: 'left',
  showGithub: true,
  links: [
    {
      text: 'Features',
      href: '#features',
    },
    {
      text: 'FAQ',
      href: '#faq',
    },
  ],

  actions: [
    {
      text: 'Try it out',
      href: '#download',
      icon: 'tabler:download',
    },
  ],
};

export const footerData: FooterProps = {
  links: [
    {
      title: 'Support',
      links: [
        { text: 'Report an issue', href: `${METADATA.github}/issues/new`, target: '_blank' },
        { text: 'Changelog', href: `${METADATA.github}/releases`, target: '_blank' },
        { text: 'Roadmap', href: `${METADATA.github}/projects?query=is%3Aopen+roadmap`, target: '_blank' },
        { text: 'Discussion', href: `${METADATA.github}/discussions`, target: '_blank' },
      ],
    },

    {
      title: 'Source & Legal',
      links: [
        { text: 'Source Code', href: METADATA.github, target: '_blank' },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: METADATA.github }],
  footNote: `
    Made with ❤️ by <a class="text-blue-600 hover:underline dark:text-muted" href="https://github.com/Dr-Blank" target="_blank"> Dr.Blank</a> · All rights reserved.
    © ${new Date().getFullYear()} Vaani
  `,
};
