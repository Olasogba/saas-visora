import { CodegenConfig } from '@graphql-codegen/cli';

const config: Partial<CodegenConfig> = {
  generates: {
    'src/graphql/__generated/gql/': {
      documents: [
        '../webapp-libs-chat/src/**/*.ts',
        '../webapp-libs-chat/src/**/*.tsx',
      ],
      plugins: [],
    },
  },
};

export default config;
