import { DatePicker } from '@shared/ui-kit';
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from 'react-hook-form';

interface FormDatePickerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  minDate?: Date;
  rules?: RegisterOptions<T, Path<T>>;
}

const FormDatePicker = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  minDate,
  rules,
}: FormDatePickerProps<T>) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <DatePicker
        label={label}
        placeholder={placeholder}
        minDate={minDate}
        value={field.value ?? null}
        onChange={field.onChange}
        error={fieldState.error?.message}
      />
    )}
  />
);

export default FormDatePicker;
