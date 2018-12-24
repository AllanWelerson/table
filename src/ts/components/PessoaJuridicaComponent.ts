import Component from "./Component";
import PessoaJuridica from "../PessoaJuridica";

class PessoaJuridicaComponent extends Component{

    pessoa:PessoaJuridica;
    constructor(type:string, classElement:string = '', pessoa:PessoaJuridica){
        super(type, classElement);
        this.pessoa = pessoa;
    }

    render():HTMLElement{

        this.template.innerHTML = this.setContent();
        return this.template;
    }

    setContent():string{
        return `
        <ul>
            <li>Nome: ${this.pessoa.nome}</li>
            <li>CNPJ: ${this.pessoa.cnpj}</li>
            <li>Endereco: ${this.pessoa.endereco.logradouro} ${this.pessoa.endereco.numero} ${this.pessoa.endereco.cidade}</li>
        </ul>
        `;
    }
}

export default PessoaJuridicaComponent;