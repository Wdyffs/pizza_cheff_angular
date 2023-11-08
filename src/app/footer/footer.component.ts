import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('popup') el!: ElementRef<HTMLDivElement>;
  form!: FormGroup

  constructor(private fb: FormBuilder) {
    this._createForm();
  }

  ngAfterViewInit(): void {
    console.log(this.el)
  }

  private _createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      address: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(45)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25), Validators.pattern(/^\d+$/)]]
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.el.nativeElement.classList.add('active');
    }
    setTimeout(() => {this.el.nativeElement.classList.remove('active')}, 500);
  }

  get name() {
    return this.form.get('name')!;
  }

  get address() {
    return this.form.get('address')!;
  }

  get phone() {
    return this.form.get('phoneNumber')!;
  }


}
