import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
    {
    path: 'count',
    loadChildren: () => import('./count/count.module').then(m => m.CountModule)
  },
    {
    path: 'find-letter',
    loadChildren: () => import('./alphabet-letters/alphabet-letters.module').then(m => m.AlphabetLettersModule)
  },
    {
    path: 'start-with',
    loadChildren: () => import('./start-with/start-with.module').then(m => m.StartWithModule)
  },
    {
    path: 'make-the-same-row',
    loadChildren: () => import('./make-the-same-row/make-the-same-row.module').then(m => m.MakeTheSameRowModule)
  },
    {
    path: 'make-a-word-from-letters',
    loadChildren: () => import('./make-a-word-from-letters/make-a-word-from-letters.module').then(m => m.MakeAWordFromLettersModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
