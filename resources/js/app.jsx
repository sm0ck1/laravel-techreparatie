import './bootstrap';
import './app.scss';

import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import { SnackbarProvider } from 'notistack';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(
            <SnackbarProvider maxSnack={3}>
                <App {...props} />
            </SnackbarProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
