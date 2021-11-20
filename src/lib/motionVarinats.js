export const homePageSectionVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const itemSkillsVariants = {
  visible: (i) => ({
    transform: 'scale(1, 1)',
    transition: {
      delay: i * 0.2,
      type: 'spring',
    },
  }),
  hidden: {
    transform: 'scale(0, 0)',
  },
};

export const projectVariants = {
  offscreen: {
    visibility: 'hidden',
    opacity: 0,
    y: 100,
  },
  onscreen: {
    visibility: 'visible',
    opacity: 1,
    y: 0,
    transition: {
      type: 'linear',
      bounce: 4,
      duration: 0.8,
    },
  },
};
