import styled from 'styled-components'
import variables from '../../styles/variaveis'

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${variables.spacing.md};
  margin-top: ${variables.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const StatusText = styled.p`
  background-color: ${variables.gray100};
  padding: ${variables.spacing.md};
  border-radius: ${variables.borderRadius.sm};
  font-size: 14px;
  color: ${variables.gray700};
  margin-bottom: ${variables.spacing.md};
  
  .count {
    display: inline-block;
    background-color: ${variables.primary};
    color: ${variables.white};
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    margin-right: ${variables.spacing.xs};
  }
  
  strong {
    color: ${variables.gray900};
  }
`
