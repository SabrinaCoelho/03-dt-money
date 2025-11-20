import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/Logo.svg"

export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="logo" />
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}