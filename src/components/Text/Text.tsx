// SOURCE
// https://www.adebayosegun.com/blog/typography-component-with-panda-css-recipes

import { text, type TextVariantProps } from '@styled-system/recipes';
import { cx, css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type TextProps = TextVariantProps &
  React.HTMLAttributes<HTMLElement> & {
    as?: TextElement;
    className?: string;
    font?: string;
    italic?: boolean;
    bold?: boolean;
    underline?: boolean;
  } & SystemStyleObject;

export function Text({
  as: Component = 'p',
  className,
  font,
  italic,
  bold,
  underline,
  ...props
}: TextProps) {
  const { children, ...restProps } = props;
  const styleProps: SystemStyleObject = { ...restProps };

  return (
    <Component
      className={cx(
        text({ font, italic, bold, underline, as: Component }),
        css(styleProps),
        className,
      )}
    >
      {children}
    </Component>
  );
}
