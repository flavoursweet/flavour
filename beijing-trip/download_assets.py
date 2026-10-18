import urllib.request, concurrent.futures, pathlib, json
ROOT=pathlib.Path(__file__).parent
items={
 'palace':('https://data.trippest.com/images/info/beijing/1920-26.jpg','https://www.trippest.com/beijing-travel-guide/jingshan-park/'),
 'jingshan':('https://x0.ifengimg.com/res/2024/95B880317C9FAE97F2F3D57702EAAF32CE4449C9_size218_w1000_h666.jpg','https://news.ifeng.com/c/8dNScw0Cbuq'),
 'summer':('https://img-rs.huanqiucdn.cn/dp/api/files/imageDir/0ac6a0a81183571d9441d399fb0645a2u5.jpg','https://www.visitbeijing.or.kr/article/4DHBjT1nTWs'),
 'gong':('https://english.beijing.gov.cn/travellinginbeijing/museums/202603/W020260320495390567724.jpg','https://english.beijing.gov.cn/travellinginbeijing/museums/202603/t20260320_4562523.html'),
 'sanlitun':('https://japanese.beijing.gov.cn/travellinginbeijing/shopping/shoppingcenters/202007/W020200727411547241296.jpg','https://japanese.beijing.gov.cn/travellinginbeijing/shopping/shoppingcenters/202007/t20200727_1961721.html'),
 'beihai':('https://arabic.beijing.gov.cn/specials/240tour/line1/card1/202506/W020250613380895387724.jpg','https://arabic.beijing.gov.cn/specials/240tour/'),
 'nanluo':('https://img-rs.huanqiucdn.cn/dp/api/files/image/2a9051b47ca72f781b09aad4c19b365cc5.jpg','https://www.visitbeijing.com.cn/article/47QkViBYPUp'),
 'shichahai':('https://r1.visitbeijing.com.cn/vbj-s/2012/1208/20121208113347823.jpg','https://s.visitbeijing.com.cn/attraction/101816'),
 'yandai':('https://r1.visitbeijing.com.cn/vbj-s/2018/0816/20180816030035313.jpg','https://s.visitbeijing.com.cn/gallery/9196'),
 'tiananmen':('https://www.inoutviajes.com/galerias-noticias/galerias/14432/tiananmen-pekin.jpg','https://www.inoutviajes.com/noticia/14432/turismo-internacional/las-plazas-mas-grandes-del-mundo.html')
}
def download(item):
 key,(url,source)=item
 try:
  op=urllib.request.build_opener(urllib.request.ProxyHandler({}))
  req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
  with op.open(req,timeout=25) as r:
   data=r.read()
   if not r.headers.get('Content-Type','').startswith('image/'): raise ValueError('Not an image')
  (ROOT/'assets'/f'{key}.jpg').write_bytes(data)
  return key,len(data)
 except Exception as e:return key,str(e)
items.update({"summer":["https://ak-d.tripcdn.com/images/1mi2v12000s96mo6r7AAA_Q90.jpg?proc=source%2Ftrip","https://sg.trip.com/moments/detail/beijing-1-144748717/"],"nanluo":["https://www.chinatoruktour.com/uploadfile/2018/0816/20180816040933877.jpg","https://www.chinatoruktour.com/index.php?a=show&c=index&catid=51&id=8&m=content"],"tiananmen":["https://fotografias.lasexta.com/clipping/cmsimages01/2026/01/14/46F2C973-DA1F-4AE1-BF5F-EFC22F26F853/plaza-tiananmen-china_69.jpg?crop=1280%2C720%2Cx0%2Cy67&format=jpg&height=720&optimize=low&width=1280","https://www.lasexta.com/viajestic/destinos/plaza-tiananmen-sabias-que-plazas-publicas-mas-grandes-mundo_20260114696757e4be7ae37724c416f4.html"]})
if __name__=='__main__':
 with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:
  for result in ex.map(download,items.items()): print(result)
 (ROOT/'assets'/'sources.json').write_text(json.dumps(items,ensure_ascii=False,indent=2),encoding='utf-8')
