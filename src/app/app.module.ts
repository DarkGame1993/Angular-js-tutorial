import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }   from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

const INTERCEPTOR_PROVIDERS: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [INTERCEPTOR_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
