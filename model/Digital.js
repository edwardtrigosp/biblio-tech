class Digital extends Libro {
    constructor(isbn, titulo, autor, precioBase, estadoConservacion, formatoArchivo) {
        super(isbn, titulo, autor, precioBase, estadoConservacion);
        this.formatoArchivo = formatoArchivo;
    }

    calcularPrecioVenta() {
        return super.calcularPrecioVenta();
    }
}
