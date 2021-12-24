import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountantGuard implements CanActivate {
  constructor(private router: Router, private toaster: ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    var role = localStorage.getItem("role")
    if (role == "Accountant") {
      return true;
    }
    else {
      this.toaster.error("Access Denied!")
      if (role == "Customer") {
        this.router.navigate([""])
      }else{
        this.router.navigate([role])
      }
    }

    return true;
  }

}
