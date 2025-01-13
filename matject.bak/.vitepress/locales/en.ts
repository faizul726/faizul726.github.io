import { defineConfig, type DefaultTheme } from 'vitepress'

export const enLocale = defineConfig({  
  base: 'en',
  title: 'Matject Documentation',
  description: "Matject Guide and Documentation",
  themeConfig: {sidebar: {'/': sidebarShaders()}}
})

function sidebarShaders(): DefaultTheme.SidebarItem[] {
  return [
    {
      collapsed: false,
      text: 'Introduction',
      items: [
        {text: 'What is Matject?', link: '/'},
        {text: 'Features', link: '/docs/features'},
        {text: 'How it\'s different from BetterRenderDragon?', link: '/docs/how-its-different-from-betterrenderdragon'}
      ]
    },
    {
      text: 'How to use?',
      collapsed: false,
      items: [
        {text: 'Important notes', link: '/docs/important-notes'},
        {text: 'Requirements', link: '/docs/requirements'},
        {text: 'Downloading from GitHub', link: '/docs/downloading-from-github'},
        {text: 'First setup', link: '/docs/first-setup'},
        {text: 'Using shader with Matject', link: '/docs/using-shader-with-matject'},
        {text: 'Method: Auto', link: '/docs/method-auto'},
        {text: 'Method: Manual', link: '/docs/method-manual'},
        {text: 'Method: matjectNEXT', link: '/docs/method-matjectnext'},
        {text: 'Restoring to default/removing shaders/uninstalling shaders', link: '/docs/restoring-to-default'}
      ]
    },
    {
      text: 'Frequently asked questions',
      collapsed: false,
      items: [
        {text: 'Is it safe?', link: '/docs/is-it-safe'},
        {text: 'What is dynamic restore?', link: '/docs/what-is-dynamic-restore'},
        {text: 'What is matjectNEXT?', link: '/docs/what-is-matjectnext'},
        {text: 'What about Android/iOS?', link: '/docs/what-about-android-ios'},
        {text: 'Note for content creators', link: '/docs/note-for-content-creators'}
      ]
    },
    {
      text: 'Common problems',
      collapsed: false,
      items: [
        {text: 'Invisible blocks', link: '/docs/invisible-blocks'},
        {text: 'Known issues', link: '/docs/known-issues'},
        {text: 'It\'s not working/crashing/not changing shaders', link: '/docs/its-not-working'}
      ]
    },
    {
      text: 'Extras',
      collapsed: false,
      items: [
        {text: 'Helpful tips', link: '/docs/helpful-tips'},
        {text: 'What is material-updater', link: '/docs/what-is-material-updater'},
        {text: 'What is jq', link: '/docs/what-is-jq'},
        {text: 'Matject settings explained', link: '/docs/matject-settings-explained'},
      ]
    }
  ]
}
