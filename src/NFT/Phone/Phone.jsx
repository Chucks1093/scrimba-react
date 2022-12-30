import StyledPhone from "./StyledPhone";
import { FaExternalLinkAlt } from "react-icons/fa";

function Phone() {
     return (
          <StyledPhone>
               <div>
                    <img src="nophone.svg" alt="nophone" />
                    <h3>Sorry this project can't be viewed on mobile.</h3>
                    <a href="https://www.linkedin.com/posts/sebastian-anioke-305975234_nftmarketplace-reactjs-activity-7013414577795133440-oJ2j?utm_source=share&utm_medium=member_desktop">
                         <p> See More Info</p>
                         <span><FaExternalLinkAlt  /></span>
                    </a>
               </div>
          </StyledPhone>
     )
};

export default Phone;