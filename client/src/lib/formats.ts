export const useFormatCurrency = (options?: Intl.NumberFormatOptions) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options,
  });
};

export const useFormatPercentage = (options?: Intl.NumberFormatOptions) => {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
  });
};
