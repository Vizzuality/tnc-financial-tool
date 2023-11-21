import { Country } from "@/types/country";

export const COUNTRIES = [
  {
    id: 1,
    name: "Brazil",
    iso3: "BRA",
    available: 1,
    needed: 19,
    available_by_GDP: 0.4,
    needed_by_GDP: 0.2,

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
        name: "Build sustainable forestry & agroforestry markets",
        source: "public",
      },
      {
        id: 2,
        name: "Reform policy to better allocate the CAMPA fund & EFT",
        source: "philantropy",
      },
      {
        id: 3,
        name: "Reduce subsidy for urea-based fertilizer for better nutrient mgmt.",
        source: "international",
      },
      {
        id: 4,
        name: "Create a baseline and credit compliance carbon market",
        source: "public",
      },
      {
        id: 5,
        name: "Create a baseline and credit compliance carbon market",
        source: "public",
      },
    ],
  },
  {
    id: 2,
    name: "Canada",
    iso3: "CAN",
    available: 15,
    needed: 3,
    available_by_GDP: 0.3,
    needed_by_GDP: 0.1,

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
        id: 2,
        name: "Reform policy to better allocate the CAMPA fund & EFT",
        source: "philantropy",
      },
      {
        id: 3,
        name: "Reduce subsidy for urea-based fertilizer for better nutrient mgmt.",
        source: "international",
      },
      {
        id: 1,
        name: "Build sustainable forestry & agroforestry markets",
        source: "public",
      },
      {
        id: 4,
        name: "Create a baseline and credit compliance carbon market",
        source: "public",
      },
    ],
  },
  {
    id: 3,
    name: "China",
    iso3: "CHN",
    available: 8,
    needed: 8,
    available_by_GDP: 0.8,
    needed_by_GDP: 0.9,

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
        name: "Build sustainable forestry & agroforestry markets",
        source: "public",
      },
      {
        id: 4,
        name: "Create a baseline and credit compliance carbon market",
        source: "environmental",
      },
      {
        id: 2,
        name: "Reform policy to better allocate the CAMPA fund & EFT",
        source: "philantropy",
      },
      {
        id: 3,
        name: "Reduce subsidy for urea-based fertilizer for better nutrient mgmt.",
        source: "international",
      },
    ],
  },
  {
    id: 4,
    name: "India",
    iso3: "IND",
    available: 5,
    needed: 7,
    available_by_GDP: 0.4,
    needed_by_GDP: 0.1,

    drivers: [
      {
        id: 1,
        cost: 0.5,
        source: "public",
      },
      {
        id: 2,
        cost: 0.5,
        source: "private",
      },
    ],

    opportunities: [
      {
        id: 4,
        name: "Create a baseline and credit compliance carbon market",
        source: "public",
      },
      {
        id: 1,
        name: "Build sustainable forestry & agroforestry markets",
        source: "public",
      },
      {
        id: 3,
        name: "Reduce subsidy for urea-based fertilizer for better nutrient mgmt.",
        source: "international",
      },
      {
        id: 2,
        name: "Reform policy to better allocate the CAMPA fund & EFT",
        source: "philantropy",
      },
    ],
  },
  {
    id: 5,
    name: "Japan",
    iso3: "JPN",
    available: 1,
    needed: 9,

    available_by_GDP: 0.4,
    needed_by_GDP: 0.1,

    drivers: [
      {
        id: 1,
        cost: 0.5,
        source: "public",
      },
      {
        id: 2,
        cost: 0.1,
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
        cost: 0.25,
        source: "philantropy",
      },
    ],
    opportunities: [
      {
        id: 2,
        name: "Reform policy to better allocate the CAMPA fund & EFT",
        source: "philantropy",
      },
      {
        id: 1,
        name: "Build sustainable forestry & agroforestry markets",
        source: "public",
      },
      {
        id: 3,
        name: "Reduce subsidy for urea-based fertilizer for better nutrient mgmt.",
        source: "international",
      },
      {
        id: 4,
        name: "Create a baseline and credit compliance carbon market",
        source: "public",
      },
    ],
  },
  {
    id: 6,
    name: "Mexico",
    iso3: "MEX",
    available: 3,
    needed: 6,

    available_by_GDP: 0.4,
    needed_by_GDP: 0.1,

    drivers: [
      {
        id: 1,
        cost: 0.5,
        source: "public",
      },
      {
        id: 2,
        cost: 0.4,
        source: "private",
      },
      {
        id: 3,
        cost: 0.1,
        source: "international",
      },
    ],
    opportunities: [
      {
        id: 1,
        name: "Build sustainable forestry & agroforestry markets",
        source: "public",
      },
      {
        id: 2,
        name: "Reform policy to better allocate the CAMPA fund & EFT",
        source: "philantropy",
      },
      {
        id: 4,
        name: "Create a baseline and credit compliance carbon market",
        source: "public",
      },
      {
        id: 3,
        name: "Reduce subsidy for urea-based fertilizer for better nutrient mgmt.",
        source: "international",
      },
    ],
  },
  {
    id: 7,
    name: "Russia",
    iso3: "RUS",
    available: 3,
    needed: 2,

    available_by_GDP: 0.4,
    needed_by_GDP: 0.1,

    drivers: [
      {
        id: 1,
        cost: 0.4,
        source: "public",
      },
      {
        id: 2,
        cost: 0.1,
        source: "private",
      },
      {
        id: 3,
        cost: 0.3,
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
        id: 2,
        name: "Reform policy to better allocate the CAMPA fund & EFT",
        source: "philantropy",
      },
      {
        id: 1,
        name: "Build sustainable forestry & agroforestry markets",
        source: "public",
      },
      {
        id: 3,
        name: "Reduce subsidy for urea-based fertilizer for better nutrient mgmt.",
        source: "international",
      },
    ],
  },
  {
    id: 8,
    name: "United States",
    iso3: "USA",
    available: 1,
    needed: 3,

    available_by_GDP: 0.4,
    needed_by_GDP: 0.1,

    drivers: [
      {
        id: 1,
        cost: 0.4,
        source: "public",
      },
      {
        id: 2,
        cost: 0.2,
        source: "private",
      },
      {
        id: 3,
        cost: 0.2,
        source: "international",
      },
      {
        id: 4,
        cost: 0.1,
        source: "environmental",
      },
      {
        id: 5,
        cost: 0.1,
        source: "philantropy",
      },
    ],

    opportunities: [
      {
        id: 3,
        name: "Reduce subsidy for urea-based fertilizer for better nutrient mgmt.",
        source: "international",
      },
      {
        id: 2,
        name: "Reform policy to better allocate the CAMPA fund & EFT",
        source: "philantropy",
      },
      {
        id: 4,
        name: "Create a baseline and credit compliance carbon market",
        source: "public",
      },
      {
        id: 1,
        name: "Build sustainable forestry & agroforestry markets",
        source: "public",
      },
    ],
  },
] as Country[];

export const MAX_OPPORTUNITIES = Math.max(
  ...COUNTRIES.map((country) => country.opportunities.length),
);
