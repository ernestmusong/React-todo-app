import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'routes/Home';
import About from 'routes/About';
import Error from 'routes/Error';
import Modal from 'routes/Modal';
import SinglePage from 'routes/SinglePage';
import Layout from 'components/Layout';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="modal" element={<Modal />} />
      <Route path="*" element={<Error />} />
    </Route>
  </Routes>
);
export default App;
