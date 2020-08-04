import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/32346751?s=460&u=ccd29523c1c75aa3822afa91919fcc0afc5c4edb&v=4" alt="Arthur Machado" />
        <div>
          <strong>Arthur Machado</strong>
          <span>Spring, Node e Rest</span>
        </div>
      </header>

      <p>
        Apaixonado pelo desenvolvimento backend com REST
        <br />
        <br />
        Entusiasta em produzir APIs e integrar diversas tecnologias através de uma mesma linguagem, utilizando de métodos já difundidos na web
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 70,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Icone do whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
