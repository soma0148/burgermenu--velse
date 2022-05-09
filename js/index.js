// Lav variablen "btn", der henviser til ".toggle-btn"
// Lav variablen "nav", der henviser til nav-elementet

// Lav funktionen "toggleMenu()" med følgende funktionalitet

  // a) toggle klassen "shown" på nav vha. classList.toggle

  // b) lav variablen "menuShown", som siger, at nav-variablen indeholder klassen "shown" via classList.contains("")

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (...) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
  } else {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
  }
// "toggleMenu()" slutter her

/* Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang */
