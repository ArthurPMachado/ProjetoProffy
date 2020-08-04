import React from 'react';
import { Link } from 'react-router-dom';

// Import assets
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => (
  <header className="page-header">
    <div className="top-bar-container">
      <Link to="/">
        <img src={backIcon} alt="Icone de voltar" />
      </Link>
      <img src={logoImg} alt="Proffy" />
    </div>

    <div className="header-content">
      <strong>{props.title}</strong>
    </div>
  </header>
);

export default PageHeader;
