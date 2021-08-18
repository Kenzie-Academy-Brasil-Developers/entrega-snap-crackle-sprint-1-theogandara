function  snapCrackle (maxValue){
    
    let resultadoString = ""
    
    for (let i = 1; i <= maxValue; i++){
        

        if ((i % 2 === 1) && (i % 5 === 0)){
            resultadoString += "SnapCrackle, "
        }
        else if (i % 2 === 1){
            resultadoString += "Snap, "
        }
        else if ((i % 5) === 0){
            resultadoString +=  "Crackle, "
        }else {
            resultadoString += i + ", "
        }
    }

    return resultadoString
}


// - Escreva uma função chamada _snapCrackle_ que leva um parâmetro: _maxValue_.
// - Esta função deve fazer um loop de 1 até _maxValue_ (inclusive) e montar uma _string_ com as seguintes condições para cada número:
//     1. Se o número for ímpar, no lugar dele, concatenar _"Snap"_ no final da string.
//     2. Se o número for múltiplo de 5, no lugar dele, concatenar _"Crackle"_ no final da string.
//     3. Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar _"SnapCrackle"_ no final da string.
//     4. Se número não for nem ímpar nem múltiplo de 5, concatenar o próprio número no final da string.
//     5. Seus itens devem ser separados sempre por _vírgula e espaço_ (veja o exemplo).
//     6. Esta função deve _retornar_ a _string_ obtida.