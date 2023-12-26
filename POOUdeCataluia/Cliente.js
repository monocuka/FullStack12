class Cliente extends Persona {
    #numeroCuenta;
    #saldoCuenta;
    constructor(nombre, edad, numeroCuenta, saldoCuenta) {
        super(nombre, edad);
        this.#numeroCuenta = numeroCuenta;
        this.#saldoCuenta = saldoCuenta;
    }
    Saludar() {
        console.log(`hola mmi nombre es ${this.nombre}  y tengo ${this.getEdad} años, y mi numero de cuenta es ${this.numeroCuenta}`);
    }
    depositar (monto) {
        this.#saldoCuenta += monto;
    }
    retirar (monto) {
        this.#saldoCuenta -= monto;
    }
    getSaldo() {
        return this.#saldoCuenta;
    }
    setSaldo(nuevoSaldo) {
        this.#saldoCuenta = nuevoSaldo;
    }
