import { CourtWhereInput } from "./CourtWhereInput";
import { CourtOrderByInput } from "./CourtOrderByInput";

export type CourtFindManyArgs = {
  where?: CourtWhereInput;
  orderBy?: Array<CourtOrderByInput>;
  skip?: number;
  take?: number;
};
