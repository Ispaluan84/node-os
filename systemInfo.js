const red = require('./networkModule.js');
const infoRed = red.obtenerInfoRed();
const sistema = require('./osModule.js');
const info = sistema.obtenerInfo();

console.log('INFORMACION DE SISTEMA');
console.log(`Nombre: ${info.Nombre}`);
console.log(`Tipo: ${info.Tipo}`);
console.log(`Versión: ${info.Version}`);
console.log(`Arquitectura: ${info.Arquitectura}`);
console.log(`CPUs: ${info.CPUs} (${info.ModeloCPU})`);
console.log(`Memoria Total: ${info.Memoria_Total}`);
console.log(`Memoria Libre: ${info.Memoria_Libre}`);

console.log('INFORMACIÓN DE RED')
if (infoRed.length === 0) {
    console.log('No se encontraron Interfaces de Red.');
}
infoRed.forEach((interfaz, index) => {
    console.log(`Interfaz: ${index + 1}: ${interfaz.nombre}`);
    console.log(`Dirección: ${interfaz.direccion}`);
    console.log(`Familia: ${interfaz.familia}`);    
    console.log(`Interfaz Interna: ${interfaz.interna}`);
});
