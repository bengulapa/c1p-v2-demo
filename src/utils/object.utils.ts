export const getUpdatedValues = (newObj: any, oldObj: any) => {
  return Object.fromEntries(
    Object.entries(oldObj).filter(([k, v]) => newObj[k] !== v)
  );
};
