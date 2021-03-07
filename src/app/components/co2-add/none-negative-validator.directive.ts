import { FormGroup } from "@angular/forms";

export function NoneNegative(group: FormGroup) {
  const co2Value = group.controls.co2Value.value;
  if (co2Value >= 0) {
    group.controls.co2Value.setErrors(null);
    return null;
  } else {
    group.controls.co2Value.setErrors({ negative: true });
    return { negative: true };
  }
}
