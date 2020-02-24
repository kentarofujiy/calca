import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

// components
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { ProductDeleteDialogComponent } from './product-delete-dialog/product-delete-dialog.component';

import { TarifaTableComponent } from './tarifa-table/tarifa-table.component';
import { TarifaDialogComponent } from './tarifa-dialog/tarifa-dialog.component';
import { TarifaDeleteDialogComponent } from './tarifa-delete-dialog/tarifa-delete-dialog.component';

import { ClienteTableComponent } from './cliente-table/cliente-table.component';
import { ClienteDialogComponent } from './cliente-dialog/cliente-dialog.component';
import { ClienteDeleteDialogComponent } from './cliente-delete-dialog/cliente-delete-dialog.component';

import { LancamentoTableComponent } from './lancamento-table/lancamento-table.component';
import { LancamentoDialogComponent } from './lancamento-dialog/lancamento-dialog.component';
import { LancamentoDeleteDialogComponent } from './lancamento-delete-dialog/lancamento-delete-dialog.component';
  
import { CenarioTableComponent } from './cenario-table/cenario-table.component';
import { CenarioDialogComponent } from './cenario-dialog/cenario-dialog.component';
import { CenarioDeleteDialogComponent } from './cenario-delete-dialog/cenario-delete-dialog.component';

//  data services
import { ProductDataService } from './product-data.service';
import { TarifaDataService } from './tarifa-data.service';
import { ClienteDataService } from './cliente-data.service';
import { LancamentoDataService } from './lancamento-data.service';
import { CenarioDataService } from './cenario-data.service';



// general services
import { ApiService } from './api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatListModule,
   MatTableModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
   MatInputModule,
  MatSnackBarModule,
   MatPaginatorModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatGridListModule,
   MatToolbarModule,
   MatIconModule,
   MatButtonModule,
   MatSortModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
   MatDialogModule
} from '@angular/material';

const routes:Routes = [
  { 
    path: 'productstable', 
    component: ProductTableComponent
  },
  { 
    path: 'tarifastable',
    component: TarifaTableComponent
  },
  { 
    path: 'clientestable',
    component: ClienteTableComponent
  },
  { 
    path: 'lancamentostable',
    component: LancamentoTableComponent
  },
  { 
    path: 'cenariostable',
    component: CenarioTableComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    ProductDialogComponent,
    ProductDeleteDialogComponent,
    TarifaTableComponent,
    TarifaDialogComponent,
    TarifaDeleteDialogComponent,
    ClienteTableComponent,
    ClienteDialogComponent,
    ClienteDeleteDialogComponent,
    LancamentoTableComponent,
    LancamentoDialogComponent,
    LancamentoDeleteDialogComponent,
    CenarioTableComponent,
    CenarioDialogComponent,
    CenarioDeleteDialogComponent      
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
      FormsModule,
      MatListModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      MatOptionModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatMenuModule,
      MatSnackBarModule,
      MatGridListModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatRadioModule,
      MatCheckboxModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatDialogModule
  ],
  entryComponents: [ProductDeleteDialogComponent, ProductDialogComponent],
  providers: [
    ProductDataService,
    TarifaDataService,
    ClienteDataService,
    LancamentoDataService,
    CenarioDataService,
     ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
