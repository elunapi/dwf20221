import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApisURI } from 'src/app/shared/apis-uri';
import { Category } from '../_model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUri = ApisURI.dwf20221apiURI;
  private resource  = "/category";

  constructor(
    private http: HttpClient
  ) { }

  getCategories(){
    return this.http.get<Category[]>(this.apiUri + this.resource);
  }

  getCategory(id_category: number){
    return this.http.get<Category>(this.apiUri + this.resource + `/${id_category}`);
  }

  createCategory(category: Category){
    return this.http.post(this.apiUri + this.resource, category);
  }

  updateCategory(category: Category){
    return this.http.put(this.apiUri + this.resource + `/${category.id_category}`, category);
  }

  deleteCategory(id_category: number){
    return this.http.delete(this.apiUri + this.resource + `/${id_category}`);
  }
}