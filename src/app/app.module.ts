import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from './Page/table/table.module';
import { TableComponent } from './Page/table/table.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DialogModule } from './Page/dialog/student-dialog/student-dialog.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DialogModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
