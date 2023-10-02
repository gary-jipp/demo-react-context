# React Context Demo

- Prop Drilling
- React Hooks
- Context API
- Context Providers
- Shared State
- Interface vs Implementation Functions !!

- Simple Auth / Login App
- Demonstrates Context Providers and useContext
- accepts any username / email address & password
- creates a dummy userId for the newly logged in user
- sets `auth` state if logged in and shows User Info if auth=true

- uses `CounterProvider` component to wrap `<Info>` and `<Login`> in `Appjs`
- uses `AuthProvider` component to wrap `<App>` in `index.js`

- Do not  share "interface" functions: `setCounter(), setUser()`.
- Only share "implementation" functions:  `increment(), clear(), login()`
- Can share state primitives, just don't share their `setState` functions
- Its generally "OK" to share more complex state objects eg `user`
- Sharing a function is better: `isloggedIn(), getUserName()`
- Avoid deeply nested State.  eg: No `state` object
- Keep your state as flat as possible