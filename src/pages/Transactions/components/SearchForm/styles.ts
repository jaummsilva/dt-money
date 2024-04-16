import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;
`
export const SearchInput = styled.input`
  background: ${({ theme }) => theme['gray-900']};
  border: none;
  color: ${({ theme }) => theme['gray-300']};
  padding: 0.75rem;
  flex: 1;
  border-radius: 6px;

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const SearchButton = styled.button`
  display: flex;
  padding: 0.75rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme['green-300']};
  color: ${({ theme }) => theme['green-300']};
  font-weight: bold;
  gap: 0.75rem;
  border-radius: 6px;
  transition: all ease-in-out 250ms;
  cursor: pointer;

  &:not(:disabled):hover {
    color: ${({ theme }) => theme['green-500']};
    background-color: ${({ theme }) => theme['gray-100']};
    border: 1px solid ${({ theme }) => theme.white};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
