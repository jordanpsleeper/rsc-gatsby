import DefaultLayout from './DefaultLayout';

const Layouts = {
  default: DefaultLayout,
};

const getLayoutOrDefault = (key: string = ''): React.FC => Layouts[key] || Layouts['default'];

export default getLayoutOrDefault;
