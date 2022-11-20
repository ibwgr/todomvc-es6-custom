
### Install
1. install npm (shipped with node. nvm recommended for node install)
1. `npm install`
1. install eslint plugin in intellij

### Modules
- mocha – test runner & test suite supporting BDD (describe, it)
- sinon – mocking / spying in unit tests
- chai – assertion library für e2e tests (promise fähig)
- parcel - bundler

### Development
Build & serve web application: `npm run dev`

### Test
`npm run test:unit`

1. First, make sure an API server is running (only required if NOT using local store) \
2. Then start frontend `npm run start:ci` \
3. Then run e2e test against it `npm run test:e2e`

### History
**a9c8a4f**
* toolchain with parcel, eslint, npm
* index.html with script and es6 imports

**47a8975**
* creating instance from class
* template string
* dom manipulation

**c84e274**
* event handler

**a1301b2**
* controller.
* handles events from view
* "private" methods
* higher order functions

**1302ee6**
* real private methods with es6 symbol

**46a1658**
* export events
* import as, multi export

**f9d9b4d**
* bind
* innerHTML
* map

**4fb5801**
* local storage
* JSON
