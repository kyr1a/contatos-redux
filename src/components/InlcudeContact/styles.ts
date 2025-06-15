import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '../../styles/variaveis'

export const Botao = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${variables.spacing.md} ${variables.spacing.lg};
  background-color: ${variables.primary};
  color: ${variables.white};
  border-radius: ${variables.borderRadius.md};
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: ${variables.spacing.lg};
  box-shadow: ${variables.shadow.sm};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #0056CC;
    transform: translateY(-2px);
    box-shadow: ${variables.shadow.md};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    margin-right: ${variables.spacing.sm};
  }
`
