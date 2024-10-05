import { type SchemaTypeDefinition } from "sanity";

import { productType } from "./productType";
import { categoryType } from "./categoryType";
import { attributeType } from "./attributeType";
import { bannerType } from "./bannerType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType, attributeType, bannerType],
};
