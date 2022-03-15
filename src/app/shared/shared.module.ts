import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavComponent,
    AsideComponent,
    ContentComponent,
    FooterComponent

  ],
  exports: [
    NavComponent,
    AsideComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {

}
