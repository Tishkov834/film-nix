import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import { ADD_FILM_PAGE } from '../../constants/routes';

function UserPage() {
  return (
    <div>
      <h1>User page</h1>
      <Link to={ADD_FILM_PAGE}><Button type="button">Add Film</Button></Link>
    </div>
  );
}

export default UserPage;
