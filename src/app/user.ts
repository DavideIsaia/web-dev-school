import { Timestamp } from "rxjs";

export interface User {
  id               : number;
  username         : string;
  password         : string;
  role             : string;
  registration_date: Date;
  actual_state     : string;
  total_progress   : number;
}
