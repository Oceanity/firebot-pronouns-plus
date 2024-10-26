import { JsonDB } from "node-json-db";
import { resolve } from "path";
import { jsonDb, logger } from "@oceanity/firebot-helpers/firebot";
import { getErrorMessage } from "@oceanity/firebot-helpers/string";

type PronounsDbDefinition = {
  pronounSets: PronounSet[];
  users: PronounsUser[];
};

export class PronounDB {
  private readonly path: string;
  private readonly db: JsonDB;

  constructor(filePath: string = "./pronouns.json") {
    this.path = resolve(__dirname, filePath);
    //@ts-expect-error ts(18046)
    this.db = new jsonDb(this.path, true, false, "/");
  }

  public async getAsync<T>(path: string): Promise<T | undefined> {
    try {
      const result = (await this.db.getData(path)) as T | undefined;
      return result;
    } catch (error) {
      logger.error(getErrorMessage(error), error);
      return undefined;
    }
  }
}
