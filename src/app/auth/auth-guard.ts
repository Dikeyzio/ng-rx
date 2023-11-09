import {ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isLoggedIn, isLoggedOut} from "./auth.selectors";
import {tap} from "rxjs/operators";
@Injectable(

)
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  return  this.store.pipe(
      select(isLoggedIn),
    tap(loggedIn => {
      if (!loggedIn) {
        this.router.navigateByUrl('/login')
      }
    })
    )
  }

}
