class Fisico extends Libro {
    constructor(isbn, titulo, autor, precioBase, estadoConservacion, ubicacion) {
        super(isbn, titulo, autor, precioBase, estadoConservacion);
        this.ubicacion = ubicacion;
    }

    calcularPrecioVenta() {
        return super.calcularPrecioVenta();
    }
}
