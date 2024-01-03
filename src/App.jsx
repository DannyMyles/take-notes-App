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
import EditUser from './features/users/EditUser'
import NewUserForm from './features/users/NewUserForm'
import NewNote from './features/notes/NewNote'
import EditNote from "./features/notes/EditNote";

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

      {/* User routes */}
      <Route path="users">
        <Route index element={<UsersList />} />
        <Route path=":id" element={<EditUser />} />
        <Route path="new" element={<NewUserForm />} />
      </Route>
      <Route path="users" element={<UsersList />} />
      {/* End User*/}

      {/* Notes routes */}
      <Route path="notes">
        <Route index element={<NotesList />} />
        <Route path=":id" element={<EditNote />} />
        <Route path="new" element={<NewNote />} />
      </Route>
      {/* End notes*/}

      {/* Unmatched Route will render the ErrorPage component */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
