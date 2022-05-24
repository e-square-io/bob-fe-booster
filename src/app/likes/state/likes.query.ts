import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { LikesState, LikesStore } from './likes.store';
import { Post } from 'src/app/posts/post.interface';


@Injectable({ providedIn: 'root' })
export class LikesQuery extends Query<LikesState> {

    selectLikedPosts$: Observable<Post[]> = this.select('likedPosts');

    selectNumberOfLikedPosts$: Observable<number> = this.selectLikedPosts$.pipe(
        map((likedPosts: Post[]) => likedPosts.length)
    )

    constructor(protected override store: LikesStore) {
        super(store);
    }

}