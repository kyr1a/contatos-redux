import styled from 'styled-components'
import variables from '../../styles/variaveis'

export const Dados = styled.input`
  width: 100%;
  max-width: 600px;
  padding: ${variables.spacing.md};
  border: 1px solid ${variables.gray300};
  border-radius: ${variables.borderRadius.sm};
  font-size: 16px;
  background-color: ${variables.systemBackground};
  margin-bottom: ${variables.spacing.md};
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${variables.primary};
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
  }
  
  &::placeholder {
    color: ${variables.gray500};
  }
`

export const Fild = styled.fieldset`
  border: 1px solid ${variables.gray200};
  border-radius: ${variables.borderRadius.md};
  padding: ${variables.spacing.lg};
  margin-bottom: ${variables.spacing.lg};
  background-color: ${variables.systemBackground};
  
  legend {
    padding: 0 ${variables.spacing.sm};
    font-weight: 600;
    color: ${variables.gray900};
  }
`

export const AreaTag = styled.div`
  display: flex;
  gap: ${variables.spacing.md};
  padding: ${variables.spacing.md};
  background-color: ${variables.gray100};
  border-radius: ${variables.borderRadius.sm};
  margin-bottom: ${variables.spacing.lg};
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${variables.spacing.sm};
  }
`

export const Opcao = styled.div`
  display: flex;
  align-items: center;
  
  input[type="radio"] {
    margin-right: ${variables.spacing.sm};
    accent-color: ${variables.primary};
  }
  
  label {
    font-size: 14px;
    color: ${variables.gray700};
    cursor: pointer;
  }
`

export const BtnCadastro = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${variables.spacing.md} ${variables.spacing.xl};
  background-color: ${variables.secondary};
  color: ${variables.white};
  border-radius: ${variables.borderRadius.sm};
  font-size: 16px;
  font-weight: 600;
  margin-right: ${variables.spacing.md};
  box-shadow: ${variables.shadow.sm};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #28A745;
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

export const BacktoPage = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${variables.spacing.md} ${variables.spacing.xl};
  background-color: ${variables.gray200};
  color: ${variables.gray700};
  border-radius: ${variables.borderRadius.sm};
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${variables.gray300};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    margin-right: ${variables.spacing.sm};
  }
`
