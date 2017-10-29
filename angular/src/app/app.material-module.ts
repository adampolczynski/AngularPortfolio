import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatExpansionModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule,
  MatRadioModule, MatSidenavModule, MatTabsModule, MatToolbarModule
} from "@angular/material";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatCardModule, MatButtonModule, MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatListModule, MatGridListModule, MatInputModule, MatExpansionModule, MatRadioModule],
  exports: [MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatCardModule, MatButtonModule, MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatListModule, MatGridListModule, MatInputModule, MatExpansionModule, MatRadioModule],
})
export class MaterialModule { }
