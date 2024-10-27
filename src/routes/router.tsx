import { Navigate, createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Layout from '../layouts/MainLayout'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import { PATHS } from './paths'
import MainLayout from '../layouts/MainLayout'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import OurBooksPage from '../pages/OurBooksPage'
import MyAccount from '../pages/MyAccount'
import ShowBookPage from '../pages/ShowBookPage'
import AuthGuard from '../auth/AuthGuard'


export const router = createBrowserRouter([
    {
        path: PATHS.home,
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: PATHS.about,
                element: <AboutPage />,
            },
            {
                path: PATHS.contact,
                element: <ContactPage />,
            },
            {
                path: PATHS.layout,
                element: <Layout />,
            },
            {
                path: PATHS.ourBooks,
                element: <OurBooksPage />,
            },
            {
                path: PATHS.myAccount,
                element: (
                    <AuthGuard>
                        <MyAccount />
                    </AuthGuard>)

            },
            {
                path: `ourBooks/${PATHS.showBook}/:param`,
                element: (
                    <AuthGuard>
                        <ShowBookPage />
                    </AuthGuard>
                    )
            },
            {
                path: '*',
                element: <Navigate to={PATHS.home} />
            }
        ]
    },
    {
        path: PATHS.login,
        element: <LoginPage />
    },
    {
        path: PATHS.signUp,
        element: <SignUpPage />
    },
    {
        path: '',
        element: <Navigate to={PATHS.home} />
    },

])

