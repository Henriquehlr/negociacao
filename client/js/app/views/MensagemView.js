class MensagemView extends View {

    constructor (elemento){

        super(elemento);
    }

    template(model){

        return model.textp ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

    
}