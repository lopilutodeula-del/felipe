<!-- Autogerado por agente — revisar e ajustar conforme o repositório cresce -->
# Instruções para agentes de codificação (Copilot / IA)

Objetivo: permitir que um agente de IA seja imediatamente produtivo neste repositório mínimo.

1) Contexto atual
- Repositório: `lopilutodeula-del/felipe`, branch padrão `main`.
- Estado inicial: conteúdo mínimo — apenas [README.md](README.md) presente no repositório.
- Ambiente de desenvolvimento: contêiner dev com Linux (Ubuntu 24.04.3 LTS). Workspace em `/workspaces/felipe`.

2) Principais tarefas iniciais para o agente
- Validar a árvore de arquivos: executar `ls -la` e `git status` para ver arquivos não comitados.
- Procurar arquivos de configuração/infra: `git ls-files --exclude-standard | sed -n '1,200p'` e buscas por `package.json`, `pyproject.toml`, `Dockerfile`, `Makefile`, `go.mod`, `pom.xml`.
- Se o repositório estiver vazio além do README, abrir diálogo com o mantenedor antes de implementar mudanças significativas.

3) Arquitetura e padrões — o que o repositório revela
- No estado atual não há código-fonte ou estruturas aplicacionais detectáveis.
- Implicação: não presumir linguagem/framework. Sempre perguntar qual stack o projeto deve usar antes de adicionar boilerplate.

4) Convenções e fluxos de desenvolvedor esperados
- Branch principal: `main` — criar branches de feature a partir de `main` e abrir PRs contra `main`.
- Commits: mensagens curtas do tipo `feat:`, `fix:`, `chore:` são aceitáveis quando não houver guideline existente.

5) Integrações e dependências
- Não foram detectadas integrações externas (CI, cloud infra, registries). Antes de adicionar integrações, confirmar qual provedor (GitHub Actions, GitLab CI, etc.).

6) Como o agente deve agir ao implementar algo novo
- Antes de criar artefatos (ex.: `package.json`, `Dockerfile`, scaffolding), perguntar explicitamente qual stack o mantenedor prefere.
- Quando gerar código inicial, incluir um README atualizado com comandos de build/run/test mínimos e um `LICENSE` se necessário.
- Não remover arquivos existentes; mudanças grandes devem ser propostas em PR com descrição clara.

7) Exemplos de comandos úteis
- Listar arquivos: `ls -la /workspaces/felipe`
- Procurar por arquivos comuns: `rg "package.json|pyproject.toml|Dockerfile|Makefile|go.mod|pom.xml" || true`
- Mostrar README: `sed -n '1,200p' README.md`

8) Checklist rápido antes de abrir PR
- Confirme com o mantenedor a stack e objetivos.
- Inclua no PR um resumo das ações e qualquer comando para validar localmente.
- Mantenha mudanças mínimas e reversíveis quando não houver testes.

9) Perguntas para o mantenedor (incluir em PR/issue quando necessário)
- Qual linguagem/framework devo priorizar para scaffolding?
- Deseja integração CI/CD inicial (por exemplo GitHub Actions)?
- Existe um estilo/guia de contribuição preferido?

Se algo estiver incorreto ou você quiser que eu gere um scaffold inicial (por ex. Node/Python/Go), responda informando a stack desejada e eu criarei um PR com opções.
