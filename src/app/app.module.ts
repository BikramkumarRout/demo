import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypipePipe } from './mypipe.pipe';
import { SortingPipe } from './sorting.pipe';
import { SentencecasePipe } from './sentencecase.pipe';
import { ChangeColorDirective } from './change-color.directive';
import { VerifyCapsDirective } from './verify-caps.directive';

@NgModule({
  declarations: [
    AppComponent,
    MypipePipe,
    SortingPipe,
    SentencecasePipe,
    ChangeColorDirective,
    VerifyCapsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
