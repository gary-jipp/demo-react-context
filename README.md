# React Context Demo

- Simple Auth / Login App
- Demonstrates Context Providers and useContext
- accepts any username / email address & password
- creates a dummy userId for the newly logged in user
- sets state to logged in and shows User Info with logout buttom
- uses AuthProvider component to wrap <App> in index.js
- authContext exposes auth functions and state

```
--- auth=false
<AuthProvider>
  <App>
    <Login/>
  </App>
</AuthProvider>

--- auth=true
<AuthProvider>
  <App>
    <Info/>
  </App>
</AuthProvider>

```
