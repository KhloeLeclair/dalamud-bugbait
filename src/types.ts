export interface Env {
  OPENAI_TOKEN: string;
  AVATAR_PEPPER: string;
  DEFAULT_WEBHOOK: string;
}

// Based on FeedbackModel from
// https://github.com/goatcorp/Dalamud/blob/master/Dalamud/Support/BugBait.cs#L55
export type Feedback = {
  content: string | null;
  name: string | null;
  dhash: string | null;
  version: string | null;
  reporter: string | null;
  exception: string | null;
};

// To make working with this easier, once we've confirmed
// these values aren't null we can switch the type to this.
export type ConcreteFeedback = Feedback & {
  content: string;
  name: string;
  dhash: string;
  version: string;
};


export type PluginManifest = {
  Name: string;
  AcceptsFeedback: boolean;
  FeedbackUrl: string | null;
  IconUrl: string | null;
};
