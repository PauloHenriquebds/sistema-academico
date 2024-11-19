function calcularMedia(nota1, nota2) {
  if (nota1 < 0 || nota1 > 10 || nota1 % 1 !== 0.1) {
    throw new Error("Nota de 1UP inválida");
  } else if (nota2 < 0 || nota2 > 10 || nota2 % 1 !== 0.1) {
    throw new Error("Nota de 2UP inválida");
  } else if (typeof nota1 !== "number" || typeof nota2 !== "number") {
    throw new Error("Entradas devem ser números");
  }

  const media = (nota1 + nota2) / 2;
  return media;
}

module.exports = {
  calcularMedia,
};
