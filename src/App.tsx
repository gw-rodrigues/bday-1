import { atcb_action, atcb_init } from "add-to-calendar-button";
import { useEffect, useState } from "react";
import { FiPhone, FiCalendar, FiMapPin } from "react-icons/fi";

import "add-to-calendar-button/assets/css/atcb.min.css";
import "animate.css";
import "./App.scss";
import { func } from "prop-types";

function App() {
  const [openInvite, setOpenInvite] = useState(false);

  function handleOpenEnvelope() {
    setTimeout(() => {
      document.getElementById("envelope-bg")?.classList.add("leave-bg");
      setTimeout(() => {
        document.getElementById("envelope")?.classList.remove("leave");
        document.getElementById("envelope-bg")?.classList.remove("leave-bg");
        setOpenInvite(true);
      }, 500);
    }, 1500);
    document.getElementById("envelope")?.classList.add("leave");
  }
  useEffect(() => {
    if (openInvite) {
      atcb_init();
    }
  }, [openInvite]);

  return !openInvite ? (
    <main id="envelope-bg" className="container-intro">
      <div id="envelope">
        <button onClick={handleOpenEnvelope} type="button" className="envelope">
          <img src="/envelope.jpeg" alt="envelope" />
          <p className="desc">Click para abrir o convite!</p>
        </button>
      </div>
    </main>
  ) : (
    <main className="container">
      <article>
        <img src="/invite.jpeg" alt="invite" />
      </article>
      <aside>
        <h1>Aniversário do Esther Emanuelly</h1>
        <div className="aside-content">
          <h2 className="confirm">Confirme sua presença</h2>
          <div className="details">
            <FiPhone />
            <div>
              <p>
                (19) 98825-5988 / 98825-6841 - Chamada ou WhatsApp.
                <br />
                Prazo para confirmações até <strong>05.10.2022</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="aside-content">
          <h2>Adicionar ao calendário</h2>
          <div className="details">
            <FiCalendar />
            <div>
              <p>Dia 09.10.2022, a partir de 11:00 horas.</p>
              <div className="atcb">
                {"{"}
                "name":"ANIVERSÁRIO DO ESTHER EMANUELLY", "description":"Estou
                muito ansioso por contar contigo no meu aniversário. Pedimos por
                gentileza que traga seu kit churrasco. Convite:→
                [url]https://gabriel-convite.vercel.app/[/url]",
                "startDate":"2022-10-09T11:00", "endDate":"2022-10-11T20:00",
                "location":"Chácara dos Universitários, Rua 11, glebas 32,
                chácara 75, Bairro Taquaral", "label":"Adicionar ao calendário",
                "options":[ "Apple", "Google", "Outlook.com" ],
                "timeZone":"Europe/Berlin", "inline":true, "trigger":"click"
                {"}"}
              </div>
            </div>
          </div>
        </div>
        <div className="aside-content">
          <h2>ver local do evento</h2>
          <div className="details">
            <FiMapPin />
            <div>
              <h3>Chácara dos Universitários</h3>
              <p className="address">
                Rua 11, glebas 32, chácara 75, Bairro Taquaral
              </p>
              <a target="_blank" href="https://goo.gl/maps/yuH3b5ztoLAweRwT9">
                Ver no mapa do google
              </a>
            </div>
          </div>
        </div>
      </aside>
      {/* <section className="map">
        <<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.421994773179!2d-8.703594984522212!3d40.62057467934199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23bdf919ca9fa7%3A0x48fc62a532512393!2sQuinta%20Pedag%C3%B3gica%20Inclusiva%20-%20CASCI!5e0!3m2!1spt-PT!2sde!4v1655399071998!5m2!1spt-PT!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section> */}
    </main>
  );
}

export default App;
