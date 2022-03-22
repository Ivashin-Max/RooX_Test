import { User } from "./queries";

export interface UserCardProps {
  user: User,
  onClick?: (user: User) => void,
}

