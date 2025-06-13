'use client'
import React from 'react'

interface ErrorBoundaryState { hasError: boolean }

export class ErrorBoundary extends React.Component<{children: React.ReactNode}, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught', error, info)
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-4 text-center">Something went wrong.</div>
    }
    return this.props.children
  }
}
