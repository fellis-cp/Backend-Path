import isPrime from "is-prime-number";

function categorizeNumber(input: number): string {
  /**
   * TODO:
   * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
   * Dengan ketentuan sebagai berikut:
   * 1. Jika input bukan number, bangkitkan (throw) error. SUDAH PAKE TS
   * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
   * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
   * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
   * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
   * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
   */

  if (input == 0) {
    return "Nol";
  } else if (input < 0) {
    return "Negatif";
  }

  if (input % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }

  if (isPrime(input) == true) {
    return "Prima";
  }
}

// Contoh
console.log(categorizeNumber(15));
