import { PronounsPlusUsersService } from "./users-service";
import { PronounsPlusSetsService } from "./sets-service";

export interface PronounsPlusOptions {
  db: {
    path: string;
    usersFileName: string;
    setsFileName: string;
    saveOnWrite: boolean;
    humanReadable: boolean;
  }
}

export const PronounsPlusDefaults: PronounsPlusOptions = Object.freeze({
  db: {
    path: "./db/oceanity/pronounsPlus",
    usersFileName: "./users.json",
    setsFileName: "./sets.json",
    saveOnWrite: true,
    humanReadable: true
  }
});

export class PronounsPlusService {
  public readonly users: PronounsPlusUsersService;
  public readonly sets: PronounsPlusSetsService;

  constructor(options: Partial<PronounsPlusOptions> = {}) {
    this.users = new PronounsPlusUsersService(this, options);
    this.sets = new PronounsPlusSetsService(this, options);
  }
}