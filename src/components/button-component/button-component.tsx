import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';


export interface CarI{
  nombre: string;
  marca: string;
  traccion: string;
}


@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  shadow: true
})
export class MyButton {
  @Prop() text: string;
  @Prop() color: string = '#007bff';
  @Event() buttonClicked: EventEmitter<boolean>;

  constructor(){}

  async handleClick () {
    this.buttonClicked.emit(true);
  }

  render() {
    return (
      <button class="custom-button" 
      onClick={() => this.handleClick()}>
        {this.text} 
      </button>
    );
  }
}
 