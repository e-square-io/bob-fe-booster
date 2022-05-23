import { AuthService } from './../auth.service';
import { Post, PostComment } from './post.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  BASE_URL = `https://jsonplaceholder.typicode.com`;

  constructor(private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  getPosts(): Observable<Post[]> {
    return this.authService.getUser().pipe(
      switchMap((user: string | null) => {
        let headers: HttpHeaders = new HttpHeaders();

        if (user) {
          headers = headers.append('user-token', user);
        }


        return this.httpClient.get<Post[]>(`${this.BASE_URL}/posts`, { headers });
      })
    )

  }

  getPostComments(id: number): Observable<PostComment[]> {

    let params: HttpParams = new HttpParams();
    params = params.append('postId', id);

    return this.httpClient.get<PostComment[]>(`${this.BASE_URL}/comments`, { params })
  }
}
