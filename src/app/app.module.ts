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
import { LogoComponent } from './logo/logo.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';

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
    LogoComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    DragScrollModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
