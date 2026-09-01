import { Checkbox } from '@shared/ui-kit';
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from 'react-hook-form';

interface FormCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
}

const FormCheckbox = <T extends FieldValues>({
  name,
  control,
  label,
}: FormCheckboxProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <Checkbox
        label={label}
        name={field.name}
        checked={Boolean(field.value)}
        onChange={field.onChange}
      />
    )}
  />
);

export default FormCheckbox;
