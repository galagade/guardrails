import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>

        <SidebarMenu.Item icon={<i className="fa fa-fw fa-home"></i>} title="Home" to='/dashboard' exact />

        { /* -------- Forms ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-check-square-o"></i>}
            title="Form"
        >
            <SidebarMenu.Item title="Add New Scan Results" to='/dashboard/form' />

        </SidebarMenu.Item>
    </SidebarMenu >
);
