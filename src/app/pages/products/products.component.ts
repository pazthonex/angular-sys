import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  posts: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    //this.loadPosts();
  }

  loadPosts() {
    this.productService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

  addPost() {
    const newPost = {
      title: 'New Post',
      content: 'This is a new post.'
    };
    this.productService.addPost(newPost).subscribe(() => {
      this.loadPosts();
    });
  }

  updatePost(id: number) {
    const updatedPost = {
      title: 'Updated Post',
      content: 'This post has been updated.'
    };
    this.productService.updatePost(id, updatedPost).subscribe(() => {
      this.loadPosts();
    });
  }

  deletePost(id: number) {
    this.productService.deletePost(id).subscribe(() => {
      this.loadPosts();
    });
  }
}
