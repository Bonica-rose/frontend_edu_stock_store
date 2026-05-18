import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import routeConfig from "../routes/routeConfig";

const router = createBrowserRouter(routeConfig);

const AppRouter = () => {
    return <RouterProvider router={router} />;
}

export default AppRouter;