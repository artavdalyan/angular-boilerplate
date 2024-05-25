export interface UserMockData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
}
export const usersData: UserMockData[] = [
  {
    id: '1',
    firstName: 'Mohammed',
    lastName: 'Ahmed',
    email: 'mohammed@kafd.sa',
    phone: '966500000001',
    role: 'Visitor',
  },
  {
    id: '2',
    firstName: 'Fatima',
    lastName: 'Ali',
    email: 'fatima@kafd.sa',
    phone: '966500000002',
    role: 'Visitor',
  },
  {
    id: '3',
    firstName: 'Abdul Rahman',
    lastName: 'Abdullah',
    email: 'abdulrahman@kafd.sa',
    phone: '966500000003',
    role: 'Visitor',
  },
  {
    id: '4',
    firstName: 'Noura',
    lastName: 'Mohammed',
    email: 'noura@kafd.sa',
    phone: '966500000004',
    role: 'Tenant',
  },
  {
    id: '5',
    firstName: 'Ahmed',
    lastName: 'Saeed',
    email: 'ahmed@kafd.sa',
    phone: '966500000005',
    role: 'Tenant',
  },
  {
    id: '6',
    firstName: 'Lama',
    lastName: 'Khalid',
    email: 'lama@kafd.sa',
    phone: '966500000006',
    role: 'Tenant',
  },
  {
    id: '7',
    firstName: 'Yasser',
    lastName: 'Ibrahim',
    email: 'yasser@kafd.sa',
    phone: '966500000007',
    role: 'Tenant',
  },
  {
    id: '8',
    firstName: 'Mona',
    lastName: 'Abdulaziz',
    email: 'mona@kafd.sa',
    phone: '966500000008',
    role: 'Tenant',
  },
  {
    id: '9',
    firstName: 'Abdulaziz',
    lastName: 'Fahad',
    email: 'abdulaziz@kafd.sa',
    phone: '966500000009',
    role: 'Tenant',
  },
  {
    id: '10',
    firstName: 'Aisha',
    lastName: 'Sultan',
    email: 'aisha@kafd.sa',
    phone: '966500000010',
    role: 'Tenant',
  },
];

export interface NotificationMockData {
  title: string;
  conditions: string;
  message: string;
}

export const notificationsData: NotificationMockData[] = [
  {
    title: 'New Service Opening',
    conditions: 'Tenants',
    message: 'A new fitness center is now open! Enjoy exclusive discounts.',
  },
  {
    title: 'Shuttle Bus Options',
    conditions: 'Visitors',
    message: 'Explore our shuttle bus options for convenient transportation.',
  },
  {
    title: 'Maintenance Alert',
    conditions: 'Tenants',
    message: 'Scheduled maintenance activity on May 25th, 09:00 - 12:00.',
  },
  {
    title: 'Community Event',
    conditions: 'Visitors, Tenants',
    message: 'Join us for a movie night at the community center on May 25th.',
  },
];
