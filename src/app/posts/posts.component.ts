import { Post, PostComment } from './post.interface';
import { PostsService } from './posts.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {

  results: Post[] = [];

  comments: PostComment[] = []

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.showAll();
  }

  showAll() {
    this.postsService.getPosts().subscribe((results: Post[]) => this.results = results);
  }

  showComments(id: number) {
    this.postsService.getPostComments(id).subscribe((comments: PostComment[]) => this.comments = comments);
  }

}
