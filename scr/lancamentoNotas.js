function lancarNotas(nota1, nota2) {
  if (typeof nota1 !== "number" || typeof nota2 !== "number") {
    throw new Error("Entradas devem ser números");
  } else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    throw new Error("Notas devem estar entre 0 e 10");
  } else if ((nota1 * 10) % 1 !== 0 || (nota2 * 10) % 1 !== 0) {
    throw new Error("Notas devem ter apenas uma casa decimal");
  }

  const notas = [nota1, nota2];
  console.log("Notas salvas com sucesso:", notas);
  return notas;
}
module.exports = {
  lancarNotas,
};
