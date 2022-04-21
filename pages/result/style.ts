import styled from 'styled-components';
import props from 'styled-components/macro';

export const ContainerResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  height: 100vh;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 100px;
`;

export const BoxResult = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 200px;
  box-sizing: border-box;
  gap: 10px;
  transition: 0.5s;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    height: 600px;
  }
`;

export const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  font-size: 3.5rem;
  box-shadow: 5px 20px 20px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  @media screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 450px) {
    width: 200px;
    height: 200px;
  }
`;

export const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  @media screen and (max-width: 450px) {
    font-size: 1.3rem;
  }
`;
export const Value = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  transition: 0.5s;

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;
