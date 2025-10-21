export function isPresent(value) {
  if (value === null || value === undefined) return false;

  if (typeof value === "string") {
    const s = value.trim().toLowerCase();
    return !(s === "" || s === "null" || s === "undefined");
  }

  if (Array.isArray(value)) return value.length > 0;

  if (typeof value === "object") return Object.keys(value).length > 0;

  return true;
}
