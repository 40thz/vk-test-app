import { useAppSelector } from '@@/store/hooks';
import { Group, Header, Panel, SimpleCell, View } from '@vkontakte/vkui';

export const CartTotal = () => {
  const total = useAppSelector((state) => state.cart.totalPrice);

  return (
    <View activePanel="main">
      <Panel id="main">
        <Group header={<Header mode="secondary">Total</Header>}>
          <SimpleCell>Итого: {total} ₽</SimpleCell>
        </Group>
      </Panel>
    </View>
  );
};
