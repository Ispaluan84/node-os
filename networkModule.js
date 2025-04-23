const os = require('os');

module.exports = {
    obtenerInfoRed: function() {
        const interfaces = os.networkInterfaces();
        const redes = [];

        for (const nombre in interfaces) {
            interfaces[nombre].forEach(interfaz => {
                redes.push({
                    nombre: nombre,
                    direccion: interfaz.address,
                    familia: interfaz.family,
                    interna: interfaz.internal ? 'Sí' : 'No',
                });
            });
        }
        return redes;
    }
};