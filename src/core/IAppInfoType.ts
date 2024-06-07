export const AppInfoType = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  INFO: 'INFO',
} as const;

export type IAppInfoType = keyof typeof AppInfoType;
