import { NgModule } from '@angular/core';
import { NgxSamplepublishingComponent } from './ngx-samplepublishing.component';
import { HeaderComponent } from './header/header.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    NgxSamplepublishingComponent,
    HeaderComponent,
    ChartsComponent,
  ],
  imports: [],
  exports: [NgxSamplepublishingComponent, HeaderComponent,ChartsComponent],
})
export class NgxSamplepublishingModule {}
