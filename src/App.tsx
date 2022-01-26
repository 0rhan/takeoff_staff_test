import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntrancePage from "features/authentication/EntrancePage";
import ContactsPage from "features/contacts/ContactsPage";
import ContactsProvider from "providers/ContactsContext";
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import AuthProvider from "providers/AuthContext";
import RequireAuth from "features/authentication/components/RequireAuth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<EntrancePage />}></Route>
            <Route
              path="/contacts"
              element={
                <RequireAuth>
                  <ContactsProvider>
                    <ContactsPage />
                  </ContactsProvider>
                </RequireAuth>
              }
            ></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
