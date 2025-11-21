import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
    return (<div>
        <Header/>
        <Summary/>
        <TransactionsContainer>
            <SearchForm/>
            <TransactionsTable>
                <tr>
                    <td width="50%">Desenvolvimento de site</td>
                    <td>
                        <PriceHighlight variant="income">
                            R$ 12.484,00
                        </PriceHighlight>
                    </td>
                    <td>Venda</td>
                    <td>13/04/2025</td>
                </tr>
                <tr>
                    <td width="50%">Yakuza 7</td>
                    <td>
                        <PriceHighlight variant="outcome">
                            - R$ 7.879,00
                        </PriceHighlight>
                    </td>
                    <td>Diverção</td>
                    <td>15/04/2025</td>
                </tr>
            </TransactionsTable> 
        </TransactionsContainer>
    </div>)
}