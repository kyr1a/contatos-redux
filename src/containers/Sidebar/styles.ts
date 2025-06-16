import styled from 'styled-components'
import variables from '../../styles/variaveis'

export const Asside = styled.aside`
  background-color: ${variables.systemBackground};
  border-radius: ${variables.borderRadius.lg};
  padding: ${variables.spacing.lg};
  box-shadow: ${variables.shadow.md};
  height: fit-content;
  
  @media (max-width: 768px) {
    box-shadow: ${variables.shadow.sm};
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: ${variables.gray100};
  border: 1px solid ${variables.gray200};
  border-radius: ${variables.borderRadius.sm};
  padding: ${variables.spacing.sm};
  margin-bottom: ${variables.spacing.lg};
  transition: all 0.2s ease;
  
  &:focus-within {
    border-color: ${variables.primary};
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
  }
  
  input {
    flex: 1;
    border: none;
    background: transparent;
    padding: ${variables.spacing.xs};
    font-size: 14px;
    color: ${variables.gray900};
    
    &::placeholder {
      color: ${variables.gray500};
    }
    
    &:focus {
      outline: none;
    }
  }
`

export const Lupa = styled.div`
  color: ${variables.gray500};
  margin-right: ${variables.spacing.sm};
  display: flex;
  align-items: center;
  
  svg {
    width: 16px;
    height: 16px;
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${variables.spacing.sm};
`

export const MyCard = styled.div`
  background-color: ${variables.systemBackground};
  border: 1px solid ${variables.gray200};
  border-radius: ${variables.borderRadius.md};
  padding: ${variables.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  svg {
    color: ${variables.gray500};
    font-size: 20px;
    margin-bottom: ${variables.spacing.xs};
  }
  
  &:hover {
    border-color: ${variables.primary};
    box-shadow: ${variables.shadow.sm};
  }
`

export const BtnVoltar = styled.button`
  width: 100%;
  padding: ${variables.spacing.md};
  background-color: ${variables.primary};
  color: ${variables.white};
  border-radius: ${variables.borderRadius.sm};
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #0056CC;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`
