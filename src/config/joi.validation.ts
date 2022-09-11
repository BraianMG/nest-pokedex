// Esta es otra alternativa a env.config.ts pero ofrece mas control y validaciones
// De todas formas pueden trabajar en conjunto ambos archivos
import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(3005),
  DEFAULT_LIMIT: Joi.number().default(6),
});
