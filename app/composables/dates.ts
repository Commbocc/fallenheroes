export const useUTCDateStr = (dateString?: string) => {
  if (!dateString) return undefined;
  const [y, m, d] = dateString.split("-").map(Number);
  const date = new Date(y!, m! - 1, d!);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};
