/* tslint:disable */
import { Dress } from './dress';
import { DressOrder } from './dress-order';
import { Favorites } from './favorites';
export interface User {
  normalizedEmail?: string;
  firstName: string;
  userAddress: string;
  loyaltyPoints?: number;
  dress?: Array<Dress>;
  dressOrder?: Array<DressOrder>;
  favorites?: Array<Favorites>;
  id?: string;
  userName?: string;
  normalizedUserName?: string;
  email?: string;
  lastName: string;
  emailConfirmed?: boolean;
  passwordHash?: string;
  securityStamp?: string;
  concurrencyStamp?: string;
  phoneNumber?: string;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  lockoutEnd?: string;
  lockoutEnabled?: boolean;
  accessFailedCount?: number;
}
