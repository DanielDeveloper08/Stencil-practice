import { Component, h, State, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'bg-input',
  styleUrl: 'custom-input.css',
  shadow: true,
})
export class CustomInput {
  @Prop() label: string;
  @Prop() condition: (value: string) => boolean;
  @State() inputValue: string = '';

  @Event() inputChange: EventEmitter<string>;

  // @Watch('inputValue')
  // validateInput(newValue: string) {
  //   if (this.condition) {
  //   }
  // }

  handleInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.inputChange.emit(this.inputValue);
  }

  render() {
    return (
      <div class="input-container">
        <input type="text" value={this.inputValue} onInput={(event) => this.handleInputChange(event)} />
      </div>
    );
  }
}
