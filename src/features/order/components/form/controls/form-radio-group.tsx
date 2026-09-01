import { RadioButton, type RadioOption } from '@shared/ui-kit';
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from 'react-hook-form';

interface FormRadioGroupProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: RadioOption[];
  direction?: 'column' | 'row';
  rules?: RegisterOptions<T, Path<T>>;
}

const FormRadioGroup = <T extends FieldValues>({
  name,
  control,
  options,
  direction,
  rules,
}: FormRadioGroupProps<T>) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <RadioButton
        name={field.name}
        value={field.value ?? ''}
        options={options}
        direction={direction}
        onChange={field.onChange}
        error={fieldState.error?.message}
      />
    )}
  />
);

export default FormRadioGroup;
