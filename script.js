// Contact personalities with nationalities and colors
const contacts = [
  { name: "Miguel", unread: 0, personality: "aggressive", nationality: "spanish", color: "#f44336" },
  { name: "Carlos", unread: 0, personality: "cautious", nationality: "colombian", color: "#9c27b0" },
  { name: "Maria", unread: 0, personality: "friendly", nationality: "filipino", color: "#e91e63" },
  { name: "John", unread: 0, personality: "paranoid", nationality: "american", color: "#ff9800" },
  { name: "Pablo", unread: 0, personality: "professional", nationality: "colombian", color: "#2196f3" },
  { name: "Isabella", unread: 0, personality: "sarcastic", nationality: "spanish", color: "#00bcd4" },
  { name: "Marco", unread: 0, personality: "loyal", nationality: "filipino", color: "#4caf50" },
  { name: "Sarah", unread: 0, personality: "mysterious", nationality: "american", color: "#673ab7" },
];

// Multilingual personality responses
const personalityResponses = {
  aggressive: {
    filipino: {
      greetings: ["Ano gusto mo?", "What do you want?", "Bilisan mo!", "Make it quick."],
      positive: ["Mabuti. Huwag mong ipapalpak.", "Good. Don't mess it up.", "Finally, some sense.", "Okay na yan."],
      negative: ["Tinatanong mo ba ako?", "You questioning me?", "Bad move, pare.", "Think carefully."],
      questions: ["Hindi mo kailangan malaman yan.", "Stop asking questions.", "Focus sa trabaho mo.", "You don't need to know."],
      default: ["May trabaho tayo. Be ready.", "Keep your mouth shut.", "Huwag mo akong biguin.", "We got business."]
    },
    spanish: {
      greetings: ["¿Qué quieres?", "What do you want?", "Rápido.", "Make it quick."],
      positive: ["Bien. No lo arruines.", "Good. Don't mess it up.", "Por fin.", "That's more like it."],
      negative: ["¿Me estás cuestionando?", "You questioning me?", "Mal movimiento, amigo.", "Bad move, pal."],
      questions: ["No necesitas saber eso.", "Stop asking questions.", "Concéntrate en tu trabajo.", "Focus on your job."],
      default: ["Tenemos negocios. Prepárate.", "We got business.", "Mantén la boca cerrada.", "Keep quiet."]
    },
    colombian: {
      greetings: ["¿Qué necesitas, parcero?", "What do you want?", "Habla rápido.", "Make it quick."],
      positive: ["Bien hecho, hermano.", "Good. Don't mess it up.", "Eso es lo que quería.", "Finally."],
      negative: ["¿Me estás retando?", "You questioning me?", "Mal paso, parce.", "Bad move."],
      questions: ["Eso no te importa.", "Stop asking questions.", "Enfócate en lo tuyo.", "Focus on your job."],
      default: ["Tenemos vuelta. Estate listo.", "We got business.", "Callado, ¿me oyes?", "Keep quiet."]
    },
    american: {
      greetings: ["What do you want?", "Make it quick.", "Spit it out.", "Yeah?"],
      positive: ["Good. Don't mess it up.", "Finally, some sense.", "That's more like it.", "Alright."],
      negative: ["You questioning me?", "Bad move, pal.", "Think carefully about your next words.", "Wrong answer."],
      questions: ["You don't need to know that.", "Stop asking questions.", "Focus on your job.", "None of your business."],
      default: ["We got business. Be ready.", "Keep your mouth shut.", "Don't disappoint me.", "Stay sharp."]
    }
  },
  cautious: {
    filipino: {
      greetings: ["Hello. Mag-ingat ka sa sasabihin mo.", "Be careful what you say.", "I'm listening...", "Ano yun?"],
      positive: ["Okay, pero stay alert ha.", "Good, but don't get comfortable.", "Ganyan dapat.", "Keep it that way."],
      negative: ["Alam ko risky ito.", "This could be a problem.", "Kailangan tayong mag-ingat.", "We need to be careful."],
      questions: ["Huwag nating pag-usapan dito.", "Not now, not here.", "Too many questions, pare.", "Let's not talk about that."],
      default: ["Tingnan mo muna paligid mo.", "Check your surroundings.", "Huwag magtiwala sa kahit sino.", "Trust no one."]
    },
    spanish: {
      greetings: ["Hola. Ten cuidado con lo que dices.", "Be careful.", "Estoy escuchando...", "Yes?"],
      positive: ["Bien, pero mantente alerta.", "Good, but stay alert.", "Así debe ser.", "Keep it that way."],
      negative: ["Sabía que esto era arriesgado.", "I knew this was risky.", "Tenemos que tener más cuidado.", "Be more careful."],
      questions: ["No hablemos de eso aquí.", "Not here.", "Muchas preguntas levantan sospechas.", "Too many questions."],
      default: ["Primero revisa tu entorno.", "Check your surroundings.", "No confíes en nadie.", "Trust no one."]
    },
    colombian: {
      greetings: ["Hola. Cuidado con lo que dices, hermano.", "Be careful.", "Te escucho...", "Dígame."],
      positive: ["Bien, pero pendiente, ¿sí?", "Good, but stay alert.", "Así es la cosa.", "Keep it that way."],
      negative: ["Yo sabía que esto era peligroso.", "This is risky.", "Toca ser más cuidadosos.", "We need to be careful."],
      questions: ["Mejor no hablemos de eso aquí.", "Not here.", "Muchas preguntas, parce.", "Too many questions."],
      default: ["Revisa bien alrededor.", "Check around.", "No confíes en nadie, hermano.", "Trust no one."]
    },
    american: {
      greetings: ["Hello. Choose your words wisely.", "I'm listening...", "Yes?", "Go ahead."],
      positive: ["Alright, but stay alert.", "Good, but don't get comfortable.", "Keep it that way.", "Okay."],
      negative: ["I knew this was risky.", "We need to be more careful.", "This could be a problem.", "Not good."],
      questions: ["Let's not talk about that here.", "Too many questions raise suspicions.", "Not now, not here.", "Careful."],
      default: ["Check your surroundings first.", "Make sure you're alone.", "Trust no one.", "Stay vigilant."]
    }
  },
  friendly: {
    filipino: {
      greetings: ["Hey! Kamusta ka?", "Good to hear from you!", "Ano na?", "What's happening?"],
      positive: ["That's great! Alam kong kaya mo yan.", "Perfect! You're the best.", "Ang galing mo talaga!", "Excellent work!"],
      negative: ["Ay nako, that's not good.", "Don't worry, kaya natin to.", "It'll be okay, trust me.", "Huwag mag-alala."],
      questions: ["Hmm, let me think about that...", "Hindi ko sure, eh.", "I wish I knew more.", "Good question."],
      default: ["Everything okay sa side mo?", "Let me know if you need anything.", "Take care diyan!", "Ingat ka palagi."]
    },
    spanish: {
      greetings: ["¡Oye! ¿Cómo estás?", "Good to hear from you!", "¿Qué tal?", "What's happening?"],
      positive: ["¡Genial! Sabía que podías hacerlo.", "Perfect! You're the best.", "¡Excelente trabajo!", "That's great!"],
      negative: ["Ay no, eso no es bueno.", "Don't worry, lo resolveremos.", "Estará bien, confía en mí.", "No te preocupes."],
      questions: ["Hmm, déjame pensar...", "Buena pregunta, no estoy seguro.", "Ojalá supiera más.", "Let me think."],
      default: ["¿Todo bien por tu lado?", "Let me know if you need anything.", "¡Cuídate por ahí!", "Take care!"]
    },
    colombian: {
      greetings: ["¡Hey parcero! ¿Cómo vas?", "Good to hear from you!", "¿Qué más?", "What's up?"],
      positive: ["¡Chevere! Sabía que lo lograrías.", "Perfect! Eres el mejor.", "¡Excelente, hermano!", "That's great!"],
      negative: ["Uy no, eso está maluco.", "No te preocupes, lo arreglamos.", "Todo va a estar bien, tranquilo.", "Relax."],
      questions: ["Hmm, déjame pensar un toque...", "Buena pregunta, no sé.", "Quisiera saber más.", "Good question."],
      default: ["¿Todo bien por allá?", "Let me know if you need anything.", "¡Cuídate mucho!", "Take care, parce!"]
    },
    american: {
      greetings: ["Hey! How are you?", "Good to hear from you!", "What's happening?", "What's up?"],
      positive: ["That's great! I knew you could do it.", "Perfect! You're the best.", "Excellent work, my friend.", "Amazing!"],
      negative: ["Oh no, that's not good.", "Don't worry, we'll figure it out.", "It'll be okay, trust me.", "We got this."],
      questions: ["Hmm, let me think about that...", "Good question, I'm not sure.", "I wish I knew more.", "Interesting."],
      default: ["Everything going well on your end?", "Let me know if you need anything.", "Take care out there!", "Stay safe!"]
    }
  },
  paranoid: {
    filipino: {
      greetings: ["Sino kasama mo diyan?", "Are you being followed?", "Is this line secure?", "Sigurado ka?"],
      positive: ["Sigurado ka ba diyan?", "How can you be certain?", "I hope you're right.", "Sana nga."],
      negative: ["Alam ko na! This is bad.", "Pinapanood tayo, I can feel it.", "They know. Lagi nila alam.", "Danger!"],
      questions: ["Bakit mo tinatanong? Who sent you?", "That's what they'd ask...", "Don't play games with me.", "Sino nag-utos?"],
      default: ["Check your phone for bugs.", "May nakikinig, I'm sure.", "Ang mga pader may tenga.", "Be careful."]
    },
    spanish: {
      greetings: ["¿Quién más está ahí?", "Are you being followed?", "¿Es segura esta línea?", "Who's there?"],
      positive: ["¿Estás seguro de eso?", "How can you be certain?", "Espero que tengas razón.", "Hope so."],
      negative: ["¡Lo sabía! Esto es malo.", "Nos están vigilando, lo siento.", "Ellos saben. Siempre saben.", "Bad!"],
      questions: ["¿Por qué preguntas? ¿Quién te envió?", "Eso es lo que preguntarían...", "No juegues conmigo.", "Who sent you?"],
      default: ["Revisa tu teléfono por micrófonos.", "Alguien está escuchando, estoy seguro.", "Las paredes tienen oídos.", "Watch out."]
    },
    colombian: {
      greetings: ["¿Quién más está por ahí?", "Are you being followed?", "¿La línea es segura?", "Who's listening?"],
      positive: ["¿Seguro de eso, parcero?", "How can you be certain?", "Ojalá tengas razón.", "Hope you're right."],
      negative: ["¡Yo lo sabía! Esto está grave.", "Nos están vigilando, lo presiento.", "Ellos saben. Siempre saben.", "Danger!"],
      questions: ["¿Por qué preguntas? ¿Quién te mandó?", "Eso es lo que preguntarían...", "No me juegues, hermano.", "Who?"],
      default: ["Revisa el celular por micrófonos.", "Alguien está escuchando, seguro.", "Las paredes oyen, parce.", "Careful."]
    },
    american: {
      greetings: ["Who else is there?", "Are you being followed?", "Is this line secure?", "Who's listening?"],
      positive: ["You sure about that?", "How can you be certain?", "I hope you're right.", "Maybe."],
      negative: ["I KNEW IT! This is bad.", "We're being watched, I can feel it.", "They know. They always know.", "Danger!"],
      questions: ["Why are you asking? Who sent you?", "That's exactly what they'd ask...", "Don't play games with me.", "Who?"],
      default: ["Check your phone for bugs.", "Someone's listening, I'm sure of it.", "The walls have ears.", "Watch out."]
    }
  },
  professional: {
    filipino: {
      greetings: ["Acknowledged.", "Ready for report.", "Proceed.", "Ano na?"],
      positive: ["Understood. Ituloy ang mission.", "Acceptable outcome.", "Noted. Stay on task.", "Good."],
      negative: ["Unacceptable. Ayusin mo kaagad.", "This complicates matters.", "Report to supervisor.", "Fix it."],
      questions: ["Refer to the briefing document.", "Classified yan.", "Need to know basis lang.", "Can't say."],
      default: ["Maintain operational security.", "Sundin ang protocol.", "Execute as planned.", "Follow orders."]
    },
    spanish: {
      greetings: ["Entendido.", "Ready for report.", "Procede.", "Go ahead."],
      positive: ["Comprendido. La misión continúa.", "Resultado aceptable.", "Notado. Sigue en la tarea.", "Good."],
      negative: ["Inaceptable. Rectifica inmediatamente.", "Esto complica las cosas.", "Reporta al supervisor.", "Fix it."],
      questions: ["Consulta el documento de briefing.", "Eso es clasificado.", "Solo con autorización.", "Can't say."],
      default: ["Mantén la seguridad operacional.", "Sigue el protocolo.", "Ejecuta según lo planeado.", "Follow protocol."]
    },
    colombian: {
      greetings: ["Recibido.", "Ready for report.", "Dale.", "Go ahead."],
      positive: ["Entendido. Sigue la misión.", "Resultado aceptable.", "Anotado. Sigue en lo tuyo.", "Good."],
      negative: ["Inaceptable. Arréglalo ya.", "Esto complica todo.", "Reporta al jefe.", "Fix it now."],
      questions: ["Mira el documento del briefing.", "Eso es clasificado, parce.", "Solo autorizado.", "Can't say."],
      default: ["Mantén la seguridad operacional.", "Sigue el protocolo.", "Ejecuta el plan.", "Follow orders."]
    },
    american: {
      greetings: ["Acknowledged.", "Ready for your report.", "Proceed.", "Go ahead."],
      positive: ["Understood. Mission continues.", "Acceptable outcome.", "Noted. Stay on task.", "Good work."],
      negative: ["Unacceptable. Rectify immediately.", "This complicates matters.", "Report to supervisor.", "Fix it."],
      questions: ["Refer to the briefing document.", "That's classified information.", "Need to know basis only.", "Classified."],
      default: ["Maintain operational security.", "Follow protocol.", "Execute as planned.", "Stay professional."]
    }
  },
  sarcastic: {
    filipino: {
      greetings: ["Oh, ikaw na naman.", "What now?", "Let me guess...", "Ano na naman?"],
      positive: ["Wow, may nagawa ka rin palang tama.", "Shocking development.", "Will wonders never cease.", "Finally!"],
      negative: ["Surprise, surprise.", "Hindi ko inaasahan... siyempre lie.", "Classic you.", "Typical."],
      questions: ["Mukha ba akong Google?", "Why don't you figure it out?", "That's above your pay grade.", "Search mo."],
      default: ["Yeah, sure, whatever.", "This should be interesting.", "Eto na naman tayo.", "Here we go."]
    },
    spanish: {
      greetings: ["Oh, eres tú otra vez.", "What now?", "Déjame adivinar...", "¿Qué ahora?"],
      positive: ["Wow, hiciste algo bien.", "Sorprendente desarrollo.", "Las maravillas nunca cesan.", "Finally!"],
      negative: ["Qué sorpresa.", "No lo vi venir... obvio que sí.", "Clásico de ti.", "Típico."],
      questions: ["¿Parezco Google?", "¿Por qué no lo descubres?", "Eso está fuera de tu nivel.", "Google it."],
      default: ["Sí, claro, lo que sea.", "Esto va a ser interesante.", "Aquí vamos de nuevo.", "Here we go."]
    },
    colombian: {
      greetings: ["Ah, otra vez vos.", "What now?", "Dejame adivinar...", "¿Qué más?"],
      positive: ["Wow, hiciste algo bien, parce.", "Desarrollo impactante.", "Las maravillas no paran.", "Finally!"],
      negative: ["Qué sorpresa.", "No lo vi venir... claro que sí.", "Clásico tuyo.", "Típico."],
      questions: ["¿Parezco Google?", "¿Por qué no lo averiguas?", "Eso no es pa' vos.", "Google it."],
      default: ["Sí, seguro, lo que sea.", "Esto va a estar bueno.", "Otra vez lo mismo.", "Here we go."]
    },
    american: {
      greetings: ["Oh, it's you again.", "What now?", "Let me guess...", "Yeah?"],
      positive: ["Wow, you actually did something right.", "Shocking development.", "Will wonders never cease.", "Amazing."],
      negative: ["Surprise, surprise.", "Didn't see that coming... oh wait, I did.", "Classic you.", "Typical."],
      questions: ["Do I look like Google to you?", "Why don't you figure it out?", "That's above your pay grade.", "Google it."],
      default: ["Yeah, sure, whatever.", "This should be interesting.", "Here we go again.", "Great."]
    }
  },
  loyal: {
    filipino: {
      greetings: ["Always here for you, boss.", "At your service.", "Nandito lang ako lagi.", "What do you need?"],
      positive: ["Anything for the family.", "Gagawin ko ulit kahit kailan.", "We're in this together.", "Walang problema."],
      negative: ["Aayusin ko to, I promise.", "Don't worry, nandito ako.", "We'll handle this together.", "Kaya natin to."],
      questions: ["I'll find out for you.", "Let me ask around.", "Give me time, may sagot ako.", "I'll check."],
      default: ["Just say the word.", "Whatever you need, boss.", "I'm always watching out for you.", "Andito lang ako."]
    },
    spanish: {
      greetings: ["Siempre aquí para ti, jefe.", "A tu servicio.", "Cuenta conmigo.", "What do you need?"],
      positive: ["Lo que sea por la familia.", "Lo haría de nuevo sin dudar.", "Estamos juntos en esto.", "No hay problema."],
      negative: ["Lo arreglaré, lo prometo.", "No te preocupes, te cubro.", "Lo manejamos juntos.", "Tranquilo."],
      questions: ["Lo averiguaré por ti.", "Déjame preguntar.", "Dame tiempo, tendré respuestas.", "I'll check."],
      default: ["Solo di la palabra.", "Lo que necesites, jefe.", "Siempre te cubro.", "Aquí estoy."]
    },
    colombian: {
      greetings: ["Siempre aquí pa' vos, jefe.", "A la orden.", "Contá conmigo.", "What do you need?"],
      positive: ["Lo que sea por la familia, hermano.", "Lo haría de nuevo cuando sea.", "Estamos juntos en esto.", "Listo."],
      negative: ["Yo lo arreglo, te lo prometo.", "Tranquilo, te tengo cubierto.", "Lo manejamos juntos, parce.", "Relax."],
      questions: ["Lo averiguo por vos.", "Déjame preguntar por ahí.", "Dame tiempo, consigo respuestas.", "I'll check."],
      default: ["Solo decí la palabra.", "Lo que necesites, jefe.", "Siempre pendiente de vos.", "Aquí toy."]
    },
    american: {
      greetings: ["Always here for you, boss.", "At your service.", "You know you can count on me.", "Ready."],
      positive: ["Anything for the family.", "I'd do it again in a heartbeat.", "We're in this together.", "No problem."],
      negative: ["I'll fix this, I promise.", "Don't worry, I got your back.", "We'll handle this together.", "We're good."],
      questions: ["I'll find out for you.", "Let me ask around.", "Give me some time, I'll get answers.", "I'll check."],
      default: ["Just say the word.", "Whatever you need.", "I'm always watching out for you.", "Got you."]
    }
  },
  mysterious: {
    filipino: {
      greetings: ["...", "Siguro kailangan nating mag-usap.", "Interesting timing.", "Hmm..."],
      positive: ["As expected.", "Ang mga piraso ay nagsasama na.", "Just as the cards foretold.", "Nakita ko na yan."],
      negative: ["The signs warned of this.", "May naramdaman akong mali.", "Darkness approaches.", "Ingat."],
      questions: ["Some things are better left unknown.", "Lalabas din ang sagot in time.", "Ask me when the moon is full.", "Not yet."],
      default: ["Fate works in mysterious ways.", "Everything happens for a reason.", "Trust the process.", "Maghintay ka lang."]
    },
    spanish: {
      greetings: ["...", "Tal vez deberíamos hablar.", "Timing interesante.", "Hmm..."],
      positive: ["Como esperaba.", "Las piezas están cayendo en su lugar.", "Como predijeron las cartas.", "Lo sabía."],
      negative: ["Las señales advirtieron de esto.", "Sentí que algo estaba mal.", "La oscuridad se acerca.", "Cuidado."],
      questions: ["Algunas cosas es mejor no saberlas.", "La respuesta se revelará a su tiempo.", "Pregúntame cuando la luna esté llena.", "Not yet."],
      default: ["El destino funciona misteriosamente.", "Todo pasa por algo.", "Confía en el proceso.", "Espera."]
    },
    colombian: {
      greetings: ["...", "De pronto toca hablar.", "Timing interesante.", "Hmm..."],
      positive: ["Como lo esperaba.", "Las fichas están cayendo.", "Como dijeron las cartas.", "Ya lo sabía."],
      negative: ["Las señales avisaron de esto.", "Sentí que algo andaba mal.", "La oscuridad se acerca.", "Ojo."],
      questions: ["Hay cosas que es mejor no saber.", "La respuesta saldrá a su tiempo.", "Pregúntame cuando haya luna llena.", "Not yet."],
      default: ["El destino es misterioso, parce.", "Todo pasa por algo.", "Confía en el proceso.", "Esperá."]
    },
    american: {
      greetings: ["...", "Perhaps we should talk.", "Interesting timing.", "Hmm..."],
      positive: ["As expected.", "The pieces are falling into place.", "Just as the cards foretold.", "I knew it."],
      negative: ["The signs warned of this.", "I sensed something was wrong.", "Darkness approaches.", "Careful."],
      questions: ["Some things are better left unknown.", "The answer will reveal itself in time.", "Ask me again when the moon is full.", "Not yet."],
      default: ["Fate works in mysterious ways.", "Everything happens for a reason.", "Trust the process.", "Wait."]
    }
  }
};

