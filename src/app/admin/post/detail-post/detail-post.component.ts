import { PostService } from './../../../service/post.service';
import { CategoryService } from './../../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/model/category';
@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  post = new Post();
  categories = [];
  selectedFile: any;
  image: string | ArrayBuffer;
  allowedExtension = ['jpeg', 'jpg', 'png'];
  constructor(private categoryService: CategoryService,
              private postService: PostService,
              private route: ActivatedRoute,
              private location: Location,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getCategories();
    const id = this.route.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    if(id){
      this.postService.getPost(id).valueChanges().subscribe(data => {
        this.post = data;
        this.image = this.post.avatar;
        this.post.$key = id;
      })
    }else{
      this.getPostList();
      this.post.category_name = this.categories[0].name;
    }
    
   
  }
  save(): void {
    this.post.avatar = this.image;
    if(this.post.$key){
      this.post.date_update = new Date().getTime();
      this.postService.updatePost(this.post).then(
        res => {
          this.toastr.success('You are update It Successfully!');
        }, error => {
          this.toastr.error('You are update failure!')
        })
    }else{
      this.post.date_post = new Date().getTime();
      this.post.date_update = new Date().getTime();
      this.postService.addPost(this.post).then(
        res => {
          this.toastr.success('You are add new It Successfully!');
          this.post = new Post();
        },error=>{
          this.toastr.error('You are add new failure!')
        })
    }
  }

  add(): void {
    this.post = new Post();
    this.post.category_name = this.categories[0].name;
  }
  back() {
    this.location.back();
  }

  private  getCategories(): void {
    this.categoryService.getCategoryList().snapshotChanges().subscribe(data => {
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.categories.push(a as Category);
      })
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    const fileExtension = this.selectedFile.name.split('.').pop().toLowerCase();
    let isValidFile = false;
    for (const item in this.allowedExtension) {
        if (fileExtension === this.allowedExtension[item]) {
            isValidFile = true;
            break;
        }
    }
    if (!isValidFile) {
        alert('Chỉ cho file : *.' + this.allowedExtension.join(', *.'));
        return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onloadend = () => {
      const error    = reader.error;
      if (error !== null) {
        setTimeout(() => {
          alert('File bị lỗi!' + error);
        });
      } else {
        this.image = reader.result;
      }
    };
  }

  nameChange(name: string): void {
    this.post.slug = this.stringToSlug(name) + '-' + new Date().getDate()
      + '-' + new Date().getMonth() + 1 + '-' + new Date().getFullYear() + new Date().getTime();
  }

  private  stringToSlug(str): string {
    // remove accents
    const from = 'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñç';
    const  to   = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouunc';
    for (let i = 0, l = from.length ; i < l ; i++) {
      str = str.replace(RegExp(from[i], 'gi'), to[i]);
    }
    str = str.toLowerCase()
      .trim()
      .replace(/[^a-z0-9\-]/g, '-')
      .replace(/-+/g, '-');
    return str;
  }

  getPostList(): void {
    this.postService.getPostList();
  }
}
