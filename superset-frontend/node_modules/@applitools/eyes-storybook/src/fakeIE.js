async function fakeIE({logger, page, pageId}) {
  logger.verbose(`[fakeIE] - faking IE for page id ${pageId}`);

  await page.evaluateOnNewDocument(() => {
    /* global document */
    document.documentMode = 11;
  });

  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko',
  );

  logger.verbose(`[fakeIE] - done faking IE for page id ${pageId}`);
}

module.exports = fakeIE;
