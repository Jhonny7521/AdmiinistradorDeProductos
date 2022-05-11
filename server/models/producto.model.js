const mongoose = require('mongoose');

const EsquemaProducto = new mongoose.Schema({
  nombre: String,
  precio: Number,
  descripcion: String
}, {timestamps: true, versionKey: false})
//tiempestamps: creando campos de createdAt y updatedAt
//versionKey: false estamos elmiminando el atributi _V

const Producto = mongoose.model("productos", EsquemaProducto);

module.exports=Producto;