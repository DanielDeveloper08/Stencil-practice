export default {
  title: 'Button Component',
  tags: ['autodocs'],
};

const Template = (args) => ` <button-component text="${args.text}" color="${args.color}"></button-component>`

export const Primary = Template.bind({})
export const Secondary = Template.bind({})


Primary.args = {
    text: 'Tranferir',
    color: '#D2006E'
}


Secondary.args = {
    text: 'Iniciar Sesión',
    color: 'Blue'
}