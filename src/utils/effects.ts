export const initializeMagneticEffect = () => {
  const buttons = document.querySelectorAll('.magnetic-btn');

  buttons.forEach(button => {
    button.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = (button as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100;

      if (distance < maxDistance) {
        const moveX = (x / maxDistance) * 10;
        const moveY = (y / maxDistance) * 10;
        (button as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });

    button.addEventListener('mouseleave', () => {
      (button as HTMLElement).style.transform = 'translate(0, 0)';
    });
  });
};

export const initializeTextGlitch = () => {
  const glitchElements = document.querySelectorAll('.glitch-text');

  glitchElements.forEach(element => {
    const text = element.textContent || '';
    const spans = text.split('').map(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.animation = `glitch-char ${Math.random() * 2 + 1}s infinite`;
      return span;
    });

    element.innerHTML = '';
    spans.forEach(span => element.appendChild(span));
  });
};

export const initializeMouseTrail = () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'mouse-trail-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '0';
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
  }> = [];

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    for (let i = 0; i < 3; i++) {
      particles.push({
        x: mouseX,
        y: mouseY,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 1,
        maxLife: 1,
      });
    }
  });

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      p.life -= 0.02;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.globalAlpha = p.life;
      ctx.fillStyle = '#00FF41';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  };

  animate();
};

export const initializeParallaxScroll = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
      const scrollY = window.scrollY;
      const speed = parseFloat((element as HTMLElement).getAttribute('data-parallax') || '0.5');
      const elementPosition = (element as HTMLElement).offsetTop;
      const distance = scrollY - elementPosition;

      if (distance > -window.innerHeight && distance < window.innerHeight) {
        (element as HTMLElement).style.transform = `translateY(${distance * speed}px)`;
      }
    });
  });
};

export const initializeScrollReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-text');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }
  );

  document.querySelectorAll('[data-reveal]').forEach(element => {
    observer.observe(element);
  });
};

export const initializeFloatingElements = () => {
  const floatingElements = document.querySelectorAll('[data-float]');

  floatingElements.forEach((element, index) => {
    const delay = index * 0.2;
    (element as HTMLElement).style.animation = `floatingText 3s ease-in-out infinite`;
    (element as HTMLElement).style.animationDelay = `${delay}s`;
  });
};

export const initializeGlowOnScroll = () => {
  const glowElements = document.querySelectorAll('[data-glow]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('border-glow');
      }
    });
  });

  glowElements.forEach(element => observer.observe(element));
};

export const initializeAllEffects = () => {
  initializeMagneticEffect();
  initializeTextGlitch();
  initializeMouseTrail();
  initializeParallaxScroll();
  initializeScrollReveal();
  initializeFloatingElements();
  initializeGlowOnScroll();
};
