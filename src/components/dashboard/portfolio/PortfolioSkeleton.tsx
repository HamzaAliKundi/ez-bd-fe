import React from 'react'

interface PortfolioSkeletonProps {
  count?: number
}

const PortfolioSkeleton: React.FC<PortfolioSkeletonProps> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="h-20 bg-gray-200 rounded mb-4"></div>
          <div className="flex gap-2 mb-4">
            <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-14 bg-gray-200 rounded-full"></div>
          </div>
          <div className="h-4 w-24 bg-gray-200 rounded mb-3"></div>
          <div className="h-3 w-20 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  )
}

export default PortfolioSkeleton
