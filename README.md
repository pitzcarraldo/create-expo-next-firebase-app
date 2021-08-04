# Create Expo Next Firebase Hosting App

## Preparation

- Setup [Firebase CLI](https://firebase.google.com/docs/cli)
- Replace $firebase-app from [firebase.json](./firebase.json), [firebase-hosting-deploy.yml](./.github/workflows/firebase-hosting-deploy.yml) to your firebase app id.
- Add `FIREBASE_SERVICE_ACCOUNT` to your repository's action secret.
  - [Configuration guide](https://github.com/marketplace/actions/deploy-to-firebase-hosting#firebaseserviceaccount-string-required)

## Getting Started

```sh
# Install dependencies
$ yarn
# Launch Next.js dev server
$ yarn start
# Launch Expo Web Application
$ yarn web
# Launch Expo Android Application
$ yarn android
# Launch Expo iOS Application
$ yarn ios
# Build Static Site from Next.js
$ yarn build
# Run test cases
$ yarn test
# Format and fix codes
$ yarn lint
```
