import './styles/App.css';
import Header from 'components/Header';
import TodosLogic from 'components/TodosLogic';
import Navbar from 'components/Navbar';
import Modal from 'components/Modal';

const App = () => (
  <>
    <Navbar />
    <Modal />
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  </>
);
export default App;
