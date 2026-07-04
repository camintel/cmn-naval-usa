import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Inquiry: a
    .model({
      name: a.string().required(),
      email: a.email().required(),
      organization: a.string(),
      message: a.string().required(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
