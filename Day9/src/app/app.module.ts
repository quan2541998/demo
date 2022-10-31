import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContentRightNavComponent } from './component/content-right-header/content-right-header.component';
import { ContainerComponent } from './component/container/container.component';

@NgModule({
  declarations: [AppComponent, ContentRightNavComponent, ContainerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
