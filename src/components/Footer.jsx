import React from "react";
import {AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import '../styles/components/footer.sass'

const Footer = () => {
    return(
        <footer id="scrollFooter">
            <ul className="list-socials">
                <li>
                    <a href="https://www.linkedin.com/in/marcos-vinicius-29874622a/" target="_blank">
                        <AiFillLinkedin/>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/5519989531606" target="_blank">
                        <AiOutlineMail/>
                    </a>
                </li>
            </ul>
            <p className="copy-right">Desenvolvido por <span>Marcos</span> &copy; 2023 </p>
        </footer>
    )
}

export default Footer;