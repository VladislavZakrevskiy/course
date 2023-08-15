import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader/>}>
        <Routes>
            {Object.values(routeConfig).map(
                ({ element, path }) => (
                    <Route
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                        path={path}
                        key={path}
                    />
                ),
            )}
        </Routes>
    </Suspense>
);
