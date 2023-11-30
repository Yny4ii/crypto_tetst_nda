export const validate = (value: string): string => {
  let sanitizedValue = value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1")
    .replace(/^(-?\.\d+)/, "0$1")
    .replace(/^(-?\d*\.\d{0,1})\..*/g, "$1");

  if (sanitizedValue === ".") sanitizedValue = "0.";

  return sanitizedValue;
};