const conversationContext = {};

function getAIResponse(contactName, userMessage) {
  const contact = contacts.find(c => c.name === contactName);
  const personality = contact.personality;
  const nationality = contact.nationality;
  const lower = userMessage.toLowerCase();
  
  if (!conversationContext[contactName]) {
    conversationContext[contactName] = {
      messageCount: 0,
      topics: [],
      sentiment: "neutral"
    };
  }
  
  const context = conversationContext[contactName];
  context.messageCount++;
  
  let responseType = "default";
  
  if (/(hi|hello|hey|sup|yo|what's up|kumusta|hola|que tal)/i.test(lower)) {
    responseType = "greetings";
  } else if (/(yes|yeah|sure|ok|okay|good|great|thanks|perfect|oo|sige|si|vale)/i.test(lower)) {
    responseType = "positive";
    context.sentiment = "positive";
  } else if (/(no|nah|bad|problem|trouble|wrong|can't|won't|hindi|ayaw|malo)/i.test(lower)) {
    responseType = "negative";
    context.sentiment = "negative";
  } else if (/(who|what|where|when|why|how|sino|ano|saan|bakit|paano|quien|que|donde|\?)/i.test(lower)) {
    responseType = "questions";
  }
  
  if (lower.includes("money") || lower.includes("cash") || lower.includes("pera") || lower.includes("dinero")) context.topics.push("money");
  if (lower.includes("boss") || lower.includes("jefe")) context.topics.push("boss");
  if (lower.includes("police") || lower.includes("cops") || lower.includes("pulis") || lower.includes("policia")) context.topics.push("danger");
  
  const responses = personalityResponses[personality][nationality][responseType];
  let response = responses[Math.floor(Math.random() * responses.length)];
  
  if (context.topics.includes("danger") && Math.random() > 0.5) {
    const warnings = {
      filipino: " Mag-lay low muna.",
      spanish: " Mantente bajo.",
      colombian: " Quieto un rato, parce.",
      american: " Stay low for now."
    };
    response += warnings[nationality];
  }
  if (context.messageCount > 5 && Math.random() > 0.7) {
    const endings = {
      filipino: " Matagal na tayong nag-uusap. Aalis na ko.",
      spanish: " Llevamos mucho tiempo hablando. Me voy.",
      colombian: " Ya llevamos mucho hablando. Me toca irme.",
      american: " We've been talking too long. I gotta go."
    };
    response += endings[nationality];
  }
  
  return response;
}

let currentContact = null;
let notificationPermission = false;

// DOM Elements
const contactsList = document.getElementById("contactsList");
const contactListView = document.getElementById("contactList");
const chatView = document.getElementById("chatView");
const settingsView = document.getElementById("settingsView");
const messagesDiv = document.getElementById("messages");
const messagesContainer = document.getElementById("messagesContainer");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatName = document.getElementById("chatName");
const chatAvatar = document.getElementById("chatAvatar");
const contactStatus = document.getElementById("contactStatus");
const backBtn = document.getElementById("backBtn");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const menuDrawer = document.getElementById("menuDrawer");
const menuOverlay = document.getElementById("menuOverlay");
const contextMenu = document.getElementById("contextMenu");
const toast = document.getElementById("toast");

const chats = {};

// Helper Functions
function getInitials(name) {
  return name.charAt(0).toUpperCase();
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now - date;
  
  if (diff < 60000) return "now";
  if (diff < 3600000) return Math.floor(diff / 60000) + "m";
  if (diff < 86400000) {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  }
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

// Dark Mode
function initDarkMode() {
  const darkModeCheckbox = document.getElementById("darkModeCheckbox");
  const savedTheme = localStorage.getItem("theme") || "light";
  
  document.documentElement.setAttribute("data-theme", savedTheme);
  darkModeCheckbox.checked = savedTheme === "dark";
  
  darkModeCheckbox.addEventListener("change", (e) => {
    const theme = e.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    showToast(`${theme === "dark" ? "Dark" : "Light"} mode enabled`);
  });
}

// Notification Permission
function initNotifications() {
  const notifCheckbox = document.getElementById("notifCheckbox");
  const notifStatus = document.getElementById("notifStatus");
  
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      notificationPermission = true;
      notifCheckbox.checked = true;
      notifStatus.textContent = "Enabled";
    }
    
    notifCheckbox.addEventListener("change", async (e) => {
      if (e.target.checked) {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          notificationPermission = true;
          notifStatus.textContent = "Enabled";
          showToast("Notifications enabled");
          new Notification("Messages", {
            body: "You'll now receive notifications!",
            icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='80' font-size='80'>💬</text></svg>"
          });
        } else {
          notifCheckbox.checked = false;
          showToast("Notification permission denied");
        }
      } else {
        notificationPermission = false;
        notifStatus.textContent = "Enable browser notifications";
        showToast("Notifications disabled");
      }
    });
  } else {
    notifStatus.textContent = "Not supported";
    notifCheckbox.disabled = true;
  }
}

