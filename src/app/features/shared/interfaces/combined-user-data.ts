import { DetailedUser } from "./detailed-user";
import { Repository } from "./repository";
import { User as githubUser } from "./user";

export interface CombinedUserData {
  user: DetailedUser;
  repos: Repository[];
  followers: githubUser[];
  following: githubUser[];
}
