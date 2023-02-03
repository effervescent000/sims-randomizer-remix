export interface GenericObject {
  [key: string]: string;
}

export interface ITrait {
  [key: string]: { conflicts?: string[]; requires?: string[] };
}

export interface ISelectOptions {
  name: string;
  value: string;
}
