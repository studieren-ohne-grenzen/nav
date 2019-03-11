(function(document){
  var style = document.createElement('style')
  style.textContent = `
.SOGNav__Container {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background-color: #57b4dc;
    border-image: initial;
    max-width: 100%;
    width: 600px;
    height: 83px;
    position: absolute;
    top: -83px;
    left: calc(50% - 300px);
    box-shadow: 0 0 5px #777;
    transition: top .3s;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    animation: floating 2s infinite forwards running;
}
@keyframes floating {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(5%);
    }
    100% {
      transform: translateY(0%);
    }
}
.SOGNav__Container:hover {
    top: 0;
    animation-play-state: paused;
}
.SOGNav__PullHandle {
    width: 200px;
    height: 40px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    background-image: url(https://raw.githubusercontent.com/studieren-ohne-grenzen/sog-ansible/master/files/img/esfbird-white-on-transparent.png);
    background-size: 19%;
    background-color: #57b4dc;
    position: absolute;
    top: 100%;
    left: calc(50% - 100px);
    background-repeat: no-repeat;
    background-position: center 25%;
    box-shadow: 0 0px 5px #777;
}
.SOGNav__MenuItem {
    display: block;
    height: 50%;
    margin: 15px;
    text-align: center;
    position: relative;
    font-family: sans-serif;
    text-decoration: none !important;
    color: white !important;
}
.SOGNav__MenuItem:hover {
    text-decoration: underline !important;
}
.SOGNav__MenuItem img {
    height: 80%;
    width: auto;
    margin-bottom: 5px;
    position: relative;
    top: 0;
    transition: top .3s, opacity .3s;
    opacity: .85;
}
.SOGNav__MenuItem:hover img {
    top: -3px;
    opacity: 1;
}
.SOGNav__MenuItem__Help {
    border: 1px solid darkblue;
    color: darkblue;
    border-radius: 14px;
    height: 13px;
    width: 13px;
    font-size: 9px;
    display: block;
    position: absolute;
    top: -10px;
    right: -15px;
    opacity: .5;
}
.SOGNav__MenuItem__Help:hover {
    opacity: 1;
}

@media screen and (max-width: 600px) {
    .SOGNav__Container {
        left: 0;
        width: 100%;
    }
}
`
  document.head.append(style)
  var container = document.createElement('div')
  document.body.append(container)
  container.outerHTML = `
<div class="SOGNav__Container">
  <a class="SOGNav__MenuItem" href="https://dashboard.studieren-ohne-grenzen.org/">
    <img src="https://raw.githubusercontent.com/studieren-ohne-grenzen/sog-ansible/master/files/img/service-dashboard-white.svg?sanitize=true" /><br/>
    Dashboard <span class="SOGNav__MenuItem__Help" title="Für das Managen deines SOG-Accounts und deiner Gruppen">?</span>
  </a>
  <a class="SOGNav__MenuItem" href="https://cloud.studieren-ohne-grenzen.org/">
    <img src="https://raw.githubusercontent.com/studieren-ohne-grenzen/sog-ansible/master/files/img/service-cloud-white.svg?sanitize=true" /><br/>
    Cloud <span class="SOGNav__MenuItem__Help" title="Für das gemeinsame Verwalten von Dateien, Bildern, Terminen, etc.">?</span>
  </a>
  <a class="SOGNav__MenuItem" href="https://wiki.studieren-ohne-grenzen.org/">
    <img src="https://raw.githubusercontent.com/studieren-ohne-grenzen/sog-ansible/master/files/img/service-wiki-white.svg?sanitize=true" /><br/>
    Wiki <span class="SOGNav__MenuItem__Help" title="Für die Dokumentation und zum Wiederfinden vereinsweiten Wissens">?</span>
  </a>
  <a class="SOGNav__MenuItem" href="https://chat.studieren-ohne-grenzen.org/">
    <img src="https://raw.githubusercontent.com/studieren-ohne-grenzen/sog-ansible/master/files/img/service-chat-white.svg?sanitize=true" /><br/>
    Chat <span class="SOGNav__MenuItem__Help" title="Für das Chatten in Gruppen und mit einzelnen Mitgliedern">?</span>
  </a>
  <a class="SOGNav__MenuItem" href="https://webmail.studieren-ohne-grenzen.org/">
    <img src="https://raw.githubusercontent.com/studieren-ohne-grenzen/sog-ansible/master/files/img/service-mail-white.svg?sanitize=true" /><br/>
    Mail <span class="SOGNav__MenuItem__Help" title="Für das Lesen und Schreiben von E-Mails">?</span>
  </a>
  <a class="SOGNav__MenuItem" href="https://civicrm.studieren-ohne-grenzen.org/">
    <img src="https://raw.githubusercontent.com/studieren-ohne-grenzen/sog-ansible/master/files/img/service-crm-white.svg?sanitize=true" /><br/>
    CRM <span class="SOGNav__MenuItem__Help" title="Für die Betreuung und Pflege der Daten von Paten, Spendern und Mitgliedern">?</span>
  </a>
  <div class="SOGNav__PullHandle"></div>
</div>
`
})(document)
