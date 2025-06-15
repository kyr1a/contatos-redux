import styled, { createGlobalStyle } from 'styled-components'
import variables from './variaveis'

const StyleGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${variables.fontFamily};
    list-style: none;
  }

  body {
    background-color: ${variables.gray100};
    color: ${variables.gray900};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.2s ease;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
    transition: all 0.2s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: ${variables.spacing.lg};
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: ${variables.spacing.lg};
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: ${variables.spacing.md};
    gap: ${variables.spacing.md};
  }
`

export const Main = styled.main`
  background-color: ${variables.systemBackground};
  border-radius: ${variables.borderRadius.lg};
  padding: ${variables.spacing.lg};
  box-shadow: ${variables.shadow.md};
  overflow-y: auto;
  
  h2 {
    font-size: 28px;
    font-weight: 700;
    color: ${variables.gray900};
    margin-bottom: ${variables.spacing.lg};
  }
`

export default StyleGlobal
