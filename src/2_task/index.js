const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise((res) => {
        return res(allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
        ));
    })
};

const logger = toggleUserState => console.table(toggleUserState);


toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);