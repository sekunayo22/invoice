import type { Product } from "./product";
import type { User } from "./user";

export type InvoiceStatus = "Paid" | "Pending" | "Draft";

export type Invoice = {
  id: number;
  currency: string;
  status: InvoiceStatus;
  billFrom?: User;
  description?: string;
  invoiceDate?: string;
  paymentDue?: string;
  billTo?: User;
  items?: Product[];
  amountDue?: number;
};

export type AddInvoiceRequest = {
  currency: string;
  status: InvoiceStatus;
  billFrom?: User;
  description?: string;
  invoiceDate?: string;
  paymentDue?: string;
  billTo?: User;
  items?: Product[];
  amountDue?: number;
};

export type EditInvoiceRequest = {
  currency: string;
  status: InvoiceStatus;
  billFrom?: User;
  description?: string;
  invoiceDate?: string;
  paymentDue?: string;
  billTo?: User;
  items?: Product[];
  amountDue?: number;
};
