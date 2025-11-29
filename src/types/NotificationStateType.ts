import type { NotificationLevelType } from "./NotificationLevelType.ts";

export interface NotificationStateType {
  id: string;
  level: NotificationLevelType;
  message: string;
}
