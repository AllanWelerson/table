import IPessoa from "./IPesssoa";
import Endereco from "./Endereco";

class Pessoa implements IPessoa{

    nome:string;
    endereco:Endereco;
    constructor(nome:string, endereco:Endereco){
        this.nome = nome;
        this.endereco = endereco;
    }



}

export default Pessoa;