Para facilitar a organização e visualização do seu projeto, aqui está o `README.md` formatado. Este ficheiro resume as tecnologias, a estrutura e os passos para iniciar a aplicação.

```markdown
# 📝 Quiz App

Um aplicativo de Quiz interativo e moderno desenvolvido com **React Native** e **Expo**. O projeto utiliza uma base de dados local para gerir as perguntas e oferece uma interface de utilizador limpa e responsiva.

## 🚀 Funcionalidades

* **Interface Intuitiva**: Desenvolvida com `react-native-paper` para componentes visuais consistentes e elegantes.
* **Gestão de Estado**: Alternância fluida entre o ecrã inicial e o ecrã de jogo através de estados do React.
* **Base de Dados Local**: Integração com `expo-sqlite` para o armazenamento e persistência dos dados das perguntas.
* **Design Adaptativo**: Suporte para orientação portrait e ícones adaptativos para Android.

## 🛠️ Tecnologias Utilizadas

* **Framework**: [Expo](https://expo.dev/) (v54.0.0)
* **Biblioteca Base**: [React Native](https://reactnative.dev/) (v0.81.5)
* **UI Framework**: [React Native Paper](https://reactnativepaper.com/) (v5.15.0)
* **Base de Dados**: [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)
* **Animações**: React Native Reanimated

## 📁 Estrutura do Projeto

```text
.
├── assets/              # Imagens, ícones e splash screen
├── src/
│   ├── components/      # Componentes como QuestionCard e ResultModal
│   ├── data/            # Ficheiros de dados estáticos (perguntas)
│   ├── database/        # Configuração e inicialização do SQLite
│   ├── screens/         # Ecrãs principais (HomeScreen, GameScreen)
│   └── services/        # Lógica de serviço do Quiz
├── App.js               # Ponto de entrada e lógica de navegação
├── app.json             # Configuração do Expo
└── package.json         # Dependências e scripts

```

## ⚙️ Como Executar

1. **Instale as dependências**:
```bash
npm install

```


2. **Inicie o projeto com o Expo**:
```bash
npx expo start

```


3. **Escolha a plataforma**:
* Pressione `a` para **Android**.
* Pressione `i` para **iOS**.
* Pressione `w` para **Web**.



## 📝 Detalhes Técnicos

* **Inicialização**: O aplicativo inicializa a base de dados local automaticamente ao abrir, utilizando o serviço `initDatabase` dentro de um `useEffect` no componente principal.
* **Navegação**: A transição entre a página inicial e o jogo é gerida por um estado simples no `App.js`, garantindo rapidez e simplicidade.
* **Estilização**: Utiliza `StyleSheet` nativo para garantir performance, com componentes temáticos do `react-native-paper`.

---

Desenvolvido por **Gabriel Henrique e Pedro Barro**.

```

```