import { LikesStore } from './../likes/state/likes.store';
import { Post, PostComment } from './post.interface';
import { PostsService } from './posts.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit, OnDestroy {

  results$: Observable<Post[]> = this.postsService.getPosts();

  comments: PostComment[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private postsService: PostsService,
    private cdr: ChangeDetectorRef,
    private likesStore: LikesStore) {
    // this.results$ = this.
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.showAll();
  }

  showAll() {
    // this.subscription = 
    // this.postsService.getPosts().subscribe((results: Post[]) => {

    // this.results = results;
    // console.log(this.results);
    // // this.cdr.detectChanges();
    // this.cdr.markForCheck();
    // });
  }

  showComments(id: number) {
    this.postsService.getPostComments(id).subscribe((comments: PostComment[]) => this.comments = comments);
  }

  likePost(post: Post) {
    this.likesStore.update((currentState) => ({...currentState, likedPosts: [...currentState.likedPosts, post]}))
  }

}
