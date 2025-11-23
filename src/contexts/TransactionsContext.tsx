import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../lib/axios";

export interface Transaction{
    id: number;
    description: string;
    type: "income" | "outcome" ;
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps{
    children: ReactNode;
}
interface CreateTransactionInput{
    description: string;
    price: number;
    category: string;
    type: "income" | "outcome";
}
//"mas já existe uma tipagem (newTransactionFormInputs) lá no 
//NewTransactionModal." Sim, e justamente por isso, para desacoplar/
//não fazer com que o contexto esteja diretamente dependente da definição
//criada no componente, é que foi criada essa interface. Pode parecer
//duplicado (e é hehehe), mas o intuito do contexto é compartilhar infos
//e não se prender a uma definição. Por ex., é possivel que no futuro haja
//outras formas/fontes para criar uma nova transação que não é a que foi
//definida em NewTransactionModal.

interface TransactionContextType{
    transactions: Transaction[],
    fetchTransactions: (query?: string) => Promise<void>,
    createTransaction: (data: CreateTransactionInput) => Promise<void>
}
export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionProvider({children}: TransactionsProviderProps){
    
    const [transactions, setTransactions] = useState<Transaction[]>([])
    async function fetchTransactions(query?: string){
        const res = await api.get("transactions", {
            params: {
                _sort: "createdAt",
                _order: "desc",
                q: query,
            }
        })
        setTransactions(res.data)
    }

    async function createTransaction(data: CreateTransactionInput){
        const {description, price, category, type} = data;
        const res = await api.post("transactions", {
            description, 
            price, 
            category, 
            type,
            createdAt: new Date()
        })
        setTransactions(prev => [res.data, ...prev])
    }

    useEffect(() => {
       // eslint-disable-next-line react-hooks/set-state-in-effect
       fetchTransactions()
    }, [])
    
    return(
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}