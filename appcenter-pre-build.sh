#!/usr/bin/env bash
# echo "Uninstalling all CocoaPods versions"
# gem uninstall cocoapods --all --executables
# echo "Installing CocoaPods version 1.8.4"
# gem install cocoapods -v 1.8.4

cd ./android
./gradlew clean
cd ..
cat ./src/configuration/env-configs/prod.ts

if [ "$APPCENTER_BRANCH" == "develop" ];
then
    sed 's/host\: .*/host\: `http:\/\/[SUB_DOMAIN].qa.rntsmobx.com\/api`,/g' ./src/configuration/env-configs/prod.ts > ./tmp.ts && mv ./tmp.ts ./src/configuration/env-configs/prod.ts
    sed 's/buildEnv\: .*/buildEnv\: "dev",/g' ./src/configuration/env-configs/prod.ts > ./tmp.ts && mv ./tmp.ts ./src/configuration/env-configs/prod.ts
    sed 's/mixpanel_token\: .*/mixpanel_token\: "4f3cfa3706d9ca0747c664a87c7415f1",/g' ./src/configuration/env-configs/prod.ts > ./tmp.ts && mv ./tmp.ts ./src/configuration/env-configs/prod.ts
fi

if [ "$APPCENTER_BRANCH" == "pre-production" ];
then
    sed 's/host\: .*/host\: `http:\/\/[SUB_DOMAIN].stag.rntsmobx.com\/api`,/g' ./src/configuration/env-configs/prod.ts > ./tmp.ts && mv ./tmp.ts ./src/configuration/env-configs/prod.ts
    sed 's/mixpanel_token\: .*/mixpanel_token\: "4f3cfa3706d9ca0747c664a87c7415f1",/g' ./src/configuration/env-configs/prod.ts > ./tmp.ts && mv ./tmp.ts ./src/configuration/env-configs/prod.ts
fi

if [ "$APPCENTER_BRANCH" == "production" ];
then
    sed 's/host\: .*/host\: `https:\/\/[SUB_DOMAIN].rntsmobx.com\/api`,/g' ./src/configuration/env-configs/prod.ts > ./tmp.ts && mv ./tmp.ts ./src/configuration/env-configs/prod.ts
    sed 's/buildEnv\: .*/buildEnv\: "prod",/g' ./src/configuration/env-configs/prod.ts > ./tmp.ts && mv ./tmp.ts ./src/configuration/env-configs/prod.ts
    sed 's/mixpanel_token\: .*/mixpanel_token\: "7e3ee6a6a6cb0da0a3d8c7893b04d18d",/g' ./src/configuration/env-configs/prod.ts > ./tmp.ts && mv ./tmp.ts ./src/configuration/env-configs/prod.ts
fi

cat ./src/configuration/env-configs/prod.ts