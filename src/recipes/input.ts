import { defineRecipe } from '@pandacss/dev';

export const input = defineRecipe({
  className: 'input',
  jsx: ['Input'],
  base: {
    position: 'relative',
    display: 'inline-grid',
    verticalAlign: 'top',
    alignItems: 'center',
    padding: '0',
    fontFamily: 'sans',
    fontSize: '16',
    fontWeight: 'normal',
    lineHeight: 'normal',
    color: { base: 'slate.90', _osDark: 'slate.5' },
    borderRadius: '8',
    // transitionDuration: 'fast',
    // transitionProperty: 'background, border-color, color, box-shadow',
    // transitionTimingFunction: 'default',
    '& input': {
      width: 'auto',
      minWidth: '16',
      maxWidth: 'full',
      font: 'inherit',
      py: '4',
      px: '8',
      m: '0',
      resize: 'none',
      appearance: 'none',
      borderWidth: '1',
      borderStyle: 'solid',
      borderRadius: '4',
      borderColor: 'transparent',
      // _disabled: {
      //   opacity: 0.4,
      //   cursor: 'not-allowed',
      // },
      // _invalid: {
      //   borderColor: 'red.50',
      //   _focus: {
      //     borderColor: 'red.50',
      //   },
      // },
      // _placeholder: {
      //   color: { base: 'slate.50', _osDark: 'slate.60' },
      //   opacity: 'full',
      // },
    },
  },
  defaultVariants: {
    stacked: true,
    internalLabel: false,
  },
  compoundVariants: [],
  variants: {
    stacked: {
      true: {
        gridTemplateRows: 'auto 1fr',
        alignItems: 'stretch',
        '& input': {
          gridArea: '2 / 1',
          background: { base: 'slate.0', _osDark: 'slate.90' },
          borderColor: { base: 'slate.40', _osDark: 'slate.50' },
          // _hover: {
          //   borderColor: { base: 'slate.20', _osDark: 'slate.30' },
          // },
          // _focus: {
          //   borderColor: { base: 'slate.90', _osDark: 'slate.5' },
          // },
        },
      },
      false: {
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        '& input': {
          background: { base: 'slate.0', _osDark: 'slate.90' },
          borderColor: { base: 'green.40', _osDark: 'green.50' },
          // _hover: {
          //   borderColor: { base: 'slate.20', _osDark: 'slate.30' },
          // },
          // _focus: {
          //   borderColor: { base: 'slate.90', _osDark: 'slate.5' },
          // },
        },
      },
    },
    internalLabel: {
      false: {},
      true: {
        // _focusWithin: {
        //   outlineWidth: 1,
        //   outlineStyle: 'solid',
        //   outlineColor: { base: 'slate.90', _osDark: 'slate.5' },
        //   // outlineOffset: 2,
        //   ml: '-4',
        // },
      },
    },
  },
});
