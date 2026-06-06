document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navbar-nav');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      if (window.innerWidth <= 768) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  });

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    updateParticleColors();
  });

  // Load Dark Mode Preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }

  // Terminal Typing Effect with Cursor
  const roles = [
    'I build modern Laravel apps.',
    'I teach tech with clarity.',
    'I automate health systems.'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById('typing-roles');

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
        return;
      }
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex++);
      if (charIndex > currentRole.length) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
      }
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }
  type();

  // Matrix Binary Effect
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const chars = '01';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(0);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(15, 15, 15, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#6BCB77';
    ctx.font = `${fontSize}px Orbitron`;

    drops.forEach((y, i) => {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    });
  }

  setInterval(drawMatrix, 50);

  window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    drops.length = Math.floor(canvas.width / fontSize);
    drops.fill(0);
  });

  // Update Particle Colors Based on Theme
  function updateParticleColors() {
    const particleColor = document.body.classList.contains('dark-mode') ? '#F8F8F8' : '#6BCB77';
    const lineColor = document.body.classList.contains('dark-mode') ? '#BFD7EA' : '#3A506B';

    particlesJS('particle-background', {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: particleColor },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: lineColor,
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 0.5 } },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });

    particlesJS('contact-particles', {
      particles: {
        number: { value: 30, density: { enable: true, value_area: 800 } },
        color: { value: particleColor },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: true },
        size: { value: 2, random: true },
        line_linked: {
          enable: true,
          distance: 120,
          color: lineColor,
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 150, line_linked: { opacity: 0.5 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }
  updateParticleColors();

  // Skill Filters and Progress Rings
  const skillFilters = document.querySelectorAll('.skill-filters .filter-btn');
  const branches = document.querySelectorAll('.tree-branch');
  skillFilters.forEach(button => {
    button.addEventListener('click', () => {
      skillFilters.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.getAttribute('data-filter');
      branches.forEach(branch => {
        if (filter === 'all' || branch.getAttribute('data-category') === filter) {
          branch.classList.remove('hidden');
        } else {
          branch.classList.add('hidden');
        }
      });
    });
  });

  // Skill Node Toggle and Progress Animation
  document.querySelectorAll('.skill-node').forEach(node => {
    const proficiency = node.getAttribute('data-proficiency');
    const circle = node.querySelector('.progress-ring__progress');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference - (proficiency / 100) * circumference;

    node.addEventListener('click', () => {
      const isExpanded = node.getAttribute('aria-expanded') === 'true';
      node.setAttribute('aria-expanded', !isExpanded);
    });
  });

  // Project Filters
  const projectFilters = document.querySelectorAll('.project-filters .filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  projectFilters.forEach(button => {
    button.addEventListener('click', () => {
      projectFilters.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.getAttribute('data-filter');
      projectItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // GitHub Repositories
  const repoList = document.getElementById('repo-list');
  fetch('https://api.github.com/users/utsavkarki/repos')
    .then(response => response.json())
    .then(data => {
      data.slice(0, 6).forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.classList.add('repo-card');
        repoCard.setAttribute('data-tilt', '');
        repoCard.setAttribute('data-tilt-max', '5');
        repoCard.setAttribute('data-tilt-speed', '400');
        repoCard.innerHTML = `
          <h4>${repo.name}</h4>
          <p>${repo.description ? repo.description.substring(0, 100) + (repo.description.length > 100 ? '...' : '') : 'No description'}</p>
          <div class="repo-stats">
            <span><span class="iconify" data-icon="mdi:star"></span>${repo.stargazers_count}</span>
            <span><span class="iconify" data-icon="mdi:source-fork"></span>${repo.forks_count}</span>
          </div>
          <a href="${repo.html_url}" target="_blank" aria-label="View ${repo.name} repository on GitHub">
            <span class="iconify" data-icon="mdi:github"></span> View Repo
          </a>
       `;
        repoList.appendChild(repoCard);
      });
      VanillaTilt.init(document.querySelectorAll('.repo-card'), {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.3
      });
    })
    .catch(error => {
      console.error('Error fetching GitHub repos:', error);
      repoList.innerHTML = '<p>Unable to load repositories at this time.</p>';
    });

  // Blog Posts
  const blogList = document.getElementById('blog-list');
  // Replace 'YOUR_BLOGGER_API_KEY' with your actual Blogger API key
  fetch('https://www.googleapis.com/blogger/v3/blogs/byurl?url=https://techdrophub.blogspot.com/&key=YOUR_BLOGGER_API_KEY')
    .then(response => response.json())
    .then(data => {
      const blogId = data.id;
      return fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?maxResults=3&key=YOUR_BLOGGER_API_KEY`);
    })
    .then(response => response.json())
    .then(data => {
      data.items.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        blogCard.setAttribute('data-tilt', '');
        blogCard.setAttribute('data-tilt-max', '5');
        blogCard.setAttribute('data-tilt-speed', '400');
        blogCard.innerHTML = `
          <h4>${post.title}</h4>
          <p>${post.content.replace(/<[^>]+>/g, '').substring(0, 100)}...</p>
          <a href="${post.url}" target="_blank" aria-label="Read ${post.title}">
            <span class="iconify" data-icon="mdi:book-open"></span> Read Post
          </a>
        `;
        blogList.appendChild(blogCard);
      });
      const showMoreCard = document.createElement('div');
      showMoreCard.classList.add('blog-card', 'show-more');
      showMoreCard.innerHTML = `
        <div class="show-more-content">
          <h4>Explore More</h4>
          <p>Read all my blog posts on TechDropHub.</p>
          <a href="https://techdrophub.blogspot.com" target="_blank" class="custom-btn emerald">Show More</a>
        </div>
      `;
      blogList.appendChild(showMoreCard);
      VanillaTilt.init(document.querySelectorAll('.blog-card'), {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.3
      });
    })
    .catch(error => {
      console.error('Error fetching blog posts:', error);
      blogList.innerHTML = '<p>Unable to load blog posts at this time.</p>';
    });

  // Testimonials Carousel
  const carousel = document.querySelector('.testimonials-carousel');
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  let currentIndex = 0;
  let interval;

  function updateCarousel() {
    track.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s';
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    track.style.opacity = '0';
    setTimeout(() => {
      track.style.opacity = '1';
    }, 250);
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
    resetProgressBars();
  }

  function resetProgressBars() {
    cards.forEach(card => {
      const progressBar = card.querySelector('.progress-bar');
      progressBar.classList.remove('active');
      progressBar.style.width = '0';
    });
    cards[currentIndex].querySelector('.progress-bar').classList.add('active');
  }

  function startCarousel() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
    }, 4000);
  }

  prevButton.addEventListener('click', () => {
    clearInterval(interval);
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
    startCarousel();
  });

  nextButton.addEventListener('click', () => {
    clearInterval(interval);
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
    startCarousel();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(interval);
      currentIndex = parseInt(dot.getAttribute('data-index'));
      updateCarousel();
      startCarousel();
    });
    dot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        clearInterval(interval);
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateCarousel();
        startCarousel();
      }
    });
  });

  carousel.addEventListener('mouseenter', () => clearInterval(interval));
  carousel.addEventListener('mouseleave', startCarousel);

  updateCarousel();
  startCarousel();

  // Contact Form Validation
  const form = document.getElementById('contact-form');
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const subjectInput = document.getElementById('subject');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successMessage = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error-message').forEach(error => {
      error.style.display = 'none';
    });

    // Validate inputs
    if (!firstNameInput.value.trim()) {
      document.getElementById('first-name-error').textContent = 'First Name is required';
      document.getElementById('first-name-error').style.display = 'block';
      isValid = false;
    }
    if (!lastNameInput.value.trim()) {
      document.getElementById('last-name-error').textContent = 'Last Name is required';
      document.getElementById('last-name-error').style.display = 'block';
      isValid = false;
    }
    if (!subjectInput.value.trim()) {
      document.getElementById('subject-error').textContent = 'Subject is required';
      document.getElementById('subject-error').style.display = 'block';
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      document.getElementById('email-error').textContent = 'Valid email is required';
      document.getElementById('email-error').style.display = 'block';
      isValid = false;
    }
    if (!messageInput.value.trim()) {
      document.getElementById('message-error').textContent = 'Message is required';
      document.getElementById('message-error').style.display = 'block';
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent = 'Message sent successfully!';
      successMessage.style.display = 'block';
      form.reset();
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
    }
  });

  // Initialize Vanilla Tilt for About Image, Testimonials, Repos, and Blogs
  VanillaTilt.init(document.querySelectorAll('.about-image, .testimonial-card, .repo-card, .blog-card'), {
    max: 7,
    speed: 400,
    glare: true,
    'max-glare': 0.3
  });
});