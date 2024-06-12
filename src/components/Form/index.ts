import { ZodType, z } from 'zod';

const createSchema = z.object;
export type InferType<T extends ZodType<any, any, any>> = z.infer<T>;
export * from 'react-hook-form';

export { Form } from './Form';
export { useForm, useFormContext, generateRandomId } from './useForm';
export { z as validator, createSchema };
