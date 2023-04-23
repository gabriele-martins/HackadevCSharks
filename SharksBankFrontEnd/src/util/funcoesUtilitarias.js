export function definePrimeiroEUltimoNome(nome) {
    let nomeCompleto = nome.split(" ");
    let nomeDefinido = "";

    if (nomeCompleto.length > 1)
      nomeDefinido =
        nomeCompleto[0] + " " + nomeCompleto[nomeCompleto.length - 1];
    else nomeDefinido = nomeCompleto[0];

    return nomeDefinido;
  }