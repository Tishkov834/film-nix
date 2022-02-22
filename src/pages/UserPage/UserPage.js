import { useState } from 'react';
import Button from '../../components/common/Button';
import CreateFilmModal from '../../components/CreateFilmModal';

function UserPage() {
  const [isCreateFilmModalOpen, setCreateFilmModalOpen] = useState(false);

  return (
    <div>
      <h1>User page</h1>
      <Button type="button" onClick={() => setCreateFilmModalOpen(true)}>Add Film</Button>
      <CreateFilmModal active={isCreateFilmModalOpen} closeModal={setCreateFilmModalOpen} />
    </div>
  );
}

export default UserPage;
