import { ZodType, z } from 'zod';

const createSchema = z.object;
export type SchemaInfer<T extends ZodType<any, any, any>> = z.infer<T>;

export { Form } from './Form';
export { useForm } from './useForm';
export { z as validator, createSchema };
