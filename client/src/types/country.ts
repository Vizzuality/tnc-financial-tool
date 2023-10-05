type Source = "public" | "private" | "international" | "environmental" | "philanthropic";

export type Country = {
  id: number;
  name: string;
  iso3: string;

  available: number;
  needed: number;

  availableGDP: number;
  neededGDP: number;

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
