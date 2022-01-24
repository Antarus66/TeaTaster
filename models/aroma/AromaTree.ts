import { v4 as uuidv4 } from 'uuid';
import { RawAromaTree } from './RawAromaTree';
import { Composite, CompositeLeaf, isComposite } from './Composite';

/**
 * Aroma data schema usIng inside the app
 */
export class AromaTree implements Composite<Aroma> {
  id: string;

  children: (AromaTree | Aroma)[];

  parent: AromaTree | null;

  name: string;

  color: string | undefined;

  static defaultColor = 'lightgrey';

  constructor(
    {
      id,
      name,
      children,
      color,
    }: RawAromaTree,
    parent?: AromaTree,
  ) {
    this.id = id || uuidv4();
    this.children = children.map((child) => {
      if (isComposite(child)) {
        return new AromaTree(child as RawAromaTree, this);
      }

      return new Aroma(
        child.id || uuidv4(),
        child.name,
        this,
      );
    });

    this.parent = parent || null;
    this.color = color;
    this.name = name;
  }

  getColor(): string {
    if (this.color) {
      return this.color;
    }

    if (this.parent) {
      return this.parent.getColor();
    }

    return AromaTree.defaultColor;
  }
}

export class Aroma implements CompositeLeaf {
  // A shorthand class fields syntax is used
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public id: string,
    public name: string,
    public parent: AromaTree,
  ) {}

  getColor(): string {
    return this.parent.getColor();
  }
}
