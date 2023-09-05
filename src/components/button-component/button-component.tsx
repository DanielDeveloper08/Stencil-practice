import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'bg-button',
  styleUrl: 'button-component.css',
  shadow: true
})
export class MyButton {
  @Prop() label: string;
  @Prop() color: string;
  @Prop() styleclass: string;
  @Prop() disabled: boolean;
  @Event() onClick: EventEmitter<boolean>;

  handleClick () {
    this.onClick.emit(true);
  }

  render() {
    return (
      <button 
        type=''
        class={`custom-button ${this.styleclass}`}
        style={{backgroundColor: this.color}}
        disabled={this.disabled}
        onClick={() => this.handleClick()}>
          {this.label} 
      </button>
    );
  }
}
 