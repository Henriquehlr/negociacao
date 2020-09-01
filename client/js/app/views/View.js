class View{

    constructor(elemento){

        this._elemento = elemento;
    }

    template() {

        throw new Error('O metado template deve ser implementado');
    }
    update(model){

        this._elemento.innerHTML = this.template(model);
    }
}