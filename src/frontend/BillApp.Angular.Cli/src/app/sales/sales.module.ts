
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



import { SalesRoutes } from './sales.routing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesOrderComponent } from './order/order.component';
import { SalesAccountingComponent } from './accounting/accounting.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatTabsModule,
    MatDialogModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSnackBarModule,
    RouterModule.forChild([
      {
        path: 'order',
        component: SalesOrderComponent
      },
      //{
      //  path: 'pscategory/list',
      //  component: CoreDataPSCategoryListComponent
      //},
      {
        path: 'accounting',
        component: SalesAccountingComponent
      },
      //{
      //  path: 'ps/create',
      //  component: CoreDataPSCreateComponent
      //},
      //{
      //  path: 'ps/list',
      //  component: CoreDataPSListComponent
      //},
      //{
      //  path: 'ps/update',
      //  component: CoreDataPSUpdateComponent
      //}
    ]),

  ],
  declarations: [


  ],
  // services, pipes and providers
  providers: [



/*    UserService*/
  ]
})

export class SalesModule { }
