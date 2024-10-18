export const PRODUCTS_QUERY = `
  *[_type == "product"] {
    _id,
    name,
    slug,
    image,
    price,
    description
  }
`;

export const PRODUCT_QUERY = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    image,
    price,
    description
  }
`;

export const BANNER_QUERY =
  '*[_type == "banner"]{buttonText, desc, smallText, midText, largeText1, largeText2, discount, saleTime, "prodName": product->name, "prodImage": product->image, "prodSlug":product->slug}';
