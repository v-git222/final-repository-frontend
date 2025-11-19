import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import MultiStepForm from "./MultistepForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/onboarding" element={<MultiStepForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
