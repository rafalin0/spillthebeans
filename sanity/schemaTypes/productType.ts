import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule: any) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Product Description",
      type: "text",
      validation: (Rule: any) => Rule.required().max(1500),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0),
    }),
    defineField({
      name: "price_id",
      title: "Stripe Product Price ID",
      type: "string",
    }),
    defineField({
      name: "stockQuantity",
      title: "Stock Quantity",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "coffeeType",
      title: "Coffee Type",
      type: "reference",
      to: { type: "attribute" },
      options: {
        filter: "category._ref == $categoryId",
        filterParams: { categoryId: "221a0cb7-6f0f-43c6-acc2-6e93ece20f85" },
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "roastLevel",
      title: "Roast Level",
      type: "reference",
      to: { type: "attribute" },
      options: {
        filter: "category._ref == $categoryId",
        filterParams: { categoryId: "a4b9ea46-f7cd-4d15-a418-53e7a5062c1f" },
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "flavorProfile",
      title: "Flavor Profile",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "attribute" },
          options: {
            filter: "category._ref == $categoryId",
            filterParams: {
              categoryId: "78ae274f-3280-4bb9-8943-7ddff7b8c10e",
            },
          },
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "origin",
      title: "Origin",
      type: "reference",
      to: { type: "attribute" },
      options: {
        filter: "category._ref == $categoryId",
        filterParams: { categoryId: "18e1c6b5-733a-477e-a2d2-72e32cae3e4b" },
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "brewMethod",
      title: "Brew Method",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "attribute" },
          options: {
            filter: "category._ref == $categoryId",
            filterParams: {
              categoryId: "1c2cd3a0-cab5-48bf-9ce8-a7e7fba023e2",
            },
          },
        },
      ],
    }),
  ],
});
