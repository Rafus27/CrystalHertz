import { createBrowserRouter } from "react-router-dom";
// components & pages
import App from "./App";
import { Account, Authorization, Library, MainComponent, MusicComponent, Profile, ProfileCreate, Recovery, Registration, Subscription, Verify, } from "./pages";
import { RouteError } from "./modules/errors/route/route.module";
export const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        Component: App,
        errorElement: <RouteError />,
        children: [
            {
                id: "auth",
                path: "/auth",
                Component: Authorization,
            },
            {
                id: "reg",
                path: "/reg",
                Component: Registration,
            },
            {
                id: "verify",
                path: "/verify",
                Component: Verify,
            },
            {
                id: "recovery",
                path: "/recovery",
                Component: Recovery,
            },
        ],
    },
    {
        id: "home",
        path: "/home",
        Component: MainComponent,
    },
    {
        id: "subscription",
        path: "/subscription",
        Component: Subscription,
    },
    {
        id: "account",
        path: "/account",
        Component: Account,
    },
    {
        id: "profle",
        path: "/profile",
        Component: Profile,
        children: [
            {
                id: "profile_create",
                path: "profile_create",
                Component: ProfileCreate,
            },
        ],
    },
    {
        id: "music",
        path: "/music",
        Component: MusicComponent,
    },
    {
        id: "lib",
        path: "/lib",
        Component: Library,
    },
]);
