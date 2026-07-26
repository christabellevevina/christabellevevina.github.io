'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('pageLoader');
  const nav = document.getElementById('mainNav');
  const backToTop = document.getElementById('backToTop');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  const projectModal = document.getElementById('projectModal');

  window.addEventListener('load', () => {
    window.setTimeout(() => loader?.classList.add('hidden'), 300);
  });

  const handleScroll = () => {
    const scrolled = window.scrollY > 40;
    nav?.classList.toggle('scrolled', scrolled);
    backToTop?.classList.toggle('visible', window.scrollY > 650);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      projectItems.forEach((item) => {
        const shouldShow = selectedFilter === 'all' || item.dataset.category === selectedFilter;
        item.classList.toggle('is-hidden', !shouldShow);
      });
    });
  });

  projectModal?.addEventListener('show.bs.modal', (event) => {
    const trigger = event.relatedTarget;
    const projectName = trigger?.getAttribute('data-project') || 'Project Name';
    const modalTitle = projectModal.querySelector('#projectModalLabel');
    if (modalTitle) modalTitle.textContent = projectName;
  });

  document.querySelectorAll('.navbar .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('navbarContent');
      if (menu?.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  const year = document.getElementById('currentYear');
  if (year) year.textContent = new Date().getFullYear();
});
