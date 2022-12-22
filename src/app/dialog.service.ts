import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog,private snakbar:MatSnackBar) { }
  dialogRef : any;
  openConfirmDialog()
  {
     this.dialog.open(MatConfirmDialogComponent,{
      width :'400px',
      height:'100px',
      panelClass:'confirm-this.dialog-container',
      disableClose:true
    });
  }
  dialogclose()
  {
   this.dialog.closeAll();
  }
  removedata()
  {
    this.snakbar.open('Record Deleted', 'Dismiss');
    this.dialogclose();
  }
 
}
