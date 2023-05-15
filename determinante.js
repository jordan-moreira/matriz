const matriz = [
        [1, 2, 3],
        [4, 6, 3],
        [5, 4, 2]
    ],
    funcoes = {
        Det: (matriz) => {
            matriz = matriz.map((linha) => {
                const [a, b] = linha.slice(0, 2);
                linha.push(a, b);
                return linha;
            });

            return funcoes.calcDiagonal(matriz);
        },
        calcDiagonal: (matriz) => {
            const DP = matriz.reduce((acumulador, e, linha) => {
                    let diagonal = 0;
                    for (let i = 0, numLinha = 0, numColuna = linha, valorAcumuldo = 1; i <= 2; i++, numLinha++, numColuna++) {
                        valorAcumuldo *= matriz[numLinha][numColuna];
                        diagonal = valorAcumuldo;
                    }
                    acumulador += diagonal;
                    return acumulador;
                }, 0),

                DS = matriz.reduce((acumulador, e, linha) => {
                    let diagonal = 0;
                    for (let i = 0, numLinha = 0, numColuna = linha + 2, valorAcumuldo = 1; i <= 2; i++, numLinha++, numColuna--) {
                        valorAcumuldo *= matriz[numLinha][numColuna];
                        diagonal = valorAcumuldo;
                    }
                    acumulador += diagonal;
                    return acumulador;
                }, 0);
            return DP - DS;
        }
    };

console.table(funcoes.Det(matriz));

// │ 1 │ 2 │ 3 │ 1 │ 2 │
// │ 4 │ 6 │ 3 │ 4 │ 6 │
// │ 5 │ 4 │ 2 │ 5 │ 4 │