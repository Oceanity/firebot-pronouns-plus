import DbService from "@oceanity/firebot-helpers/db";
import { PronounsPlusDefaults, PronounsPlusOptions, PronounsPlusService } from ".";
import { resolve } from "path";

export class PronounsPlusSetsService {
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
}