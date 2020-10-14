import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { CurrentRecipeComponent } from './current-recipe/current-recipe.component';
import { RecipeImageComponent } from './recipe-image/recipe-image.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    SearchComponent,
    MenuComponent,
    SliderComponent,
    HomeComponent,
    CurrentRecipeComponent,
    RecipeImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
