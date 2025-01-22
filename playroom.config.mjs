import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  components: './playroom/components.ts',
  outputPath: './playroom',
  frameComponent: './playroom/FrameComponent.tsx',
  snippets: './playroom/snippets.ts',
  // themes: './playroom/themes.ts',
  htmlTemplate: './playroom/templates/playroom.html',
  previewHtmlTemplate: './playroom/templates/preview.html',

  title: 'Cetec Components',
  scope: './playroom/useScope.js',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: false,
  paramType: 'search',
  exampleCode: `
    <Button>
      Hello Panda!
    </Button>
  `,
  baseUrl: '/',
  typeScriptFiles: ['src/**/*.{ts,tsx}'],
  webpackConfig: () => ({
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '~': path.resolve(__dirname, 'src'), // Matches "~/*"
        '@styled-system': path.resolve(__dirname, 'styled-system'), // Matches "@styled-system/*"
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.app.json'),
            logLevel: 'info',
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [],
  }),
  iframeSandbox: 'allow-scripts allow-popups',
  defaultVisibleWidths: [],
  defaultVisibleThemes: [],
  stylesheets: [
    path.resolve(__dirname, './playroom/playroom.css'), // Adjust path if needed
  ],
};