// Contacts List
function renderContacts(filter = "") {
  contactsList.innerHTML = "";
  
  const sortedContacts = [...contacts].sort((a, b) => {
    const aChat = chats[a.name] || [];
    const bChat = chats[b.name] || [];
    const aTime = aChat.length > 0 ? aChat[aChat.length - 1].timestamp : 0;
    const bTime = bChat.length > 0 ? bChat[bChat.length - 1].timestamp : 0;
    return bTime - aTime;
  });

  const filtered = filter ? sortedContacts.filter(c => 
    c.name.toLowerCase().includes(filter.toLowerCase())
  ) : sortedContacts;

  if (filtered.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }
  
  noResults.classList.add("hidden");

  filtered.forEach((c) => {
    const item = document.createElement("div");
    item.className = "contact-item";
    
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = getInitials(c.name);
    avatar.style.background = c.color;
    
    const info = document.createElement("div");
    info.className = "contact-info";
    
    const top = document.createElement("div");
    top.className = "contact-top";
    
    const name = document.createElement("div");
    name.className = "contact-name";
    name.textContent = c.name;
    
    const time = document.createElement("div");
    time.className = "contact-time";
    const lastMsg = chats[c.name] && chats[c.name].length > 0 ? chats[c.name][chats[c.name].length - 1] : null;
    time.textContent = lastMsg ? formatTime(lastMsg.timestamp) : "";
    
    top.appendChild(name);
    top.appendChild(time);
    
    const bottom = document.createElement("div");
    bottom.className = "contact-bottom";
    
    const preview = document.createElement("div");
    preview.className = "contact-preview";
    preview.textContent = lastMsg ? lastMsg.text : "No messages yet";
    
    bottom.appendChild(preview);
    
    if (c.unread > 0) {
      const badge = document.createElement("div");
      badge.className = "unread-badge";
      badge.textContent = c.unread;
      bottom.appendChild(badge);
    }
    
    info.appendChild(top);
    info.appendChild(bottom);
    
    item.appendChild(avatar);
    item.appendChild(info);
    
    item.addEventListener("click", () => openChat(c));
    contactsList.appendChild(item);
  });
}

