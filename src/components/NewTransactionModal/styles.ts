import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme['gray-500']};
`

export const FormTransaction = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TransactionInput = styled.input`
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

export const TransactionButton = styled.button`
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
export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`
const VARIANTS_COLOR = {
  red: 'red-500',
  green: 'green-500',
} as const

interface TransactionTypeButtonProps {
  variant: keyof typeof VARIANTS_COLOR
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
  background-color: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-100']};
  cursor: pointer;

  transition: all ease-in-out 250ms;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    color: ${({ theme, variant }) => theme[VARIANTS_COLOR[variant]]};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background-color: ${(props) =>
      props.variant === 'green'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`
