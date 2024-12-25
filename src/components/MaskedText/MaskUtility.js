export function getAllChar(org, gused) {
    gused = gused.map((e) => e.toUpperCase());
  const gusedSet = new Set(gused);
  const result = org
    .toUpperCase()
    .split('')
    .map((ee) => {
      if (gusedSet.has(ee)) {
        return ee;
      } else {
        return "-";
      }
    });
  return result;
}
