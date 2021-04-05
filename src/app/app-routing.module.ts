import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch :'full'},
  {path : 'home', component : HomePageComponent},
  {path : 'articles', component : ArticlesListComponent},
  {path : ':id', component : ArticleDetailComponent}
];

export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
