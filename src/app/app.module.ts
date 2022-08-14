import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DataBindingexComponent } from './data-bindingex/data-bindingex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ChildComponent } from './child/child.component';
import { DynamicFormComponent } from './Dynamic-Form/dynamic-form/dynamic-form.component';
import { SubChildComponent } from './child/sub-child/sub-child.component';
import { ParentcComponent } from './Component_Interaction_using_Service/parentc/parentc.component';
import { ChildcComponent } from './Component_Interaction_using_Service/parentc/childc/childc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { TableModule } from './table/table.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './headers.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { LifecyclehooksModule } from './lifecyclehooks/lifecyclehooks.module';
import { ObservablesComponent } from './observables/observables.component';
//import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentListComponent,
    DataBindingexComponent,
    TempleteDrivenFormComponent,
    ReactiveFormComponent,
    ChildComponent,
    DynamicFormComponent,
    SubChildComponent,
    ParentcComponent,
    ChildcComponent,
    DashboardComponent,
    PathNotFoundComponent,
    ObservablesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    LifecyclehooksModule,
    HttpClientModule
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
