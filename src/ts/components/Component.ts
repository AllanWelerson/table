class Component {
    template:HTMLElement;

    constructor(type:string, classElement:string = ''){
        this.template = document.createElement(type);
        this.template.className = classElement;
    }

    render():HTMLElement{
        this.template.innerHTML = "";
        return this.template;
    }
}

export default Component;