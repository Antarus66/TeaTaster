export interface Aroma {
  name: string;
}

export interface AromaSchema {
  name: string;
  color?: string;
  children: AromaSchema | Aroma;
}
