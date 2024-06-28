import { Hearing as THearing } from "../api/hearing/Hearing";

export const HEARING_TITLE_FIELD = "id";

export const HearingTitle = (record: THearing): string => {
  return record.id?.toString() || String(record.id);
};
