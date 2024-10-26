import DbService from "@oceanity/firebot-helpers/db";
import { PronounsPlusDefaults, PronounsPlusOptions, PronounsPlusService } from ".";
import { resolve } from "path";
import { Effects } from "@crowbartools/firebot-custom-scripts-types/types/effects";

export class PronounsPlusUsersService {
  private readonly _pronounsPlus: PronounsPlusService;
  private readonly _db: DbService;

  constructor(pronounsPlusService: PronounsPlusService, options: Partial<PronounsPlusOptions> = {}) {
    const { db: dbOpts } = options;
    const { db: dbDefaults } = PronounsPlusDefaults;

    this._pronounsPlus = pronounsPlusService;
    this._db = new DbService(
      resolve(
        dbOpts?.path ?? dbDefaults.path,
        dbOpts?.usersFileName ?? dbDefaults.usersFileName
      ),
      dbOpts?.saveOnWrite ?? dbDefaults.saveOnWrite,
      dbOpts?.humanReadable ?? dbDefaults.humanReadable
    );
  }

  public async getFromTrigger(trigger?: Effects.Trigger): Promise<Nullable<PronounsUser>> {
    if (!trigger) return undefined;

    if (trigger.metadata?.eventData?.username) {
      
    }

    return undefined;
  }
}