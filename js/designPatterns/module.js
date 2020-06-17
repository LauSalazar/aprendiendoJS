const buyTicket = (function(){
    //private
    let event = 'Conf JS 2020';
    const addTicket = () => {
        const element = document.createElement('p');
        element.textContent = `Buying ticket for ${event}`;
        document.querySelector('#app').appendChild(element);
    }

    //public
    return {
        showTicket: function(){
            addTicket();
        }
    }
})();

buyTicket.showTicket();