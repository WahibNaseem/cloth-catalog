import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { IProductType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/products';
  constructor(private http: HttpClient) {}

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber!.toString());
    params = params.append('pageSize', shopParams.pageSize!.toString());

    return this.http
      .get<IPagination>(this.baseUrl, {
        observe: 'response', // we use observe here so it will return http response
        params,
      })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
  }

  getProduct(id: number) {
    return this.http.get<IProduct>(this.baseUrl + '/' + id);
  }

  getBrands() {
    //In a simpe request of get we the body , which is Ibrand in this case but we use observe like above
    // it will return http reponse and we need to take out body from http resposne
    return this.http.get<IBrand[]>(this.baseUrl + '/brands');
  }

  getProductTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + '/types');
  }
}
