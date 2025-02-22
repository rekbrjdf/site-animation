import { bindClasses } from 'utils/functions';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'policy');

export default function Policy() {
  return (
    <main className={classes.policy}>
      <div className={bc['__first-screen']}>Privacy Policy and Cookies</div>
      <div className={bc.__content}>
        <p className={bc.__article}>
          At ATMOSFERA, we highly value your privacy and are committed to protecting your personal
          information. This Privacy Policy outlines how we collect and use data on our website,
          including the use of cookies.
        </p>
        <p className={bc['__article-title']}>Data Collection:</p>
        <p className={bc.__article}>
          We collect data that you voluntarily provide to us, such as contact information submitted
          through forms on our website. This information is used solely for the purpose of
          responding to your inquiries and providing assistance.
        </p>
        <p className={bc['__article-title']}>Use of Cookies:</p>
        <p className={bc.__article}>
          We use cookies to enhance your browsing experience, analyze website traffic, and improve
          our services. These cookies track how you interact with our site, but do not store any
          personally identifiable information.
        </p>
        <p className={bc['__article-title']}>Your Consent:</p>
        <p className={bc.__article}>
          By continuing to use our website, you consent to the use of cookies as described in this
          Privacy Policy. You can manage your cookie preferences through your browser settings.
        </p>
        <p className={bc['__article-title']}>Data Security:</p>
        <p className={bc.__article}>
          We take all necessary measures to ensure the security of your information. Your data is
          stored securely and is accessible only to authorized personnel for specific tasks.
        </p>
        <p className={bc['__article-title']}>Updates and Contact:</p>
        <p className={bc.__article}>
          Any changes to our Privacy Policy will be updated on this page. If you have any questions
          or concerns about our data practices or this Privacy Policy, please contact us at&nbsp;
          <a href="mailto:info@atmosfera.is" className={bc.__mail}>
            info@atmosfera.is
          </a>
          .
        </p>
      </div>
    </main>
  );
}
