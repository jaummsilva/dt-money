import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, NewTransactionButton, HeaderContent } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>DT Money</h2>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton> Nova transação </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal></NewTransactionModal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
