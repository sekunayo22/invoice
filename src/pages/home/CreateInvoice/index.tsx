import { useEffect } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";

import type { Invoice } from "../../../models/invoice";
import type { Product } from "../../../models/product";
import { Button } from "../../../components/Button";
import Icon from "../../../components/Icon";
import Input from "../../../components/Input";

import {
  AddItemButton,
  Backdrop,
  BillingFields,
  CreateInvoiceForm,
  Drawer,
  DrawerTitle,
  Field,
  FieldLabel,
  FormActions,
  FormSectionTitle,
  ItemFields,
  ItemList,
  ItemListHeading,
  ItemRow,
  RemoveItemButton,
  Section,
  SelectInput,
  ThreeColumnFields,
  TwoColumnFields,
} from "./styles";
import { useCreateInvoiceMutation } from "../../../services/invoice";

type InvoiceItemFormData = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

type CreateInvoiceFormData = {
  billFrom: {
    name: string;
    address: string;
    city: string;
    postcode: string;
    country: string;
  };
  billTo: {
    name: string;
    email: string;
    address: string;
    city: string;
    postcode: string;
    country: string;
  };
  invoiceDate: string;
  paymentTerms: string;
  description: string;
  items: InvoiceItemFormData[];
};

type CreateInvoiceProps = {
  handleCancel: () => void;
};

