const multiply = require('./multiplicator.js');
class ViewManager {
  connectEventHandlers() {
    document.getElementById('form-multiplicator').addEventListener('submit', this.onSubmit.bind(this));
    document.getElementById('newfactor').addEventListener('click', this.onClickNewFactor);
  }

  onClickNewFactor(event) {
  	event.preventDefault();
  	let divElement = document.createElement('div');
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('size', 3);
    divElement.appendChild(inputElement);
    document.getElementById('input-num').appendChild(divElement);
  }

  onSubmit(event) {
  	event.preventDefault();
    let product;
    let numbers = Array.from(document.getElementById('form-multiplicator').elements)
                   .filter(element => element.nodeName === 'INPUT')
                   .map(element => parseInt(element.value, 10))  
                   .filter(num => !Number.isNaN(num));
    if (numbers.length >= 2) {
      product = multiply(numbers);
    }
    if (product === undefined) {
      product = NaN;
    }
    this.renderProduct(product);
  }

  renderProduct(product) {
    document.querySelector('.product').textContent = product;
  }
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();