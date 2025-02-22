import { bindClasses } from 'utils/functions';
import { Inter } from 'next/font/google';
import classNames from 'classnames';
import FirstScreen from 'components/adaptive/FirstScreen';
import Circles from './(components)/adaptive/Circles';
import Careers from './(components)/adaptive/Careers';
import classes from './styles.module.scss';

const inter = Inter({
  subsets: ['latin'],
});

const bc = bindClasses(classes, 'about');

export default function Home() {
  return (
    <div className={inter.className}>
      <main className={classes.about}>
        <FirstScreen
          video="videos/about.mp4"
          header="Game Makers by Day"
          subHeader="Gamers by Night"
        />
        <section className={classNames(bc.__introduction, bc.__section)}>
          <div>
            <p className={bc.__slogan}>
              Welcome to ATMOSFERA – where our team brings the thrill of gaming to life!
            </p>
          </div>
          <div>
            <Circles />
          </div>
          <div className={bc['__introduction-text']}>
            <p>
              We&apos;re a group of passionate individuals dedicated to crafting the coolest games
              out there. By day, we&apos;re dedicated game makers; by night, we’re avid gamers
              ourselves!
            </p>
            <p>
              At ATMOSFERA, we believe it’s all about the people. Our crew consists of an awesome
              mix of talents from various corners of the globe, each adding their unique flair to
              the games we create. From coding wizards to design maestros, we’ve got the dream team
              to bring your favorite live casino games to reality.
            </p>
            <p>
              Since 2020, we’ve burst onto the international gaming scene, swiftly locking down over
              30 fantastic partnerships.
            </p>
            <p>
              With 6 epic live games including timeless classics such as Live Roulette, Blackjack,
              Auto Roulette, and Keno. Additionally, we&apos;ve introduced innovative show games
              like Cocktail Roulette and Music Wheel, setting new standards in the gaming realm.
            </p>
          </div>
        </section>
        <section className={bc.__section}>
          <Careers />
        </section>
        <section className={bc['__section-bottom']}>
          <div className={bc['__slogan-bottom']}>
            <p>Join us as we revolutionize the world of gaming, one awesome game at a time! 🚀</p>
          </div>
        </section>
      </main>
    </div>
  );
}
