import { Component } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.scss']
})
export class MatConfirmDialogComponent {
  constructor(private dialogservice: DialogService)
  {

  }
 dialogclose()
 {
  this.dialogservice.dialogclose();
 }
  
 removedata()
 {
  this.dialogservice.removedata();
 } 
}