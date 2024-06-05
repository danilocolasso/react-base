import { ZodType, z } from 'zod';

const createSchema = z.object;
export type InferType<T extends ZodType<any, any, any>> = z.infer<T>;
export type * from 'react-hook-form';

export { Form } from './Form';
export { useForm } from './useForm';
export { z as validator, createSchema };
