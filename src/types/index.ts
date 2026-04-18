export interface CV {
  id: string
  title: string
  lastUpdated: string
  atsScore: number
  type: 'ai' | 'original'
}

export interface User {
  id: string
  name: string
  email: string
  avatar: string
}
