const _matriz1 = [
        [13, 26],
        [39, 13]
    ],
    _matriz2 = [
        [7, 4],
        [2, 3]
    ],
    _operacao = "divisao";

const _operacoes = {
    soma: (matrizA, matrizB) => {
        if ((matrizA.length == matrizB.length) && (matrizA[0].length == matrizB[0].length)) {
            const result = matrizA.map((linha, numLinha) => {
                return linha.map((elemento, indice) => {
                    return elemento + matrizB[numLinha][indice];
                });
            });
            return result;
        }
    },
    subtracao: (matrizA, matrizB) => {
        if ((matrizA.length == matrizB.length) && (matrizA[0].length == matrizB[0].length)) {
            const result = matrizA.map((linha, numLinha) => {
                return linha.map((elemento, indice) => {
                    return elemento - matrizB[numLinha][indice];
                });
            });
            return result;
        }
    },
    multiplicacao: (matrizA, matrizB) => {
        if (matrizA[0].length == matrizB.length) {
            return matrizA.map((e, numLinha) => {
                return matrizB[0].map((e, numColuna) => {
                    return matrizA[numLinha].reduce((acumulador, valorAtual, indice) => {
                        return acumulador + valorAtual * matrizB[indice][numColuna];
                    }, 0);
                });
            });
        }
    },
    divisao: (matrizA, matrizB) => {

        function ijOposto(coordenada, tamanho) {
            return -(coordenada - (tamanho - 1));
        }

        function determinante(a, b, c, d) {
            console.log(arguments);
            return (a * d - b * c);
        }

        function inverted(matriz) {
            let result = [];
            matriz.map((e, numColuna) => {
                if (0 != numColuna) {
                    matriz[0][numColuna] *= -1;
                    matriz[numColuna][0] *= -1;
                } else {
                    [matriz[0][numColuna], matriz[ijOposto(0, matriz.length)][ijOposto(numColuna, matriz.length)]] = [matriz[ijOposto(0, matriz.length)][ijOposto(numColuna, matriz.length)], matriz[0][numColuna]];
                }
                result = matriz;
            });

            return result;
        }

        if ((matrizA.length == matrizB.length) && (matrizA[0].length == matrizB[0].length)) {
            const matrizBi = inverted(matrizB),
                det = determinante(matrizBi[0][0],
                    matrizBi[0][ijOposto(0, matrizBi.length)],
                    matrizBi[ijOposto(0, matrizBi.length)][0],
                    matrizBi[ijOposto(0, matrizBi.length)][ijOposto(0, matrizBi.length)]),
                result = matrizA.map((e, numLinha) => {
                    return matrizBi[0].map((e, numColuna) => {
                        return matrizA[numLinha].reduce((acumulador, valorAtual, indice) => {
                            return acumulador + valorAtual * matrizBi[indice][numColuna];
                        }, 0);
                    });
                });
            return result.map((linha) => {
                return linha.map((elemento) => {
                    return elemento / det;

                });
            });
        }
    },
    construcao: (ordem) => {
        const matriz = Array(ordem).fill(Array(ordem).fill(0)),
            resultado = matriz.map((linha, i) => {
                return linha.map((a, j) => {
                    return _operacoes.calcElemento(i += 1, j += 1);
                });
            });
        return resultado;
    },
    calcElemento: (i, j) => {
        return (i + j);

    }
};


function calcular(matrizA, matrizB, operacao) {
    const _operacao = _operacoes[operacao];
    return _operacao(matrizA, matrizB);
}
// console.log(calcular(_matriz1, _matriz2, _operacao));

console.log(_operacoes.construcao(3));