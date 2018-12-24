import PessoaFisica from "./PessoaFisica";
import Endereco from "./Endereco";
import PessoaJuridica from "./PessoaJuridica";
import TipoCidades from "./utils/TipoCidades";
import PessoaFisicaComponent from "./components/PessoaFisicaComponent";
import PessoaJuridicaComponent from "./components/PessoaJuridicaComponent";


class App{

    element:HTMLElement;

    constructor(element:HTMLElement){
        this.element = element;
     
        let p = document.createElement("div");
        this.render();
    }

    render(){    
        
        let citie1 = new Endereco("avenida dos carros",2,TipoCidades.SAO_PAULO);
        let citie2 = new Endereco("W3 Sul",4,TipoCidades.BRASILIA);
        let citie3 = new Endereco("Rua da praia",8,TipoCidades.RIO_DE_JANEIRO);

        let pessoa1 = new PessoaFisica("jonas",citie1,"123123123-12");
        let pessoa2 = new PessoaFisica("Ana",citie1,"123123123-12");
        let pessoa3 = new PessoaJuridica("gohan",citie1,"00000-000");
        let pessoa4 = new PessoaJuridica("videl",citie1,"00000-000");
    
         this.element.appendChild(new PessoaFisicaComponent("div","pessoa",pessoa1).render());
         this.element.appendChild(new PessoaFisicaComponent("div","pessoa",pessoa2).render());
         this.element.appendChild(new PessoaJuridicaComponent("div","pessoa",pessoa3).render());
         this.element.appendChild(new PessoaJuridicaComponent("div","pessoa",pessoa4).render());

        
    }




}

let target = document.getElementById("App");
let app = new App(target); 
