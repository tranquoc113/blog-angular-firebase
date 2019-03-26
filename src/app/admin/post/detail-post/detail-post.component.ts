import { PostService } from './../../../service/post.service';
import { CategoryService } from './../../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
              private location: Location) { }

  ngOnInit() {
  }
  save(): void {

  }

  add(): void {
    this.post = new Post();
    this.post.category_id = this.categories[0].id;
  }
  back() {
    this.location.back();
  }

  private  getCategory(): void {

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
}
