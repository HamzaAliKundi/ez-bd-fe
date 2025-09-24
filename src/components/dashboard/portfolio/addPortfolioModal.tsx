import React, { useState } from 'react';
import { FiX, FiGithub, FiCode } from 'react-icons/fi';
import { 
  useCreatePortfolioMutation, 
  useUpdatePortfolioMutation,
  PortfolioItem,
  CreatePortfolioData
} from '../../../apis/portfolio';
import toast from 'react-hot-toast';

interface AddPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEditing: boolean;
  editingItem?: PortfolioItem | null;
}

const AddPortfolioModal: React.FC<AddPortfolioModalProps> = ({
  isOpen,
  onClose,
  isEditing,
  editingItem
}) => {
  const [formData, setFormData] = useState<CreatePortfolioData>(() => ({
    title: editingItem?.title || '',
    githubLink: editingItem?.githubLink || '',
    description: editingItem?.description || '',
    techStack: editingItem?.techStack || []
  }));
  const [currentTag, setCurrentTag] = useState('');

  // API Hooks
  const [createPortfolio, { isLoading: isCreating }] = useCreatePortfolioMutation();
  const [updatePortfolio, { isLoading: isUpdating }] = useUpdatePortfolioMutation();

  // Update form data when editing item changes
  React.useEffect(() => {
    if (isEditing && editingItem) {
      setFormData({
        title: editingItem.title,
        githubLink: editingItem.githubLink || '',
        description: editingItem.description,
        techStack: editingItem.techStack
      });
    } else {
      setFormData({
        title: '',
        githubLink: '',
        description: '',
        techStack: []
      });
    }
    setCurrentTag('');
  }, [isEditing, editingItem, isOpen]);

  // Form Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault();
      if (!formData.techStack.includes(currentTag.trim())) {
        setFormData(prev => ({
          ...prev,
          techStack: [...prev.techStack, currentTag.trim()]
        }));
      }
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack.filter(tag => tag !== tagToRemove)
    }));
  };

  // CRUD Operations
  const handleSave = async () => {
    if (!formData.title || !formData.description) {
      toast.error('Title and description are required');
      return;
    }

    try {
      if (isEditing && editingItem) {
        await updatePortfolio({ id: editingItem._id, ...formData }).unwrap();
        toast.success('Portfolio updated successfully!');
      } else {
        await createPortfolio(formData).unwrap();
        toast.success('Portfolio created successfully!');
      }
      onClose();
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  const handleClose = () => {
    setFormData({
      title: '',
      githubLink: '',
      description: '',
      techStack: []
    });
    setCurrentTag('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              {isEditing ? 'Edit Project' : 'Add New Project'}
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 rounded-full p-2 transition-colors"
              disabled={isCreating || isUpdating}
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
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

        {/* Actions */}
        <div className="p-6 border-t border-gray-100 flex gap-4">
          <button
            onClick={handleClose}
            disabled={isCreating || isUpdating}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!formData.title || !formData.description || isCreating || isUpdating}
            className="flex-1 px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
          >
            {(isCreating || isUpdating) && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {isEditing ? 'Update Project' : 'Save Project'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPortfolioModal;
