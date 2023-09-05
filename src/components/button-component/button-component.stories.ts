export default {
  title: 'Button Component',
  component: 'bg-button',
  tags: ['autodocs'],
  argTypes: {
    label: { 
      control: 'text',
      description: 'El texto a mostrar en el botón.',
    },
    color: { 
      control: 'color',
      description: 'El color de fondo del botón.',
    },
    styleclass: { 
      control: 'text',
      description: 'Nombres de clases CSS adicionales para estilos personalizados.', 
    },
    disabled: { 
      control: 'boolean',
      description: 'Si el botón debe estar deshabilitado o no.',
    },
  },
  actions: {
    onClick: { action: 'clicked' },
  },
};


const Template = (args) => `
  <bg-button
    label="${args.label}"
    color="${args.color}"
    styleclass="${args.styleclass}"
    disabled="${args.disabled}" 
    onClick="(event) => { this.onClick() }"
  ></bg-button>
`;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Iniciar Sesión',
  styleclass:'w-25 btn-primary',
  disabled: true, 
  onClick: () => console.log('Clicked!'), 
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Continuar',
  styleclass: 'btn-disabled w-25',
  disabled: true, 
  onClick: () => console.log('Clicked!'), 
};
