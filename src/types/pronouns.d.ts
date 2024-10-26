type PronounSet = {
  id: string;
  label: string;
  wavering: boolean;
  protected: boolean;
} & ({
  subject: string;
  object: string;
  possessive: string;
  possessivePronoun: string;
  reflexive: string;
  reflexivePronoun: string;
  plural: boolean;
} | {
  inherits: Array<string>;
});

type PronounsUser = {
  username: string;
  pronounSets: PronounSet["id"][];
  lastUpdated: string;
};
