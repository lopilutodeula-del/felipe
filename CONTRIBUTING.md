# Contributing

Obrigado por contribuir! Algumas orientações rápidas para ser produtivo neste repositório.

1. Setup local

```bash
git clone https://github.com/lopilutodeula-del/felipe.git
cd felipe
npm install
```

2. Fluxo de trabalho
- Crie uma branch a partir de `main`: `git checkout -b feat/minha-feature`.
- Faça commits pequenos e com mensagens claras (`feat:`, `fix:`, `chore:`).
- Abra um Pull Request com o template preenchido.

3. Testes e qualidade
- Rodar lint e testes antes de abrir PR:

```bash
npm run lint
npm test
```

4. Estilo e padrões
- Este repositório usa uma configuração ESLint mínima (`.eslintrc.json`).
- Evite remover arquivos existentes sem discussão prévia.

5. CI
- O repositório usa GitHub Actions (`.github/workflows/ci.yml`) para:
  - instalar dependências
  - rodar lint (se houver)
  - rodar testes

6. Dúvidas
- Abra uma issue ou marque o mantenedor no PR.
