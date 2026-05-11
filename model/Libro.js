/**
 * Clase base Libro — BiblioTech
 * precioVenta = precioBase + ajuste según estadoConservacion (N, B, R, D)
 */
class Libro {
    constructor(isbn, titulo, autor, precioBase, estadoConservacion) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.precioBase = parseInt(precioBase, 10) || 0;
        this.estadoConservacion = String(estadoConservacion || "").toUpperCase().charAt(0);
    }

    ajustePorConservacion() {
        const tabla = { N: 30000, B: 20000, R: 10000, D: 0 };
        return tabla[this.estadoConservacion] ?? 0;
    }

    calcularPrecioVenta() {
        return this.precioBase + this.ajustePorConservacion();
    }

    /**
     * @param {Libro[]} libros
     * @returns {number}
     */
    static hallarTotalInventario(libros) {
        return libros.reduce(function (total, libro) {
            return total + libro.calcularPrecioVenta();
        }, 0);
    }
}
