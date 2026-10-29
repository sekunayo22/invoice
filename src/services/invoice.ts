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
      query: () => "/invoice",
      providesTags: ["Invoice"],
    }),
    getInvoiceById: builder.query<Invoice, number>({
      query: (id) => `/invoice/${id}`,
      providesTags: ["Invoice"],
    }),
    createInvoice: builder.mutation<string, AddInvoiceRequest>({
      query: (request) => ({
        url: `/invoice`,
        method: "POST",
        body: request,
      }),
      invalidatesTags: ["Invoice"],
    }),
    deleteInvoice: builder.mutation<string, number>({
      query: (id) => ({
        url: `/invoices/${id}`,
        method: "DELETE",
      }),
    }),
    updateInvoice: builder.mutation<string, EditInvoiceRequest>({
      query: (request) => ({
        url: `/invoices`,
        method: "PUT",
        body: request,
      }),
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
