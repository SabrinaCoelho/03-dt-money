import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction{
    id: number;
    description: string;
    type: "income" | "outcome" ;
    price: number;
    category: string;
    createdAt: string;
}

export function Transactions(){
    const [transactions, setTransactions] = useState<Transaction[]>([])
    async function loadTransaction(){
        const resp = await fetch("http://localhost:3000/transactions");
        const data = await resp.json()
        setTransactions(data);
    }

    useEffect(() => {
       loadTransaction()
    }, [])
    return (<div>
        <Header/>
        <Summary/>
        <TransactionsContainer>
            <SearchForm/>
            <TransactionsTable>
                {
                    transactions.map((transaction: Transaction) => (
                        <tr key={transaction.id}>
                            <td width="50%">{transaction.description}</td>
                            <td>
                                <PriceHighlight variant={transaction.type}>
                                    {transaction.price}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))
                }
            </TransactionsTable> 
        </TransactionsContainer>
    </div>)
}