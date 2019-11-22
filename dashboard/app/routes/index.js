import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------

import Dashboard from './Dashboard'
import ScanResultForm from './Form'



// import NavbarOnly from './Layouts/NavbarOnly';
// import SidebarDefault from './Layouts/SidebarDefault';
// import SidebarA from './Layouts/SidebarA';
// import DragAndDropLayout from './Layouts/DragAndDropLayout';
// import SidebarWithNavbar from './Layouts/SidebarWithNavbar';


import Error404 from './Pages/Error404';


// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

// import { SidebarANavbar } from './../layout/components/SidebarANavbar';
// import { SidebarASidebar } from './../layout/components/SidebarASidebar';

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = (props) => {
    return (
        <Switch>
            <Redirect from="/" to="/dashboard" exact />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/dashboard/form" exact component={ScanResultForm} props={props} />
            <Route component={ Error404 } path="/pages/error-404" />
            { /*    404    */ }
            <Redirect to="/pages/error-404" />
        </Switch>
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars  = () => (
    <Switch>
      
    </Switch>
);

export const RoutedSidebars = () => (
    <Switch>

        { /* Default Sidebar: */}
        <Route
            component={ DefaultSidebar }
        />
    </Switch>
);
