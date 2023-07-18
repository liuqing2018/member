import {
  ConfigProvider,
  Button
} from 'ant-design-vue';

const injectComponents = (app: any): void => {
  app.use(ConfigProvider);
  app.use(Button);
}

export default injectComponents;
