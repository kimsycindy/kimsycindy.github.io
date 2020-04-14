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
