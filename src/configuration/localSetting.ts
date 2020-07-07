import AsyncStorage from "@react-native-community/async-storage";

class LocalSettings {
  constructor() {}

  get settingKey(): string {
    return "initApp";
  }

  public async save(): Promise<void> {
    let jsonString = "";
    jsonString = JSON.stringify(this);
    await AsyncStorage.setItem(this.settingKey, jsonString);
  }

  public async load(): Promise<void> {
    const jsonString = await AsyncStorage.getItem(this.settingKey);
    const jsonObject = jsonString ? JSON.parse(jsonString) : "";
    Object.assign(this, jsonObject);
  }
}

const instance = new LocalSettings();
export { instance as LocalSetting };
