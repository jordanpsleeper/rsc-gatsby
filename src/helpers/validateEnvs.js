const yup = require('yup');

const EnvSchema = yup.object().shape({
  GATSBY_ROBOTS: yup.mixed().oneOf(['noindex', 'index']).required(),
});

EnvSchema.validate(process.env);
