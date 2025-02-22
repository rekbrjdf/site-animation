'use client';

import { bindClasses } from 'utils/functions';
import BlackButton from 'components/adaptive/BlackButton';
import SendForm from 'components/adaptive/SendForm';
import Link from 'next/link';
import FirstScreen from 'components/adaptive/FirstScreen';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'wrapper');

export default function Contacts() {
  const personsData = [
    {
      position: 'Business Development',
      name: 'Olga Basaraba',
      email: 'partner@atmosfera.is',
    },
    {
      position: 'Public Relations',
      name: 'Alena Zharkovskaya',
      email: 'pr@atmosfera.is',
    },
    {
      position: 'Human Resources',
      name: 'Yana Chufistova',
      email: 'hr@atmosfera.is',
    },
  ];

  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const cardsData = [
    {
      title: <span className={bc['__card-text_grey']}>Stay ahead of the game!</span>,
      mainText: <p>Click here to explore our posts and join the conversation.</p>,
      buttonText: 'LinkedIn',
      id: 0,
      buttonLink: 'https://www.linkedin.com/company/atmosferalive',
    },
    {
      title: <span className={bc['__card-text_grey']}>Calling all talented professionals!</span>,
      mainText: (
        <p>
          Explore exciting career opportunities with us today and let&apos;s shape the future of
          gaming together.
        </p>
      ),
      buttonText: 'Available Positions',
      id: 1,
      buttonLink: '/about',
    },
  ];

  return (
    <main className={classes.wrapper}>
      <FirstScreen
        video="videos/contacts.mp4"
        header="Connect with ATMOSFERA"
        subHeader="for Next-Level Gaming!"
      />
      <section className={bc['__send-form']}>
        <SendForm title="Reach Out and Game On!" buttonName="Send a message" />
      </section>
      <section>
        <div className={bc.__contacts}>
          {personsData.map((person) => (
            <div key={person.name} className={bc.__contact}>
              <p className={bc.__position}>{person.position}</p>
              <p className={bc.__name}>{person.name}</p>
              <BlackButton onClick={() => copyTextToClipboard(person.email)}>
                {person.email}
              </BlackButton>
            </div>
          ))}
        </div>
      </section>
      <div className={bc['__cards-wrapper']}>
        {cardsData.map((card) => (
          <div className={bc.__card} key={card.id}>
            <div className={classes['text-wrapper']}>
              {card.title}
              {card.mainText}
            </div>
            <Link className={bc.__link} href={card.buttonLink}>
              <BlackButton type="button">{card.buttonText}</BlackButton>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
