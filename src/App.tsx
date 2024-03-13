import { AppRoot, Panel, PanelHeader, View } from '@vkontakte/vkui';
import { Cart } from './containers/Cart';

export const App = () => (
  <AppRoot>
    <View activePanel="main">
      <Panel id="main">
        <PanelHeader>VK-MARKET</PanelHeader>
        <Cart />
      </Panel>
    </View>
  </AppRoot>
);
