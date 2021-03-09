import React from "react";
import imgLogo from "../../ceratti/images/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Menu() {
  return (
    <nav className="d-flex justify-content-between menu">
      <div>
        <img alt="logo" src={imgLogo} className="imgMenu" />
      </div>
      <div className="ullist">
        <ul>
          <li>
            <Link
              rel="stylesheet"
              href="https://api.whatsapp.com/send?phone=5551984186407&text=Olá.%20Gostaria%20informações."
            >
              <a target="_blank">
                <span className="backSocialMedia">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>{" "}
                (51)98418-6407
              </a>
            </Link>
          </li>
          <li>
            <a target="_blank">
              <span className="backSocialMedia">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              (51) 0000.0000
            </a>
          </li>
          <li>
            <a target="_blank">
              <span className="backSocialMedia">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              exemple@exemple.com.br
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
