class Sucursal {
    #numeroSucursal;
    #direccionSucursal;
    #empleados;
    
    constructor(numeroSucursal, direccionSucursal) {
        this.#numeroSucursal = numeroSucursal;
        this.#direccionSucursal = direccionSucursal;
        this.#empleados = [];
    }

    agregarEmpleado (empleado) {
        this.#empleados.push(empleado);
    }
    eliminarEmpleado (empleado) {
        const indice = this.#empleados.indexOf(empleado);
        this.#empleados.splice(indice, 1)
    }
    getEmpleados() {
        return this.#empleados;
    }
} 