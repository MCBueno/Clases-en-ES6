"use strict";

require("core-js/modules/es.parse-int.js");
var _cliente = require("./cliente.js");
var _impuesto = require("./impuesto.js");
/* Instanciamos nuestros objetos */
var impuesto1 = new _impuesto.Impuestos(parseInt(750000), parseInt(20000));
var cliente1 = new _cliente.Cliente('Matias Bueno', impuesto1);
console.log("El impuesto anual de ".concat(cliente1.nombre, " es: $").concat(cliente1.calcularImpuesto()));