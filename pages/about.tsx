import React from "react";
import Logo from "../components/Logo";
import styles from "../styles/about.module.css";
import Footer from "../components/Footer";

export default () => (
  <div className="w-full leading-6">
    <div className="">
      <div className="w-100 py-10" style={{ backgroundColor: "#FFEDD5" }}>
        <a href="/">
          <Logo className="text-accent-500 my-4 lg:h-16 md:h-10 h-8 mx-auto"></Logo>
        </a>
        <div className="flex flex-col lg:flex-row mx-auto max-w-4xl m-16">
          <div
            className="flex-grow h-100 lg:mr-10 lg:h-auto h-64"
            style={{
              backgroundImage: "url('/quisommesnous.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          />
          <div className="max-w-md mx-6">
            <h1 className={styles.title}>Qui sommes nous ?</h1>
            <p className={styles.p}>
              CoConfinés est une initiative citoyenne française née quelques
              jours après le début du confinement mis en place lors de la
              pandémie du coronavirus COVID-19.
            </p>
            <p className={styles.p}>
              A l’origine du projet, une vingtaine de personnes bénévoles venant
              de divers horizons : ingénieurs, designers, économistes, juristes,
              communicants, innovateurs, étudiants. Nous avons une volonté
              commune, faire face au virus ensemble en partageant des
              informations fiables, des outils pour travailler à distance, des
              activités à faire chez soi, des initiatives remarquables.
            </p>
            <p className={styles.p}>
              Cette initiative s’est inspirée du site de mobilisation citoyenne{" "}
              <a href="https://frenalacurva.net/">frenalacurva</a> (un réseau
              citoyen espagnol qui a pour objectif de freiner le coronavirus).
            </p>
            <a href="/rejoignez-nous">
              <button className="mt-6 accent-shadow mr-2 p-3 bg-accent-500 hover:bg-accent-400 shadow text-white rounded cursor-pointer uppercase font-bold">
                <svg
                  className="inline -mt-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 11C17.2652 11 17.5196 11.1054 17.7071 11.2929C17.8946 11.4804 18 11.7348 18 12C18 12.2652 17.8946 12.5196 17.7071 12.7071C17.5196 12.8946 17.2652 13 17 13H13V17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17V13H7C6.73478 13 6.48043 12.8946 6.29289 12.7071C6.10536 12.5196 6 12.2652 6 12C6 11.7348 6.10536 11.4804 6.29289 11.2929C6.48043 11.1054 6.73478 11 7 11H11V7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6C12.2652 6 12.5196 6.10536 12.7071 6.29289C12.8946 6.48043 13 6.73478 13 7V11H17Z"
                    fill="#E5E6E8"
                  />
                </svg>
                Rejoignez-nous !
                <style jsx>{`
                  .accent-shadow {
                    box-shadow: 0px 8px 24px rgba(108, 99, 255, 0.47);
                  }
                `}</style>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl m-16 mx-auto text-center">
        <h1 className={styles.title}>Nos missions </h1>
        <p className="pb-4">Nous voulons vous offrir une information:</p>
        <div className="flex flex-col lg:flex-row mx-auto justify-around lg:items-start items-center">
          <div className="w-64 flex flex-col items-center">
            <img className="w-16 h-16" src="/icone_pertinente.svg" />
            <h2 className="font-bold py-2">Pertinente</h2>
            triée en fonction de vos besoins
          </div>
          <div className="w-64 flex flex-col items-center">
            <img className="w-16 h-16" src="/icone_fiable.svg" />
            <h2 className="font-bold py-2">Fiable</h2>
            des sources diverses et passées au crible par un groupe de citoyens
            indépendants
          </div>
          <div className="w-64 flex flex-col items-center">
            <img className="w-16 h-16" src="/icone_accessible.svg" />
            <h2 className="font-bold py-2">Accessible</h2>
            présentée d’une manière facile à lire et à relayer.
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-10">
        <div className="max-w-4xl m-16 lg:mx-auto mx-6">
          <h1 className={styles.title}>Nos valeurs</h1>
          <p className={styles.p}>
            Depuis l’annonce du début de l’épidémie de coronavirus de nombreuses
            informations ont circulé, certaines vraies et d’autres complètement
            fausses. Ces fausses informations n’ont rien d’inoffensif car elles
            ont répandu des rumeurs plus ou moins graves qui ont favorisé le
            développement du virus. Dans le même temps de nouvelles formes de
            solidarité se sont développées spontanément, des initiatives
            d’associations, de citoyens et d’entreprises. Chacun pouvant aider à
            son échelle. C’est en faisant ces constats que nous avons décidé de
            développer co-confines.fr, afin de créer un lieu où les internautes
            puissent trouver à la fois de l’information fiable et des
            initiatives, idées d’activités, astuces afin de mieux vivre le
            confinement.
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);
