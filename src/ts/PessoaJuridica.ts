import Pessoa from "./Pessoa";
import Endereco from "./Endereco";

class PessoaJuridica extends Pessoa{

    cnpj:string;
    constructor(nome:string, endereco:Endereco,cnpj:string){
        super(nome, endereco);
        this.cnpj = cnpj;
    }

}

export default PessoaJuridica;