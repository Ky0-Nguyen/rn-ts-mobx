// @flow
import dev from "./env-configs/dev";
import prod from "./env-configs/prod";
import qa from "./env-configs/qa";
import uat from "./env-configs/uat";
import dev1 from "./env-configs/dev-1";

import { LocalSetting } from "./localSetting";
import get from "lodash/get";

const config = {
  dev,
  qa,
  uat,
  prod,
  dev1,
};

class Configuration {
  public hasInitialized: boolean = false;
  public config: any;
  public env: EnvironmentType = "prod";

  public async initialize(env: EnvironmentType): Promise<void> {
    if (!this.hasInitialized) {
      await LocalSetting.load();
      this.config = config[env];
      this.env = env;
      this.hasInitialized = true;
    }
  }
}

const instance = new Configuration();
export { instance as Configuration };
