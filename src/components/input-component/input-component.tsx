import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'bg-input',
  styleUrl: 'input-component.css',
  shadow: true
})
export class BgInput {

  @Prop() value: string;
  @Prop() name: string;
  @Prop() styleclass: string;
  @Prop() placeholder: string;
  @Event() inputChange: EventEmitter<string>;

  handleChange(event: Event) {
    this.inputChange.emit((event.target as HTMLInputElement).value);
  }

  render() {
    return (
      <input
        class={`custom-button ${this.styleclass}`}
        type="text"
        name={this.name}
        value={this.value}
        placeholder={this.placeholder} 
        onInput={event => this.handleChange(event)}
      />
    );
  }
}
