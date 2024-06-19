import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  HomePage  from '../HomePage';
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/getquestions" component={GetQuestions} />
        <Route path="/getsummary" component={GetSummary} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;