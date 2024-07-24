class CuentaBancaria {
    public numero : number;
    private _saldo: number;
    public cliente: string | undefined;
    constructor(numero: number, saldo: number, cliente?: string) {
        this.numero = numero;
        this.cliente = cliente;
        this._saldo = saldo;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(cantidad) {
        this._saldo = cantidad;
    }
}

let cuentaA= new CuentaBancaria(100, 2_500, "Andre");
cuentaA.saldo = cuentaA.saldo - 10;