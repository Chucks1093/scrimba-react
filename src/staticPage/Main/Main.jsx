import StyledMain from "./Main.style";
import logo from "../../assets/react.svg";

function Main() {
     return (
          <StyledMain>
               <h1>Fun Facts About React</h1>
               <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on github</li>
                    <li>Is powered by Facebook</li>
                    <li>Powers thousands of Apps and enterprises</li>
               </ul>
               <img className="back-logo" src={logo} alt="" />
          </StyledMain>
     )
};

export default Main;