import { defineRecipe } from '@pandacss/dev';

export const iconButton = defineRecipe({
  className: 'icon-button',
  jsx: ['IconButton'],
  base: {
    appearance: 'none',
    minWidth: '0',
    transitionDuration: 'fast',
    transitionProperty: 'background, border-color, color, box-shadow',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    verticalAlign: 'middle',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4',
    fontFamily: 'sans',
    fontSize: '16',
    fontWeight: 'medium',
    lineHeight: '1',
    borderWidth: '1',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: '4',
    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    outlineOffset: 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _focusVisible: {
      outlineColor: { base: 'slate.80', _osDark: 'slate.5' },
    },
    '& svg': {
      fill: 'current',
      width: '24',
      height: '24',
    },
  },
  variants: {
    variant: {
      primary: {
        bg: { base: 'slate.90', _osDark: 'slate.5' },
        color: { base: 'slate.5', _osDark: 'slate.90' },
        _hover: {
          bg: { base: 'slate.70', _osDark: 'slate.20' },
        },
        _active: {
          bg: { base: 'slate.100', _osDark: 'slate.30' },
          borderColor: 'transparent',
        },
        _disabled: {
          _hover: {
            bg: { base: 'slate.90', _osDark: 'slate.5' },
          },
        },
      },
      standard: {
        bg: { base: 'slate.5', _osDark: 'slate.70' },
        color: { base: 'slate.80', _osDark: 'slate.5' },
        _hover: {
          bg: { base: 'slate.10', _osDark: 'slate.60' },
        },
        _active: {
          bg: { base: 'slate.20', _osDark: 'slate.100' },
          borderColor: 'transparent',
        },
        _disabled: {
          _hover: {
            bg: { base: 'slate.5', _osDark: 'slate.70' },
          },
        },
      },
      hollow: {
        bg: 'transparent',
        borderColor: { base: 'slate.30', _osDark: 'slate.60' },
        color: { base: 'slate.80', _osDark: 'slate.5' },
        _hover: {
          bg: { base: 'slate.10', _osDark: 'slate.60' },
        },
        _active: {
          bg: { base: 'slate.20', _osDark: 'slate.100' },
        },
        _disabled: {
          _hover: {
            bg: 'transparent',
          },
        },
      },
      ghost: {
        bg: 'transparent',
        color: { base: 'slate.90', _osDark: 'slate.5' },
        _hover: {
          bg: { base: 'slate.20', _osDark: 'slate.70' },
        },
        _active: {
          bg: { base: 'slate.30', _osDark: 'slate.60' },
          borderColor: 'transparent',
        },
        _disabled: {
          _hover: {
            bg: 'transparent',
          },
        },
      },
      danger: {
        bg: 'red.50',
        color: 'slate.0',
        _hover: {
          bg: 'red.40',
        },
        _active: {
          bg: 'red.60',
          borderColor: 'transparent',
        },
        _disabled: {
          _hover: {
            bg: 'red.50',
          },
        },
      },
    },
    size: {
      standard: {
        fontSize: '16',
        p: '3',
      },
      large: {
        fontSize: '16',
        p: '7',
      },
      small: {
        fontSize: '14',
        p: '1',
      },
    },
  },
  defaultVariants: {
    variant: 'standard',
    size: 'standard',
  },
});
