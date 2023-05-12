import { RouterProvider } from 'react-router-dom';
import './App.css';
import JobSeek from './components/JobSeek';
import router from './routes/router';



function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        
        <JobSeek></JobSeek>
      </RouterProvider>
    </div>
  );
}

export default App;
