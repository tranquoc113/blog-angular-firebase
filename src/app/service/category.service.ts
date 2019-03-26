import {Injectable} from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Category} from '../model/category';  // Firebase modules for Database, Data list and Single object


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  categoryRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Category
  addCategory(category: Category) {
   return this.categoriesRef.push({
      name: category.name
    });
  }

 

  // Fetch Single Category Object
  getCategory(id: string) {
    this.categoryRef = this.db.object('Category/' + id);
    return this.categoryRef;
  }

  // Fetch Category List
  getCategoryList() {
    this.categoriesRef = this.db.list('Category');
    return this.categoriesRef;
  }

  // Update Category Object
  updateCategory(category: Category) {
    return this.categoryRef.update({
      name: category.name,
    });
  }

  // Delete Category Object
  deleteCategory(id: string){
    this.categoryRef = this.db.object('Category/' + id);
    return this.categoryRef.remove();
  }
}
