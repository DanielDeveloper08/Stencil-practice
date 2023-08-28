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

  @Event() buttonClicked: EventEmitter<CarI>;

  handleClick() {
    this.buttonClicked.emit({nombre: 'Ford Explorer',marca: 'Ford',traccion: '4x4'});
  }

  render() {
    return (
      <button class="custom-button" style={{ backgroundColor: this.color }} onClick={() => this.handleClick()}>
        {this.text} 

      </button>
    );
  }
}
 