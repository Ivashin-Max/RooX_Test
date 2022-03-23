import { User } from "./queries";

export interface UserCardProps {
  user: User,
  onClick?: () => void,
}

export interface MyFormProps {
  user: User,
  disabled: boolean
}


