import { useGenerateLocalePath } from '@sb/webapp-core/hooks';
import { Navigate, Outlet } from 'react-router-dom';

import { RoutesConfig } from '../../../../app/config/routes';
import { Role } from '../../../../modules/auth/auth.types';
import { useAuth, useRoleAccessCheck } from '../../../hooks';

export type AuthRouteProps = {
  allowedRoles?: Role | Role[];
};

export const AuthRoute = ({ allowedRoles = [Role.ADMIN, Role.USER] }: AuthRouteProps) => {
  const { isLoggedIn } = useAuth();
  const { isAllowed } = useRoleAccessCheck(allowedRoles);
  const generateLocalePath = useGenerateLocalePath();
  const fallbackUrl = isLoggedIn ? generateLocalePath(RoutesConfig.notFound) : generateLocalePath(RoutesConfig.login);

  if (!isAllowed) return <Navigate to={fallbackUrl} />;
  return <Outlet />;
};