export const CreateInvoice = ({ handleCancel }: CreateInvoiceProps) => {
  const [createInvoice] = useCreateInvoiceMutation();
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CreateInvoiceFormData>({
    mode: "all",
    defaultValues: {
      billFrom: {
        name: "Leo Bank",
        address: "19 Union Terrace",
        city: "London",
        postcode: "E1 3EZ",
        country: "United Kingdom",
      },
      billTo: {
        name: "Alex Grim",
        email: "alexgrim@mail.com",
        address: "84 Church Way",
        city: "Bradford",
        postcode: "BD1 9PB",
        country: "United Kingdom",
      },
      invoiceDate: "2021-08-20",
      paymentTerms: "30",
      description: "Graphic Design",
      items: [
        {
          name: "Banner Design",
          quantity: 1,
          price: 156,
          total: 156,
        },
        {
          name: "Email Design",
          quantity: 2,
          price: 200,
          total: 400,
        },
      ],
    },
  });

  const {
    fields: products,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "items",
  });

  const items = useWatch({
    control,
    name: "items",
  });

  const paymentTerms = useWatch({
    control,
    name: "paymentTerms",
  });

  useEffect(() => {
    items?.forEach((item, index) => {
      const quantity = Number(item.quantity) || 0;
      const price = Number(item.price) || 0;
      const total = quantity * price;

      if (Number(item.total) !== total) {
        setValue(`items.${index}.total`, total, {
          shouldDirty: false,
          shouldValidate: false,
        });
      }
    });
  }, [items, setValue]);

  const handleSaveInvoice = (
    data: CreateInvoiceFormData,
    status: Invoice["status"],
  ) => {
    const issueDate = data.invoiceDate;

    const dueDate = new Date(issueDate);
    dueDate.setDate(dueDate.getDate() + Number(data.paymentTerms));

    const invoiceItems: Product[] = data.items.map((item) => {
      const quantity = Number(item.quantity) || 0;
      const price = Number(item.price) || 0;

      return {
        name: item.name,
        quantity,
        price,
        total: quantity * price,
      };
    });

    const amount = invoiceItems.reduce((sum, item) => sum + item.total, 0);

    createInvoice({
      currency: "GBP",
      amountDue: amount,
      status,
      description: data.description,
      invoiceDate: issueDate,
      paymentDue: dueDate.toISOString().split("T")[0],
      billFrom: {
        name: data.billFrom.name,
        address: data.billFrom.address,
        city: data.billFrom.city,
        postcode: data.billFrom.postcode,
        country: data.billFrom.country,
      },
      billTo: {
        name: data.billTo.name,
        email: data.billTo.email,
        address: data.billTo.address,
        city: data.billTo.city,
        postcode: data.billTo.postcode,
        country: data.billTo.country,
      },
      items: invoiceItems,
    })
      .unwrap()
      .then(() => handleCancel());
  };

  const handleBackdropMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleCancel();
    }
  };

  return (
    <Backdrop onMouseDown={handleBackdropMouseDown}>
      <Drawer role="dialog" aria-modal="true" aria-label="Create invoice">
        <CreateInvoiceForm
          id="create-invoice-form"
          onSubmit={handleSubmit((data) => handleSaveInvoice(data, "PENDING"))}
        >
          <DrawerTitle>New Invoice</DrawerTitle>

          <Section>
            <FormSectionTitle>Bill From</FormSectionTitle>

            <Field>
              <Input
                type="text"
                control={control}
                name="billFrom.name"
                label="Sender's Name"
              />
            </Field>

            <Field>
              <Input
                type="text"
                control={control}
                name="billFrom.address"
                label="Street Address"
              />
            </Field>

            <ThreeColumnFields>
              <Field>
                <Input
                  type="text"
                  control={control}
                  name="billFrom.city"
                  label="City"
                />
              </Field>

              <Field>
                <Input
                  type="text"
                  control={control}
                  name="billFrom.postcode"
                  label="Post Code"
                />
              </Field>

              <Field>
                <Input
                  type="text"
                  control={control}
                  name="billFrom.country"
                  label="Country"
                />
              </Field>
            </ThreeColumnFields>
          </Section>

          <Section>
            <FormSectionTitle>Bill To</FormSectionTitle>

            <BillingFields>
              <Input
                type="text"
                control={control}
                name="billTo.name"
                label="Client's Name"
              />

              <Input
                type="email"
                control={control}
                name="billTo.email"
                label="Client's Email"
              />

              <Input
                type="text"
                control={control}
                name="billTo.address"
                label="Street Address"
              />

              <ThreeColumnFields>
                <Input
                  type="text"
                  control={control}
                  name="billTo.city"
                  label="City"
                />

                <Input
                  type="text"
                  control={control}
                  name="billTo.postcode"
                  label="Post Code"
                />

                <Input
                  type="text"
                  control={control}
                  name="billTo.country"
                  label="Country"
                />
              </ThreeColumnFields>
            </BillingFields>
          </Section>

          <TwoColumnFields>
            <Input
              type="date"
              control={control}
              name="invoiceDate"
              label="Invoice Date"
            />

            <Field>
              <FieldLabel>Payment Terms</FieldLabel>

              <SelectInput
                id="payment-terms"
                value={paymentTerms}
                onChange={(event) =>
                  setValue("paymentTerms", event.target.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
              >
                <option value="1">Net 1 Day</option>
                <option value="7">Net 7 Days</option>
                <option value="14">Net 14 Days</option>
                <option value="30">Net 30 Days</option>
              </SelectInput>

              {errors.paymentTerms && (
                <span role="alert">{errors.paymentTerms.message}</span>
              )}
            </Field>
          </TwoColumnFields>

          <Section>
            <Input
              type="text"
              control={control}
              name="description"
              label="Project Description"
            />
          </Section>

          <ItemList>
            <ItemListHeading>Item List</ItemListHeading>

            {products.map((item, index) => (
              <ItemRow key={item.id}>
                <Field>
                  <Input
                    type="text"
                    control={control}
                    name={`items.${index}.name`}
                    label={index === 0 ? "Item Name" : ""}
                  />
                </Field>

                <ItemFields>
                  <Field>
                    <Input
                      type="number"
                      control={control}
                      name={`items.${index}.quantity`}
                      label={index === 0 ? "Qty." : ""}
                    />
                  </Field>

                  <Field>
                    <Input
                      type="number"
                      control={control}
                      name={`items.${index}.price`}
                      label={index === 0 ? "Price" : ""}
                    />
                  </Field>
                </ItemFields>

                <Field>
                  {index === 0 && <FieldLabel>Total</FieldLabel>}

                  <Input
                    type="text"
                    control={control}
                    name={`items.${index}.total`}
                    label=""
                    readOnly
                  />
                </Field>

                <RemoveItemButton
                  type="button"
                  aria-label={`Remove item ${index + 1}`}
                  onClick={() => remove(index)}
                >
                  <Icon name="trash" />
                </RemoveItemButton>
              </ItemRow>
            ))}

            {errors.items?.message && <p>{errors.items.message}</p>}

            <AddItemButton
              type="button"
              onClick={() =>
                append({
                  name: "",
                  quantity: 1,
                  price: 0,
                  total: 0,
                })
              }
            >
              + Add New Item
            </AddItemButton>
          </ItemList>

          <FormActions>
            <Button
              variant="secondary"
              type="button"
              label="Discard"
              handleClick={() => {
                reset();
                handleCancel();
              }}
            />

            <div>
              <Button
                variant="draft"
                type="button"
                label="Save as Draft"
                handleClick={handleSubmit((data) =>
                  handleSaveInvoice(data, "DRAFT"),
                )}
              />

              <Button variant="primary" type="submit" label="Save & Send" />
            </div>
          </FormActions>
        </CreateInvoiceForm>
      </Drawer>
    </Backdrop>
  );
};
