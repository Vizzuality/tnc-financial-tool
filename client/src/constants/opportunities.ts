export const getOpportunityOpacity = (d: number) => {
  if (d === 0) return 0.32;
  if (d === 0.5) return 0.32;
  if (d === 1) return 0.64;
  if (d === 1.5) return 1;
};
