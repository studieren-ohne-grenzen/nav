(function(window, document){
  var css = `
.SOGNav__Container {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: #00679E;
    border-image: initial;
    max-width: 100%;
    width: 600px;
    height: 75px;
    padding: 0 10px;
    position: absolute;
    top: -75px;
    left: calc(50% - 300px);
    transition: top .2s;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    z-index: 7999;
    font-family: sans-serif;
    font-size: 14px;
}
.SOGNav__Container:hover {
    top: 0;
    animation-play-state: paused;
}
.SOGNav__PullHandle {
    width: 200px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: #00679E;
    position: absolute;
    top: 100%;
    left: calc(50% - 100px);
    background-repeat: no-repeat;
    background-position: center 25%;
    color: white;
    text-align: center;
    padding: 0.5rem;
}
.SOGNav__MenuItem {
    display: block;
    height: 50%;
    flex: 1 1 0%;
    margin: 13px 5px;
    text-align: center;
    position: relative;
    text-decoration: none !important;
    color: white !important;
}
.SOGNav__MenuItem:hover {
    text-decoration: none !important;
}
.SOGNav__MenuItem svg {
    height: 60%;
    width: auto;
    margin-bottom: 5px;
    position: relative;
    top: 0;
    transition: opacity .2s;
    opacity: .65;
    fill: white;
    pointer-events: none;
}
.SOGNav__MenuItem:hover svg {
    opacity: 1;
}
.SOGNav__MenuItem__Help {
    border: 1px solid #00679E;
    color: #00679E;
    border-radius: 6px;
    width: 115px;
    max-width: 16vw;
    font-size: 11px;
    display: block;
    position: absolute;
    top: 70px;
    right: calc(50% - 65px);
    z-index: 100;
    text-align: left;
    padding: 5px;
    opacity: 0;
    transition: opacity .2s, top .2s;
    transition-delay: 1s;
    background: white;
    visibility: hidden;
}
.SOGNav__MenuItem:hover .SOGNav__MenuItem__Help {
    opacity: 1;
    top: 73px;
    visibility: visible;
}
.SOGNav__MenuItem__Help::before {
    display: block;
    width: 10px;
    height: 10px;
    border: 1px solid #00679e;
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    position: absolute;
    top: -6px;
    left: calc(100% - 68px);
    transform: rotateZ(45deg);
    background: white;
}

.SOGNav__Logo {
    width: 30px;
    margin: -0.5rem 0;
}

@media screen and (max-width: 600px) {
    .SOGNav__Container {
        left: 0;
        width: 100%;
        padding: 0;
        font-size: 11px;
    }
    .SOGNav__MenuItem__Help {
        display: none;
    }
}
`
  var html = `
<div class="SOGNav__Container">
  <a class="SOGNav__MenuItem" href="https://vogelnest.studieren-ohne-grenzen.org/">
    <svg viewBox="0 0 24 24"><title>Icon Vogelnest</title><path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z"/></svg>
    <br/>
    Vogel<wbr>nest <span class="SOGNav__MenuItem__Help">Deinen SOG-Account und Gruppen managen</span>
  </a>
  <a class="SOGNav__MenuItem" href="https://cloud.studieren-ohne-grenzen.org/">
    <svg viewBox="0 0 24 24"><title>Icon Nextcloud</title><path d="M12 2c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78zm0-2c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092zm-4 24v-2h3v-2h2v2h3v2h-8zm9-2v2h3v-2h-3zm-10 0h-3v2h3v-2z"/></svg>
    <br/>
    Next<wbr>cloud <span class="SOGNav__MenuItem__Help">Gemeinsames Verwalten von Dateien, Bildern, Terminen, etc.</span>
  </a>
  <a class="SOGNav__MenuItem" href="https://wiki.studieren-ohne-grenzen.org/">
    <svg viewBox="0 0 24 24"><title>Icon XWiki</title><path d="M6 22v-16h16v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-10.386h-20v20h10.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-5v-1h5v1zm5-4h-10v1h10v-1zm0-3h-10v1h10v-1zm2-7h-19v19h-2v-21h21v2z"/></svg>
    <br/>
    XWiki <span class="SOGNav__MenuItem__Help">Dokumentation und Wiederfinden vereinsweiten Wissens</span>
  </a>
  <a class="SOGNav__MenuItem" href="https://chat.studieren-ohne-grenzen.org/">
  <svg viewBox="0 0 24 24"><title>Icon Mattermost</title><path d="M17.454 12.537c2.782 0 5.046 1.779 5.046 3.967 0 1.12-.462 1.745-1.102 2.509-.021.746-.049 1.054.139 1.866-.891-.306-.986-.396-1.666-.813-.894.218-1.489.38-2.465.38-3.087 0-4.998-2.046-4.998-3.942 0-2.188 2.264-3.967 5.046-3.967zm0-1.5c-3.436 0-6.546 2.292-6.546 5.467 0 2.799 2.633 5.442 6.498 5.442.699 0 1.44-.087 2.213-.275.914.561 2.933 1.128 4.352 1.385-.53-1.044-1.117-2.479-1.088-3.479.714-.853 1.117-1.953 1.117-3.073 0-3.158-3.089-5.467-6.546-5.467zm-8.485 4.614c-1.138-.11-1.611-.247-2.611-.491-.97.596-1.26.815-3.008 1.374.418-1.514.364-2.183.333-3.183-.834-1-1.683-2.07-1.683-3.943 0-3.502 3.589-6.352 8-6.352 4.264 0 7.748 2.664 7.978 6.004.698.038 1.377.14 2.021.315-.022-4.834-4.762-8.319-9.999-8.319-5.281 0-10 3.527-10 8.352 0 1.71.615 3.391 1.705 4.695.047 1.527-.851 3.718-1.661 5.313 2.168-.391 5.252-1.258 6.649-2.115.802.196 1.578.314 2.33.374-.135-.749-.148-1.317-.054-2.024z"/></svg>
    <br/>
    Matter<wbr>most <span class="SOGNav__MenuItem__Help">Chatten in Gruppen und mit einzelnen Mitgliedern</span>
  </a>
  <a class="SOGNav__MenuItem" href="https://webmail.studieren-ohne-grenzen.org/">
    <svg viewBox="0 0 24 24"><title>Icon Webmail</title><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
    <br/>
    Web<wbr>mail <span class="SOGNav__MenuItem__Help">Lesen und Schreiben von E-Mails</span>
  </a>
  <a class="SOGNav__MenuItem" href="https://meet.studieren-ohne-grenzen.org/">
  <svg viewBox="0 0 24 24"><title>Icon Jitsi-Meet</title><path d="M18 0c-3.17 0-6 2.115-6 5.004 0 1.025.369 2.033 1.025 2.812.023.914-.515 2.232-.996 3.188 1.3-.234 3.146-.756 3.984-1.271 4.624 1.124 7.987-1.7 7.987-4.729 0-2.906-2.848-5.004-6-5.004zm-2.502 5.754c-.41 0-.75-.34-.75-.75 0-.416.34-.75.75-.75.416 0 .75.334.75.75 0 .41-.334.75-.75.75zm2.502 0c-.416 0-.75-.34-.75-.75 0-.416.334-.75.75-.75s.75.334.75.75c0 .41-.334.75-.75.75zm2.502 0c-.416 0-.75-.34-.75-.75 0-.416.334-.75.75-.75.41 0 .75.334.75.75 0 .41-.34.75-.75.75zm-20.502 6.371c0-3.934 3.191-7.125 7.125-7.125 1.041 0 2.027.229 2.918.63.08.802.312 1.576.68 2.288-.969-.83-2.225-1.335-3.598-1.335-3.056 0-5.542 2.485-5.542 5.542s2.485 5.542 5.542 5.542c2.782 0 5.084-2.062 5.476-4.736.45-.087 1.02-.216 1.627-.384-.219 3.737-3.312 6.703-7.104 6.703-3.933 0-7.124-3.191-7.124-7.125zm11.328 7.492l2.922 4.383h-14.25l2.922-4.383c.449.282.928.519 1.431.708l-1.394 2.092h8.332l-1.394-2.092c.503-.189.982-.426 1.431-.708zm-7.37-7.492c0 1.75 1.417 3.167 3.167 3.167s3.167-1.417 3.167-3.167-1.417-3.167-3.167-3.167-3.167 1.417-3.167 3.167zm4.75 0c0 .873-.711 1.583-1.583 1.583s-1.583-.711-1.583-1.583.711-1.583 1.583-1.583 1.583.71 1.583 1.583z"/></svg>
    <br/>
    Jitsi-Meet <span class="SOGNav__MenuItem__Help">Video-Konferenzen und Livestreams</span>
  </a>
  <div class="SOGNav__PullHandle">
    <img src="https:///studieren-ohne-grenzen.github.io/nav/img/esfbird-white-on-transparent.png" class="SOGNav__Logo" alt="Logo von SOG" /> 
    SOG-Tools
  </div>
</div>
`

  // init
  function init() {
    var container = document.createElement('div')
    var style = document.createElement('style')
    style.textContent = css
    document.head.append(style)
    document.body.append(container)
    container.outerHTML = html
  }
  window.addEventListener('DOMContentLoaded', init)
  if (document.readyState !== 'loading') init()
})(window, document)
