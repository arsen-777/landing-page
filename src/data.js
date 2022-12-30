import { ReactComponent as invoice } from './assets/images/one.svg';
import { ReactComponent as source } from './assets/images/two.svg';
import { ReactComponent as manage } from './assets/images/xx.svg';
import { ReactComponent as frame } from './assets/images/frame.svg';
import { ReactComponent as mask } from './assets/images/five.svg';
import { ReactComponent as chart } from './assets/images/yy.svg';
import { ReactComponent as check } from './assets/images/approve.svg';
import { ReactComponent as logo2 } from './assets/images/logo2.svg';

export const data = [
  {
    id: 1,
    title: 'Monthly',
    amount: '$4.99',
    number: '$2.49',
    peruser: 'per user/month',
    monthly: [
      { id: 1, title: '14-day Free Trial' },
      { id: 2, title: 'Access to All Features' },
      { id: 3, title: '24/7 Support' },
    ],
  },
  {
    id: 2,
    title: 'Yearly',
    amount: '$4.09',
    number: '$2.05',
    peruser: 'per user/month',
    monthly: [
      { id: 1, title: '14-day Free Trial' },
      { id: 2, title: 'Access to All Features' },
      { id: 3, title: '24/7 Support' },
    ],
  },
];

export const list = [
  { id: 1, title: 'Time Tracking with Screenshots', icon: invoice },
  { id: 2, title: 'Productivity Monitoring', icon: mask },
  { id: 3, title: 'Task Management', icon: manage },
  { id: 4, title: 'Communication Channels', icon: frame },
  { id: 5, title: 'HR Tools', icon: source },
  { id: 6, title: 'Online Reports', icon: chart },
];

export const formList = [
  { id: 1, title: '4 Screenshot Modes', icon: check },
  { id: 2, title: 'Idle Time Tracking', icon: check },
  { id: 3, title: 'Synchronized Tracking', icon: check },
  { id: 4, title: 'Billable Hours', icon: check },
];

// export const companies = [
//   { id: 1, icon: logo2 },
//   { id: 2, icon: logo2 },
//   { id: 3, icon: logo2 },
//   { id: 4, icon: logo2 },
//   { id: 5, icon: logo2 },
//   { id: 6, icon: logo2 },
//   { id: 7, icon: logo2 },
//   { id: 8, icon: logo2 },
//   { id: 9, icon: logo2 },
// ];
