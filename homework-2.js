// Using https://rickandmortyapi.com/api fetch all characters from episode 7.
// documentation can be found here: https://rickandmortyapi.com/documentation/#rest

// RUN npm install IN THIS FOLDER BEFORE RUNNING YOUR CODE!
const fetch = require("node-fetch");

// function getCharactersFromEpisode(episodeNumber) {
//   return fetch(`https://rickandmortyapi.com/api/episode/${episodeNumber}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data.characters);
//       const promises = data.characters.map(url =>
//         fetch(url).then(res => res.json())
//       );
//       return Promise.all(promises);
//     });
// }

// getCharactersFromEpisode(7).then(characters =>
//   characters.forEach(character => console.log(character.name))
// );

// WITH ASYNC AWAIT
async function getCharactersFromEpisode(episodeNumber) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/episode/${episodeNumber}`
  );
  const { characters } = await res.json();

  console.log(characters);
  // return characters;

  const chars = await Promise.all(
    characters.map(url =>
      fetch(url)
        .then(res => res.json())
        .then(char => char.name)
    )
  );
  // console.log(chars);
  return chars;
}

// getCharactersFromEpisode(7).forEach(character => console.log(character.name));
getCharactersFromEpisode(7).then(result => console.log(result));
