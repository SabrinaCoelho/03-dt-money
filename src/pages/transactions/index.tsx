import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

export function Transactions(){
    return (<div>
        <Header/>
        <Summary/>
        <table>
            <tr>
                <td width="50%">Desenvolvimento de site</td>
                <td>R$ 12.484,00</td>
            </tr>
        </table>
    </div>)
}