<h1>
    Oplium Code Test - To-Do List
</h1>

<img src="public/preview.png">

## 🧾 Sobre

Teste de código para vaga de desenvolvedor front-end na empresa Oplium Digital Security. O desafio consiste no desenvolvimento de uma To-Do List, onde o usuário deve poder cadastrar, visualizar, filtrar e excluir tarefas. A aplicação conta com alta responsividade, modo escuro, persistência local (via localStorage) e testes unitários para criação, remoção e filtragem.

## 💻 Tecnologias utilizadas

- Vue.js 3 (Composition API)
- Tailwind CSS
- TypeScript
- Naive UI
- Pinia
- VueUse
- Lucide
- Vitest
- Vue Test Utils

## 🛠️ Como utilizar

Instale as dependências do projeto:

```bash
npm install
```

Inicie o projeto:

```bash
npm run dev
```

Por fim, abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 🧪 Como realizar os testes unitários

Confirme que as dependências do projeto estão instaladas:

```bash
npm install
```

Acesse os arquivos com a terminologia .test.ts contidos no seguinte diretório:

```bash
src/components/__tests__/
```

Modifique os exemplos como desejar e execute o comando abaixo para testar um único componente:

```bash
npm run test:unit -- src/components/__tests__/NomeDoArquivo.test.ts
```

Se preferir, você também pode executar todos os testes simultaneamente:

```bash
npm run test:unit
```
