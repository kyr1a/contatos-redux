import styled from 'styled-components'
import variables from '../../styles/variaveis'

type TagsProps = {
  grupos: string
  children: string
}

function getTagColor(props: TagsProps): string {
  if ('grupos' in props) {
    if (props.grupos === 'Trabalho') return variables.primary
    if (props.grupos === 'Familia') return variables.secondary
    if (props.grupos === 'Pessoal') return variables.warning
  }
  return variables.gray500
}

export const CarddeContatos = styled.div`
  background-color: ${variables.systemBackground};
  border-radius: ${variables.borderRadius.md};
  padding: ${variables.spacing.lg};
  box-shadow: ${variables.shadow.sm};
  border: 1px solid ${variables.gray200};
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    box-shadow: ${variables.shadow.md};
    transform: translateY(-2px);
  }
`

export const Tag = styled.span<TagsProps>`
  display: inline-block;
  padding: ${variables.spacing.xs} ${variables.spacing.sm};
  border-radius: ${variables.borderRadius.sm};
  font-size: 12px;
  font-weight: 600;
  color: ${variables.white};
  background-color: ${(props) => getTagColor(props)};
  margin-bottom: ${variables.spacing.md};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const MyTitle = styled.textarea`
  font-weight: 600;
  font-size: 18px;
  color: ${variables.gray900};
  background: transparent;
  border: none;
  resize: none;
  width: 100%;
  height: auto;
  cursor: pointer;
  
  &:disabled {
    cursor: default;
  }
  
  &:focus {
    outline: 2px solid ${variables.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`

export const Email = styled.textarea`
  color: ${variables.gray600};
  font-size: 14px;
  background: transparent;
  border: none;
  resize: none;
  width: 100%;
  height: auto;
  cursor: pointer;
  
  &:disabled {
    cursor: default;
  }
  
  &:focus {
    outline: 2px solid ${variables.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`

export const TelPhone = styled.textarea`
  color: ${variables.gray800};
  font-size: 14px;
  font-weight: 500;
  background: transparent;
  border: none;
  resize: none;
  width: 100%;
  height: auto;
  cursor: pointer;
  
  &:disabled {
    cursor: default;
  }
  
  &:focus {
    outline: 2px solid ${variables.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`

export const MyDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${variables.spacing.sm};
  
  svg {
    color: ${variables.gray500};
    margin-right: ${variables.spacing.sm};
    flex-shrink: 0;
  }
`

export const ActionBar = styled.div`
  display: flex;
  gap: ${variables.spacing.sm};
  margin-top: ${variables.spacing.lg};
  padding-top: ${variables.spacing.md};
  border-top: 1px solid ${variables.gray200};
`

const BaseButton = styled.button`
  padding: ${variables.spacing.sm} ${variables.spacing.md};
  border-radius: ${variables.borderRadius.sm};
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`

export const btnSalvar = styled(BaseButton)`
  background-color: ${variables.primary};
  color: ${variables.white};
  
  &:hover {
    background-color: #0056CC;
  }
`

export const Btn = styled(BaseButton)`
  background-color: ${variables.gray200};
  color: ${variables.gray700};
  
  &:hover {
    background-color: ${variables.gray300};
  }
`

export const btnEditar = styled(BaseButton)`
  background-color: ${variables.secondary};
  color: ${variables.white};
  
  &:hover {
    background-color: #28A745;
  }
`

export const BtncancelarRemover = styled(BaseButton)`
  background-color: ${variables.danger};
  color: ${variables.white};
  
  &:hover {
    background-color: #DC3545;
  }
`
