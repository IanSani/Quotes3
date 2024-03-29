import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quotes/quotes.component';
// import { QuoteDetailsComponent } from './quote-details/goal-details.component';
// import {  StrikeThroughDirective  } from './strike.directive';
import { DateCountPipe } from './date-count.pipe';
import { FormComponent } from './form/form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { StrikeThroughDirective } from './strike-through.directive';

@NgModule({
 declarations: [
   AppComponent,
   QuoteComponent,
   QuoteDetailsComponent,
   StrikeThroughDirective,
   DateCountPipe,
   FormComponent,
   QuoteDetailsComponent,
   StrikeThroughDirective
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
