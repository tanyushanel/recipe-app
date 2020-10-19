import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragScrollModule } from 'ngx-drag-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { CurrentRecipeComponent } from './current-recipe/current-recipe.component';
import { RecipeImageComponent } from './recipe-image/recipe-image.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchedListComponent } from './searched-list/searched-list.component';
import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    SearchComponent,
    MenuComponent,
    SliderComponent,
    HomeComponent,
    CurrentRecipeComponent,
    RecipeImageComponent,
    SearchedListComponent,
    RecipePreviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, DragScrollModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
