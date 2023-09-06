export default {
  title: 'Input Component',
  component: 'bg-input',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'El valor del input.',
    },
    name: {
      control: 'text',
      description: 'El nombre del input.',
    },
    styleclass: {
      control: 'text',
      description: 'Nombres de clases CSS adicionales para estilos personalizados.',
    },
    placeholder: {
      control: 'text', 
      description: 'Texto de marcador de posición para el input.', 
    },
  },
};

const Template = (args) => `
  <bg-input
    value=${args.value}
    name=${args.name}
    styleclass=${args.styleclass}
    placeholder=${args.placeholder} 
    onInputChange={(event) => {}}
  ></bg-input>`;

export const Default = Template.bind({});
Default.args = {
  value: 'Ejemplo de valor',
  name: 'Username',
  styleclass: 'w-50',
  placeholder: 'Username',
};
