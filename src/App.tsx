import type { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

const queryClient = new QueryClient();

type Props = {
    buildRouter?: typeof createRouter;
};

export const App: FC<Props> = ({ buildRouter = createRouter }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={buildRouter({ routeTree })} />
        </QueryClientProvider>
    );
};
