import { Component, h, State, Event, EventEmitter, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'custom-input',
  styleUrl: 'custom-input.css',
  shadow: true,
})
export class CustomInput {
  @Prop() label: string;
  @Prop() errorMessage: string;
  @Prop() condition: (value: string) => boolean;
  @State() inputValue: string = '';
  @State() showError: boolean = false;

  @Event() inputChange: EventEmitter<string>;

  @Watch('inputValue')
  validateInput(newValue: string) {
    if (this.condition) {
      this.showError = !this.condition(newValue);
    }
  }

  handleInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.inputChange.emit(this.inputValue);
  }

  render() {
    return (
      <div class="input-container">
        <label>{this.label}</label>
        <input type="text" value={this.inputValue} onInput={(event) => this.handleInputChange(event)} />
        {this.showError && <div class="error">{this.errorMessage}</div>}
      </div>
    );
  }
}
