import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SubChildComponent } from './child/sub-child/sub-child.component';
import { ParentcComponent } from './Component_Interaction_using_Service/parentc/parentc.component';
import { DataBindingexComponent } from './data-bindingex/data-bindingex.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { InteractionService } from './Component_Interaction_using_Service/interaction.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { List1Component } from './table/list1/list1.component';
import { DemoParentComponent } from './lifecyclehooks/demo-parent/demo-parent.component';
import { ObservablesComponent } from './observables/observables.component';
//import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'studentlist', component: StudentListComponent},
{path:'databinding', component: DataBindingexComponent},
{path:'child', component: ChildComponent},
{path: 'subchild', component: SubChildComponent},
{path: 'templetedrivenform', component: TempleteDrivenFormComponent},
{path: 'reactiveform', component: ReactiveFormComponent},
{path: 'parentc', component: ParentcComponent},
{path: 'childc', component: ChildComponent},
{path: '', redirectTo: '/dashboard', pathMatch:'full'},
{path: 'dashboard', component: DashboardComponent},
{path: 'list1', component: List1Component},
{path: 'lifecycle', component: DemoParentComponent},
{path: 'observables', component: ObservablesComponent},
//{path: 'pathnotfound', component: PathNotFoundComponent},
{path: '**', component: PathNotFoundComponent},
//{path: '**', Component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
