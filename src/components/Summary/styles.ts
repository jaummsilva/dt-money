import styled from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`
const CARD_BACKGROUND_COLOR = {
  gray: 'gray-600',
  green: 'green-700',
  red: 'red-500',
} as const

interface SummaryCardProps {
  cardBackgroundColor: keyof typeof CARD_BACKGROUND_COLOR
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${({ theme, cardBackgroundColor }) =>
    theme[CARD_BACKGROUND_COLOR[cardBackgroundColor]]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`
