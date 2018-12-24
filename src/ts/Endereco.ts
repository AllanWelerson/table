class Endereco{

    logradouro:string;
    numero:number;
    cidade:string;

    constructor(logradouro:string, numero:number, cidade:string) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.cidade = cidade;
    }

}

export default Endereco;