// src/utils/scrollToId.js
export default function scrollToId(id, options = {}) {
  const { offset = 20, timeout = 2000, interval = 30 } = options;

  return new Promise((resolve, reject) => {
    const start = Date.now();

    const attempt = () => {
      const el = document.getElementById(id);
      if (el) {
        // compute header height if navbar exists
        const navbar = document.querySelector('.navbar');
        const headerHeight = navbar ? navbar.offsetHeight : 0;

        // target Y = element's top relative to document - headerHeight - offset
        const targetY = Math.max(
          0,
          el.getBoundingClientRect().top + window.scrollY - headerHeight - offset
        );

        window.scrollTo({ top: targetY, behavior: 'smooth' });
        resolve(true);
        return;
      }

      if (Date.now() - start > timeout) {
        reject(new Error('Element not found: ' + id));
        return;
      }
      setTimeout(attempt, interval);
    };

    attempt();
  });
}
