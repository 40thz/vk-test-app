import { useAppSelector } from '@@/store/hooks';
import { CardGrid, Group, Header, Panel, View } from '@vkontakte/vkui';
import { CART_IS_EMPTY_MESSAGE, CART_IS_ERROR_MESSAGE } from '@@/constants/messages';
import { Loader } from '../Loader';
import { Message } from '../Message';
import { CartItem } from './CartItem';

export const CartList = () => {
  const {
    data,
    status: { isLoading, error },
  } = useAppSelector((state) => state.cart);

  const carts = data.map((cart) => <CartItem key={cart.id} {...cart} />);
  const skeletons = [...new Array(6)].map((_, index) => <Loader key={index} />);

  return (
    <View activePanel="main">
      <Panel id="main">
        <Group header={<Header mode="secondary">Cart</Header>}>
          <CardGrid size="l">
            {data.length === 0 && !isLoading && !error && <Message>{CART_IS_EMPTY_MESSAGE}</Message>}

            {!isLoading && error && <Message>{CART_IS_ERROR_MESSAGE}</Message>}

            {isLoading ? skeletons : carts}
          </CardGrid>
        </Group>
      </Panel>
    </View>
  );
};
