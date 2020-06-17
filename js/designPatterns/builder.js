class Form{
    constructor(){
        this.fields = []
    }
    addField(type, text){
        let fields = this.fields;
        let field;
        switch(type){
            case 'text':
                field = new InputText(text);
                break;
            case 'email':
                field = new InputEmail(text);
                break;
            case 'button':
                field = new Button(text);
                break;
            default:
                throw new Error('Undefined type '+type)
        }
        fields.push(field);
    }
    getForm(){
        let form = document.createElement('form'),
            fields = this.fields.length,
            field;
        for (let i = 0; i < fields; i++) {
            field = this.fields[i];
            form.appendChild(field.createElement());
            let br = document.createElement('br');
            form.appendChild(br);
            
        }
        return form;
    }
}
class Inputs{
    constructor(text){
        this.text = text;
    }
}
class InputText extends Inputs{
    constructor(text){
        super(text);
    }
    createElement() {
        const inputText = document.createElement('input');
        inputText.setAttribute('type','text');
        inputText.setAttribute('placeholder',this.text);
        return inputText;
    }
}
class InputEmail extends Inputs{
    constructor(text){
        super(text);
    }
    createElement() {
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type','text');
        inputEmail.setAttribute('placeholder',this.text);
        return inputEmail;
    }
}
class Button extends Inputs{
    constructor(text){
        super(text);
    }
    createElement() {
        const button = document.createElement('button');
        button.setAttribute('type','submit');
        button.textContent = this.text;
        return button;
    }
}
const form = new Form();
form.addField('text','Your name...');
form.addField('text','Your lastname...');
form.addField('email','Your email');
form.addField('button','Submit');

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#app').appendChild( form.getForm());
});
console.log(form);