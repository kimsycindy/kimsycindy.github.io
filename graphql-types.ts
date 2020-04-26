export type File = Image

export interface Image {
  childImageSharp?: {
    fixed?: {
      base64: string
      aspectRatio: number
      width: number
      height: number
      src: string
      srcSet: string
    }
    fluid?: {
      base64: string
      aspectRatio: number
      src: string
      srcSet: string
      srcSetType: string
      sizes: string
      originalImg: string
    }
  }
}

export interface SiteMetadata {
  title: string
  description: string
  keywords: string
  siteUrl: string
  author: {
    name: string
    url: string
    email: string
  }
}

export interface ProjectGroupItem {
  nodes: ProjectNode[]
}

interface ProjectNode {
  id: string
  slug: string
  title: string
  date: string
  year: number
}
