import { Country } from "@/types/country";

export const COUNTRIES = [
  {
    available_min: 522.7746786728827,
    available_max: 904.4986789676991,
    gdp: 1608981.0,
    available_by_GDP_min: 0.00032491041141746404,
    available_by_GDP_max: 0.0005621562212156011,
    needed: 80067.72,
    needed_by_GDP: 0.049762999065868396,
    name: "Brazil",
    id: 1,
    iso3: "BRA",
    drivers: [
      {
        source: "environmental",
        cost: 3.0713280000000003,
        id: 1,
      },
      {
        source: "international",
        cost: 57.068374153624156,
        id: 2,
      },
      {
        source: "philanthropic",
        cost: 19.094,
        id: 3,
      },
      {
        source: "private",
        cost: 227.8411033333333,
        id: 4,
      },
      {
        source: "public",
        cost: 406.5618733333333,
        id: 5,
      },
      // 713.62
    ],
    opportunities: [
      {
        id: 1,
        name: "Develop sustainable forestry market to fund restoration",
        cost: 1.5,
        source: "private",
      },
      {
        id: 2,
        name: "Incentivize sustainable agriculture (e.g., ICFLS) via efficient government funding",
        cost: 1.5,
        source: "public",
      },
      {
        id: 3,
        name: "Drive demand for sustainable cattle (via tax breaks, de-risked credit)",
        cost: 1.5,
        source: "private",
      },
      {
        id: 4,
        name: "More efficiently allocate public funding for conservation",
        cost: 1.5,
        source: "public",
      },
      {
        id: 5,
        name: "Leverage ETS carbon markets to drive reforestation",
        cost: 1,
        source: "environmental",
      },
    ],
  },
  {
    available_min: 1134.0,
    available_max: 2072.5,
    gdp: 1186092.0,
    available_by_GDP_min: 0.0009560809785412936,
    available_by_GDP_max: 0.001747334945349939,
    needed: 66114.22,
    needed_by_GDP: 0.0557412241208945,
    name: "Indonesia",
    id: 2,
    iso3: "IDN",
    drivers: [
      {
        source: "private",
        cost: 582.75,
        id: 1,
      },
      {
        source: "international",
        cost: 382.5,
        id: 2,
      },
      {
        source: "public",
        cost: 638.0,
        id: 3,
      },
    ],
    opportunities: [
      {
        id: 1,
        name: "Connect local communities to carbon market projects",
        cost: 1.5,
        source: "environmental",
      },
      {
        id: 2,
        name: "Remove biofuel subsidy for producers draining peatlands",
        cost: 1,
        source: "public",
      },
      {
        id: 3,
        name: "Unlock private funding for early-stage projects for the carbon market",
        cost: 1,
        source: "private",
      },
      {
        id: 4,
        name: "Develop and pilot chain of custody certified timber",
        cost: 0.5,
        source: "private",
      },
    ],
  },
  {
    available_min: 15730.505091144398,
    available_max: 17466.20181152158,
    gdp: 17734062.0,
    available_by_GDP_min: 0.0008870221098327274,
    available_by_GDP_max: 0.00098489572279163,
    needed: 60583.560000000005,
    needed_by_GDP: 0.0034162257919251667,
    name: "China",
    id: 3,
    iso3: "CHN",
    drivers: [
      {
        source: "environmental",
        cost: 29.050567550782674,
        id: 1,
      },
      {
        source: "philanthropic",
        cost: 69.36995602470108,
        id: 2,
      },
      {
        source: "private",
        cost: 106.78580696615006,
        id: 3,
      },
      {
        source: "public",
        cost: 16393.14712079135,
        id: 4,
      },
    ],
    opportunities: [
      {
        id: 1,
        name: "Improve ROI / effectiveness of government reforestation programs",
        cost: 1.5,
        source: "public",
      },
      {
        id: 2,
        name: "Develop pipeline of CCER (carbon market) projects",
        cost: 1.5,
        source: "environmental",
      },
      {
        id: 3,
        name: "Expand pilots subsidizing organic fertilizer for better nutrient management",
        cost: 1.5,
        source: "public",
      },
      {
        id: 4,
        name: "Reallocate government investments / imports towards sustainable producers",
        cost: 0,
        source: "public",
      },
    ],
  },
  {
    available_min: 10216.525131639853,
    available_max: 11127.108645050099,
    gdp: 3173397.0,
    available_by_GDP_min: 0.003219428622274444,
    available_by_GDP_max: 0.0035063714514919184,
    needed: 19737.86,
    needed_by_GDP: 0.00621978907776115,
    name: "India",
    id: 4,
    iso3: "IND",
    drivers: [
      {
        source: "public",
        cost: 9025.15209561144,
        id: 1,
      },
      {
        source: "international",
        cost: 719.9565494386582,
        id: 2,
      },
      {
        source: "philanthropic",
        cost: 161.76151790774878,
        id: 3,
      },
      {
        source: "private",
        cost: 764.9467253871288,
        id: 4,
      },
    ],
    opportunities: [
      {
        id: 1,
        name: "Build sustainable forestry & agroforestry markets",
        cost: 1.5,
        source: "private",
      },
      {
        id: 2,
        name: "Reform policy to better allocate the CAMPA fund & EFT",
        cost: 1.5,
        source: "public",
      },
      {
        id: 3,
        name: "Reduce subsidy for urea-based fertilizer for better nutrient management",
        cost: 1.5,
        source: "public",
      },
      {
        id: 4,
        name: "Create a baseline and credit compliance carbon market",
        cost: 0.5,
        source: "environmental",
      },
    ],
  },
  {
    available_min: 526.7839485161461,
    available_max: 576.3477170202473,
    gdp: 1293037.87,
    available_by_GDP_min: 0.0004074002476943278,
    available_by_GDP_max: 0.00044573150593048543,
    needed: 12025.380000000001,
    needed_by_GDP: 0.00930009884397276,
    name: "Mexico",
    id: 5,
    iso3: "MEX",
    drivers: [
      {
        source: "environmental",
        cost: 3.8000000000000003,
        id: 1,
      },
      {
        source: "international",
        cost: 84.1642524038153,
        id: 2,
      },
      {
        source: "philanthropic",
        cost: 4.654999999999999,
        id: 3,
      },
      {
        source: "private",
        cost: 111.35208333333334,
        id: 4,
      },
      {
        source: "public",
        cost: 347.594497031048,
        id: 5,
      },
    ],
    opportunities: [
      {
        id: 1,
        name: "Shift agricultural subsidies towards sustainable practices",
        cost: 1,
        source: "public",
      },
      {
        id: 2,
        name: "Develop pipeline of privately-funded carbon market projects",
        cost: 0.5,
        source: "private",
      },
      {
        id: 3,
        name: "Direct regional carbon tax revenue to NCS",
        cost: 0.5,
        source: "environmental",
      },
      {
        id: 4,
        name: "Reform impact metrics for government programs (e.g., Sembrando Vida)",
        cost: 0,
        source: "public",
      },
    ],
  },
  {
    available_min: 188.46865733764855,
    available_max: 212.03206885817625,
    gdp: 314322.45,
    available_by_GDP_min: 0.0005996029152154055,
    available_by_GDP_max: 0.000674568643945656,
    needed: 10503.18,
    needed_by_GDP: 0.03341530329761683,
    name: "Colombia",
    id: 6,
    iso3: "COL",
    drivers: [
      {
        source: "environmental",
        cost: 16.118181818181817,
        id: 1,
      },
      {
        source: "international",
        cost: 143.48158271666665,
        id: 2,
      },
      {
        source: "philanthropic",
        cost: 13.363744613290997,
        id: 3,
      },
      {
        source: "public",
        cost: 27.286853949772908,
        id: 4,
      },
    ],
    opportunities: [
      {
        id: 1,
        name: "Develop a sustainable forestry sector with focus on targeted reforestation",
        cost: 1.5,
        source: "private",
      },
      {
        id: 2,
        name: "Shift market incentives to grow sustainable agriculture (cattle, palm oil)",
        cost: 1.5,
        source: "private",
      },
      {
        id: 3,
        name: "Create federal-regional funding incentives (e.g., via an EFT)",
        cost: 1,
        source: "public",
      },
      {
        id: 4,
        name: "Shift fertilizer subsidy / rural credit to reward sustainable cattle ranching",
        cost: 0.5,
        source: "public",
      },
    ],
  },
  {
    available_min: 668.9721259333332,
    available_max: 1015.4147280571428,
    gdp: 1542659.9,
    available_by_GDP_min: 0.00043364848333280284,
    available_by_GDP_max: 0.0006582233245689105,
    needed: 7002.12,
    needed_by_GDP: 0.00453899138753785,
    name: "Australia",
    id: 7,
    iso3: "AUS",
    drivers: [
      {
        source: "environmental",
        cost: 213.4009009009009,
        id: 1,
      },
      {
        source: "philanthropic",
        cost: 37.58500843288288,
        id: 2,
      },
      {
        source: "private",
        cost: 184.02777777777777,
        id: 3,
      },
      {
        source: "public",
        cost: 484.561061061061,
        id: 4,
      },
    ],
    opportunities: [
      {
        id: 1,
        name: "Build and support pipeline of new carbon market NCS projects",
        cost: 1.5,
        source: "environmental",
      },
      {
        id: 2,
        name: "Shift industry incentives for cattle ranching (i.e., methane tax)",
        cost: 1,
        source: "public",
      },
      {
        id: 3,
        name: "Connect private investors to local projects (e.g., IFM, blue carbon)",
        cost: 0.5,
        source: "private",
      },
    ],
  },
  {
    available_min: 199.36,
    available_max: 249.36,
    gdp: 18269.0,
    available_by_GDP_min: 0.010912474683890745,
    available_by_GDP_max: 0.01364935136022771,
    needed: 1319.24,
    needed_by_GDP: 0.07221194372981553,
    name: "Gabon",
    id: 8,
    iso3: "GAB",
    drivers: [
      {
        source: "international",
        cost: 19.36,
        id: 1,
      },
      {
        source: "environmental",
        cost: 190.0,
        id: 2,
      },
      {
        source: "philanthropic",
        cost: 30.0,
        id: 3,
      },
    ],
    opportunities: [
      {
        id: 1,
        name: "Develop and build infrastructure for eco-tourism",
        cost: 1,
        source: "private",
      },
      {
        id: 2,
        name: "Grow sustainable timber industry via more domestic processing",
        cost: 1,
        source: "private",
      },
      {
        id: 3,
        name: "Access carbon market funding for current CO2 sequestration",
        cost: 0.5,
        source: "environmental",
      },
      {
        id: 4,
        name: "Identify and unlock alternative HFLD financing (e.g., PFPs",
        cost: 0.5,
        source: "international",
      },
    ],
  },
  {
    available_min: 62.0,
    available_max: 80.0,
    gdp: 106200.0,
    available_by_GDP_min: 0.000583804143126177,
    available_by_GDP_max: 0.0007532956685499058,
    needed: 2443.131,
    needed_by_GDP: 0.023004999999999998,
    name: "Ecuador",
    id: 9,
    iso3: "ECU",
    drivers: [
      {
        source: "international",
        cost: 22.492129120879124,
        id: 1,
      },
      {
        source: "private",
        cost: 3.5,
        id: 2,
      },
      {
        source: "public",
        cost: 44.755115374999995,
        id: 3,
      },
    ],
    opportunities: [],
  },
  {
    available_min: 131.0,
    available_max: 176.0,
    gdp: 224000.0,
    available_by_GDP_min: 0.0005848214285714286,
    available_by_GDP_max: 0.0007857142857142857,
    needed: 3572.0960000000005,
    needed_by_GDP: 0.015946857142857145,
    name: "Peru",
    id: 10,
    iso3: "PER",
    drivers: [
      {
        source: "environmental",
        cost: 38.146732,
        id: 1,
      },
      {
        source: "international",
        cost: 38.806,
        id: 2,
      },
      {
        source: "philanthropic",
        cost: 6.988636363636363,
        id: 3,
      },
      {
        source: "private",
        cost: 9.0,
        id: 4,
      },
      {
        source: "public",
        cost: 60.136079959270255,
        id: 5,
      },
    ],
    opportunities: [],
  },
]
  .map((country) => {
    return {
      ...country,
      available: (country.available_max + country.available_min) / 2,
      available_by_GDP: (country.available_by_GDP_max + country.available_by_GDP_min) / 2,
    };
  })
  .sort((a, b) => {
    return b.available + b.needed - (a.available + a.needed);
  }) as Country[];

export const MAX_OPPORTUNITIES = Math.max(
  ...COUNTRIES.map((country) => country.opportunities.length),
);
