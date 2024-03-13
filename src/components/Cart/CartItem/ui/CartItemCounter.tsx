import { useCallback } from 'react';
import { useAppDispatch } from '@@/store/hooks';
import { addItem, minusItem, removeItem } from '@@/store/slices/cart.slice';
import { CartItem } from '@@/store/slices/cart.slice/types';
import { Icon12Add, Icon16Minus, Icon20DeleteOutline } from '@vkontakte/icons';
import { Button, ButtonGroup, Text } from '@vkontakte/vkui';

export const CartItemCounter = (props: CartItem) => {
  const { count, price } = props;
  const dispatch = useAppDispatch();

  const handleAddItem = useCallback(() => {
    dispatch(addItem(props));
  }, []);

  const handleMinusItem = useCallback(() => {
    dispatch(minusItem(props));
  }, []);

  const handleRemoveItem = useCallback(() => {
    dispatch(removeItem(props));
  }, []);

  return (
    <>
      <ButtonGroup style={{ display: 'flex', alignItems: 'center' }}>
        <Button disabled={count <= 1} mode="secondary" onClick={handleMinusItem}>
          <Icon16Minus width={8} height={8} />
        </Button>
        <Text>{count}</Text>
        <Button disabled={count >= 10} mode="secondary" onClick={handleAddItem}>
          <Icon12Add width={8} height={8} />
        </Button>
      </ButtonGroup>
      <ButtonGroup style={{ display: 'flex', alignItems: 'center' }}>
        <Text>{price} ₽</Text>
        <Button mode="secondary" onClick={handleRemoveItem}>
          <Icon20DeleteOutline width={16} height={16} />
        </Button>
      </ButtonGroup>
    </>
  );
};
