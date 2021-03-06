//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
console.log("%cEjercicio 21", "font-weight:bold; font-size:12px");
const numerosCuadrado = (numerosArray) => {
  if (numerosArray === undefined || numerosArray.length === 0)
    return console.warn("Inserta un dato válido.");
  if (!Array.isArray(numerosArray))
    return console.error("Has introducido un dato que NO es un array.");
  for (let i = 0; i < numerosArray.length; i++) {
    if (typeof numerosArray[i] !== "number")
      return console.error(
        "Has introducido un string en el array, solo se admiten números."
      );
  }
  let dobles = numerosArray.map(function (x) {
    return Math.pow(x, 2);
  });
  dobles.includes(NaN)
    ? console.error(
        "Has insertado un texto dentro del array, inserta solo números válidos."
      )
    : console.log(`El array original es ${numerosArray}.
Este es el array al cuadrado ${dobles}.`);
};

numerosCuadrado([1, 4, 5]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
console.log("%cEjercicio 22", "font-weight:bold; font-size:12px");
const numerosAltoBajo = (numerosArray) => {
  if (numerosArray === undefined || numerosArray.length === 0)
    return console.warn("Inserta un dato válido.");
  if (!Array.isArray(numerosArray))
    return console.error("Has introducido un dato que NO es un array.");
  for (let i = 0; i < numerosArray.length; i++) {
    if (typeof numerosArray[i] !== "number")
      return console.error(
        "Has introducido un string en el array, solo se admiten números."
      );
  }
  console.log(
    `El array que colocaste es: ${numerosArray}, el número mas alto es ${Math.max(
      ...numerosArray
    )}, y el número mas bajo es ${Math.min(...numerosArray)}.`
  );
};

numerosAltoBajo([1, 4, 5, 99, -60]);

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
console.log("%cEjercicio 23", "font-weight:bold; font-size:12px");
const numerosParesImpares = (numerosArray) => {
  if (numerosArray === undefined || numerosArray.length === 0)
    return console.warn("Inserta un dato válido.");
  if (!Array.isArray(numerosArray))
    return console.error("Has introducido un dato que NO es un array.");
  for (let i = 0; i < numerosArray.length; i++) {
    if (typeof numerosArray[i] !== "number")
      return console.error(
        "Has introducido un string en el array, solo se admiten números."
      );
  }
  let pares = [];
  let impares = [];

  numerosArray.map(function (x) {
    x % 2 === 0 ? pares.push(x) : impares.push(x);
  });

  return console.log(`El array original que insertaste es: ${numerosArray}.
Los números pares de ese array son: ${pares}.
Los números impares de ese array son: ${impares}.`);
};

numerosParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.log(
  "%c7ma Ronda de ejercicios hecha, gracias Jon, hecho por Codereggs",
  "color:lightblue; font-size:20px"
);
