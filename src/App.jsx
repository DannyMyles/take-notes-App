import {
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./routes/Layout";
import DashLayout from "./components/DashLayout";
import Login from "./features/auth/Login";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import Public from "./components/Public";
import Welcome from "./features/auth/Welcome";
import ErrorPage from "./routes/ErrorPage";
import PrivateOutlet from "./utils/PrivateOutlet";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Public routes */}
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Public />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Private routes */}
      {/* <Route element={<PrivateOutlet />}> */}
        <Route index element={<Welcome />} />
        <Route path="notes" element={<NotesList />} />
        <Route path="users" element={<UsersList />} />
      {/* </Route> */}

      {/* Unmatched Route will render the ErrorPage component */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
