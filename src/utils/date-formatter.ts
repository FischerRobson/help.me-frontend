export class DateFormatter {
  private date: Date

  constructor(date: Date | string) {
    this.date = typeof date === 'string' ? new Date(date) : date
  }

  formatDefault(): string {
    return this.format('dd/MM/yyyy')
  }

  formatWithTime(): string {
    return this.format('dd/MM/yyyy HH:mm')
  }

  formatAsText(): string {
    const diff = Math.floor((new Date().getTime() - this.date.getTime()) / 1000)

    if (diff < 60) return 'Just now'
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`
    if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`
    return this.format('dd/MM/yyyy')
  }

  private format(pattern: string): string {
    return pattern
      .replace('dd', String(this.date.getDate()).padStart(2, '0'))
      .replace('MM', String(this.date.getMonth() + 1).padStart(2, '0'))
      .replace('yyyy', String(this.date.getFullYear()))
      .replace('HH', String(this.date.getHours()).padStart(2, '0'))
      .replace('mm', String(this.date.getMinutes()).padStart(2, '0'))
  }
}
