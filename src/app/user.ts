import { Timestamp } from "rxjs";

export interface User {
  id               : number;
  username         : string;
  password         : string;
  role             : string;
  registration_date: Date;
  total_progress   : string;
}
