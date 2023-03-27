import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { appSettingsFeatureRoutes } from './lib.routes';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appSettingsFeatureRoutes), IonicModule],
  declarations: [SettingsPageComponent],
})
export class AppSettingsFeatureModule {}
