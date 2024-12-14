import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: '',
    loadChildren: () => import('../../module/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'search',
    loadChildren: () => import('../../module/search/search.module').then((m) => m.SearchModule),
  }
]