// Chat Functions
function openChat(contact) {
  currentContact = contact;
  contact.unread = 0;
  chatName.textContent = contact.name;
  chatAvatar.textContent = getInitials(contact.name);
  chatAvatar.style.background = contact.color;
  contactStatus.textContent = "Active now";
  contactListView.classList.add("hidden");
  chatView.classList.remove("hidden");
  loadMessages(contact.name);
  renderContacts();
}

function loadMessages(name) {
  messagesDiv.innerHTML = "";
  const chatHistory = chats[name] || [];
  chatHistory.forEach((m) => {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${m.type === 'user' ? 'sent' : 'received'}`;
    msgDiv.innerHTML = `
      <div>${m.text}</div>
      <div class="message-time">${new Date(m.timestamp).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}</div>
    `;
    messagesDiv.appendChild(msgDiv);
  });
  scrollToBottom();
}

function scrollToBottom() {
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage(sender, text, type) {
  if (!chats[currentContact.name]) chats[currentContact.name] = [];
  chats[currentContact.name].push({ text, type, timestamp: Date.now() });

  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${type === 'user' ? 'sent' : 'received'}`;
  msgDiv.innerHTML = `
    <div>${text}</div>
    <div class="message-time">${new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}</div>
  `;
  messagesDiv.appendChild(msgDiv);

  scrollToBottom();
  renderContacts();
}

function sendUserMessage() {
  const text = userInput.value.trim();
  if (!text) return;
  sendMessage("You", text, "user");
  userInput.value = "";
  setTimeout(() => aiReply(text), 800 + Math.random() * 1000);
}

function aiReply(userText) {
  const reply = getAIResponse(currentContact.name, userText);
  sendMessage(currentContact.name, reply, "contact");
}

// Notifications
function showNotification(contactName, message) {
  const contact = contacts.find(c => c.name === contactName);
  
  if (notificationPermission && document.hidden) {
    new Notification(contactName, {
      body: message,
      icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='80' font-size='80'>💬</text></svg>",
      tag: contactName,
      requireInteraction: false
    });
  }
  
  const notif = document.createElement("div");
  notif.className = "notification";
  
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = getInitials(contactName);
  avatar.style.background = contact.color;
  
  const content = document.createElement("div");
  content.className = "notification-content";
  
  const name = document.createElement("div");
  name.className = "notification-name";
  name.textContent = contactName;
  
  const msg = document.createElement("div");
  msg.className = "notification-message";
  msg.textContent = message;
  
  content.appendChild(name);
  content.appendChild(msg);
  notif.appendChild(avatar);
  notif.appendChild(content);
  document.body.appendChild(notif);
  
  notif.addEventListener("click", () => {
    if (chatView.classList.contains("hidden")) {
      openChat(contact);
    }
    notif.classList.add("fade-out");
    setTimeout(() => notif.remove(), 300);
  });
  
  setTimeout(() => {
    notif.classList.add("fade-out");
    setTimeout(() => notif.remove(), 300);
  }, 4000);
}

// Random Messages
function randomIncomingMessages() {
  setInterval(() => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const personality = personalityResponses[randomContact.personality];
    const randomMsg = personality.default[Math.floor(Math.random() * personality.default.length)];
    
    if (!chats[randomContact.name]) chats[randomContact.name] = [];
    chats[randomContact.name].push({ text: randomMsg, type: "contact", timestamp: Date.now() });

    if (!currentContact || currentContact.name !== randomContact.name) {
      randomContact.unread++;
      showNotification(randomContact.name, randomMsg);
      renderContacts();
    } else {
      const msgDiv = document.createElement("div");
      msgDiv.className = "message received";
      msgDiv.innerHTML = `
        <div>${randomMsg}</div>
        <div class="message-time">${new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}</div>
      `;
      messagesDiv.appendChild(msgDiv);
      scrollToBottom();
      renderContacts();
    }
  }, 20000 + Math.random() * 30000);
}

// Event Listeners
sendBtn.addEventListener("click", sendUserMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendUserMessage();
});

