import { Component, Host, State, h } from '@stencil/core';

export interface ClienteI{
  id: number;
  name: string;
}
@Component({
  tag: 'advanced-form',
  styleUrl: 'advanced-form.css',
  shadow: true,
})
export class AdvancedForm {

  selectedReceiverIds = [102, 103];
  @State() value: string;
  @State() selectValue: string;
  @State() secondSelectValue: string;
  @State() dataProp: ClienteI[] = [
    { id: 101, name: 'Daniel Asanza' },
    { id: 102, name: 'Paulina Rodriguez' }
  ];

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.value);
  }

  handleChange(event) {
    this.value = event.target.value;

    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid')
    }
  }

  handleSelect(event) {
    console.log(event.target.value);
    this.selectValue = event.target.value;
  }

  handleSecondSelect(event) {
    console.log(event.target.value);
    this.secondSelectValue = event.target.value;
  }

  render() {
    return (
      <Host>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Email</label>
          <input type="email" value={this.value} onInput={(e) => this.handleChange(e)} />

          <label>Marca</label>
          <select onInput={(event) => this.handleSelect(event)}>
            <option value="volvo" selected={this.selectValue === 'volvo'}>Volvo</option>
            <option value="saab" selected={this.selectValue === 'saab'}>Saab</option>
            <option value="mercedes" selected={this.selectValue === 'mercedes'}>Mercedes</option>
            <option value="audi" selected={this.selectValue === 'audi'}>Audi</option>
          </select>

          <label>Cliente</label>
          <select onInput={(event) => this.handleSecondSelect(event)}>
            {this.dataProp.map(recipient => (
              <option value={recipient.id} selected={this.selectedReceiverIds.indexOf(recipient.id) !== -1}>{recipient.name}</option>
            ))}
          </select>

          <input type="submit" value="Submit" />
        </form>
      </Host>
    );
  }

}
