import { motion as Motion } from 'framer-motion'
import { testimonials } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

const FeedbackCard = ({ index, name, designation, company, image, testimonial }) => {
  return (
    <Motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex-shrink-0'>
        <p className='text-white font-black text-[48px]'> " </p>
        <div className='mt-1'>
          <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
          <div className='mt-7 flex justify-between items-center gap-4'>
            <div className='flex-1 flex flex-col'>
              <p className='text-white font-medium text-[16px]'>
                <span className='blue-text-gradient'>@{name}</span>
              </p>
              <p className='mt-1 text-secondary text-[12px]'>
                {designation} of {company}
              </p>
            </div>
            <img
              src={image}
              alt={`feedback_by-${name}`}
              className='w-12 h-12 rounded-full object-cover'
            />
          </div>
        </div>
    </Motion.div>
  ) 
}

const Feedbacks = () => {
  const shouldScroll = testimonials.length > 4;
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <Motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What people say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </Motion.div>
      </div>
      {shouldScroll ? (
        <div className={`${styles.paddingX} -mt-20 pb-14`}>
          <div className='flex overflow-x-auto scrollbar-hide gap-7 pb-4'>
            <style jsx>{`
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scroll-smooth {
                scroll-behavior: smooth;
              }
            `}</style>
            {testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
          </div>
          <div className='flex justify-center mt-4'>
            <p className='text-secondary text-[12px] opacity-70'>
              ← Scroll to see more testimonials →
            </p>
          </div>
        </div>
      ) : (
        <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SectionWrapper(Feedbacks,"");