import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { 
  InstructionItem, 
  InstructionResponse, 
  CreateInstructionData 
} from "./types";

export const instructionsApi = createApi({
  reducerPath: "instructionsApi",
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
  tagTypes: ["Instructions"],
  endpoints: (builder) => ({
    getInstructions: builder.query<InstructionResponse, void>({
      query: () => "/instructions",
      providesTags: ["Instructions"],
    }),
    createInstructions: builder.mutation<InstructionResponse, CreateInstructionData>({
      query: (data) => ({
        url: "/instructions",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Instructions"],
    }),
  }),
});

export const { 
  useGetInstructionsQuery, 
  useCreateInstructionsMutation 
} = instructionsApi;

// Re-export types for convenience
export type { 
  InstructionItem, 
  InstructionResponse, 
  CreateInstructionData 
} from "./types";
