# API Routes Directory

### Overview this is the directory for all the API calls

## Login
```
/api/login/
    .post - login requires email and password as body
    .get - logout
```

## User Info
```
/api/user/
    .get - find all user
    .post - create new user

/api/user/:id
    .get - find user by ID
    .put - update user info
    .delete - remoce user from the db
```

## Account Info
```
/api/account/
    .get - find all account from all user (not used, should be protected as admin)

/api/account/:id
    .get - find account info by ID
    .post - push new account info into user db by ID
    .put - update account info
    .delete - remove account info from the db