
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
    let numbers = [...document.getElementById('form-multiplicator').elements]
                   .filter(element => element.nodeName === 'INPUT');
    numbers = numbers.map(element => element.value);
    let product = numbers.reduce((num1, num2) => num1 * num2);
    this.renderProduct(product);
  }

  renderProduct(product) {
    document.querySelector('.product').textContent = product;
  }
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();