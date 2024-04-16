import { MagnifyingGlass } from 'phosphor-react'
import { FormContainer, SearchButton, SearchInput } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }
  return (
    <FormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <SearchInput
        {...register('query')}
        type="text"
        placeholder="Busque por transações"
      />
      <SearchButton disabled={isSubmitting} type="submit">
        <MagnifyingGlass /> Buscar
      </SearchButton>
    </FormContainer>
  )
}
