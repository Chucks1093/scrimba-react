import StyledPhone from "./StyledPhone";
import { FaExternalLinkAlt } from "react-icons/fa";

function Phone() {
     return (
          <StyledPhone>
               <div>
                    <img src="nophone.svg" alt="nophone" />
                    <h3>Sorry this project can't be viewed on mobile.</h3>
                    <button>
                         <p> See More Info</p>
                         <a href=""><FaExternalLinkAlt  /></a>
                    </button>
               </div>
          </StyledPhone>
     )
};

export default Phone;