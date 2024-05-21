import { useState } from 'react';
import { sidebarItems } from './sidebarConfig';

export const useSidebar = () => {
    const [open, setOpen] = useState(true);

    return {
        items: sidebarItems,
        open,
        setOpen,
    };
}