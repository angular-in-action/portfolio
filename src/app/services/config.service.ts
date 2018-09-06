export class ConfigService {
  private _api: string;

  public static set(property, value) {
    this['_' + property] = value;
  }

  public static get(property) {
    return this['_' + property];
  }
}
