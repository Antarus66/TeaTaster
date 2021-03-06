import { RawComposite } from './Composite';

/**
 * Saveable aroma data schema
 */
export interface RawAroma {
  id?: string; // it might be available in the future if load from db
  name: string;
}

export interface RawAromaTree extends RawComposite<RawAroma> {
  id?: string; // it might be available in the future if load from db
  name: string;
  color: string | undefined;
  children: Array<RawAromaTree | RawAroma>;
}
