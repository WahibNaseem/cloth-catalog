import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './cloth-routing.module';

import { CoreModule } from './core/core.module';

import { ClothComponent } from './cloth.component';

@NgModule({
  declarations: [ClothComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [ClothComponent],
})
export class ClothModule {}
