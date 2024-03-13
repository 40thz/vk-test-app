import { useEffect } from 'react';
import { useAppDispatch } from '@@/store/hooks';
import { cartFind } from '@@/store/slices/cart.slice/asyncActions';
import { SplitCol, SplitLayout } from '@vkontakte/vkui';
import { CartList, CartTotal } from '@@/components/Cart/';
import styles from './Cart.module.scss';

export const Cart = () => {
  const dispatch = useAppDispatch();

  // Получает данные по API
  useEffect(() => {
    dispatch(cartFind());
  }, []);

  return (
    <SplitLayout className={styles.cart}>
      <SplitCol width={'100%'}>
        <CartList />
      </SplitCol>
      <SplitCol width={'50%'} style={{ position: 'sticky', top: 60 }}>
        <CartTotal />
      </SplitCol>
    </SplitLayout>
  );
};
