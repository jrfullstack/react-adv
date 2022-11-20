import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
// import { LazyLayout } from '../01-lazyload/layaout/LazyLayout';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const LazyLayout = lazy(() => import('../01-lazyload/layaout/LazyLayout'));
// const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },

    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    // {
    //     to: '/lazy2',
    //     path: 'lazy2',
    //     Component: Lazy2,
    //     name: 'Lazy-2'
    // },
    // {
    //     to: '/lazy3',
    //     path: 'lazy3',
    //     Component: Lazy3,
    //     name: 'Lazy-3'
    // }
]