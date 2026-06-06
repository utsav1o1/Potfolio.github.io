/**
 * Component Loader Script
 * Loads HTML components into elements with data-component attribute
 */

async function loadComponent(element, componentPath) {
  try {
    const response = await fetch(componentPath);
    if (!response.ok) {
      console.error(`Failed to load component: ${componentPath}`);
      return;
    }
    const html = await response.text();
    element.innerHTML = html;
    
    // Execute any inline scripts in the component
    const scripts = element.querySelectorAll('script');
    scripts.forEach(oldScript => {
      const newScript = document.createElement('script');
      Array.from(oldScript.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  } catch (error) {
    console.error(`Error loading component: ${componentPath}`, error);
  }
}

async function initComponents() {
  const components = document.querySelectorAll('[data-component]');
  
  for (const el of components) {
    const componentName = el.getAttribute('data-component');
    const componentPath = `components/${componentName}.html`;
    await loadComponent(el, componentPath);
  }
}

// Load components when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initComponents);
} else {
  initComponents();
}