export type Source = "public" | "private" | "international" | "environmental" | "philanthropic";

export type Country = {
  id: number;
  name: string;
  iso3: string;

  available: number;
  available_min: number;
  available_max: number;
  needed: number;
  gdp: number;

  available_by_GDP: number;
  available_by_GDP_min: number;
  available_by_GDP_max: number;
  needed_by_GDP: number;

  drivers: {
    id: number;
    cost: number;
    source: Source;
  }[];
};
