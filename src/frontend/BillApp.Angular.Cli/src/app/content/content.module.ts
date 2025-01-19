import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterModule } from "@angular/router";
import { ContentComponent } from "./content.component";
import { ContentRoutes } from "./content.routing";


@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ContentRoutes),
  ],
  declarations: [

    ContentComponent
  ],
  // services, pipes and providers
  providers: [
  ]
})

export class ContentModule { }
