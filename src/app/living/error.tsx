'use client' // Error components must be client components

import { useEffect } from 'react'

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Error occurred:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
      <p className="text-gray-700">{error.message}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={reset}>
        Try Again
      </button>
    </div>
  )
}
