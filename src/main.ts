import { Firebot } from "@crowbartools/firebot-custom-scripts-types";
import { initModules, logger } from "@oceanity/firebot-helpers/firebot";
import { PronounsPlusService } from "./pronouns";
import * as packageJson from "../package.json";
import { AllPronounsPlusVariables } from "./firebot/variables";

export const {
  name: namespace,
  displayName: name,
  description,
  author,
  version
} = packageJson;

interface Params { }

export let pronounsPlus: PronounsPlusService;

const script: Firebot.CustomScript<Params> = {
  getScriptManifest: () => {
    return {
      name,
      description,
      author,
      version,
      firebotVersion: "5",
    };
  },
  getDefaultParameters: () => {
    return {
    };
  },
  run: (runRequest) => {
    initModules(runRequest.modules);

    pronounsPlus = new PronounsPlusService();

    for (const variable of AllPronounsPlusVariables) {
      runRequest.modules.replaceVariableManager.registerReplaceVariable(variable);
    }

    logger.info("Finished initializing ")
  },
};

export default script;
