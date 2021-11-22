import { motion } from 'framer-motion';
import { pageTransitionVariants } from '../lib/motionVarinats';

const PageTransition = (props) => {
  return (
    <motion.div
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={pageTransitionVariants}
      transition={{ type: 'linear' }}
      {...props}
    />
  );
};

export default PageTransition;
