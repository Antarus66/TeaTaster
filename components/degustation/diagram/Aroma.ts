export interface Aroma {
  name: string;
}

interface CompositeAromaSchema<LeafType> {
  name: string;
  color: string;
  children: Array<CompositeAromaSchema<LeafType> | LeafType>;
}

export type AromaSchema = CompositeAromaSchema<Aroma>;
