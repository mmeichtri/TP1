import { writeFile } from 'fs/promises';

const array = [2,10,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r","r", "c", false, true];
const datosValidos = ['boolean', 'string', 'number'];

async function tp1(array, condicion){
    try {
        console.log(`Array: ${array}, condición: ${condicion}`);

        if (!datosValidos.includes(condicion)) {
            throw new Error("El dato ingresado no es válido"); //ej4
        }

        let arrayNuevo = array.filter(element => typeof element === condicion); //ej2
        arrayNuevo = arrayNuevo.filter((value, index) => arrayNuevo.indexOf(value) === index); //ej3
        arrayNuevo.sort((a, b) => a - b);
        
        if (arrayNuevo){
            const contenido = arrayNuevo.join(', ');

            await writeFile("dox.txt", contenido);
            console.log("Archivo escrito con éxito.");}
        else{
            throw new Error("El nuevo array no tiene datos")
        }
    } catch (error) {
        console.error("Error al escribir el archivo:", error.message);
    }
}

try{
    await tp1(array, 'number');
}catch(error){
    console.log(`Error: ${error}`)
}

