import {Injectable} from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Post } from '../model/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  postRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create 
  addPost(post: Post) {
   return this.postsRef.push({
     title: post.title,
     content: post.content,
     avatar: post.avatar,
     slug: post.slug,
     date_post: post.date_post,
     date_update: post.date_update,
     active: post.active,
     category_name: post.category_name,
     description: post.description
    });
  }

 

  // Fetch Single Post Object
  getPost(id: string) {
   this.postRef = this.db.object('Post/' + id);
   return  this.postRef;
  }

  // Fetch Posts List
  getPostList() {
   return this.postsRef = this.db.list('Post');
  }

  // Update Post Object
  updatePost(post: Post) {
    return this.postRef.update({
      title: post.title,
     content: post.content,
     avatar: post.avatar,
     slug: post.slug,
     date_post: post.date_post,
     date_update: post.date_update,
     active: post.active,
     category_name: post.category_name,
     description: post.description
    });
  }

  // Delete Post Object
  deletePost(id: string){
    this.postRef = this.db.object('Post/' + id);
    return this.postRef.remove();
  }
}
