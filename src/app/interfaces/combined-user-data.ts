import { DetailedUser } from "./detailed-user";
import { Repository } from "./repository";
import { Social } from "./social";
import { UserStat } from "./user-stat";

export interface CombinedUserData {
  user: DetailedUser;
  repos: Repository[];
  socials: Social[];
  userStats: UserStat[]
}
