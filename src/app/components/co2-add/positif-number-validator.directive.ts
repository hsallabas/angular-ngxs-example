import { FormGroup } from "@angular/forms";

export function PositiveNumbe(group: FormGroup) {
  const co2Value = group.controls.co2.value;
  if (co2Value >= 0) {
    if (group.controls.co2.value) {
      group.controls.co2.setErrors(null);
    }
    return null;
  } else {
    group.controls.co2.setErrors({ negative: true });
    return { negative: true };
  }
}