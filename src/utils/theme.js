import { lighten } from 'polished';

const colors = {
  blue: '#160c6f',
  yellow: '#ebd597',
  grey: '#7f8fa6',
  greyLight: lighten(0.2, '#7f8fa6'),
};

export default {
  colors,
  font: {
    primary: 'Share Tech Mono',
  },
  flexboxgrid: {
    container: {
      sm: 46,
      md: 46,
      lg: 46,
    },
  },
};
