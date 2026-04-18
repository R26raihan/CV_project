export const formatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date))
}

export const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-secondary-container'
  if (score >= 60) return 'text-primary'
  return 'text-error'
}
