import styled from 'styled-components';

export const P = styled.p`
  font-size: 24px;
  padding: 5px 0;
`;
export const AlunoContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 999px;
  }
`;