import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './index';
import { GetUsersEffects,} from './effects/user-management/GetUsers.effects';


import{EffectsModule} from '@ngrx/effects'

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([

      GetUsersEffects,


    ]),
  ],
  exports: [StoreModule, EffectsModule],
})

export class AppStateModule {}
