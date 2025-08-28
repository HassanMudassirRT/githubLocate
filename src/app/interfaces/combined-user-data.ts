import { DetailedUser } from "./detailed-user";
import { Repository } from "./repository";
import { Social } from "./social";

export interface CombinedUserData {
  user: DetailedUser;
  repos: Repository[];
  socials: Social[];
}
