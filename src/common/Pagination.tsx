interface PaginationProps {
  currentPage: number;
  totalPages: number;
  isLoading?: boolean;
  onPageChange: (page: number) => void;
  showPagination?: boolean;
  totalItems?: number;
}

const Pagination = ({ 
  currentPage, 
  totalPages, 
  isLoading = false, 
  onPageChange, 
  showPagination = true,
  totalItems 
}: PaginationProps) => {
  if (!showPagination || totalPages <= 1) return null;

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // First page and ellipsis
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => !isLoading && onPageChange(1)}
          className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-600 transition-colors font-medium"
          disabled={isLoading}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="text-gray-500 px-2">...</span>
        );
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => !isLoading && onPageChange(i)}
          className={`w-10 h-10 rounded-lg font-medium transition-colors ${
            i === currentPage
              ? "bg-teal-600 text-white border border-teal-600 shadow-md"
              : "border border-gray-300 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-600"
          }`}
          disabled={isLoading}
        >
          {i}
        </button>
      );
    }

    // Last page and ellipsis
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="text-gray-500 px-2">...</span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => !isLoading && onPageChange(totalPages)}
          className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-600 transition-colors font-medium"
          disabled={isLoading}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-end space-x-4">
      {/* Page Info */}
      <div className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
        {totalItems && (
          <span className="ml-2 text-gray-500">({totalItems} items)</span>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => !isLoading && currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || isLoading}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300 disabled:hover:text-gray-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-1">
          {isLoading ? (
            <div className="flex items-center justify-center w-10 h-10">
              <div className="w-5 h-5 border-2 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            renderPageNumbers()
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={() => !isLoading && currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || isLoading}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300 disabled:hover:text-gray-700"
        >
          <span className="font-medium">Next</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;