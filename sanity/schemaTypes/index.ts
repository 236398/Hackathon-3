import { type SchemaTypeDefinition } from 'sanity';
import category from './category';
import product from './product';
import order from './order';
import user from './user';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category,
    product,
    order,
    user,

  ],
};
