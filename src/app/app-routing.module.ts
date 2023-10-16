import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';

const routes: Routes = [
  {path:'', component: FirstComponentComponent},
  {path:'eventscomponent', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
