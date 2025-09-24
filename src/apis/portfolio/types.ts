export interface PortfolioItem {
  _id: string;
  userId: string;
  title: string;
  githubLink?: string;
  description: string;
  techStack: string[];
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioResponse {
  message: string;
  status: number;
  data: PortfolioItem[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  limit: number;
  search?: string;
}

export interface CreatePortfolioData {
  title: string;
  githubLink?: string;
  description: string;
  techStack: string[];
}

export interface UpdatePortfolioData extends CreatePortfolioData {
  id: string;
}
