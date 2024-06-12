import {
  useForm as useReactHookForm,
  useFormContext as useReactHookFormContext,
  UseFormProps,
  FieldValues,
  useFieldArray,
  RegisterOptions
} from 'react-hook-form';
import { ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { uuid } from '@/utils/uuid';

interface UseFormWithZodOptions<T extends FieldValues> extends UseFormProps<T> {
  schema: ZodSchema<T>;
}

export function useForm<T extends FieldValues>({ schema, ...options }: UseFormWithZodOptions<T>) {
    const methods = useReactHookForm<T>({
        ...options,
        resolver: zodResolver(schema)
    });

    return {
      ...methods,
      useFieldArray,
      errors: methods.formState.errors,
    };
}

export function useFormContext() {
  const { register: baseRegister, ...context } = useReactHookFormContext();

  const fieldError = (name: string | undefined): string => {
    if (!name) return '';
    return context.formState.errors[name]?.message as string;
  }

  const register = (name: string | undefined,  options?: RegisterOptions<FieldValues, string> | undefined) => {
    return name ? baseRegister(name, options) : {};
  }

  return {
    fieldError,
    register,
    ...context,
  }
}

export function generateRandomId(label: string): string {
  return label.toLocaleLowerCase().replace(/\s+/g, '-') + '-' + uuid();
}
