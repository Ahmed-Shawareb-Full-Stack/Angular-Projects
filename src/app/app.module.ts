import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { BorderBoxDirective } from './directives/border-box.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    MainComponent,
    ProductsComponent,
    BorderBoxDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
