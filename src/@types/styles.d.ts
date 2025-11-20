import 'styled-components';
import type { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components'{
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends ThemeType {}
}

/*
declare em TypeScript é usada para informar ao compilador 
que um determinado símbolo (como uma variável, 
função ou módulo) existe, mas sua implementação está 
definida em outro lugar, geralmente em um arquivo JavaScript.
Ela não gera código JavaScript, mas fornece informações de tipo
para que o compilador não gere um erro ao referenciar esse
símbolo. É útil para lidar com bibliotecas de terceiros, 
scripts globais e ambientes que não possuem definições de 
tipo nativas.
*/