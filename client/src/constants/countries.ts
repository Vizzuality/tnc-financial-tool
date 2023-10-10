import { Country } from "@/types/country";

export const COUNTRIES = [
  {
    id: 1,
    name: "Brazil",
    iso3: "BRA",
    available: 2000000,
    needed: 30000000,
    available_by_GDP: 0.0004,
    needed_by_GDP: 0.00001,

    drivers: [
      {
        id: 1,
        cost: 0.5,
        source: "public",
      },
      {
        id: 2,
        cost: 0.2,
        source: "private",
      },
      {
        id: 3,
        cost: 0.1,
        source: "international",
      },
      {
        id: 4,
        cost: 0.05,
        source: "environmental",
      },
      {
        id: 5,
        cost: 0.15,
        source: "philantropy",
      },
    ],
    opportunities: [
      {
        id: 1,
        name: "Amazon",
        cost: 0.0001,
        source: "environmental",
      },
    ],
  },
  {
    id: 2,
    name: "Canada",
    iso3: "CAN",
    available: 7200000,
    needed: 40000000,
    available_by_GDP: 0.0004,
    needed_by_GDP: 0.00001,

    drivers: [
      {
        id: 1,
        cost: 0.4,
        source: "public",
      },
      {
        id: 2,
        cost: 0.3,
        source: "private",
      },
      {
        id: 3,
        cost: 0.02,
        source: "international",
      },
      {
        id: 4,
        cost: 0.08,
        source: "environmental",
      },
      {
        id: 5,
        cost: 0.5,
        source: "philantropy",
      },
    ],

    opportunities: [
      {
        id: 1,
        name: "Amazon",
        cost: 0.0001,
        source: "environmental",
      },
    ],
  },
  {
    id: 3,
    name: "China",
    iso3: "CHN",
    available: 72000000,
    needed: 50000000,
    available_by_GDP: 0.0004,
    needed_by_GDP: 0.00001,

    drivers: [
      {
        id: 1,
        cost: 1,
        source: "public",
      },
    ],

    opportunities: [
      {
        id: 1,
        name: "Amazon",
        cost: 0.0001,
        source: "environmental",
      },
    ],
  },
] as Country[];
