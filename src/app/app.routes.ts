import { Routes } from '@angular/router';
import { RegistroComponent } from './paginas/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './componentes/layout/layout.component';
import { postResolver } from './resolvers/post.resolver';

export const routes: Routes = [
    { path: "registro", component: RegistroComponent },
    {
        path: "",
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: "posts", 
                loadChildren: () => import('./paginas/lista-postagem/lista-postagem.module').then(m => m.ListaPostagemModule) 
            },
            { path: "posts/:id", 
                loadComponent: () => import('./paginas/detalhes-postagem/detalhes-postagem.component').then(c => c.DetalhesPostagemComponent),
                resolve: {post: postResolver}
            }
        ]
    }
];