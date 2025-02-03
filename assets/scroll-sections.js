class ScrollSections {
  constructor() {
    this.sections = gsap.utils.toArray('[data-scroll-section]');
    this.init();
  }

  init() {
    const smoother = ScrollSmoother.create({
      smooth: 2,
      speed: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
      preventDefault: true,
    });

    this.sections.forEach((section, i) => {
      ScrollTrigger.create({
        snap: 1 / (this.sections.length - 1),
        trigger: section,
        pin: true,
        pinSpacing: true,
        scrub: 1,
      });
    });
  }

  onSectionChange(index) {
    console.log(`Section ${index} active`);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ScrollSections();
});
