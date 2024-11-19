const { calcularMedia } = require("../scr/calcularMedia");

describe("calcularMedia", () => {
  it("deve calcular a média corretamente para notas válidas", () => {
    expect(calcularMedia(7, 8)).toBe(7.5);
  });

  it("deve calcular a média corretamente para notas iguais", () => {
    expect(calcularMedia(5, 5)).toBe(5);
  });

  it("deve calcular a média corretamente para nota mínima e máxima", () => {
    expect(calcularMedia(0, 10)).toBe(5);
  });

  it("deve calcular a média corretamente para nota de 1UP no limite inferior", () => {
    expect(calcularMedia(0, 7)).toBe(3.5);
  });

  it("deve calcular a média corretamente para nota de 2UP no limite superior", () => {
    expect(calcularMedia(8, 10)).toBe(9);
  });

  it("deve retornar erro para notas inválidas", () => {
    expect(calcularMedia(-1, 11)).toThrow("Erro de validação");
  });
});
