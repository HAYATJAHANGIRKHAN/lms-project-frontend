# LMS Frontend

### Setup instruction

1. Clone the project

```
   git clone gh repo clone https://github.com/HAYATJAHANGIRKHAN/lms-project-frontend.git

```

```
2. Move into the directory
```

cd lms-project-frontend

```
3. install dependencies
```

nmp i

```
4. run the server
```

5.npm run dev

### setup instructions for tailwind

[Tailwind official instruction doc](https://tailwind.css/docs/installation)

1. Install Tailwindcss

```
npm install -D tailwindcss
```

2.Create tailwind config file

```
npx tailwindcss init
```

3.Add file extensions to tailwind config file in the content property

```
"./src/**/*.{js,jsx,ts,tsx}"
```

4. Add the tailwind directives at the top of the `index.css` file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Adding plugins and dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

```

### Configure auto import sort esline

1.Install simple import sort

```
npm i eslint-plugin-simple-import-sort
```

2.Add rule in `.eskint.cjs`

```
 'simple-import-sort/imports': 'error'
```

3.Add simple -import sort plugin in `.eskint.cjs`

```
 plugins: ['...', 'simple-import-sort']
```
4. To enable auto import sort on file save in vscode

-open `settings.json` [setting-Search-settings-edit in settings.json]
-add the following config
```
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true 
    }
```