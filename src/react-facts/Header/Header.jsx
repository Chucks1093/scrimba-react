import { StyledHeader } from "./Header.style";
import reactLogo from "../../assets/react.svg"

function  Header(){
     return(
          <StyledHeader>
               <nav>
                    <ul>
                         <li><img src={reactLogo} alt="" /> <h3>React Facts</h3></li>
                         <li>React Course - Project 1</li>
                    </ul>
               </nav>
          </StyledHeader>
     )
};

export default Header;