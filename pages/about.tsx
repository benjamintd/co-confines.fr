import React from "react";

import styles from "../styles/about.module.css";

export default () => (
  <div className="mx-auto max-w-3xl m-16">
    <a href="/">
      <h1 className="text-center text-accent-500 font-title lg:text-4xl md:text-3xl text-xl font-bold p-3">
        Coconfinés.
      </h1>
    </a>

    <h1 className={styles.title}>Qui sommes nous ?</h1>
    <p className={styles.p}>
      CoConfinés est une initiative citoyenne française née quelques jours après
      le début du confinement mis en place lors de la pandémie du coronavirus
      COVID-19.
    </p>
    <p className={styles.p}>
      A l’origine du projet, une vingtaine de personnes bénévoles venant de
      divers horizons : ingénieurs, designers, économistes, juristes,
      communicants, innovateurs, étudiants. Nous avons une volonté commune,
      faire face au virus ensemble en partageant des informations fiables, des
      outils pour travailler à distance, des activités à faire chez soi, des
      initiatives remarquables.
    </p>
    <p className={styles.p}>
      Cette initiative s’est inspirée du site de mobilisation citoyenne{" "}
      <a href="https://frenalacurva.net/">frenalacurva</a> (un réseau citoyen
      espagnol qui a pour objectif de freiner le coronavirus).
    </p>
    <p className={styles.p}>
      <h1 className={styles.title}>Nos missions </h1>
      <p>La vocation du site est d’offrir une information :</p>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <strong>Pertinente</strong> : triée en fonction de vos besoins
        </li>
        <li className={styles.li}>
          <strong>Fiable</strong> : des sources diverses et passées au crible
          par un groupe de citoyens indépendants
        </li>
        <li className={styles.li}>
          <strong>Accessible</strong> : présentée d’une manière facile à lire et
          à relayer.
        </li>
      </ul>
      <h1 className={styles.title}>Nos valeurs</h1>
      <p className={styles.p}>
        Depuis l’annonce du début de l’épidémie de coronavirus de nombreuses
        informations ont circulé, certaines vraies et d’autres complètement
        fausses. Ces fausses informations n’ont rien d’inoffensif car elles ont
        répandu des rumeurs plus ou moins graves qui ont favorisé le
        développement du virus. Dans le même temps de nouvelles formes de
        solidarité se sont développées spontanément, des initiatives
        d’associations, de citoyens et d’entreprises. Chacun pouvant aider à son
        échelle. C’est en faisant ces constats que nous avons décidé de
        développer co-confines.fr, afin de créer un lieu où les internautes
        puissent trouver à la fois de l’information fiable et des initiatives,
        idées d’activités, astuces afin de mieux vivre le confinement.
      </p>
      <p className={styles.p}>Nous faisons le choix de partager :</p>
      <ul className={styles.ul}>
        <li className={styles.li}>
          Une info de qualité qui vous correspond. Sélectionnée après des études
          ethnologiques qui nous permettent de comprendre vos besoins et vos
          envies.
        </li>
        <li className={styles.li}>
          Une info fiable, passée au crible par plusieurs membres de notre
          équipe et évaluée selon une grille de critères objectifs (vérification
          de l’origine de la source, de la réputation de l’auteur, de
          l’objectivité de la source, de la qualité de l’information, de la mise
          à jour à date).
        </li>
        <li className={styles.li}>
          Des publications variées pour permettre à chacun de trouver ce qui
          l’intéresse et pour mieux vivre cette période de confinement.
        </li>
      </ul>
    </p>
  </div>
);
