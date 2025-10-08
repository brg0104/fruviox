import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatBytes(bytes: number) {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export function formatCurrency(amount: number, currency: string = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export function formatDuration(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`
  } else if (minutes > 0) {
    return `${minutes}m ${remainingSeconds}s`
  } else {
    return `${remainingSeconds}s`
  }
}

export function formatUptime(hours: number) {
  const days = Math.floor(hours / 24)
  const remainingHours = Math.floor(hours % 24)
  const minutes = Math.floor((hours % 1) * 60)
  
  if (days > 0) {
    return `${days}d ${remainingHours}h`
  } else if (remainingHours > 0) {
    return `${remainingHours}h ${minutes}m`
  } else {
    return `${minutes}m`
  }
}

export function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case 'running':
      return 'text-green-600 bg-green-50'
    case 'stopped':
      return 'text-gray-600 bg-gray-50'
    case 'starting':
      return 'text-blue-600 bg-blue-50'
    case 'stopping':
      return 'text-yellow-600 bg-yellow-50'
    case 'error':
    case 'failed':
      return 'text-red-600 bg-red-50'
    default:
      return 'text-gray-600 bg-gray-50'
  }
}

export function generateInstanceId() {
  return `gpu-${Math.random().toString(36).substr(2, 9)}`
}

export function formatPercentage(value: number) {
  return `${Math.round(value)}%`
}