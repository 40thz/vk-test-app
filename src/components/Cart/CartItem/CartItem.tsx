import { memo } from 'react';
import { CartItem as CartItemProps } from '@@/store/slices/cart.slice/types';

import { Card, Div, Text } from '@vkontakte/vkui';
import styles from './CartItem.module.scss';
import { CartItemCounter } from './ui/CartItemCounter';

export const CartItem = memo((props: CartItemProps) => {
  const { thumbnail, title, description } = props;
  return (
    <Card mode="outline" className={styles.cart}>
      <Div className={styles.cart_image} style={{ padding: 0 }}>
        <img src={thumbnail} alt={title} />
      </Div>
      <Div>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </Div>
      <Div className={styles.cart_control}>
        <CartItemCounter {...props} />
      </Div>
    </Card>
  );
});
