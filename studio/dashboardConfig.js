export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63095f7b94f02808a20aa346',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-od5w4n8k',
                  apiId: '7c40f46a-6b51-47d6-b557-86babd038686'
                },
                {
                  buildHookId: '63095f7ce76977082d2c1595',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eci5hyzm',
                  apiId: 'fe7e1639-102e-41d3-a160-e3eeacadd83f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomkenkel/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eci5hyzm.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
