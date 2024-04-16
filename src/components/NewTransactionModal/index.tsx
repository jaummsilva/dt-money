import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  Overlay,
  Content,
  Close,
  TransactionInput,
  TransactionButton,
  FormTransaction,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const NewTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof NewTransactionSchema>

export function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionContext,
    (context) => {
      return context.createTransaction
    },
  )

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NewTransactionSchema),
  })

  async function handleNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data
    await createTransaction({ description, price, category, type })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title> Nova Transação </Dialog.Title>
        <Close>
          <X size={24} />
        </Close>

        <FormTransaction onSubmit={handleSubmit(handleNewTransaction)}>
          <TransactionInput
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <TransactionInput
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <TransactionInput
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="green" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="red" value="outcome">
                    <ArrowCircleDown size={24} /> Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <TransactionButton disabled={isSubmitting} type="submit">
            Cadastrar
          </TransactionButton>
        </FormTransaction>
      </Content>
    </Dialog.Portal>
  )
}
