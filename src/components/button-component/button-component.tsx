import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';


export interface CarI{
  nombre: string;
  marca: string;
  traccion: string;
}


@Component({
  tag: 'bg-button',
  styleUrl: 'button-component.css',
  shadow: true
})
export class MyButton {
  @Prop() label: string;
  @Prop() color: string;
  @Prop() styleclass: string;
  @Event() buttonClicked: EventEmitter<boolean>;

  async handleClick () {
    this.buttonClicked.emit(true);
  }

  render() {
    return (
      <button class={`custom-button ${this.styleclass}`}
      style={{backgroundColor: this.color}}
      onClick={() => this.handleClick()}>
        {this.label} 
      </button>
    );
  }
}
 