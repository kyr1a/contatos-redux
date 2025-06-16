import styled from 'styled-components'
import variables from '../../styles/variaveis'

export const Laycontainer = styled.div`
  background-color: ${variables.systemBackground};
  border-radius: ${variables.borderRadius.lg};
  padding: ${variables.spacing.lg};
  box-shadow: ${variables.shadow.md};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`
