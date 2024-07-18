import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  HomePage  from '../HomePage/HomePage';
import GetSummary from '../GetSummary/GetSummary';
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/getquestions" element={GetQuestions} /> */}
        <Route path="/getsummary" element={<GetSummary /> }/>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;