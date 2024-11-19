function definirStatus(media) {
  if (media < 4.0) {
    return "Reprovado por média";
  } else if (media >= 4.0 && media < 6.0) {
    return "Aguardando a final";
  } else {
    return "Aprovado por média";
  }
}

module.exports = {
  definirStatus,
};
