import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';
import { SearchedListComponent } from './searched-list/searched-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe', component: RecipeComponent },
  {
    path: 'searched/:searchText',
    component: SearchedListComponent,
    data: {},
    runGuardsAndResolvers: 'always',
  },
  { path: 'preview', component: RecipePreviewComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
