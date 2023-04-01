export interface Link {
  id: string
  depth: number
  text: string
  children?: Link[]
}
export interface ContentToc {
  depth: number
  links: Link[]
}
