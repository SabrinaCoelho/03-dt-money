import * as Dialog from "@radix-ui/react-dialog";
import { ClosedButton, Content, Overlay, Transactiontype, TransactiontypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

 
const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(["income", "outcome"])
});

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal(){
    const {createTransaction} = useContext(TransactionsContext);
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: {isSubmitting}
    } = useForm({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues:{
            type: "income"
        }
    });

    async function handleNewTransaction(data: newTransactionFormInputs){
        /* await new Promise(res => setTimeout(res, 2000));
        console.log(data); */
        const { description, price, category, type } = data;
        createTransaction({
            description, 
            price, 
            category, 
            type
        })
       
        reset();
    }
    return (
        <Dialog.DialogPortal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <ClosedButton>
                    <X size={24}/>
                </ClosedButton>
                <form onSubmit={handleSubmit(handleNewTransaction)}>
                    <input 
                        id="description"
                        type="text"
                        placeholder="Descrição"
                        required
                        {...register("description")}
                    />
                    <input 
                        id="price"
                        type="number" 
                        placeholder="Preço" 
                        required
                        {...register("price", {valueAsNumber: true})}
                    />
                    <input 
                        id="category"
                        type="text" 
                        placeholder="Categoria" 
                        required
                        {...register("category")}
                    />
                    <Controller
                        render={({field}) => {
                            return (
                                <Transactiontype onValueChange={field.onChange} value={field.value}>
                                    <TransactiontypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24}/>
                                        Entrada
                                    </TransactiontypeButton>
                                    <TransactiontypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24}/>
                                        Saída
                                    </TransactiontypeButton>
                                </Transactiontype>
                            )
                        }}
                        name="type"
                        control={control}
                    />
                        
                    
                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.DialogPortal>
    )
}