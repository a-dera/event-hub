import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// Renvoyer les users connectés directement vers l'acceuil
const redirectLoggedInToApp = () => redirectLoggedInTo(['/tabs']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule),
    ...canActivate(redirectLoggedInToApp) // retour automatique
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'event-detail/:id',
    loadChildren: () => import('./event-detail/event-detail.module').then( m => m.EventDetailPageModule)
  },
  {
    path: 'event-create',
    loadChildren: () => import('./event-create/event-create.module').then( m => m.EventCreatePageModule)
  },
  {
    path: 'event-update/:id',
    loadChildren: () => import('./event-update/event-update.module').then( m => m.EventUpdatePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
