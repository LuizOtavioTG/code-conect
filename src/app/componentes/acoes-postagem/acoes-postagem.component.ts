import { Component, Input } from '@angular/core';
import { Estatisticas } from '../../models/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acoes-postagem',
  imports: [CommonModule],
  templateUrl: './acoes-postagem.component.html',
  styleUrl: './acoes-postagem.component.css'
})
export class AcoesPostagemComponent {
  @Input() estatisticas!: Estatisticas;
}
