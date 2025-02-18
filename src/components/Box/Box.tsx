import * as React from 'react';
import { type BoxProps as PandaBoxProps } from '@styled-system/jsx';

type AsProp<T extends React.ElementType> = {
  as?: T;
};

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

type PolymorphicComponentProp<
  T extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<Props & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

type BoxComponentProps = PandaBoxProps;

type BoxProps<T extends React.ElementType> = PolymorphicComponentProp<
  T,
  BoxComponentProps
>;

export function Box<T extends React.ElementType = 'div'>({
  as,
  children,
  ...props
}: BoxProps<T>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}
