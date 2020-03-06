import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
   MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,MatListModule} from  '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

const materialModules = [
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,MatNativeDateModule,
  MatDatepickerModule,
  MatRadioModule,
  MatListModule,
  MatFormFieldModule,
  MatCheckboxModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules,
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule
  ],
  exports: [
    materialModules,
    MatButtonModule
  ]
})
export class AngmaterialModule { }


