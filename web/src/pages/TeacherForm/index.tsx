import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Java', label: 'Java' },
              { value: 'Spring', label: 'Spring' },
              { value: 'PHP', label: 'PHP' },
              { value: 'JavaScript', label: 'JavaScript' },
              { value: 'Scrum', label: 'Scrum' },
              { value: '.NET', label: '.NET' },
              { value: 'ReactJs', label: 'ReactJs' },
              { value: 'React Native', label: 'React Native' },
              { value: 'NodeJs', label: 'NodeJs' },
            ]}
          />
          <Input name="cost" label="Custo da hora/aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Importante!
            <br />
            Preencha todos os Dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
