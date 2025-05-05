import love from 'eslint-config-love'
import tseslint from 'typescript-eslint'


export default [
  {
    ...love,
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // REGRA PARA FORÇAR TIPO DE RETORNO:
      "@typescript-eslint/explicit-function-return-type": [
        "error", // ou "error" para ser mais rigoroso
        {
          "allowExpressions": true // Permite inferência em expressões (ex: arrow functions simples) - ajuste se quiser ser AINDA mais rígido
        }
      ],

      // REGRA PARA PROIBIR 'any' EXPLÍCITO:
      "@typescript-eslint/no-explicit-any": [
        "error", // ou "error"
        {
          "fixToUnknown": true, // Sugere trocar 'any' por 'unknown' (mais seguro)
          "ignoreRestArgs": false
        }
      ],
    },
    
  },
]
