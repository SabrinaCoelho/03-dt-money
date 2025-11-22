import * as Dialog from "@radix-ui/react-dialog";
import { ClosedButton, Content, Overlay, Transactiontype, TransactiontypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionsModal(){
    return (
        <Dialog.DialogPortal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <ClosedButton>
                    <X size={24}/>
                </ClosedButton>
                <form>
                    <input type="text" placeholder="Descrição" required/>
                    <input type="number" placeholder="Preço" required/>
                    <input type="text" placeholder="Categoria" required/>
                
                    <Transactiontype>
                        <TransactiontypeButton variant="income" value="income">
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransactiontypeButton>
                        <TransactiontypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24}/>
                            Saída
                        </TransactiontypeButton>
                    </Transactiontype>
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.DialogPortal>
    )
}