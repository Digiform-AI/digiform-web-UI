
import {
    createBrowserRouter,
} from "react-router-dom";
import { useRouteError } from "react-router-dom";
import { FileEditor, FileViewer } from "../components/file.components";
import { Nav } from "../components/navigation.components";
import FileDirectory from "../pages/fileDirectory.page";
import { Samples } from "../samples";


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
      element: <Page><div>Home page</div></Page>,
      errorElement:<ErrorPage />
    },
    {
      path: "/files",
      element: <Page><FileDirectory/></Page>,
      errorElement:<ErrorPage />,
      children:[
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
      element: <Page><div>customers page</div></Page>,
      errorElement:<ErrorPage />
    },
    {
      path: "/examples",
      element: <Page><Samples /></Page>,
      errorElement:<ErrorPage />
    },
]);



