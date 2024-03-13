const managersTier1 = [
  [{ id: 1, name: 'Jack Nest', tier: 1 }],
  [{ id: 2, name: 'Phil Knight', tier: 1 }],
];

const managersTier2 = [
  [{ id: 3, name: 'John Doe', managerId: 1, tier: 2 }],
  [
    { id: 4, name: 'Rick Lovell', managerId: 2, tier: 2 },
    { id: 5, name: 'Sean Smith', managerId: 2, tier: 2 },
  ],
];

const managersTier3 = [
  [{ id: 6, name: 'John Doe', managerId: 3, tier: 3 }],
  [
    { id: 7, name: 'Rick Lovell', managerId: 4, tier: 3 },
    { id: 8, name: 'Sean Smith', managerId: 5, tier: 3 },
  ],
];
export const tiers = [managersTier1, managersTier2, managersTier3];

export const testProfile = { id: 5, name: 'Heather Smith', managerId: 1 };
