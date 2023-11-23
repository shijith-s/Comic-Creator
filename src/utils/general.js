export const isTextEmpty = (text) => {
  if (!text) return true;
  // Trim leading and trailing whitespaces
  const trimmedText = text.trim();

  // Check if the resulting string is empty
  return trimmedText.length === 0;
};
