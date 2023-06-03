import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { KittyImageComponent } from './kitty-image/kitty-image.component';
import { ContadorComponent } from './contador/contador.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { ConfirmationPanelDirective } from './confirmation-panel.directive';
import { NumberListComponent } from './number-list/number-list.component';
import { NumberPrefixPipe } from './number-prefix.pipe';
import { YellowHoverDirective } from './yellow-hover.directive';
import { DecimalPipePipe } from './decimal-pipe.pipe';
import { CurrencyPipePipe } from './currency-pipe.pipe';
import { SlicePipePipe } from './slice-pipe.pipe';
import { DatePipePipe } from './date-pipe.pipe';
import { CurrencyPipe, DatePipe, DecimalPipe, SlicePipe } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'home', component: HomeComponent},
  {path: 'hello/:name', component: HelloWorldComponent},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    KittyImageComponent,
    ContadorComponent,
    MyButtonComponent,
    ConfirmationPanelDirective,
    NumberListComponent,
    NumberPrefixPipe,
    YellowHoverDirective,
    DecimalPipePipe,
    CurrencyPipePipe,
    SlicePipePipe,
    DatePipePipe,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DecimalPipe,SlicePipe,DatePipe,CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
