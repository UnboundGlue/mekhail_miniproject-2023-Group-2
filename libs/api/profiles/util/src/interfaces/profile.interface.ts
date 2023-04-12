import { Timestamp } from 'firebase-admin/firestore';
import { IContactDetails } from './contact-details.interface';
import { IPersonalDetails } from './personal-details.interface';
import { AgeGroup, Gender } from '../enums';

export interface IProfile {
  UID?: string;
  TimeRemaining?: Int16Array; 
  RecentlyActive?: boolean | null | undefined;
  Gender?: Gender | null | undefined;
  Age?: AgeGroup | null | undefined;
  Hobby?: string[] | null | undefined;
  Name?: IPersonalDetails | null | undefined;
  ContactDetails?: IContactDetails | null | undefined;
  created?: Timestamp | null | undefined;
}
