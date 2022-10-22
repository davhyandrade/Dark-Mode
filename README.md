# Modo escuro

> Status: Concluded

## Dark Mode

<img src="https://i.postimg.cc/prgzH5Yy/bank-small.png" alt="bank-small" width="100%">

Dark Mode, aplicação com opção de tema escuro ou claro.

# Desenvolvimento

Desenvolvido pelo `Next JS`, ao qual foi utilizado variáveis CSS para criar os temas Claros e Escuros, além da lógica para definir qual tema está ativado, atráves da verficaçãpo do input checkbox e a realização da troca do tema atráves do Styled-Component.

* Styled-Component 

```js
  import { createGlobalStyle } from 'styled-components'; 

  const GlobalStyles = createGlobalStyle<IProps>`
    ${props => props.isActiveThemeDarkOrLight ? `
      :root {
        --bg-color: white;
        --bg-panel: #eeeeee;
        --color-headings: #f3920b;
        --color-text: #333;
      }
    ` : `
      :root {
        --bg-color: #202124;
        --bg-panel: #434343;
        --color-headings: #f3b20b;
        --color-text: #dedede;
      }
    `}
  `;
```

## Dependências Utilizadas

* Styled-Component # Modo escuro

> Status: Concluded

## Dark Mode

<img src="https://i.postimg.cc/prgzH5Yy/bank-small.png" alt="bank-small" width="100%">

Dark Mode, aplicação com opção de tema escuro ou claro.

# Desenvolvimento

Desenvolvido pelo `Next JS`, ao qual foi utilizado variáveis CSS para criar os temas Claros e Escuros, além da lógica para definir qual tema está ativado, atráves da verficaçãpo do input checkbox e a realização da troca do tema atráves do Styled-Component.

* Styled-Component 

```js
  import { createGlobalStyle } from 'styled-components'; 

  const GlobalStyles = createGlobalStyle<IProps>`
    ${props => props.isActiveThemeDarkOrLight ? `
      html {
        --bg-color: white;
        --bg-panel: #eeeeee;
        --color-headings: #f3920b;
        --color-text: #333;
      }
    ` : `
      html {
        --bg-color: #202124;
        --bg-panel: #434343;
        --color-headings: #f3b20b;
        --color-text: #dedede;
      }
    `}
  `;
```

## Dependências Utilizadas

* Styled-Component 
