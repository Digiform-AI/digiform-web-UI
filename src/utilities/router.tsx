
import {
    createBrowserRouter,
} from "react-router-dom";
import { useRouteError } from "react-router-dom";
import { AssignFileModal, FileCreator, FileEditor, FileViewer } from "../components/file.components";
import { Nav } from "../components/navigation.components";
import MemberDirectory from "../pages/memberDirectory.page";
import FileDirectory from "../pages/fileDirectory.page";
import { Samples } from "../samples";
import Home from "../pages/home.page";
import GroupDirectory from "../pages/groupDirectory.page";
import AssignedFileDirectory from "../pages/assignedFiles";
import Organization from "../pages/organization.page";
import Settings from "../pages/settings.page";
import Profile from "../pages/profile.page";


/**Page Wrapper
 */
const Page = ({children}:{children:any}) => {
    return (
        <div className="dark:bg-gray-800 bg-gray-200 min-h-screen relative">
            <Nav/>
            {children}
        </div>
    )
}

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    console.error(typeof error);
  
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    );
}

/** router
 */
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Page><Home /></Page>,
      errorElement:<ErrorPage />
    },
    {
      path: "/files",
      element: <Page><FileDirectory/></Page>,
      errorElement:<ErrorPage />,
      children:[
        {
          path: "/files/:add/",
          element: <FileCreator />,
        },
        {
          path: "/files/view/:file_name",
          element: <FileViewer />,
        },
        {
          path: "/files/edit/:file_name",
          element: <FileEditor />,
        }
      ],
    },
    {
      path: "/customers",
      element: <Page><MemberDirectory /></Page>,
      errorElement:<ErrorPage />
    },
    {
      path: "/groups",
      element: <Page><GroupDirectory /></Page>,
      errorElement:<ErrorPage />
    },
    {
      path: "/assigned-files",
      element: <Page><AssignedFileDirectory /></Page>
    },
    {
      path: "/organization",
      element: <Page><Organization /></Page>
    },
    {
      path: "/settings",
      element: <Page><Settings /></Page>
    },
    {
      path: "/profile",
      element: <Page><Profile /></Page>
    }
]);



