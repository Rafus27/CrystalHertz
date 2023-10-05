# crystalhertz-remastered-v1

Commands:

- ``npm i`` - install dependencies
- ``npm run dev`` - start on 5173 port
- ``npm run build`` - build project
- ``npm run lint`` - run linter scripts
- ``npm run preview`` - preview project on config


---


Env: 

При инициализации проекта - требуется переименовать ``.env.example`` в ``.env`` и изменить в необходимые значения

* VITE_IS_DEV - {boolean} - ставим true если требуется что-то срочно сделать на сайте (в проде)
* VITE_IS_PROD - {boolean} - ставим true при билде в прод. версию
* VITE_API_URL - {string} - вписываем ссылку на активную API, из которой будут тянутся данные


---


Stack:

- React.js [18.2.0] - https://react.dev/
- TypeScript [5.0.2] - https://www.typescriptlang.org/
- SCSS [1.62.0] - https://sass-lang.com/
- Styled-Components [5.3.10] - https://styled-components.com/
