import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  firstFG: FormGroup;
  secondFG: FormGroup;
  thirdFG: FormGroup;

  constructor(private snackBar: MatSnackBar) {
    this.firstFG = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
    })
    this.secondFG = new FormGroup({
      sex: new FormControl(),
      dateOfBirth: new FormControl(),
    })
    this.thirdFG = new FormGroup({
      password: new FormControl(),
      email: new FormControl(),
      agreement: new FormControl(),
    })
  }

  submitForm() {
    console.log([this.secondFG.value, this.firstFG.value, this.thirdFG.value]);
    this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.open('New User is successfully added to the database', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

}
