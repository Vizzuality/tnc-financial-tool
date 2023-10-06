type Source = "public" | "private" | "international" | "environmental" | "philanthropic";

export type Country = {
  id: number;
  name: string;
  iso3: string;

  available: number;
  needed: number;

  available_by_GDP: number;
  needed_by_GDP: number;

  drivers: {
    id: number;
    cost: number;
    source: Source;
  }[];

  opportunities: {
    id: number;
    name: string;
    cost: number;
    source: Source;
  }[];
};
