import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  AddInvoiceRequest,
  EditInvoiceRequest,
  Invoice,
} from "../models/invoice";

export const invoiceApi = createApi({
  reducerPath: "invoiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["Invoices", "Invoice"],
  endpoints: (builder) => ({
    getInvoices: builder.query<Array<Invoice>, void>({
      query: () => "/invoices",
      providesTags: ["Invoices"],
    }),
    getInvoiceById: builder.query<Invoice, number>({
      query: (id) => `/invoices/${id}`,
      providesTags: ["Invoice"],
    }),
    createInvoice: builder.mutation<string, AddInvoiceRequest>({
      query: (request) => ({
        url: `/invoices`,
        method: "POST",
        body: request,
        responseHandler: "text",
      }),
      invalidatesTags: ["Invoice", "Invoices"],
    }),
    deleteInvoice: builder.mutation<string, number>({
      query: (id) => ({
        url: `/invoices/${id}`,
        method: "DELETE",
        responseHandler: "text",
      }),
      invalidatesTags: ["Invoices"],
    }),
    updateInvoice: builder.mutation<
      string,
      { request: EditInvoiceRequest; id: number }
    >({
      query: ({ request, id }) => ({
        url: `/invoices/${id}`,
        method: "PUT",
        body: request,
        responseHandler: "text",
      }),
      invalidatesTags: ["Invoice", "Invoices"],
    }),
  }),
});

export const {
  useGetInvoiceByIdQuery,
  useGetInvoicesQuery,
  useCreateInvoiceMutation,
  useDeleteInvoiceMutation,
  useUpdateInvoiceMutation,
} = invoiceApi;
