import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background-color: ${({ theme }) => theme['gray-900']};
`
export const HeaderContent = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
`
export const NewTransactionButton = styled.button`
  border-radius: 6px;
  border: 0;
  padding: 0 1.25rem;
  height: 50px;

  font-weight: bold;
  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  transition: all ease-in-out 250ms;

  &:not(:disabled):hover {
    color: ${({ theme }) => theme['green-700']};
    background-color: ${({ theme }) => theme['gray-100']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
