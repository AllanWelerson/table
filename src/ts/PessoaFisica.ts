import Pessoa from "./Pessoa";
import Endereco from "./Endereco";

class PessoaFisica extends Pessoa{

    cpf:string;
    constructor(nome:string, endereco:Endereco, cpf:string){
        super(nome,endereco);
        this.cpf = cpf;
    }

}

export default PessoaFisica;