import { HearingWhereInput } from "./HearingWhereInput";
import { HearingOrderByInput } from "./HearingOrderByInput";

export type HearingFindManyArgs = {
  where?: HearingWhereInput;
  orderBy?: Array<HearingOrderByInput>;
  skip?: number;
  take?: number;
};
