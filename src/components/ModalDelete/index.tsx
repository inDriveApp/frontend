import React from 'react';
import Modal from '../Modal';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router-dom';
import { Title,Button,Container,Subtitle,Content} from './styles';
import { useToast } from '../../hooks/toast';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  fileName: string;
}

const ModalDelete: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  fileName,
}) => {

  const {user} = useAuth();
  const history = useHistory();
  const { addToast } = useToast();

  async function handleDeleteFile() {    
      const config = {
          headers: {
              'content-type': 'application/json',
              'x-user': user.id
          },
          data: {
            name: `${fileName}`,
          }
    }
   await api.delete("api/files", config)
   .then(response => response.data)
   .then(response => 
    addToast({
          type: 'success',
          title: 'Arquivo!',
          description: 'Arquivo deletado com sucesso.',
        })
    )
   .catch(err => console.log(err.response)
    );

   
   history.push('/');
  setIsOpen();
  }
  function handleCancelDelete() {
    setIsOpen();
  }


  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}>
      <Container>
        <Title>Excluir Arquivo</Title>
        <Subtitle>Você desejar realmente excluir {fileName}?</Subtitle>
        <Content>
        <Button onClick={() => handleCancelDelete()}>Não</Button>
        <Button onClick={() => handleDeleteFile()}>Sim</Button>
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalDelete;
