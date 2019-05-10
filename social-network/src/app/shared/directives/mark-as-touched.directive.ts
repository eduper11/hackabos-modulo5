import { Directive, Input, HostListener } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Directive({
  selector: "[snMarkAsTouched]"
})
export class MarkAsTouchedDirective {
  @Input() snMarkAsTouched: FormGroup;

  @HostListener("submit", ["$event"]) onsubmit(event) {
    Object.values(this.snMarkAsTouched.controls).forEach(control =>
      control.markAsTouched()
    );
  }

  constructor() {}
}
