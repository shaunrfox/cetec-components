// SOURCE
// https://www.adebayosegun.com/blog/typography-component-with-panda-css-recipes

import { text, type TextVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type TextProps = TextVariantProps &
  React.HTMLAttributes<HTMLElement> & {
    as?: TextElement;
  };

export function Text({
  as: Component = 'p',
  className,
  font,
  italic,
  ...props
}: TextProps) {
  return (
    <Component
      className={cx(text({ font, italic, as: Component }), className)}
      {...props}
    />
  );
}
