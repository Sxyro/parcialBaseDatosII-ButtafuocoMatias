/* Enunciado/s:
Crear una base llamada cafetería, con una colección de cafés especiales que tenga los siguientes datos:
• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
• array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
• peso en gramos
• intensidad (baja, media, alta)
• array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
• si contiene leche (booleano)
• objeto tostador con localidad, nombre y cuit.
Cargar 10 cafés especiales.
Los datos a cargar en cada entidad deben ser útiles a las consultas que se detallan a continuación.
Objetivos de Aprobación No Directa (Calificación de 4 a 5 puntos):
1) Crear el script .js con la creación de la base de datos y las colecciones.
2) Buscar cuántos cafés contienen chocolate entre sus ingredientes.
3) Buscar cuántos cafés son de tipo “cold brew”· y contienen “vainilla” entre sus ingredientes.
4) Listar tipo y peso de los cafés que tienen una intensidad “media”.
5) Obtener tipo, peso e intensidad de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
Objetivos de Aprobación Directa (Calificación de 6 a 10 puntos):
6) Mostrar los cafés que fueron tostados en localidades que contengan “san”, permitiendo buscar por “san”
y que se muestren también los de “santos”, “san justo”, etc. Ordenar el resultado por peso de manera
descendente.
7) Mostrar la sumar del peso de cada tipo de Café.
8) Agregar el ingrediente “whisky” a todos los cafés cuya intensidad es alta.
9) Sumarle 10 al peso de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
10) Eliminar los cafés cuyo peso sea menor o igual a 210. */

// Creacion de base de datos 

use cafetería;

db.cafesEspeciales.insertMany([
    {
        tipo: "espresso",
        ingredientes: ["vainilla", "canela"],
        peso: 250,
        intensidad: "alta",
        precio: [
            { tipo: "efectivo", precio: 500 },
            { tipo: "tarjeta", precio: 550 }
        ], 
    contieneLeche: true,
    tostador: {
        localidad: "San Justo",
        nombre: "Tostador 1",
        cuit: "20-12345678-9"
        }
    },
    {
        tipo: "filtrado",
        ingredientes: ["chocolate", "caramelo"],
        peso: 200,
        intensidad: "media",
        precio: [
            { tipo: "efectivo", precio: 450 },
            { tipo: "tarjeta", precio: 500 }
        ],
        contieneLeche: false,
        tostador: {
            localidad: "San Fernando",
            nombre: "Tostador 2",
            cuit: "20-87654321-0"
        }
    },
    {
        tipo: "cold brew",
        ingredientes: ["vainilla", "canela"],
        peso: 300,
        intensidad: "baja",
        precio: [
            { tipo: "efectivo", precio: 600 },
            { tipo: "tarjeta", precio: 650 }
        ],
        contieneLeche: true,
        tostador: {
            localidad: "San Martín",
            nombre: "Tostador 3",
            cuit: "20-11223344-5"
        }
    },
    {
        tipo: "descafeinado",
        ingredientes: ["chocolate", "caramelo"],
        peso: 220,
        intensidad: "media",
        precio: [
            { tipo: "efectivo", precio: 550 },
            { tipo: "tarjeta", precio: 600 }
        ],
        contieneLeche: false,
        tostador: {
            localidad: "San Isidro",
            nombre: "Tostador 4",
            cuit: "20-55667788-1"
        }
    },
    {
        tipo: "espresso",
        ingredientes: ["vainilla", "canela"],
        peso: 250,
        intensidad: "alta",
        precio: [
            { tipo: "efectivo", precio: 500 },
            { tipo: "tarjeta", precio: 550 }
        ],
        contieneLeche: true,
        tostador: {
            localidad: "San Justo",
            nombre: "Tostador 1",
            cuit: "20-12345678-9"
        }
    },
    {
        tipo: "filtrado",
        ingredientes: ["chocolate", "caramelo"],
        peso: 200,
        intensidad: "media",
        precio: [
            { tipo: "efectivo", precio: 450 },
            { tipo: "tarjeta", precio: 500 }
        ],
        contieneLeche: false,
        tostador: {
            localidad: "San Fernando",
            nombre: "Tostador 2",
            cuit: "20-87654321-0"
        }
    },
    {
        tipo: "cold brew",
        ingredientes: ["vainilla", "canela"],
        peso: 300,
        intensidad: "baja",
        precio: [
            { tipo: "efectivo", precio: 600 },
            { tipo: "tarjeta", precio: 650 }
        ],
        contieneLeche: true,
        tostador: {
            localidad: "San Martín",
            nombre: "Tostador 3",
            cuit: "20-11223344-5"
        }
    },
    {
        tipo: "descafeinado",
        ingredientes: ["chocolate", "caramelo"],
        peso: 220,
        intensidad: "media",
        precio: [
            { tipo: "efectivo", precio: 550 },
            { tipo: "tarjeta", precio: 600 }
        ],
        contieneLeche: false,
        tostador: {
            localidad: "San Isidro",
            nombre: "Tostador 4",
            cuit: "20-55667788-1"
        }
    },
    {
        tipo: "espresso",
        ingredientes: ["vainilla", "canela"],
        peso: 250,
        intensidad: "alta",
        precio: [
            { tipo: "efectivo", precio: 500 },
            { tipo: "tarjeta", precio: 550 }
        ],
        contieneLeche: true,
        tostador: {
            localidad: "San Justo",
            nombre: "Tostador 1",
            cuit: "20-12345678-9"
        }
    },
    {
        tipo: "filtrado",
        ingredientes: ["chocolate", "caramelo"],
        peso: 200,
        intensidad: "media",
        precio: [
            { tipo: "efectivo", precio: 450 },
            { tipo: "tarjeta", precio: 500 }
        ],
        contieneLeche: false,
        tostador: {
            localidad: "San Fernando",
            nombre: "Tostador 2",
            cuit: "20-87654321-0"
        }
    }
]);

