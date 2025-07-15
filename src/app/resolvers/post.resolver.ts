import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import * as data from '../db.json';
import { Postagem } from '../models/post.model';

export const postResolver: ResolveFn<Postagem | undefined> = (rota: ActivatedRouteSnapshot) => {
   const id = rota.paramMap.get("id");
  const posts: Postagem[] = data.posts;

  return posts.find(post => post.id == id);
};
