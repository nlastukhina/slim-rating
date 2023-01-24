import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { DashboardPageComponent } from './ui-modules/dashboard/dashboard-page/dashboard-page.component';
import { EditPageComponent } from './ui-modules/admin/edit-page/edit-page.component';

const routes: Routes = [
  { path: 'flvby', component: EditPageComponent },
  { path: '', component: DashboardPageComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules }), RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
