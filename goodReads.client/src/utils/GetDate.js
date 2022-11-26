export function getDate(date) {
  return new Date(date).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
