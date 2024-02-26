import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as icons from 'ionicons/icons';
import { addIcons } from 'ionicons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IoniconsModule {

  constructor() {
    this.init();
  }

  init() {
    for (const key in icons) {
      if (Object.prototype.hasOwnProperty.call(icons, key)) {
        const name = key as keyof typeof icons;
        // console.log(key, '  ', icons[name]); 
        addIcons({ [key]: icons[name] });
      }
    }
  }

}
