import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    RefDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
