import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AppRouter } from "@/routes/Router";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRouter />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
