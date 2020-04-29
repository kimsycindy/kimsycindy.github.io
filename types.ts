import { FluidObject, FixedObject } from 'gatsby-image'

export interface Site {
  site: {
    siteMetadata?: SiteMetadata
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

export interface Image {
  fluid?: FluidObject
  fixed?: FixedObject
}

export interface AllContentfulProjectGroupNode {
  nodes: AllContentfulProjectGroupNodeNode[]
}

export interface AllContentfulProjectGroupNodeNode {
  id: string
  slug: string
  title: string
  date: string
  category: {
    title: string
  }
}
