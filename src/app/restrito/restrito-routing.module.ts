import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestritoComponent } from './restrito.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { GuardGuard } from '../guard.guard';

const routes: Routes = [
    {
        path: 'restrito', component: RestritoComponent, children: [
            { path: 'cadastro', component: CadastroProdutoComponent, canActivate: [GuardGuard]},
            { path: 'lista', component: ListaProdutoComponent, canActivate: [GuardGuard]},
            { path: 'editar/:id', component: AtualizaProdutoComponent, canActivate: [GuardGuard]}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RestritoRoutingModule { }
