import React, { useState } from 'react'
import { FiPlus, FiGithub, FiExternalLink, FiFolder, FiEdit, FiTrash2 } from 'react-icons/fi'
import { 
  useGetPortfolioQuery, 
  useDeletePortfolioMutation,
  PortfolioItem
} from '../../../apis/portfolio'
import Pagination from '../../../common/Pagination'
import DeleteConfirmationModal from '../../../common/DeleteConfirmationModal'
import AddPortfolioModal from './addPortfolioModal'
import PortfolioSkeleton from './PortfolioSkeleton'
import PortfolioInstructions from './PortfolioInstructions'
import toast from 'react-hot-toast'
import SearchInput from '../../../common/SearchInput'

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<{ id: string; title: string } | null>(null)
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  // Debounce search term
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
      setCurrentPage(1) // Reset to first page when searching
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])

  // API Hooks
  const { data: portfolioData, isLoading, error, refetch } = useGetPortfolioQuery({ 
    page: currentPage, 
    limit: 9,
    search: debouncedSearchTerm
  })
  const [deletePortfolio, { isLoading: isDeleting }] = useDeletePortfolioMutation()

  // Modal Handlers
  const handleEdit = (item: PortfolioItem) => {
    setEditingItem(item)
    setEditingId(item._id)
    setIsEditing(true)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsEditing(false)
    setEditingId(null)
    setEditingItem(null)
  }

  const handleDeleteClick = (item: PortfolioItem) => {
    setItemToDelete({ id: item._id, title: item.title })
    setIsDeleteModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!itemToDelete) return
    
    try {
      await deletePortfolio(itemToDelete.id).unwrap()
      toast.success('Portfolio deleted successfully!')
      setIsDeleteModalOpen(false)
      setItemToDelete(null)
    } catch (error: any) {
      toast.error(error?.data?.message || 'Failed to delete portfolio')
    }
  }

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false)
    setItemToDelete(null)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
  }

  const handleSearchClear = () => {
    setSearchTerm('')
    setDebouncedSearchTerm('')
    setCurrentPage(1)
  }

  // Loading and Error States
  if (error) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-red-600 mb-2">Error Loading Portfolio</h3>
          <p className="text-gray-600 mb-4">Something went wrong while fetching your portfolio</p>
          <button 
            onClick={() => refetch()}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">My Portfolio</h1>
              <p className="text-gray-600">Showcase your projects and skills to potential clients</p>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <FiPlus className="w-5 h-5" />
                <span className="whitespace-nowrap">Add Project</span>
              </button>
            </div>
          </div>

          {/* Search and Stats */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="w-full sm:w-96">
              <SearchInput
                value={searchTerm}
                onChange={handleSearchChange}
                onClear={handleSearchClear}
                placeholder="Search projects by title, description, or tech stack..."
                disabled={isLoading}
              />
            </div>
            {portfolioData && (
              <div className="text-sm text-gray-500 whitespace-nowrap">
                {debouncedSearchTerm ? (
                  <>Found {portfolioData.totalCount} result{portfolioData.totalCount !== 1 ? 's' : ''} for "{debouncedSearchTerm}"</>
                ) : (
                  <>Total: {portfolioData.totalCount} project{portfolioData.totalCount !== 1 ? 's' : ''}</>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <PortfolioSkeleton count={6} />
        ) : (
          <>
        {/* Portfolio Grid */}
            {portfolioData?.data.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiFolder className="w-12 h-12 text-gray-400" />
            </div>
                {debouncedSearchTerm ? (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600 mb-6">
                      No projects match your search for "{debouncedSearchTerm}". Try different keywords or{' '}
                      <button 
                        onClick={handleSearchClear}
                        className="text-teal-600 hover:text-teal-700 underline"
                      >
                        clear the search
                      </button>
                      .
                    </p>
                  </>
                ) : (
                  <>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects yet</h3>
            <p className="text-gray-600 mb-6">Start building your portfolio by adding your first project</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <FiPlus className="w-5 h-5" />
              Add Your First Project
            </button>
                  </>
                )}
          </div>
        ) : (
              <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioData?.data.map((item) => (
              <div
                      key={item._id}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-1 group"
              >
                      {/* Action Buttons */}
                <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 flex-1 mr-2" title={item.title}>
                          {item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}
                        </h3>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleEdit(item)}
                            className="text-gray-400 hover:text-blue-600 transition-colors p-1"
                            title="Edit"
                          >
                            <FiEdit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteClick(item)}
                            className="text-gray-400 hover:text-red-600 transition-colors p-1"
                            title="Delete"
                            disabled={isDeleting}
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                  {item.githubLink && (
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                              className="text-gray-400 hover:text-teal-600 transition-colors p-1"
                              title="View on GitHub"
                    >
                              <FiGithub className="w-4 h-4" />
                    </a>
                  )}
                        </div>
                </div>
                
                      <p className="text-gray-600 mb-4" title={item.description}>
                        {item.description.length > 30 ? `${item.description.substring(0, 30)}...` : item.description}
                      </p>
                
                {item.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                {item.githubLink && (
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                )}
                      
                      <div className="text-xs text-gray-400 mt-4">
                        Created: {new Date(item.createdAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
              </div>
            ))}
          </div>

                {/* Pagination */}
                {portfolioData && portfolioData.totalPages > 1 && (
                  <div className="mt-12">
                    <Pagination
                      currentPage={portfolioData.currentPage}
                      totalPages={portfolioData.totalPages}
                      onPageChange={handlePageChange}
                      isLoading={isLoading}
                      totalItems={portfolioData.totalCount}
                  />
                </div>
                )}
              </>
            )}
          </>
        )}

        {/* Special Instructions - Only show when there are projects */}
        {!isLoading && portfolioData && portfolioData.data.length > 0 && (
          <PortfolioInstructions />
        )}

        {/* Add/Edit Portfolio Modal */}
        <AddPortfolioModal
          isOpen={isModalOpen}
          onClose={closeModal}
          isEditing={isEditing}
          editingItem={editingItem}
        />

        {/* Delete Confirmation Modal */}
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
          title="Delete Portfolio Item"
          itemName={itemToDelete?.title}
          isLoading={isDeleting}
          confirmText="Delete Project"
          cancelText="Keep Project"
        />
      </div>
    </div>
  )
}

export default Portfolio