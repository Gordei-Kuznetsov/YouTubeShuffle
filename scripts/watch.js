(async () => {
  const src = chrome.extension.getURL('scripts/common/main.js');
  const app = await import(src);
  app.setupWatchPage();
})();