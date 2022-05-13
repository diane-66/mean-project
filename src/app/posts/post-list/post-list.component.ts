import { Component, Input, OnInit } from '@angular/core'

import { Post } from '../../posts/post.model'
import { PostsService } from '../post.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})

export class PostListComponent implements OnInit {
  @Input() posts: Post[] = []
  // postsService: PostsService

  constructor(public postsService: PostsService) {
    // this.postsService = postsService
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts()
    this.postsService.getPostUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts
      })
  }
}
