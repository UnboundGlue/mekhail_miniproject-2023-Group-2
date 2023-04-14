import { Timestamp } from 'firebase-admin/firestore';
import { IContactDetails } from './contact-details.interface';
import { IPersonalDetails } from './personal-details.interface';
import { AgeGroup, Gender } from '../enums';

export interface IProfile {
  UID: string;
  TimeRemaining?: number | null | undefined; 
  RecentlyActive?: boolean | null | undefined;
  Gender?: string | null | undefined;
  Age?: string | null | undefined;
  Hobby?: string[] | null | undefined;
  Major? : string | null | undefined;
  Name?: IPersonalDetails | null | undefined;
  ContactDetails?: IContactDetails | null | undefined;
  Created?: Timestamp | null | undefined;
}
