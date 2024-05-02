export function formatToCurrency(number) {
  // Convert number to string
  const numStr = number.toString();

  // Split number by decimal point
  const parts = numStr.split(".");

  // Format integer part with commas
  const formattedInteger = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // If there is a decimal part, concatenate it with formatted integer
  const result = parts[1]
    ? formattedInteger + "." + parts[1]
    : formattedInteger;

  // Return the formatted currency value
  return "₦" + result;
}
