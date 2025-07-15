import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPostagemComponent } from '../../componentes/usuario-postagem/usuario-postagem.component';
import { Postagem } from '../../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-postagem',
  templateUrl: './detalhes-postagem.component.html',
  styleUrls: ['./detalhes-postagem.component.css'],
  imports: [CommonModule, UsuarioPostagemComponent],
})
export class DetalhesPostagemComponent {
  post: Postagem | undefined;
  postId: string | null = null;

  constructor(
    private rotaAtual: ActivatedRoute,
    private router: Router
  ) {
    this.post = this.rotaAtual.snapshot.data["post"];
    if (!this.post) {
      this.router.navigate(['/posts']);
    }
  }

  // ngOnInit(): void {

  //   // VERSÃO COM SNAPSHOT
  //   //this.postId = this.rotaAtual.snapshot.paramMap.get("id");

  //   // VERSÃO COM OBSERVABLE (MAIS INDICADO)
  //   this.rotaAtual.paramMap.subscribe(params => {
  //     this.postId = params.get('id');

  //     if (this.postId) {
  //       const posts: Postagem[] = data.posts;
  //       this.post = posts.find(post => post.id === this.postId);

  //       if (!this.post) {
  //         this.router.navigate(['/posts']);
  //       }
  //     }
  //   });


  // }

}
