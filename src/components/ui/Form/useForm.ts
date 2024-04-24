import { useForm as useReactHookForm, UseFormProps, FieldValues } from 'react-hook-form';
import { ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface UseFormWithZodOptions<T extends FieldValues> extends UseFormProps<T> {
  schema: ZodSchema<T>;
}

export function useForm<T extends FieldValues>(options: UseFormWithZodOptions<T>) {
    const { schema, ...rest } = options;

    const methods = useReactHookForm<T>({
        ...rest,
        resolver: zodResolver(schema)
    });

    return {
      ...methods,
      errors: methods.formState.errors,
    };
}
