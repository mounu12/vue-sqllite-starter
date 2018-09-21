import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Howitworks from './components/Howitworks.vue';
import Pricing from './components/Pricing.vue';
import Products from './components/Products.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Services from './components/Services.vue';
export default[
    {
        path:'/',
        component:Home
    },
    {
        path:'/contact',
        component:Contact
    },
    {
        path:'/How-it-works',
        component :Howitworks
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/Pricing',
        component:Pricing
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/kolimi-products',
        component:Products
    },
    {
        path:'/kolimi-services',
        component:Services
    }
   
]