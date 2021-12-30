import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  myProductsData: any = [{}]
  data1: any | string = [{}]

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getMyProducts(ID: number){
    this.http.get("https://localhost:44309/api/Product/getMyProducts/" + ID).subscribe((Response: any)=>{this.myProductsData=Response})
  }

  updateProduct(data: any){
    this.http.put('https://localhost:44309/api/Product/Update',data).subscribe((result)=>{

    this.toastr.success('Product Updated');

   },err=>{

     console.log(err);
     this.toastr.error(err);

      })
  }

  deleteProduct(ID: number){
    this.http.delete('https://localhost:44309/api/Product/Delete/' + ID).subscribe((date:any)=>{

      this.toastr.success('Deleted!')

    },err =>{

      this.toastr.error('Somthing wrong!!')

    })
  }

  addProduct(form: FormGroup){

    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    this.http.post("https://localhost:44309/api/Product/Add", form, requestOptions).subscribe((res)=>{

      this.toastr.success('Product Added!')

      },err =>{

      this.toastr.error('Somthing wrong!!')

    })
  }

  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }

  }
}
