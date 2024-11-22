O Sistema Acadêmico é uma aplicação desenvolvida em um contexto acadêmico, com o propósito de simular o processo de testes em um sistema básico de gestão de notas sob a ótica de um professor. O principal objetivo deste projeto é explorar e colocar em prática conceitos como Integração Contínua (CI), Desenvolvimento Orientado a Testes (TDD) e Revisão de Código (Code Review). Além disso, visa promover o uso de metodologias ágeis no desenvolvimento e fomentar a colaboração entre equipes, criando um ambiente similar ao encontrado em projetos reais de software.

Tecnologias Utilizadas
Node.js: Plataforma para executar JavaScript no lado do servidor (backend).

Jest: Ferramenta para a criação e execução de testes automatizados.

Estrutura do Projeto
O repositório está organizado em duas pastas principais:

src: Contém os componentes do sistema, cada um responsável por uma funcionalidade específica.

Módulo 1 (lancamentoNotas.js): Permite que o professor registre as notas dos alunos.

Módulo 2 (calcularMedia.js): Responsável pelo cálculo da média das notas registradas.

Módulo 3 (exibirStatus.js): Avalia o status de aprovação do aluno com base na média calculada.

test: Armazena os arquivos de teste correspondentes a cada módulo do sistema.

Arquivos do test:

lancamentoNotas.test.js

calcularMedia.test.js

exibirStatus.test.js

Os módulos fazem uso de module.exports e require para integrar suas funcionalidades.

Como Executar os Testes
Pré-requisitos:

Node.js: Certifique-se de que o Node.js está instalado em seu computador. Caso necessário, faça o download em nodejs.org.

Passo a Passo
Clone este repositório:
git clone <url-do-repositório>

Acesse o diretório do projeto:
cd <caminho-para-diretório>

Instale as dependências:
npm install

Execute os testes utilizando o terminal de depuração do JavaScript:
npm test

Os resultados dos 18 testes configurados serão exibidos no terminal, indicando o status de cada um deles.

Exemplo de saída dos testes:
PASS tests/lancamentoNotas.test.js

PASS tests/calcularMedia.test.js

PASS tests/exibirStatus.test.js

Test Suites: 3 passed, 3 total
Tests: 18 passed, 18 total


## Developers

-- Paulo Henrique (https://github.com/PauloHenriquebds)
-- Artur Ribeiro (https://github.com/ArturRib)
-- Tamires Silva ()
