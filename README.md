<div align="center">
<img src="https://raw.githubusercontent.com/kuzn5298/jikan-api/main/public/logo.png">

# Jikan-api

[![Npm package version](https://badgen.net/npm/v/jikan-api)](https://www.npmjs.org/package/jikan-api)
[![Install size](https://packagephobia.now.sh/badge?p=jikan-api)](https://packagephobia.now.sh/result?p=jikan-api)
![Build status](https://github.com/kuzn5298/jikan-api/actions/workflows/docs.yml/badge.svg)
[![GitHub issues](https://img.shields.io/github/issues/kuzn5298/jikan-api.svg)](https://github.com/kuzn5298/jikan-api/issues/)
![Languages](https://img.shields.io/github/languages/top/kuzn5298/jikan-api)
[![CodeQL](https://github.com/kuzn5298/jikan-api/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/kuzn5298/jikan-api/actions/workflows/codeql-analysis.yml)

</div>

Promise based [Jikan API (v4)](https://jikan.moe/) (unofficial MyAnimeList API) wrapper for the browser and node.js.

## 📋 Table of Contents

-   [Todo](#✏️-todo)
-   [Features](#🗓-features)
-   [Install](#🚀-install)
-   [Usage](#🪄-usage)
-   [Maintainers](#⭐️-maintainers)
-   [Contributing](#🛠-contributings)
-   [License](#📜-license)

## ✏️ Todo

-   Add data caching
-   Add rate-limit
-   Improve interfaces for Anime
-   Add tests
-   Add actions
-   Add characters
-   Add clubs
-   Add genres
-   Add magazines
-   Add manga
-   Add people
-   Add producers
-   Add random
-   Add recommendations
-   Add reviews
-   Add schedules
-   Add users
-   Add seasons
-   Add top

## 🗓 Features

-   Uses [Jikan API](https://jikan.moe/) (v4)
-   Supports TypeScript and JavaScript
-   Supports Browser and Node.js (uses [axios](https://github.com/axios/axios/) for requests)

## 🚀 Install

```sh
npm i jikan-api

yarn add jikan-api
```

## 🪄 Usage

### Import

It depends on the type of your project.

**ESModule import**

```ts
import Jikan from 'jikan-api';
// or
import { Jikan } from 'jikan-api';
```

**CommonJS require**

```ts
const Jikan = require('jikan-api').default;
// or
const { Jikan } = require('jikan-api');
```

### Modify API

It is possible to change API settings.
([Documentation](https://kuzn5298.github.io/jikan-api/classes/Jikan.Internal.Settings.html))

```ts
Jikan.settings.version = 4; // changes the API version
Jikan.settings.baseURL = 'https://api.jikan.moe'; // set the new API Base URL
```

### API Methods

Information of all possible methods and their parameters are located in the [package documentation](https://kuzn5298.github.io/jikan-api).

All API functions are promised based

```ts
import Jikan from '@kny/jikan-api';

// Anime
Jikan.Anime.getAnime(1);
Jikan.Anime.getAnimeFull(1);
Jikan.Anime.getCharacters(1);
Jikan.Anime.getStaff(1);
Jikan.Anime.getEpisode(1);
Jikan.Anime.getEpisodes(1);
Jikan.Anime.getNews(1);
Jikan.Anime.getForum(1);
Jikan.Anime.getVideos(1);
Jikan.Anime.getVideoEpisodes(1);
Jikan.Anime.getPictures(1);
Jikan.Anime.getStatistics(1);
Jikan.Anime.getMoreInfo(1);
Jikan.Anime.getRecommendations(1);
Jikan.Anime.getUserUpdates(1);
Jikan.Anime.getReviews(1);
Jikan.Anime.getRelations(1);
Jikan.Anime.getThemes(1);
Jikan.Anime.getExternals(1);
Jikan.Anime.getStreaming(1);
Jikan.Anime.search('Cowboy Bebop');
```

More detailed information of all methods are located in the [Jikan documentation](https://docs.api.jikan.moe/).

### Examples

To print details about "[Hunter x Hunter](https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011)" for example, you can do the following:

**Async/Await**

```ts
import Jikan from 'jikan-api';

const HUNTER_X_HUNTER_ID = 11061;

try {
    const { data } = await Jikan.Anime.getAnime(HUNTER_X_HUNTER_ID);
    console.log(data); // Hunter x Hunter details
} catch (err) {
    console.error(err); // Error
}
```

**Promise**

```ts
import Jikan from 'jikan-api';

const HUNTER_X_HUNTER_ID = 11061;

Jikan.Anime.getAnime(HUNTER_X_HUNTER_ID)
    .then(function ({ data }) {
        console.log(data); // Hunter x Hunter details
    })
    .catch(function (err) {
        console.error(err); // Error
    });
```

## ⭐️ Maintainers

[@kuzn5298](https://github.com/kuzn5298)

## 🛠 Contributing

Feel free to dive in! [Open an issue](https://github.com/kuzn5298/jikan-api/issues/new) or submit PRs.

Standard Readme follows the [Contributor Covenant](https://www.contributor-covenant.org/version/1/4) Code of Conduct.

## 📜 License
[![GitHub license](https://img.shields.io/github/license/kuzn5298/jikan-api)](https://github.com/kuzn5298/jikan-api/blob/main/LICENSE)
