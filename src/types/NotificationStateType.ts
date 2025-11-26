import type { NotificationLevelType } from "./NotificationLevelType.ts";

export interface NotificationStateType {
  notify: boolean;
  level: NotificationLevelType;
  message: string;
}