backBtn.addEventListener("click", () => {
  chatView.classList.add("hidden");
  contactListView.classList.remove("hidden");
  renderContacts();
});

// Menu Drawer
document.getElementById("menuBtn").addEventListener("click", () => {
  menuDrawer.classList.remove("hidden");
});

menuOverlay.addEventListener("click", () => {
  menuDrawer.classList.add("hidden");
});

document.getElementById("menuSettings").addEventListener("click", () => {
  menuDrawer.classList.add("hidden");
  contactListView.classList.add("hidden");
  settingsView.classList.remove("hidden");
});

document.getElementById("menuArchived").addEventListener("click", () => {
  menuDrawer.classList.add("hidden");
  showToast("No archived conversations");
});

document.getElementById("menuHelp").addEventListener("click", () => {
  menuDrawer.classList.add("hidden");
  showToast("Help: Type messages to chat with contacts!");
});

document.getElementById("settingsBackBtn").addEventListener("click", () => {
  settingsView.classList.add("hidden");
  contactListView.classList.remove("hidden");
});

// Search
document.getElementById("searchBtn").addEventListener("click", () => {
  searchBar.classList.remove("hidden");
  searchInput.focus();
});

document.getElementById("closeSearchBtn").addEventListener("click", () => {
  searchBar.classList.add("hidden");
  searchInput.value = "";
  renderContacts();
});

