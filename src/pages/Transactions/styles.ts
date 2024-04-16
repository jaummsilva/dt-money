import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  margin: 4rem auto 0;
  max-width: 1120px;
  padding: 0 1.5rem;
`
export const TransactionsTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  width: 100%;
  min-width: 600px;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  td {
    background-color: ${({ theme }) => theme['gray-700']};
    border-top: 4px solid ${({ theme }) => theme['gray-800']};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;
  }
`
const TEXT_COLOR = {
  red: 'red-500',
  green: 'green-500',
} as const

interface TextColorProps {
  textColor: keyof typeof TEXT_COLOR
}

export const PriceHighlight = styled.span<TextColorProps>`
  color: ${({ theme, textColor }) => theme[TEXT_COLOR[textColor]]};
`
