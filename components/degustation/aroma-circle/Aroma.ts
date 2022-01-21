export interface Aroma {
  name: string;
}

interface CompositeAromaSchema<LeafType> {
  name: string;
  children: Array<CompositeAromaSchema<LeafType> | LeafType>;
  color?: string;
}

export type AromaSchema = CompositeAromaSchema<Aroma>;
