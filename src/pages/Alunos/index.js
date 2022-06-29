import React, { useEffect, useState } from 'react';
import { get } from 'lodash';

import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

import { Container } from '../../styles/GlobalStyles';
import { P, AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios('/alunos/').then((res) => {
        setAlunos(res.data);
      });
    }
    getData();
  }, []);
  return (
    <Container>
      <P>Alunos</P>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img crossOrigin="" src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} color="black" />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} color={colors.primaryColor} />
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} color={colors.primaryColor} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
