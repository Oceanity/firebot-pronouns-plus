import { ReplaceVariable } from "@crowbartools/firebot-custom-scripts-types/types/modules/replace-variable-manager";

export const UserPronounsVariable: ReplaceVariable = {
  definition: {
    handle: "ppUserPronouns",
    description: "Pronouns+: Gets current pronouns of the user in the current event",
    usage: "ppUserPronouns",
    possibleDataOutput: ["text"],
    examples: [
      {
        usage: "ppUserPronouns[subject]",
        description: "Get subject pronouns of the user in the current event",
      },
      {
        usage: "ppUserPronouns[username]",
        description: "Get pronouns of specified user",
      },
      {
        usage: "ppUserPronouns[username, subject]",
        description: "Get subject pronouns of specified user",
      }
    ]
  },
  evaluator: async () => {
    return "";
  }
}