export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6160891310954b8e3098f79c',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-iq8rwz74',
                  apiId: '9178bd02-6ee8-4613-abaa-6f00d7369af3'
                },
                {
                  buildHookId: '6160891431c5f58621fb3019',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-284n7qvq',
                  apiId: '143c673e-f160-408d-b707-ed11e4de96e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrjerz/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-284n7qvq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
