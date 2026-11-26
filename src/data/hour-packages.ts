export interface HourPackage {
  hours: number;
  price: number;
}

// Existing PAA tariffs, also approved by Herón for SAT. No 15/25-hour packages.
export const PAA_ESSENTIAL_PRICE_MXN = 2490;
export const PAA_HOUR_PACKAGES: HourPackage[] = [
  { hours: 5, price: 4900 },
  { hours: 10, price: 8900 },
  { hours: 20, price: 16900 },
  { hours: 30, price: 22900 },
];

// Su plan Elite equivale a 20 h ($16,900), por eso el Avanzado de TOEFL iBT llega solo a 15 h.
// El precio de 15 h extrapola la tarifa PAA ($800 por hora) y falta confirmarlo con el cliente.
export const TOEFL_HOUR_PACKAGES: HourPackage[] = [
  { hours: 5, price: 4900 },
  { hours: 10, price: 8900 },
  { hours: 15, price: 12900 },
];

export function nextPackageIndex(index: number, direction: number, count: number): number {
  return Math.max(0, Math.min(count - 1, index + direction));
}
