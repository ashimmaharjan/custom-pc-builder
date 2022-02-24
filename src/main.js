import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import HomeView from '../src/views/HomeView'
import LoginView from '../src/views/LoginView'
import AboutView from '../src/views/AboutView'
import SignupView from '../src/views/SignupView'
import ContactView from '../src/views/ContactView'
import AdminRegister from '../src/views/Admin/AdminRegister'
import AdminLogin from '../src/views/Admin/AdminLogin'
import AddItem from '../src/views/Admin/AddItem'
import UserProfile from '../src/views/UserProfile'
import { createRouter, createWebHistory } from "vue-router"
import './index.css'

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "HomeView",
            component: HomeView,
        },
        {
            path: "/login",
            name: "LoginView",
            component: LoginView,
        },
        {
            path: "/signup",
            name: "SignupView",
            component: SignupView,
        },
        {
            path: "/about",
            name: "AboutView",
            component: AboutView,
        },
        {
            path: "/contact",
            name: "ContactView",
            component: ContactView,
        },
        {
            path: "/admin/register",
            name: "AdminRegister",
            component: AdminRegister,
        },
        {
            path: "/admin/adminlogin",
            name: "AdminLogin",
            component: AdminLogin,
        },
        {
            path: "/admin/additem",
            name: "AddItem",
            component: AddItem,
        },
        {
            path: "/userprofile",
            name: "UserProfile",
            component: UserProfile,
        }

    ]
})
app.use(VueSweetalert2);
app.use(router)
app.mount('#app')