import { Post } from '../../posts/post.interface';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface LikesState {
   likedPosts: Post[];
}

export function createInitialState(): LikesState {
  return {
    likedPosts: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'likes' })
export class LikesStore extends Store<LikesState> {

  constructor() {
    super(createInitialState());
  }
}