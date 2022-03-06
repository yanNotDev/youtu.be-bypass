const filter = {
  urls: ["https://youtu.be/*"]
}

function handleUpdated(tabID, tabInfo) {
    const url = tabInfo.url.split('/').pop()
    console.log(url)
    browser.tabs.update(tabID, {url: 'https://youtube.com/watch?v=' + url})

}

browser.tabs.onUpdated.addListener(handleUpdated, filter);