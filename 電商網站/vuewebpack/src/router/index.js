import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import Products from '@/pages/Products';
import EditProducts from '@/pages/EditProducts';
import Layout from '@/pages/Layout';
import Home from '@/pages/Home';
import Information from '@/pages/Information';
import CheckOut from '@/pages/CheckOut';
import Infor from '@/pages/INfor';
import Order from '@/pages/Order';
import Coupon from '@/pages/Coupon';
import EditOrder from '@/pages/EditOrder';
import SingleProduct from '@/pages/SingleProduct';




Vue.use(VueRouter);

const original =VueRouter.prototype.push

VueRouter.prototype.push = function push(location){
    return original.call(this, location).catch(err => err)
}



export default new VueRouter({
    routes:[
        {
            path: '*',
            redirect:'/',
        },
        {
            path :'/',
            component:Layout,
            children:[
        {
            path :'',
            component:Home,
        },
        {
            name:'Login',
            path :'login',
            component:Login,
        },
        {
            name:'products',
            path :'products',
            component:Products,
        },
        {
            name:'SingleProduct',
            path :'SingleProduct/:id',
            component:SingleProduct,
        },
        {
            name:'CheckOut',
            path :'CheckOut',
            component:CheckOut,
        },
        {
            name:'Infor',
            path :'Infor',
            component:Infor,
        },
        {
            name:'Order',
            path :'Order/:orderId',
            component:Order,
        },
        {
            name:'Information',
            path :'Information',
            component:Information,
        },
                    ],
        },
        {
            path :'/admin',
            component:Dashboard,
            meta: { requiresAuth: true },
            children:[{
                name:'EditProducts',
                path :'EditProducts',
                component:EditProducts,
                meta: { requiresAuth: true },
        },
        {
            name:'Coupon',
            path :'Coupon',
            component:Coupon,
            meta: { requiresAuth: true },
        },
        {
            name:'EditOrder',
            path :'EditOrder',
            component:EditOrder,
            meta: { requiresAuth: true },
        },
            ],
        },
    ],
});