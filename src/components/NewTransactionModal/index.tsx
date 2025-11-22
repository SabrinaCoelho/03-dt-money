import * as Dialog from "@radix-ui/react-dialog";
import { ClosedButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

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
                
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.DialogPortal>
    )
}