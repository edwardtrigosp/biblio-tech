// Vista — helpers de interfaz (sin lógica de negocio del inventario)

function actualizarCamposTipoLibro() {
    const tipo = document.getElementById("tipoLibroId");
    const filaFisico = document.getElementById("filaUbicacion");
    const filaDigital = document.getElementById("filaFormato");
    if (!tipo || !filaFisico || !filaDigital) return;

    if (tipo.value === "fisico") {
        filaFisico.style.display = "";
        filaDigital.style.display = "none";
    } else {
        filaFisico.style.display = "none";
        filaDigital.style.display = "";
    }
}
