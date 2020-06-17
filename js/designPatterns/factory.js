function ConstructorWeb(){
    this.createElement = function(text, type){
        let html;
        if(type === 'input'){
            html = new InputHTML(text);
        } else if(type === 'img'){
            html = new ImageHTML(text);
        } else if(type === 'h1'){
            html = new HeadingHTML(text);
        } else if (type === 'p'){
            html = new ParagraphHTML(text);
        }
        html.type = type;

        html.show = function(){
            const element = document.createElement(this.type);
            if(this.type === 'input'){
                element.setAttribute('placeholder', this.text);
            } else if(this.type === 'img'){
                element.setAttribute('src',this.text);
            } else {
                element.appendChild(document.createTextNode(this.text));            
            }
            document.querySelector('#app').appendChild(element);
        }

        return html;
    }
}
const InputHTML = function(text) {
    this.text = text;
}
const ImageHTML = function(text) {
    this.text = text;
}
const HeadingHTML = function(text) {
    this.text = text;
}
const ParagraphHTML = function(text) {
    this.text = text;
}

const elementsWeb = [];
const siteWeb = new ConstructorWeb();
elementsWeb.push(siteWeb.createElement('Welcome', 'h1'));
elementsWeb.push(siteWeb.createElement('Welcome to my website', 'p'));
elementsWeb.push(siteWeb.createElement('logo.svg', 'img'));
elementsWeb.push(siteWeb.createElement('Learn with us', 'h1'));
elementsWeb.push(siteWeb.createElement('Your name...', 'input'));

elementsWeb.forEach(element =>{
    element.show()
});