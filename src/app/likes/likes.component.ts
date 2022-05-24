import { Post } from './../posts/post.interface';
import { combineLatest, Observable, map } from 'rxjs';
import { LikesQuery } from './state/likes.query';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LikesComponent implements OnInit {

  likedPosts$: Observable<Post[]> = this.likesQuery.selectLikedPosts$;
  numOflikedPosts$: Observable<number> = this.likesQuery.selectNumberOfLikedPosts$;

  viewObs$ = combineLatest([this.likedPosts$, this.numOflikedPosts$]).pipe(
    map(([likedPosts, numOfLikedPosts]: [Post[], number]) => ({ likedPosts, numOfLikedPosts }))
  );

  constructor(private likesQuery: LikesQuery) { }

  ngOnInit(): void {
  }

}
