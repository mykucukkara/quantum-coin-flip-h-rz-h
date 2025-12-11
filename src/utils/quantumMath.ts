/**
 * Kuantum hesaplamaları için yardımcı fonksiyonlar
 */

/**
 * Dereceyi radyana çevirir
 */
export function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/**
 * Radyanı dereceye çevirir
 */
export function radiansToDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}

/**
 * H-RZ(φ)-H devresi için P(0) olasılığını hesaplar
 * P(0) = cos²(φ / 2)
 */
export function calculateP0(phiRadians: number): number {
  return Math.pow(Math.cos(phiRadians / 2), 2);
}

/**
 * H-RZ(φ)-H devresi için P(1) olasılığını hesaplar
 * P(1) = sin²(φ / 2)
 */
export function calculateP1(phiRadians: number): number {
  return Math.pow(Math.sin(phiRadians / 2), 2);
}

/**
 * Olasılık dağılımına göre rastgele bir ölçüm sonucu üretir
 * @param p0 - 0 sonucunun olasılığı
 * @returns 0 veya 1
 */
export function simulateMeasurement(p0: number): 0 | 1 {
  return Math.random() < p0 ? 0 : 1;
}

/**
 * N sayıda ölçüm simüle eder ve sonuçları döndürür
 */
export function simulateShots(p0: number, numShots: number): { count0: number; count1: number } {
  let count0 = 0;
  let count1 = 0;

  for (let i = 0; i < numShots; i++) {
    const result = simulateMeasurement(p0);
    if (result === 0) {
      count0++;
    } else {
      count1++;
    }
  }

  return { count0, count1 };
}

