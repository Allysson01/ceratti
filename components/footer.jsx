import React from "react";
import imgLogo from "../../ceratti/images/Ceratti.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const ano = () => {
    const data = new Date();
    const dateYear = data.getFullYear();
    return dateYear;
  };
  return (
    <footer className="footer">
      <div className="rowF">
        <div className="colA">
          <img alt="logo" src={imgLogo} className="imgFooter" />
        </div>
        <div className="colB">
          <div className="row">
            <div className="rowBi">
              <Link href="https://www.facebook.com/rogerio.ceratti.3">
                <a>
                  <span className="backSocialMedia">
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                </a>
              </Link>

              <Link href="https://www.instagram.com/cerattirogerio/?hl=pt-br">
                <a>
                  <span className="backSocialMedia">
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="colC">
          <div className="row">
            <div className="colCi">
              <ul>
                <li>Canoas | RS</li>
                <li>Rua Carlos Silveira Martins Pacheco, 1045</li>
                <li>CEP 91.350-300</li>
              </ul>
              <div className="elSpacerInner"></div>
              <div>
                <ul>
                  <li>
                    (51) 0000.0000
                  </li>
                  <li>
                    (51) 0000.0000
                  </li>
                  <li>                 
                     (51) 98418-6407
                  </li>
                  <li>
                    <i aria-hidden="true" className="far fa-envelope"></i>{" "}
                    exemple@exemple.com.br
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="innerline"></div>
      </div>
      <div className="cooper">
        <p>
          © {ano()}. Todos os direitos reservados – Rogério Ceratti Advocacia e
          Consultoria
        </p>
      </div>
    </footer>
  );
}
