import { FC, PropsWithChildren } from 'react';
import { Div, Text } from '@vkontakte/vkui';

export const Message: FC<PropsWithChildren> = ({ children }) => (
  <Div>
    <Text>{children}</Text>
  </Div>
);
