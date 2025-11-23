import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  RouterStateSnapshot,
} from '@angular/router';

export const AuthChildGuard: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return true;
};
