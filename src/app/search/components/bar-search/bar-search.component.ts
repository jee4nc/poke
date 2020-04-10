import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bar-search',
  templateUrl: './bar-search.component.html',
  styleUrls: ['./bar-search.component.scss']
})
export class BarSearchComponent implements OnInit {
  checkoutform;
  constructor(
    private formbuilder: FormBuilder
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }
  imprimir(box) {
    console.log(box);
  }
  private buildForm() {
    this.checkoutform = this.formbuilder.group({
      pokeid: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }
  onSubmit(box) {
    this.checkoutform.reset();
  }
}
