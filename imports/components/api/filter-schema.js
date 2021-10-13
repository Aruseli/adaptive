import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import { RadioField } from 'uniforms-material';
import { useTranslation } from '../../i18n';

// const { t } = useTranslation();
const schema = {
  title: 'Catalog',
  type: 'object',
  properties: {
    color: {
      type: 'object',
      properties: {
        red: { type: 'boolean' },
        pink: { type: 'boolean' },
        white: { type: 'boolean' },
        orange: { type: 'boolean' },
      },
    },
    rating: {
      type: 'string',
      enum: [
        'stars-and-upper', 
        'best-sellers', 
        'best-on-vivino', 
        'rating-wines', 
        'any-rating'
      ],
      label: 'qwe',
      uniforms: { component: (props) => <RadioField {...props}/> },
    },
}
};

const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator({schema: object}) {
  const validator = ajv.compile(schema);

  return ({model: object}) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);
