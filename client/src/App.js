import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router } from '@reach/router';
import AuthorsList from './Components/AuthorsList';
import AuthorsForm from './Components/AuthorForm';
import UpdateAuthor from './Components/UpdateAuthor';
import Test from './Components/Test';

function App() {
  return (
    <div className="container mt-5">
      <Router primary={false}>
        <AuthorsList path="/" />
        <AuthorsForm path="/new" />
        <UpdateAuthor path='/view/:_id' />
        <Test path="/test" />
      </Router>
    </div>
  );
}

export default App;
