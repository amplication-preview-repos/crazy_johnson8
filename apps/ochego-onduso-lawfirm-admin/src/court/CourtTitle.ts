import { Court as TCourt } from "../api/court/Court";

export const COURT_TITLE_FIELD = "id";

export const CourtTitle = (record: TCourt): string => {
  return record.id?.toString() || String(record.id);
};
