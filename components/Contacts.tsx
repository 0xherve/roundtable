'use client';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
 return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10 bg-gray-900 text-white">
      <div className="max-w-7xl w-full py-24 mx-auto grid lg:grid-cols-3 gap-8">

        {/* Left Side: Text */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col justify-center bg-secondary rounded-xl border border-muted/50 p-8 lg:p-12"
        >
          <h4 className="font-bold text-[26px] sm:text-[32px] sm:leading-[40px] leading-[36px]">
            Get in Touch
          </h4>
          <p className="mt-2 font-normal text-[14px] sm:text-[18px] sm:leading-[22px] leading-[16px] text-gray-300">
            Contact us for questions, collaborations, or to join our mission of empowering communities through tourism.
          </p>
          <p className="mt-6 font-medium text-foreground">
            Email: info@yourdomain.com
          </p>
        </motion.div>

        {/* Right Side: Form */}
        <motion.form
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="lg:col-span-2 flex flex-col justify-center bg-secondary rounded-xl border border-muted/50 p-8 lg:p-12 gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-muted"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-muted"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-muted/50 text-white focus:outline-none focus:ring-2 focus:ring-muted"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-accent/80 hover:bg-accent transition px-4 py-3 rounded-xl font-semibold"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default ContactSection;