searchInput.addEventListener("input", (e) => {
  renderContacts(e.target.value);
});

// More Menu
document.getElementById("moreBtn").addEventListener("click", () => {
  contextMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!contextMenu.contains(e.target) && e.target.id !== "moreBtn") {
    contextMenu.classList.add("hidden");
  }
});

document.getElementById("menuDelete").addEventListener("click", () => {
  contextMenu.classList.add("hidden");
  showToast("Feature coming soon");
});

document.getElementById("menuArchive").addEventListener("click", () => {
  contextMenu.classList.add("hidden");
  showToast("Feature coming soon");
});

document.getElementById("menuMute").addEventListener("click", () => {
  contextMenu.classList.add("hidden");
  showToast("Notifications muted");
});

// Chat Actions
document.getElementById("callBtn").addEventListener("click", () => {
  showToast(`Calling ${currentContact.name}...`);
});

document.getElementById("videoBtn").addEventListener("click", () => {
  showToast(`Starting video call with ${currentContact.name}...`);
});

document.getElementById("chatMoreBtn").addEventListener("click", () => {
  showToast("More options");
});

document.getElementById("attachBtn").addEventListener("click", () => {
  showToast("Attachment feature coming soon");
});

document.getElementById("emojiBtn").addEventListener("click", () => {
  showToast("😊 Emoji picker coming soon");
});

document.getElementById("newMessageBtn").addEventListener("click", () => {
  showToast("Select a contact to start messaging");
});

// Initialize
document.getElementById("todayDate").textContent = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  month: 'long', 
  day: 'numeric' 
});

initDarkMode();
initNotifications();
renderContacts();
randomIncomingMessages();

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {
    console.log('Service worker registration failed');
  });
}