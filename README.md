# rntsmobx mobile project

## iOS build status (Development/Production)

[![Development status](https://build.appcenter.ms/v0.1/apps/05cb5ba2-1d53-439d-ae5a-f34f281827ce/branches/develop/badge)](https://appcenter.ms/orgs/rntsmobx/apps/rntsmobx/build/branches/develop) [![Production status](https://build.appcenter.ms/v0.1/apps/05cb5ba2-1d53-439d-ae5a-f34f281827ce/branches/production/badge)](https://appcenter.ms/orgs/rntsmobx/apps/rntsmobx/build/branches/production)

## Android build status (Development/Production)

[![Development status](https://build.appcenter.ms/v0.1/apps/ff5f5a23-a243-4e09-9d8e-267e38c4e7a7/branches/develop/badge)](https://appcenter.ms/orgs/rntsmobx/apps/rntsmobxAndroid/build/branches/develop) [![Production status](https://build.appcenter.ms/v0.1/apps/ff5f5a23-a243-4e09-9d8e-267e38c4e7a7/branches/production/badge)](https://appcenter.ms/orgs/rntsmobx/apps/rntsmobxAndroid/build/branches/production)

## Setup

- install xcode && android studio

- install cocoapods

```sh
$ sudo gem install cocoapods
```

- run setup

```sh
$ yarn install
```

- read more for getting started: https://facebook.github.io/react-native/docs/getting-started.html

## Run in simulators & devices

- run in ios

```sh
$ yarn ios
```

- run in android

```sh
$ yarn android
```

## Other commands

- start a bundle server and reset all cache

```sh
$ npm start -- --reset-cache
```

- reverse tpc

```sh
$ adb reverse tcp:8081 tcp:8081
```
