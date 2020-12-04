export default {
  widgets: [
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
                  buildHookId: '5fc9e163ec3ed7932281ab53',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-34pff5z5',
                  apiId: '2a714cbf-95cb-4174-ac5f-cefa57459ef7'
                },
                {
                  buildHookId: '5fc9e1638805188f67b9596f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8h9f1eug',
                  apiId: '013d845d-f62c-4ef8-a153-b536d7769cce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kelvinsugi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8h9f1eug.netlify.app', category: 'apps'}
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
