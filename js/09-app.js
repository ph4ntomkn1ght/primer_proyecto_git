//Metodos de Propiedad de javascript

const acciones={
    reproducir: function(id){
        console.log(`Reproduciendo la cancion con id ${id}`);
    },
    pausando: function(id){
        console.log(`Pausando la cancion con id ${id}.....`);
    }

}

acciones.pausando(34);
acciones.reproducir(12);