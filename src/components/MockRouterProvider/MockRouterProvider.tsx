import { RouterContext } from "next/dist/shared/lib/router-context";
import { NextRouter } from 'next/router';
import { ReactNode } from 'react';

export const getMockRouter = (overrides?: Partial<NextRouter>): NextRouter => ({
  replace: jest.fn(),
  push: jest.fn().mockResolvedValue(true),
  route: '',
  basePath: '',
  pathname: '',
  query: {},
  asPath: '',
  reload: jest.fn(),
  back: jest.fn(),
  beforePopState: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  events: { emit: jest.fn(), on: jest.fn(), off: jest.fn() },
  isFallback: false,
  isReady: true,
  isLocaleDomain: false,
  isPreview: false,
  ...overrides,
});

interface MockRouterProviderProps {
  mockRouter: NextRouter;
  children?: ReactNode;
}

/** Mock of Next router
 *
 * Example:
 *
 * const MyComponent = ({ children }) => ()
 *   <MockRouterProvider mockRouter{getMockRouter()}>
 *     {children}
 *   </MockRouterProvider>
 * );
 */
export const MockRouterProvider = ({
  children,
  mockRouter,
}: MockRouterProviderProps): JSX.Element => (
  <RouterContext.Provider value={mockRouter}>{children}</RouterContext.Provider>
);
