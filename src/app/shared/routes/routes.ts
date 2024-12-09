import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: '',
    loadChildren: () => import('../../module/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'search',
    loadChildren: () => import('../../module/search/search.module').then((m) => m.SearchModule),
  },
  // {
  //   path: 'listing/list-view',
  //   loadChildren: () => import('../../components/listing/list-view/list-view.module').then((m) => m.ListViewModule),
  // },
  // {
  //   path: 'listing/tab-layout',
  //   loadChildren: () => import('../../components/listing/tab-layout/tab-layout.module').then((m) => m.TabLayoutModule),
  // },
  // {
  //   path: 'property',
  //   loadChildren: () => import('../../components/property/property.module').then((m) => m.PropertyModule),
  // },
  // {
  //   path: 'page',
  //   loadChildren: () => import('../../components/pages/pages.module').then((m) => m.PagesModule),
  // },
  // {
  //   path: 'modules',
  //   loadChildren: () => import('../../components/modules/modules.module').then((m) => m.ModulesModule),
  // },
  // {
  //   path: 'agent',
  //   loadChildren: () => import('../../components/agent/agent.module').then((m) => m.AgentModule),
  // },
  // {
  //   path: 'contact',
  //   loadChildren: () => import('../../components/contact/contact.module').then((m) => m.ContactModule),
  // }
]
