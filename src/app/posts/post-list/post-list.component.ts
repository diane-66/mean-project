import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

import { Post } from '../../posts/post.model'
import { PostsService } from '../post.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})

export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = []
  private postSub: Subscription

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts()
    this.postsService.getPostUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts
      })
  }
  ngOnDestroy() {
    this.postSub.unsubscribe()
  }
}
