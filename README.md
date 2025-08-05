# 🌸 To-Do Floral

Este repositório apresenta o "To-Do Floral", um aplicativo de lista de tarefas desenvolvido em **React Native** com **Expo**. O projeto combina funcionalidades essenciais de gerenciamento de tarefas com uma identidade visual inspirada em elementos florais, focando na persistência de dados localmente utilizando `AsyncStorage`.

---

### ✨ Funcionalidades Implementadas

* **Adicionar Tarefas:** Permite ao usuário inserir novas tarefas na lista de forma simples e rápida.
* **Marcar como Concluída:** Cada tarefa pode ser marcada ou desmarcada como concluída através de um `Switch` interativo, com feedback visual (linha riscada no texto).
* **Excluir Tarefas:** Possibilita a remoção de tarefas da lista.
* **Persistência de Dados:** As tarefas são salvas automaticamente no dispositivo usando `AsyncStorage`, garantindo que não sejam perdidas ao fechar o aplicativo.
* **Interface Intuitiva:** Design limpo e fácil de usar, com foco na experiência do usuário.

---

### 🎨 Identidade Visual e Design

O "To-Do Floral" se destaca por sua identidade visual única, que incorpora um tema floral para criar uma experiência agradável e relaxante.

* **Fundo Temático:** Utiliza uma imagem de fundo floral (`fundo.png` na pasta `assets/`) para ambientar a interface.
* **Esquema de Cores:** A paleta de cores foi cuidadosamente selecionada para complementar o tema floral, utilizando tons que remetem à natureza e proporcionam uma sensação de calma.
* **Tipografia:** A fonte `Bree Serif` foi escolhida para o título e textos principais, contribuindo para a estética suave e convidativa do aplicativo.
* **Elementos Visuais:** Cores dinâmicas para o `Switch` e botões, que se harmonizam com o tema geral.

---

### 🚀 Tecnologias Utilizadas

* **React Native:** Framework para a construção de aplicativos móveis nativos utilizando JavaScript e React.
* **Expo:** Plataforma que simplifica o desenvolvimento, a construção e a implantação de aplicativos React Native.
* **JavaScript:** Linguagem de programação principal do projeto.
* **@react-native-async-storage/async-storage:** Biblioteca para armazenamento persistente de dados no dispositivo.

---

### 📁 Estrutura do Projeto

A organização do projeto segue uma estrutura clara para facilitar a compreensão e manutenção:


```
├── assets/                  # Contém a imagem de fundo (fundo.png) e outros recursos visuais.
├── .expo/                   # Arquivos de configuração gerados pelo Expo.
├── .gitignore               # Define arquivos e pastas a serem ignorados pelo Git.
├── App.js                   # Componente principal da aplicação, contendo toda a lógica de estado, funcionalidades e renderização da UI.
├── app.json                 # Configurações do aplicativo Expo.
├── index.js                 # Ponto de entrada da aplicação React Native.
├── package-lock.json        # Gerenciamento de dependências.
└── package.json             # Define as informações do projeto e suas dependências.
```

---

### ▶️ Como Rodar o Projeto

Para testar este projeto em seu ambiente local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/anads07/to-do-floral
    cd to-do-floral
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou, se preferir Yarn:
    yarn install
    ```
    Certifique-se de que a biblioteca `@react-native-async-storage/async-storage` está instalada. Se não estiver, você pode instalá-la com:
    ```bash
    npm install @react-native-async-storage/async-storage
    # ou
    yarn add @react-native-async-storage/async-storage
    ```

3.  **Inicie o aplicativo Expo:**
    ```bash
    npx expo start
    ```
    Após executar este comando, uma página será aberta no seu navegador, exibindo um QR Code. Escaneie-o com o aplicativo **Expo Go** no seu celular (disponível para iOS e Android) para ver o projeto rodando diretamente no seu dispositivo, ou opte por usar um emulador/simulador.

---

### 💡 Aprendizados Chave e Habilidades Desenvolvidas

Este projeto foi fundamental para aprofundar conhecimentos em:

* **Persistência de Dados em Mobile:** Implementação robusta de salvamento e carregamento de dados utilizando `AsyncStorage`.
* **Gerenciamento de Estado Complexo:** Manipulação de um array de objetos (`todos`) e atualização reativa da interface.
* **Componentes de Lista (`FlatList`):** Renderização eficiente de listas de itens.
* **Interatividade de UI:** Uso de `Switch` para alternar estados e `TouchableOpacity` para ações de botão.
* **Estilização Avançada:** Aplicação de `StyleSheet` para criar layouts responsivos e uso de `ImageBackground` para temas visuais.
* **Design de Experiência (UX/UI):** Foco na criação de uma interface agradável e funcional, com atenção à identidade visual.

Este projeto demonstra minha capacidade de construir aplicativos mobile completos, com persistência de dados e um design visualmente atraente, utilizando o ecossistema React Native.
