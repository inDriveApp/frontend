import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { useUsers } from '../../hooks/users';
import api from '../../services/api';
import Modal from '../Modal';
import { Title,Select,Button,Container} from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  filename: string;
}

const ModalShare: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  filename
}) => {
  const [userShared, setUserShared] = useState('96c31826-882a-491b-affd-04cbbe05dce0');
  const {users} = useUsers();
  const {user} = useAuth();
  const { addToast } = useToast();


  async function shared(id:string) {  
    var data = {
      'name': filename,
      'user': id,
  }  
    const headers = {
      'Content-Type': 'application/json',
      'X-User': user.id
    }
    
    await api.post("api/files/share", data, {
        headers: headers
      })
      .then(response => response.data)
      .then(response => 
       addToast({
             type: 'success',
             title: 'Arquivo!',
             description: 'Arquivo compartilhado com sucesso.',
           })
       )
      .catch(err =>
      addToast({
        type: 'error',
        title: 'Error Upload!',
        description: 'Tamanho maximo permitido 100MB.',
      })

       );

    setIsOpen();
  }



  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}>
      <div>
        <Title>Compartilhar com </Title>
        <Select
        onChange={event => setUserShared(event.target.value)}
        value={userShared}>
          {//eslint-disable-next-line
            users.map(user => { 

              return (
                <option key={user.id} value={user.id}>{user.name}</option>
                );
              })}  
        </Select>
        <Container>
        <Button onClick={() => shared(userShared)}>Compartilhar</Button>
        </Container>
      </div>
    </Modal>
  );
};

export default ModalShare;
