Go to vite website and install vite with npm or yarn.

# Install tailwind css

Go to tailwind css website and follow installation for vite & react

# Install react-router-dom

npm install react-router-dom or yarn add react-router-dom

# Import and use react-router-dom in your project

```javascript
import { createBrowserRouter, Link, NavLink, Outlet } from "react-router-dom";
//we use Link and NavLink  in place of the <a> anchor tag
```

createBrowserRouter is just a function that takes in an array of routes.. these routes are objects that have a path and a element. The path is the url that the user will navigate to

```javascript
const router = createBrowserRouter([
  { path: "", element: <App />, children: [{ path, elements }] },
]);
```
