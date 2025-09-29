import React, { useState, useEffect } from 'react'
import { useGetInstructionsQuery, useCreateInstructionsMutation } from '../../../apis/instructions'
import toast from 'react-hot-toast'

interface PortfolioInstructionsProps {
  // Remove props as we'll get data from API
}

const PortfolioInstructions: React.FC<PortfolioInstructionsProps> = () => {
  const [instructions, setInstructions] = useState('')
  
  // API Hooks
  const { data: instructionsData, isLoading: isFetching, error } = useGetInstructionsQuery()
  const [createInstructions, { isLoading: isSaving }] = useCreateInstructionsMutation()

  // Update local state when data is fetched
  useEffect(() => {
    if (instructionsData?.data?.instructions) {
      setInstructions(instructionsData.data.instructions)
    }
  }, [instructionsData])

  const handleSave = async () => {
    try {
      await createInstructions({ instructions }).unwrap()
      toast.success('Instructions saved successfully!')
    } catch (error: any) {
      toast.error(error?.data?.message || 'Failed to save instructions')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInstructions(e.target.value)
  }

  return (
    <div className="mt-12">
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-4 sm:p-6 border border-teal-200">
        {/* Header - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
          <div className="flex items-center gap-3 sm:block">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div className="sm:hidden">
              <h3 className="text-lg font-semibold text-gray-900">Portfolio Instructions</h3>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="hidden sm:block text-lg font-semibold text-gray-900 mb-2">Portfolio Instructions</h3>
            <p className="text-sm text-gray-600">
              Add special instructions or notes about your portfolio that will help clients understand your work better.
            </p>
          </div>
        </div>

        {/* Textarea */}
        <div className="relative mb-3">
          <textarea
            value={instructions}
            onChange={handleChange}
            placeholder="Add special instructions for your portfolio (e.g., preferred project types, availability, special skills, etc.)"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
            rows={4}
            maxLength={500}
            disabled={isFetching || isSaving}
          />
          <div className="absolute bottom-3 right-3 text-xs text-gray-400">
            {instructions.length}/500
          </div>
        </div>

        {/* Footer - Stack on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-gray-500">This will be visible to potential clients</span>
          </div>
          <button 
            onClick={handleSave}
            disabled={isFetching || isSaving}
            className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors order-1 sm:order-2 w-full sm:w-auto"
          >
            {isSaving ? 'Saving...' : 'Save Instructions'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PortfolioInstructions
