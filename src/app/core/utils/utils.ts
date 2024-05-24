import { cloneDeep, isObject } from 'lodash-es';

export class Utils {
  static cleanNullables(obj: Record<string, any>): Record<string, any> {
    obj = cloneDeep(obj);

    for (const key of Object.keys(obj)) {
      const value: unknown = obj[key];

      if (isObject(value)) {
        obj[key] = Utils.cleanNullables(value);
      }

      if (obj[key] == null || obj[key] === '' || obj[key] === undefined) {
        delete obj[key];
      }
    }

    return obj;
  }
}
