# Como crear un proyecto en React

## Crear una App con React:

npm create vite

npm create vite@5.2.3

√ Project name: ... 01-Intro
√ Package name: ... 01-intro
? Select a framework: » - Use arrow-keys. Return to submit.

```bash
Vanilla
Vue
>React
Preact
Lit
Svelte
Solid
Qwik
Others
```

? Select a variant: » - Use arrow-keys. Return to submit.

```bash
>TypeScript
TypeScript + SWC
JavaScript
JavaScript + SWC
Remix ↗
```

Done. Now run:

```
cd 01-Intro
npm install
npm run dev
```

## Componentes:

1. Ir a SRC
2. Eliminar todo el contenido del archivo
3. Remplazar por esto:

   ```typescript
   function App() {
     return <p>Hola Mundo!</p>;
   }

   export default App;
   ```

4. Remplazar mundo por una variable:

   ```typescript
   function App() {
     const name = "Luna";
     return <p>Hola {name}!</p>;
   }

   export default App;
   ```

5. Remplazar para ver las posibilidades que nos da ReactJS:

   ```typescript
   function App() {
     const name = "Luna";
     if (name) {
       return <p>Hola {name}!</p>;
     } else {
       return <p>Hola desconocido!</p>;
     }
   }

   export default App;
   ```

6. Crear un archivo llamado titulo dentro de SRC:

   Ahora tenemos 2 archivos, pero muestran el mismo resultado que antes, porque estoy llamando a uno desde el otro.

   Titulo.tsx

   ```typescript
   function Titulo() {
     const name = "Luna";
     if (name) {
       return <h1>Hola {name}!</h1>;
     }
     return <h1>Hola desconocido!</h1>;
   }

   export default Titulo;
   ```

   App.tsx

   ```typescript
   import Titulo from "./Titulo";

   function App() {
     return <Titulo />;
   }

   export default App;
   ```