// 2) Buscar cuántos cafés contienen chocolate entre sus ingredientes.
db.cafesEspeciales.find({ ingredientes: "chocolate" }).count();

// 3) Buscar cuántos cafés son de tipo “cold brew”· y contienen “vainilla” entre sus ingredientes.
db.cafesEspeciales.find({ tipo: "cold brew", ingredientes: "vainilla" }).count();

// 4) Listar tipo y peso de los cafés que tienen una intensidad “media”.
db.cafesEspeciales.find({ intensidad: "media" }, { tipo:1, peso: 1 });

// 5) Obtener tipo, peso e intensidad de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
db.cafesEspeciales.find({ peso: { $gte: 200, $lte: 260 } }, { tipo: 1, peso: 1, intensidad: 1 });

/* 6) Mostrar los cafés que fueron tostados en localidades que contengan “san”, permitiendo buscar por “san”
y que se muestren también los de “santos”, “san justo”, etc. Ordenar el resultado por peso de manera
descendente. */
db.cafesEspeciales.find({ "tostador.localidad": { $regex: "san", $options: "i" } }).sort({ peso: -1 });

// 7) Mostrar la sumar del peso de cada tipo de Café.
db.cafesEspeciales.aggregate([
{
        $group: {
            _id: "$tipo",
            totalPeso: { $sum: "$peso" }
        }
    }
]);

// 8) Agregar el ingrediente “whisky” todos los cafés cuya intensidad es alta.
db.cafesEspeciales.updateMany(
    { intensidad: "alta" },
    { $addToSet: { ingredientes: "whisky" } }
);

//9) Sumarle 10 al peso de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
db.cafesEspeciales.updateMany({
    peso: { $gte: 200, $lte: 260 } },
    { $inc: { peso: 10 } }
);

//10) Eliminar los cafés cuyo peso sea menor o igual a 210. 
db.cafesEspeciales.deleeteMany({ peso: { $lte: 210 } });