# Supermercado Máximo — Manual de Marca

Proyecto React + Vite con Bootstrap para presentar el Manual de Marca de Supermercado Máximo.

## 🚀 Cómo usar en GitHub Codespaces

### 1. Instalar dependencias
```bash
npm install
```

### 2. Modo desarrollo (para previsualizar)
```bash
npm run dev
```

### 3. Construir para producción (genera carpeta `dist`)
```bash
npm run build
```

## 📤 Publicar en GitHub Pages

1. Ejecuta `npm run build` — esto genera la carpeta `dist/`
2. Ve a **Settings** de tu repositorio en GitHub
3. Entra a **Pages** (menú lateral)
4. En **Source**, selecciona **Deploy from a branch**
5. Selecciona la rama `gh-pages` (o sube el contenido de `dist/` a la rama `main` en una carpeta `docs/`)

### Opción más fácil: gh-pages
```bash
npm install --save-dev gh-pages
```
Agrega en `package.json` dentro de `"scripts"`:
```json
"deploy": "gh-pages -d dist"
```
Luego:
```bash
npm run build
npm run deploy
```

## 📁 Estructura del proyecto

```
src/
├── componentes/       → Componentes de cada sección
│   ├── Navegacion.jsx
│   ├── Portada.jsx
│   ├── LaMarca.jsx
│   ├── ConceptoSimbologia.jsx
│   ├── Logotipo.jsx
│   ├── GamaCromatica.jsx
│   ├── Tipografia.jsx
│   ├── TamanoAreaReserva.jsx
│   ├── UsoCorrectoIncorrecto.jsx
│   ├── TonoContinuo.jsx
│   ├── Papeleria.jsx
│   ├── PatronTextural.jsx
│   └── PiePagina.jsx
├── estilos/           → CSS por componente
│   ├── global.css
│   ├── Navegacion.css
│   ├── Portada.css
│   └── Secciones.css
├── App.jsx
└── main.jsx
```

## 🎨 10 Secciones del Manual

1. **La Marca** — Descripción y valores de Supermercado Máximo
2. **Concepto y Simbología** — Origen del nombre e íconos
3. **Logotipo** — Variantes del logo
4. **Gama Cromática** — Paleta de colores oficial
5. **Tipografía** — Fuentes Syne y DM Sans
6. **Tamaño y Área de Reserva** — Normas de tamaño mínimo
7. **Uso Correcto e Incorrecto** — Aplicaciones permitidas y prohibidas
8. **Tono Continuo y Alto Contraste** — Versiones monocromáticas
9. **Papelería** — Tarjetas, bolsas, señalética, uniformes
10. **Patrón Textural** — Fondo repetido de marca
