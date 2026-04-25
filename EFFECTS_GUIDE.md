# Guía de Efectos Visuales - Velogrow IA

Esta documentación describe todos los efectos CSS y JavaScript disponibles en el proyecto.

## Efectos CSS Disponibles

### 1. **Neon Glow Text**
Añade un efecto de brillo neón al texto.
```html
<h1 class="neon-glow-text">Tu Texto</h1>
```

### 2. **Hologram**
Crea un efecto de holograma con glow múltiple.
```html
<h2 class="hologram">Texto Holográfico</h2>
```

### 3. **Chrome Shine**
Efecto de brillo cromado que se desliza sobre elementos.
```html
<div class="chrome-shine">Contenido</div>
```

### 4. **Cyber Grid**
Añade un patrón de cuadrícula cibernética animada.
```html
<section class="cyber-grid">Contenido</section>
```

### 5. **Aurora Background**
Fondo con animación de aurora boreal.
```html
<section class="aurora-bg">Contenido</section>
```

### 6. **Glass Effect**
Efecto glassmorphism mejorado.
```html
<div class="glass-effect">Contenido Translúcido</div>
```

### 7. **Border Glow**
Borde con efecto de glow pulsante.
```html
<div class="border-glow">Contenido</div>
```

### 8. **Shimmer Text**
Efecto de destello en texto.
```html
<p class="shimmer-text">Texto Destellante</p>
```

### 9. **Rainbow Text**
Texto con gradiente arcoíris animado.
```html
<h3 class="rainbow-text">Texto Arcoíris</h3>
```

### 10. **Magnetic Button**
Botón con efecto magnético al pasar el mouse.
```html
<button class="magnetic-btn">Botón Magnético</button>
```

## Atributos de Datos para Efectos JavaScript

### 1. **data-glow**
Activa el efecto de glow al pasar el cursor.
```html
<div data-glow>Elemento con Glow</div>
```

### 2. **data-parallax**
Activa el efecto parallax. Especifica la velocidad (0-1).
```html
<div data-parallax="0.5">Parallax Normal</div>
<div data-parallax="0.3">Parallax Lento</div>
```

### 3. **data-reveal**
Revela el elemento al hacer scroll.
```html
<section data-reveal>Contenido Revelado</section>
```

### 4. **data-float**
Elemento flota con animación.
```html
<div data-float>Elemento Flotante</div>
```

## Clases de Efectos Avanzados

### Animaciones de Entrada
```html
<!-- Entrada escalonada (1-6 elementos) -->
<div class="stagger-item">Item 1</div>
<div class="stagger-item">Item 2</div>
<div class="stagger-item">Item 3</div>
```

### Efecto Wave
```html
<div class="wave-effect">Contenido con Onda</div>
```

### Efecto 3D Flip
```html
<div class="flip-3d">Elemento 3D</div>
```

## Efectos JavaScript

### initializeMagneticEffect()
Activa el efecto magnético en botones con clase `magnetic-btn`.

### initializeMouseTrail()
Crea un rastro de partículas siguiendo el mouse.

### initializeParallaxScroll()
Activa el efecto parallax basado en `data-parallax`.

### initializeScrollReveal()
Revela elementos al hacer scroll usando `data-reveal`.

### initializeFloatingElements()
Anima elementos flotantes usando `data-float`.

### initializeGlowOnScroll()
Activa efecto glow en elementos con `data-glow` al hacer scroll.

### initializeAllEffects()
Inicializa todos los efectos a la vez.

## Ejemplos de Uso Completo

### Tarjeta de Producto con Múltiples Efectos
```html
<article class="card chrome-shine" data-glow>
  <img src="..." alt="..." />
  <h3 class="neon-glow-text">Título del Producto</h3>
  <p>Descripción del producto</p>
  <button class="magnetic-btn">Ver Detalles</button>
</article>
```

### Sección de Héroe con Efectos
```html
<section class="aurora-bg" data-parallax="0.3">
  <h1 class="hologram">Bienvenido</h1>
  <button class="magnetic-btn chrome-shine">Comenzar</button>
</section>
```

### Elemento de Estadísticas
```html
<div class="glass-effect border-glow stagger-item">
  <h3 class="shimmer-text">Estadística</h3>
  <p data-float>Contenido flotante</p>
</div>
```

## Combinaciones Recomendadas

1. **Botones CTA**: `magnetic-btn` + `chrome-shine` + `neon-glow-text`
2. **Títulos**: `hologram` + `neon-glow-text`
3. **Tarjetas**: `glass-effect` + `border-glow` + `data-glow`
4. **Fondos**: `aurora-bg` + `cyber-grid`
5. **Elementos Especiales**: `shimmer-text` + `stagger-item`

## Notas de Rendimiento

- Los efectos están optimizados pero úsalos con moderación
- Evita aplicar más de 3-4 efectos simultáneamente a un mismo elemento
- Los efectos parallax funcionan mejor en secciones grandes
- El efecto de rastro del mouse (mouse trail) consume recursos; úsalo solo donde sea necesario

## Personalización

Todos los efectos usan variables CSS que pueden modificarse:

```css
:root {
    --gold: #D4AF37;
    --neon-green: #00FF41;
    --black: #050505;
}
```

Modifica estos valores en `src/index.css` para cambiar los colores de todos los efectos.
