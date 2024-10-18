import { defineField, defineType } from "sanity";

export const bannerType = defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "buttonText",
      title: "ButtonText",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "product",
      title: "Featured Product",
      type: "reference",
      to: [{ type: "product" }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Desc",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "smallText",
      title: "SmallText",
      type: "string",
    }),
    defineField({
      name: "midText",
      title: "MidText",
      type: "string",
    }),
    defineField({
      name: "largeText1",
      title: "LargeText1",
      type: "string",
    }),
    defineField({
      name: "largeText2",
      title: "LargeText2",
      type: "string",
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "string",
    }),
    defineField({
      name: "saleTime",
      title: "SaleTime",
      type: "string",
    }),
  ],
});
