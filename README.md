# React Context Demo

- Simple Auth / Login App
- Demonstrates Context Providers and useContext
- accepts any username / email address & password
- creates a dummy userId for the newly logged in user
- sets state to logged in and shows User Info with logout buttom
- uses AuthProvider component to wrap <App> in index.js
- authContext exposes auth functions and state

```
// auth=false
  <App>
    <Login/>
  </App>

// auth=true
  <App>
    <Info/>
  </App>

```
