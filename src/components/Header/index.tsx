import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/Logo.svg"
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionsModal } from "../NewTransactionModal";

export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="logo" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionsModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}