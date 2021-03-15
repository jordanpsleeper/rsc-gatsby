import DefaultLayout from './DefaultLayout';
import Layout from './Layout'

const Layouts = {
  default: DefaultLayout,
};

const getLayoutOrDefault = (key: string = ''): React.FC => Layouts[key] || Layouts['default'];

export default Layout;
