import Component from "./Component";
import PessoaFisica from "../PessoaFisica";

class PessoaFisicaComponent extends Component{

    pessoa:PessoaFisica;
    constructor(type:string, classElement:string = '', pessoa:PessoaFisica){
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
            <li>CPF: ${this.pessoa.cpf}</li>
            <li>Endereco: ${this.pessoa.endereco.logradouro} ${this.pessoa.endereco.numero} ${this.pessoa.endereco.cidade}</li>
        </ul>
        `;
    }
}

export default PessoaFisicaComponent;