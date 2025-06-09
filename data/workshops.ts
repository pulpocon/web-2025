import type { Workshop } from '~/data/typings'


import tbdWorkshopBackend01 from '~/data/workshops/tbd-workshop-backend-01';
import tbdWorkshopNewbie01 from '~/data/workshops/tbd-workshop-newbie-01';
import tbdWorkshopNewbie02 from '~/data/workshops/tbd-workshop-newbie-02';
import tbdWorkshopNewbie03 from '~/data/workshops/tbd-workshop-newbie-03';
import tbdWorkshopExpert01 from '~/data/workshops/tbd-workshop-expert-01';
import tbdWorkshopExpert02 from '~/data/workshops/tbd-workshop-expert-02';
import tbdWorkshopExpert03 from '~/data/workshops/tbd-workshop-expert-03';
import tbdWorkshopFrontend01 from '~/data/workshops/tbd-workshop-frontend-01';
import tbdWorkshopDevops01 from '~/data/workshops/tbd-workshop-devops-01';
import tbdWorkshopManagement01 from '~/data/workshops/tbd-workshop-management-01';
import tbdWorkshopBackend02 from '~/data/workshops/tbd-workshop-backend-02';
import tbdWorkshopFrontend02 from '~/data/workshops/tbd-workshop-frontend-02';
import tbdWorkshopDevops02 from '~/data/workshops/tbd-workshop-devops-02';
import tbdWorkshopManagement02 from '~/data/workshops/tbd-workshop-management-02';
import tbdWorkshopBackend03 from '~/data/workshops/tbd-workshop-backend-03';
import tbdWorkshopFrontend03 from '~/data/workshops/tbd-workshop-frontend-03';
import tbdWorkshopDevops03 from '~/data/workshops/tbd-workshop-devops-03';
import tbdWorkshopManagement03 from '~/data/workshops/tbd-workshop-management-03';
import tbdFiresideChat from '~/data/workshops/tbd-fireside-chat';


export default {

  'tbd-workshop-backend-01': tbdWorkshopBackend01,
  'tbd-workshop-frontend-01': tbdWorkshopFrontend01,
  'tbd-workshop-devops-01': tbdWorkshopDevops01,
  'tbd-workshop-management-01': tbdWorkshopManagement01,
  'tbd-workshop-backend-02': tbdWorkshopBackend02,
  'tbd-workshop-frontend-02': tbdWorkshopFrontend02,
  'tbd-workshop-devops-02': tbdWorkshopDevops02,
  'tbd-workshop-management-02': tbdWorkshopManagement02,
  'tbd-workshop-backend-03': tbdWorkshopBackend03,
  'tbd-workshop-frontend-03': tbdWorkshopFrontend03,
  'tbd-workshop-devops-03': tbdWorkshopDevops03,
  'tbd-workshop-management-03': tbdWorkshopManagement03,
  'tbd-workshop-newbie-01': tbdWorkshopNewbie01,
  'tbd-workshop-newbie-02': tbdWorkshopNewbie02,
  'tbd-workshop-newbie-03': tbdWorkshopNewbie03,
  'tbd-workshop-expert-01': tbdWorkshopExpert01,
  'tbd-workshop-expert-02': tbdWorkshopExpert02,
  'tbd-workshop-expert-03': tbdWorkshopExpert03,
  'tbd-fireside-chat': tbdFiresideChat,
} as Record<string, Workshop>
