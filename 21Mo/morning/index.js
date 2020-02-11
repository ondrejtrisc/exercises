class Contact {
  constructor(name, number, sex) {
    this.name = name;
    this.number = number;
    this.sex = sex;

    this.render = () => {
      this.element = document.createElement('div');
      this.element.className = 'contact';
      this.element.innerHTML = `<div class="contact__avatar contact__avatar--${this.sex}"></div>
                                <div class="contact__body">
                                  <div class="contact__name">
                                    ${this.name}
                                  </div>
                                  <div class="contact__phone">
                                    ${this.number}
                                  </div>
                                </div>
                                <button class="contact__callbtn"></button>`;
      return this.element;
    };

    this.mount = () => {
      document.querySelector('.contacts').appendChild(this.render());
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Contact('Patsy Gillan', '334-343-2987', 'female').mount();
  new Contact('Lucille R. Smith', '334-343-2987', 'female').mount();
  new Contact('Ellen F. Jennings', '207-726-5115', 'female').mount();
  new Contact('Fred Thurman', '480-239-3682', 'male').mount();
  new Contact('Jamel Lee', '817-336-6748', 'male').mount();
});