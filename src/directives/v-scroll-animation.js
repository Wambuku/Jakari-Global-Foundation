export default {
    mounted(el, binding) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add(binding.value || 'animate-fade-in');
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    }
  };
  