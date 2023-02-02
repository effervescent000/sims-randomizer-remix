export interface GenericObject {
  [key: string]: string;
}

export interface ITrait {
  key: string;
  conflicts?: string[];
}
