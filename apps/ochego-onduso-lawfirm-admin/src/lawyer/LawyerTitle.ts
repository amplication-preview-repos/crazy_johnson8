import { Lawyer as TLawyer } from "../api/lawyer/Lawyer";

export const LAWYER_TITLE_FIELD = "id";

export const LawyerTitle = (record: TLawyer): string => {
  return record.id?.toString() || String(record.id);
};
