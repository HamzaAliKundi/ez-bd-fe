import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { 
  PortfolioItem, 
  PortfolioResponse, 
  CreatePortfolioData, 
  UpdatePortfolioData 
} from "./types";

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Portfolio"],
  endpoints: (builder) => ({
    getPortfolio: builder.query<PortfolioResponse, { page?: number; limit?: number; search?: string }>({
      query: ({ page = 1, limit = 10, search = '' } = {}) => {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString()
        });
        if (search && search.trim()) {
          params.append('search', search.trim());
        }
        return `/portfolio?${params.toString()}`;
      },
      providesTags: ["Portfolio"],
    }),
    createPortfolio: builder.mutation<{ message: string; status: number; data: PortfolioItem }, CreatePortfolioData>({
      query: (data) => ({
        url: "/portfolio",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Portfolio"],
    }),
    updatePortfolio: builder.mutation<{ message: string; status: number; data: PortfolioItem }, UpdatePortfolioData>({
      query: ({ id, ...data }) => ({
        url: `/portfolio/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Portfolio"],
    }),
    deletePortfolio: builder.mutation<{ message: string; status: number }, string>({
      query: (id) => ({
        url: `/portfolio/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Portfolio"],
    }),
  }),
});

export const { 
    useGetPortfolioQuery, 
    useCreatePortfolioMutation, 
    useUpdatePortfolioMutation, 
    useDeletePortfolioMutation 
} = portfolioApi;

// Re-export types for convenience
export type { 
  PortfolioItem, 
  PortfolioResponse, 
  CreatePortfolioData, 
  UpdatePortfolioData 
} from "./types";