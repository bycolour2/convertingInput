<h1 align='center'>Vite + React + TypeScript + Eslint + Prettier Template ⚡</h1>

Create a new project with Vite, React JS, TypeScript, Eslint, Prettier in just 1 second and you don't need to setup anything.

![image](https://user-images.githubusercontent.com/70432453/170648662-2ff424b9-74e9-4754-a04d-512fe1496a3b.png)

## **Some Features 📋**

Alias Import

![image](https://user-images.githubusercontent.com/70432453/170644457-ede03cca-44e9-4543-94d3-412c9d317063.png)

Hook Warning

![image](https://user-images.githubusercontent.com/70432453/170638708-23a20ffd-156e-494a-84be-b1e1cfdb5c93.png)

Prettier Warning

![image](https://user-images.githubusercontent.com/70432453/170639043-24423ed1-73cc-4730-b270-2acea1ae0c74.png)

Etc...

## **Using 📦**

1. Clone Template

```
git clone https://github.com/igdev116/vite-react-ts-eslint-prettier.git
```

2. Install Packages

```
npm install
```

3. Start Project

```
npm dev
```

4. If you using git, delete the existing folder .git after cloning (open `git bash` or other terminal)

```
rm -rf .git
```

## **Options ✍️**

1. Check lint

```
npm lint
```

2. Fix lint

```
npm lint:fix
```

3. Check prettier

```
npm prettier
```

4. Fix prettier

```
npm prettier:fix
```

5. Fix lint and prettier

```
npm format
```

#### **Adding tailwind**

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## add to tailwind config

```
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## add to index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### **prettier-plugin-tailwindcss**

```
// prettier.config.js
module.exports = {
  theme: {
// ...
},
  plugins: [
    require('prettier-plugin-tailwindcss')
  // ...
  ],
}
```

npm install -D prettier prettier-plugin-tailwindcss

#### **line-сlamp**

npm install -D @tailwindcss/line-clamp

## add to tailwind config

```
// tailwind.config.js
module.exports = {
theme: {
// ...
},
plugins: [
require('@tailwindcss/line-clamp'),
// ...
],
}
```

## Usage

Use the line-clamp-{n} utilities to specify how many lines of text should be visible before truncating:
