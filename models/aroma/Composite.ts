export interface RawComposite<T> {
  children: Array<RawComposite<T> | T>;
}

export interface Composite<LeafType> extends RawComposite<LeafType>{
  id: string;
  children: Array<Composite<LeafType> | LeafType>;
  parent?: Composite<LeafType> | null;
}

export interface CompositeLeaf {
  id: string;
  parent: Composite<CompositeLeaf>;
}

export function isComposite(arg: any): arg is Composite<CompositeLeaf> {
  return arg.children !== undefined;
}
