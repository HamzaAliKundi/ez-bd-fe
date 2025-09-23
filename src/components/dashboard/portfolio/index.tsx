import React, { useState } from 'react'
import { FiPlus, FiGithub, FiExternalLink, FiX, FiCode, FiFolder } from 'react-icons/fi'

interface PortfolioItem {
  id: string
  title: string
  githubLink: string
  description: string
  techStack: string[]
}

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    githubLink: '',
    description: '',
    techStack: [] as string[]
  })
  const [currentTag, setCurrentTag] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault()
      if (!formData.techStack.includes(currentTag.trim())) {
        setFormData(prev => ({
          ...prev,
          techStack: [...prev.techStack, currentTag.trim()]
        }))
      }
      setCurrentTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleSave = () => {
    if (formData.title && formData.description) {
      const newItem: PortfolioItem = {
        id: Date.now().toString(),
        title: formData.title,
        githubLink: formData.githubLink,
        description: formData.description,
        techStack: formData.techStack
      }
      
      setPortfolioItems(prev => [...prev, newItem])
      setFormData({
        title: '',
        githubLink: '',
        description: '',
        techStack: []
      })
      setCurrentTag('')
      setIsModalOpen(false)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setFormData({
      title: '',
      githubLink: '',
      description: '',
      techStack: []
    })
    setCurrentTag('')
  }

  return (
    <div className="min-h-screen p-6">
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
        </div>

        {/* Portfolio Grid */}
        {portfolioItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiFolder className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects yet</h3>
            <p className="text-gray-600 mb-6">Start building your portfolio by adding your first project</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <FiPlus className="w-5 h-5" />
              Add Your First Project
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{item.title}</h3>
                  {item.githubLink && (
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-600 transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                
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
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-gray-900">Add New Project</h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 rounded-full p-2 transition-colors"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Project Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Name/Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter project name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  />
                </div>

                {/* GitHub Link */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub Link
                  </label>
                  <div className="relative">
                    <FiGithub className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="url"
                      name="githubLink"
                      value={formData.githubLink}
                      onChange={handleInputChange}
                      placeholder="https://github.com/username/project"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your project, what it does, and what makes it special..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                  />
                </div>

                {/* Tech Stack */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tech Stack
                  </label>
                  <div className="relative">
                    <FiCode className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyPress={handleTagKeyPress}
                      placeholder="Type technology and press Enter (e.g., React, Node.js)"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    />
                  </div>
                  
                  {formData.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                        >
                          {tech}
                          <button
                            onClick={() => removeTag(tech)}
                            className="text-teal-600 hover:text-teal-800 transition-colors"
                          >
                            <FiX className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 flex gap-4">
                <button
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={!formData.title || !formData.description}
                  className="flex-1 px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors font-medium"
                >
                  Save Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Portfolio