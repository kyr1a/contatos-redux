import styled from 'styled-components'
import variables from '../../styles/variaveis'

type Props = { ativo: boolean }

export const Card = styled.div<Props>`
  background-color: ${(props) => 
    props.ativo ? variables.primary : variables.systemBackground};
  color: ${(props) => 
    props.ativo ? variables.white : variables.gray700};
  border: 1px solid ${(props) => 
    props.ativo ? variables.primary : variables.gray200};
  border-radius: ${variables.borderRadius.md};
  padding: ${variables.spacing.md};
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${variables.shadow.md};
    background-color: ${(props) => 
      props.ativo ? '#0056CC' : variables.gray50};
  }
  
  &:active {
    transform: translateY(0);
  }
`

export const Contador = styled.span`
  display: block;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: ${variables.spacing.xs};
`

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  display: block;
`
