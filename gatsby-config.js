module.exports = {
  siteMetadata: {
    navbarLinks: [
      {to: "/appartments", name: " Vereins-Apartments und Anlage"},
      {to: "/#philosophie", name: "Philosophie"},
    ],
    title: "Residenz Vier Jahreszeiten Schönebeck",
    description: "Betreutes Wohnen in Schönebeck neu gedacht. Wir fördern Mobilität und Aktivität. Erfahren Sie mehr über unsere Apartments und Wohnanlage",
    siteUrl: "https://www.residenz-vier-jahreszeiten.de",
    homepageHeader: "Residenz Vier Jahreszeiten - Gepflegtes Wohnen mit Weitblick e.v.",
    homepageAbout: "Betreutes Wohnen in Schönebeck neu gedacht. Wir fördern Mobilität und Aktivität. Erfahren Sie mehr über unsere Apartments und Wohnanlage",
    mailChimpUrl: "https://mailchimp.com",
    mailChimpToken: "MAILCHIMP TOKEN HERE",
    youtube: "", // YOUR YOUTUBE PROFILE HERE
    github: "", // YOUR GITHUB PROFILE HERE
    pinterest: "", // YOUR PINTEREST PROFILE HERE
    facebook: "", // YOUR FACEBOOK PROFILE HERE
    twitter: "", // YOUR TWITTER PROFILE HERE
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve:
      'gatsby-plugin-feed',

      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: {type: {eq: "post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      slug
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Gatsby RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
            },
          },
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Karla', 'Playfair Display', 'Lora']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-53854676-9",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/success'],
        cookieDomain: "residenz-vier-jahreszeiten.de",
      }
    },
    {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      policy: [{ userAgent: '*', allow: '/' }]
    }
  }
  ]
}
