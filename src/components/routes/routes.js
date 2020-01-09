import React from 'react';
import PictureFrame from '../pictureFrame';

/* 
    path
    exact
    subNav
    component
*/

const tutorialSubNav =[
    {
        path: "/tutorial-comunity",
        label: "게시판",
        component: () => <div>coming soon...</div>
    },
    {
        path: "/tutorial-insta",
        label: "인스타",
        component: () => <div>coming soon...</div>
    },
    {
        path: "/tutorial-DApp",
        label: "DApp",
        component: () => <div>coming soon...</div>
    },
    {
        path: "/tutorial-blockChain",
        label: "블록체인",
        component: () => <div>coming soon...</div>
    },
    {
        path: "/tutorial-svg",
        label: "SVG.js",
        component: () => <div>coming soon...</div>
    },
    {
        path: "/tutorial-three",
        label: "three.js",
        component: () => <div>coming soon...</div>
    },
    {
        path: "/tutorial-test",
        label: "test",
        component: () => <div>coming soon...</div>
    },
]

const routes = [
    {
        path: "/",
        label: "Home",
        exact: true,
        component: ()=> <PictureFrame />
    },
    {
        label: "튜토리얼 수듄..",
        routes: tutorialSubNav
    }
]


export default routes;