# Pokemon Mobile

## Informações
<p>
 Pokemon mobile é uma aplicação android desenvolvida utilizando React Native (Expo), Typescript e estilização feita
 com Nativewind. O sistema de roteamento é feito com Expo-router, utilizando a estrutura de criação de rotas
 na pasta app, assim como o NextJs 13.
</p>

## O que é o projeto?
<p>
 Esse foi meu primeiro projeto mobile, seu intuito foi aprender sobre o react native e suas funcionalidades, foi
 utilizado coisas basicas como, criação de componentes, hooks, criação de hooks constumizados, propriedades, manuseio de
 estados e requisições https com Axios.
</p>
<p>
  A aplicação utiliza a API do pokeAPI para encontrar informações sobre pokemons, na tela inicial, são exibidos inicialmente
  20 pokemons, ao scrollar a tela até o fim, são carregados mais 20 pokemon e assim por diante. As informações da tela inicial
  são exibidas a partir de um componente de Card e mapeadas utilizando FlatList. 
</p>
<p>
  Na página individual, que é exibida ao clicar no botão com icone de lupa (Pagina inicial), o usuário é exibido para a
  página de detalhes do pokemon escolhido, onde é exibido mais informações sobre ele. A aplicação também possui um
  componente de Search, que é composto por um inputText e um botão, onde é possível encontrar pokemon a partir do seu
  nome ou ID.
</p>

## Gifs das telas
<table>
  <tr>
    <td align="center">
      <label>Página inical: Rolagem</label>
      <br>
      <img src="./src/assets/git/1.gif" alt="GIF 1">
    </td>
    <td align="center">
      <label>Página detalhes: Informações do pokemon</label>
      <br>
      <img src="./src/assets/git/2.gif" alt="GIF 2">
    </td>
  </tr>
  <tr>
    <td align="center">
      <label>Pokemon não encontrado (Pesquisa)</label>
      <br>
      <img src="./src/assets/git/3.gif" alt="GIF 3">
    </td>
    <td align="center">
      <label>Pokemon encontrado (Pesquisa)</label>
      <br>
      <img src="./src/assets/git/4.gif" alt="GIF 4">
    </td>
  </tr>
</table>

## Tecnologias utilizadas:
- [Expo](https://docs.expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo-router](https://expo.github.io/router/docs/)
- [NativeWind](https://www.nativewind.dev/)
- [PokeAPI](https://pokeapi.co/)
