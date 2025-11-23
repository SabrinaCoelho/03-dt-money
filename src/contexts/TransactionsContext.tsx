import { createContext, useEffect, useState, type ReactNode } from "react";

export interface Transaction{
    id: number;
    description: string;
    type: "income" | "outcome" ;
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType{
    transactions: Transaction[]
}

export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps{
    children: ReactNode;
}
export function TransactionProvider({children}: TransactionsProviderProps){
    
    const [transactions, setTransactions] = useState<Transaction[]>([])
    async function loadTransactions(){
        const resp = await fetch("http://localhost:3000/transactions");
        const data = await resp.json()
        setTransactions(data);
    }

    useEffect(() => {
       // eslint-disable-next-line react-hooks/set-state-in-effect
       loadTransactions()
    }, [])
    
    return(
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}