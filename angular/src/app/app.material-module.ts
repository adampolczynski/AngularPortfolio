import {MatTabsModule, MatToolbarModule, MatExpansionModule} from "@angular/material";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [MatToolbarModule, MatTabsModule, MatExpansionModule],
  exports: [MatToolbarModule, MatTabsModule, MatExpansionModule],
})
export class MaterialModule { }
