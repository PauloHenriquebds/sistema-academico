const { lancarNotas } = require("../scr/lancamentoNotas");

test("Deve salvar notas válidas", () => {
  expect(lancarNotas(7.5, 8.2)).toEqual([7.5, 8.2]);
});

test("Deve retornar erro para nota 1UP inválida (menor que 0)", () => {
  expect(lancarNotas(-1.0, 8.2)).toThrow("Nota de 1UP inválida");
});

test("Deve retornar erro para nota 2UP inválida (maior que 10)", () => {
  expect(lancarNotas(7.5, 12.0)).toThrow("Nota de 2UP inválida");
});

test("Deve retornar erro para nota 1UP com mais de uma casa decimal", () => {
  expect(lancarNotas(7.567, 8.2)).toThrow("Nota de 1UP inválida");
});

test("Deve retornar erro para nota 2UP com mais de uma casa decimal", () => {
  expect(lancarNotas(7.5, 8.256)).toThrow("Nota de 2UP inválida");
});

test("Deve retornar erro para entradas não numéricas", () => {
  expect(lancarNotas("sete", 8.2)).tothrow("Entradas devem ser numéricas");
});
