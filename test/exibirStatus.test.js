const { definirStatus } = require("../scr/exibirStatus");

describe("definirStatus", () => {
  it('deve retornar "Reprovado por média" para média inferior a 4', () => {
    expect(definirStatus(3.5)).toBe("Reprovado por média");
  });

  it('deve retornar "Aguardando a final" para média igual a 4', () => {
    expect(definirStatus(4)).toBe("Aguardando a final");
  });

  it('deve retornar "Aguardando a final" para média igual a 4 e 6', () => {
    expect(definirStatus(5.5)).toBe("Aguardando a final");
  });

  it('deve retornar "Aprovado por média" para média igual a 6', () => {
    expect(definirStatus(6)).toBe("Aprovado por média");
  });

  it('deve retornar "Aprovado por média" para média superior a 6', () => {
    expect(definirStatus(7.5)).toBe("Aprovado por média");
  });

  it('deve retornar "Reprovado por média" para média no limite inferior (0)', () => {
    expect(definirStatus(0)).toBe("Reprovado por média");
  });
});
