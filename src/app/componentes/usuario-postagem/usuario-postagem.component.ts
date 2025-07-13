import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/post.model';

@Component({
  selector: 'app-usuario-postagem',
  imports: [CommonModule],
  templateUrl: './usuario-postagem.component.html',
  styleUrl: './usuario-postagem.component.css'
})
export class UsuarioPostagemComponent {
  @Input() usuario!: Usuario;
}
