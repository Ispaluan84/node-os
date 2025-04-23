const os = require('os')

module.exports = {
        obtenerInfo: function() {
            const nombre = os.hostname();
            const tipo = os.type();
            const version = os.version();
            const arquitectura =os.arch();
            const cpus = os.cpus();
            const memoriaTotal = os.totalmem();
            const memoriaLibre = os.freemem();

            const memoriaTotalMB = (memoriaTotal/1000000).toFixed(2) + ' MB';
            const memoriaLibreMB = (memoriaLibre/1000000).toFixed(2) + ' MB';
        
        
            return {
                Nombre: nombre,
                Tipo: tipo,
                Version: version,
                Arquitectura: arquitectura,
                CPUs: cpus.length,
                ModeloCPU: cpus[0].model,
                Memoria_Total: memoriaTotalMB,
                Memoria_Libre: memoriaLibreMB,

            };
        }
} 

