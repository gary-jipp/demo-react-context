# React Context Demo

- Simple Auth / Login App

- accepts any username / email address & password
- creates a dummy userId for the newly logged in user
- sets `auth` state to logged in and shows User Info with logout button

```
--- auth=false
  <App>
    <Login/>
      <Counter/>
  </App>

--- auth=true
  <App>
    <Info/>
      <Counter/>
  </App>
  
```
