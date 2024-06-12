import { Cliente } from "./cliente.js";
import { Impuestos } from "./impuesto.js";


/* Instanciamos nuestros objetos */
const impuesto1 = new Impuestos(parseInt(750000), parseInt(20000)); 
const cliente1 = new Cliente('Matias Bueno', impuesto1);

console.log(`El impuesto anual de ${cliente1.nombre} es: $${cliente1.calcularImpuesto()}`); 