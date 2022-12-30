import {TfiLinkedin} from "react-icons/tfi";
import {SiWhatsapp} from "react-icons/si";
import {VscGithub} from "react-icons/vsc";


import StyledFooter from "./Footer.style";

function Footer() {
     return (
          <StyledFooter>
               <a href="https://www.linkedin.com/feed/update/urn:li:activity:7013414577795133440/"><TfiLinkedin /></a>
               <a href="https://api.whatsapp.com/send/?phone=2349030018605&text&type=phone_number&app_absent=0"><SiWhatsapp /></a>
               <a href="https://github.com/Chucks1093/scrimba-react/tree/main/src/NFT"><VscGithub /></a>
          </StyledFooter>
     )
};

export default Footer;