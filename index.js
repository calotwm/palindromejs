// un palindrome es una palabra q se escribe igual del derecho y del reves

const input = document.getElementById("input")
// con esto hacemos que agarre los elementos de el id q pusimos

function reverseString(str) {
    // hacemos que nuestro string se convierta en array, le damos vuelta el array y lo hacemos string otra vez
    return str.split("").reverse().join("") // con los puntos llamamos a algo adentro de otra cosa, aca llamamos el split en el string
    // split toma el string lo hace array, el reverse lo da vuelta y el join toma el array y lo hace string.

}

function check() {
    const value = input.value;
    // es para chequear q el value nuestro sea igual q el del input
    const reverse = reverseString(value)
    // constatamos el reverse para que nuestra funcion reverseString funcione con el value q entra en el place holder
    if (value === reverse) {
        // si nuestro valor es igual al valor dado vuelta mandamos la alerta de que es palindromo
        alert("PALINDROME")
    } else {
        // si no mandamos esta!
        alert("Not today!")
    }
    // se envia una alerta con la palabra dada vuelta
}

