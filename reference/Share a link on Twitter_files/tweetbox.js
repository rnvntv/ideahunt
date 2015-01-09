/* Twitter Text 1.9.0 */
(function(){if(typeof twttr==="undefined"||twttr===null){var twttr={}}twttr.txt={};twttr.txt.regexen={};var HTML_ENTITIES={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#39;"};twttr.txt.htmlEscape=function(text){return text&&text.replace(/[&"'><]/g,function(character){return HTML_ENTITIES[character]})};function regexSupplant(regex,flags){flags=flags||"";if(typeof regex!=="string"){if(regex.global&&flags.indexOf("g")<0){flags+="g"}if(regex.ignoreCase&&flags.indexOf("i")<0){flags+="i"}if(regex.multiline&&flags.indexOf("m")<0){flags+="m"}regex=regex.source}return new RegExp(regex.replace(/#\{(\w+)\}/g,function(match,name){var newRegex=twttr.txt.regexen[name]||"";if(typeof newRegex!=="string"){newRegex=newRegex.source}return newRegex}),flags)}twttr.txt.regexSupplant=regexSupplant;function stringSupplant(str,values){return str.replace(/#\{(\w+)\}/g,function(match,name){return values[name]||""})}twttr.txt.stringSupplant=stringSupplant;function addCharsToCharClass(charClass,start,end){var s=String.fromCharCode(start);if(end!==start){s+="-"+String.fromCharCode(end)}charClass.push(s);return charClass}twttr.txt.addCharsToCharClass=addCharsToCharClass;var fromCode=String.fromCharCode;var UNICODE_SPACES=[fromCode(32),fromCode(133),fromCode(160),fromCode(5760),fromCode(6158),fromCode(8232),fromCode(8233),fromCode(8239),fromCode(8287),fromCode(12288)];addCharsToCharClass(UNICODE_SPACES,9,13);addCharsToCharClass(UNICODE_SPACES,8192,8202);var INVALID_CHARS=[fromCode(65534),fromCode(65279),fromCode(65535)];addCharsToCharClass(INVALID_CHARS,8234,8238);twttr.txt.regexen.spaces_group=regexSupplant(UNICODE_SPACES.join(""));twttr.txt.regexen.spaces=regexSupplant("["+UNICODE_SPACES.join("")+"]");twttr.txt.regexen.invalid_chars_group=regexSupplant(INVALID_CHARS.join(""));twttr.txt.regexen.punct=/\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/;twttr.txt.regexen.rtl_chars=/[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm;twttr.txt.regexen.non_bmp_code_pairs=/[\uD800-\uDBFF][\uDC00-\uDFFF]/gm;var nonLatinHashtagChars=[];addCharsToCharClass(nonLatinHashtagChars,1024,1279);addCharsToCharClass(nonLatinHashtagChars,1280,1319);addCharsToCharClass(nonLatinHashtagChars,11744,11775);addCharsToCharClass(nonLatinHashtagChars,42560,42655);addCharsToCharClass(nonLatinHashtagChars,1425,1471);addCharsToCharClass(nonLatinHashtagChars,1473,1474);addCharsToCharClass(nonLatinHashtagChars,1476,1477);addCharsToCharClass(nonLatinHashtagChars,1479,1479);addCharsToCharClass(nonLatinHashtagChars,1488,1514);addCharsToCharClass(nonLatinHashtagChars,1520,1524);addCharsToCharClass(nonLatinHashtagChars,64274,64296);addCharsToCharClass(nonLatinHashtagChars,64298,64310);addCharsToCharClass(nonLatinHashtagChars,64312,64316);addCharsToCharClass(nonLatinHashtagChars,64318,64318);addCharsToCharClass(nonLatinHashtagChars,64320,64321);addCharsToCharClass(nonLatinHashtagChars,64323,64324);addCharsToCharClass(nonLatinHashtagChars,64326,64335);addCharsToCharClass(nonLatinHashtagChars,1552,1562);addCharsToCharClass(nonLatinHashtagChars,1568,1631);addCharsToCharClass(nonLatinHashtagChars,1646,1747);addCharsToCharClass(nonLatinHashtagChars,1749,1756);addCharsToCharClass(nonLatinHashtagChars,1758,1768);addCharsToCharClass(nonLatinHashtagChars,1770,1775);addCharsToCharClass(nonLatinHashtagChars,1786,1788);addCharsToCharClass(nonLatinHashtagChars,1791,1791);addCharsToCharClass(nonLatinHashtagChars,1872,1919);addCharsToCharClass(nonLatinHashtagChars,2208,2208);addCharsToCharClass(nonLatinHashtagChars,2210,2220);addCharsToCharClass(nonLatinHashtagChars,2276,2302);addCharsToCharClass(nonLatinHashtagChars,64336,64433);addCharsToCharClass(nonLatinHashtagChars,64467,64829);addCharsToCharClass(nonLatinHashtagChars,64848,64911);addCharsToCharClass(nonLatinHashtagChars,64914,64967);addCharsToCharClass(nonLatinHashtagChars,65008,65019);addCharsToCharClass(nonLatinHashtagChars,65136,65140);addCharsToCharClass(nonLatinHashtagChars,65142,65276);addCharsToCharClass(nonLatinHashtagChars,8204,8204);addCharsToCharClass(nonLatinHashtagChars,3585,3642);addCharsToCharClass(nonLatinHashtagChars,3648,3662);addCharsToCharClass(nonLatinHashtagChars,4352,4607);addCharsToCharClass(nonLatinHashtagChars,12592,12677);addCharsToCharClass(nonLatinHashtagChars,43360,43391);addCharsToCharClass(nonLatinHashtagChars,44032,55215);addCharsToCharClass(nonLatinHashtagChars,55216,55295);addCharsToCharClass(nonLatinHashtagChars,65441,65500);addCharsToCharClass(nonLatinHashtagChars,12449,12538);addCharsToCharClass(nonLatinHashtagChars,12540,12542);addCharsToCharClass(nonLatinHashtagChars,65382,65439);addCharsToCharClass(nonLatinHashtagChars,65392,65392);addCharsToCharClass(nonLatinHashtagChars,65296,65305);addCharsToCharClass(nonLatinHashtagChars,65313,65338);addCharsToCharClass(nonLatinHashtagChars,65345,65370);addCharsToCharClass(nonLatinHashtagChars,12353,12438);addCharsToCharClass(nonLatinHashtagChars,12441,12446);addCharsToCharClass(nonLatinHashtagChars,13312,19903);addCharsToCharClass(nonLatinHashtagChars,19968,40959);addCharsToCharClass(nonLatinHashtagChars,173824,177983);addCharsToCharClass(nonLatinHashtagChars,177984,178207);addCharsToCharClass(nonLatinHashtagChars,194560,195103);addCharsToCharClass(nonLatinHashtagChars,12291,12291);addCharsToCharClass(nonLatinHashtagChars,12293,12293);addCharsToCharClass(nonLatinHashtagChars,12347,12347);twttr.txt.regexen.nonLatinHashtagChars=regexSupplant(nonLatinHashtagChars.join(""));var latinAccentChars=[];addCharsToCharClass(latinAccentChars,192,214);addCharsToCharClass(latinAccentChars,216,246);addCharsToCharClass(latinAccentChars,248,255);addCharsToCharClass(latinAccentChars,256,591);addCharsToCharClass(latinAccentChars,595,596);addCharsToCharClass(latinAccentChars,598,599);addCharsToCharClass(latinAccentChars,601,601);addCharsToCharClass(latinAccentChars,603,603);addCharsToCharClass(latinAccentChars,611,611);addCharsToCharClass(latinAccentChars,616,616);addCharsToCharClass(latinAccentChars,623,623);addCharsToCharClass(latinAccentChars,626,626);addCharsToCharClass(latinAccentChars,649,649);addCharsToCharClass(latinAccentChars,651,651);addCharsToCharClass(latinAccentChars,699,699);addCharsToCharClass(latinAccentChars,768,879);addCharsToCharClass(latinAccentChars,7680,7935);twttr.txt.regexen.latinAccentChars=regexSupplant(latinAccentChars.join(""));twttr.txt.regexen.hashSigns=/[#＃]/;twttr.txt.regexen.hashtagAlpha=regexSupplant(/[a-z_#{latinAccentChars}#{nonLatinHashtagChars}]/i);twttr.txt.regexen.hashtagAlphaNumeric=regexSupplant(/[a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}]/i);twttr.txt.regexen.endHashtagMatch=regexSupplant(/^(?:#{hashSigns}|:\/\/)/);twttr.txt.regexen.hashtagBoundary=regexSupplant(/(?:^|$|[^&a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}])/);twttr.txt.regexen.validHashtag=regexSupplant(/(#{hashtagBoundary})(#{hashSigns})(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi);twttr.txt.regexen.validMentionPrecedingChars=/(?:^|[^a-zA-Z0-9_!#$%&*@＠]|(?:rt|RT|rT|Rt):?)/;twttr.txt.regexen.atSigns=/[@＠]/;twttr.txt.regexen.validMentionOrList=regexSupplant("(#{validMentionPrecedingChars})"+"(#{atSigns})"+"([a-zA-Z0-9_]{1,20})"+"(/[a-zA-Z][a-zA-Z0-9_-]{0,24})?","g");twttr.txt.regexen.validReply=regexSupplant(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/);twttr.txt.regexen.endMentionMatch=regexSupplant(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/);twttr.txt.regexen.validUrlPrecedingChars=regexSupplant(/(?:[^A-Za-z0-9@＠$#＃#{invalid_chars_group}]|^)/);twttr.txt.regexen.invalidUrlWithoutProtocolPrecedingChars=/[-_.\/]$/;twttr.txt.regexen.invalidDomainChars=stringSupplant("#{punct}#{spaces_group}#{invalid_chars_group}",twttr.txt.regexen);twttr.txt.regexen.validDomainChars=regexSupplant(/[^#{invalidDomainChars}]/);twttr.txt.regexen.validSubdomain=regexSupplant(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/);twttr.txt.regexen.validDomainName=regexSupplant(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/);twttr.txt.regexen.validGTLD=regexSupplant(RegExp("(?:(?:academy|actor|aero|agency|arpa|asia|bar|bargains|berlin|best|bid|bike|biz|blue|boutique|build|builders|"+"buzz|cab|camera|camp|cards|careers|cat|catering|center|ceo|cheap|christmas|cleaning|clothing|club|codes|"+"coffee|com|community|company|computer|construction|contractors|cool|coop|cruises|dance|dating|democrat|"+"diamonds|directory|domains|edu|education|email|enterprises|equipment|estate|events|expert|exposed|farm|fish|"+"flights|florist|foundation|futbol|gallery|gift|glass|gov|graphics|guitars|guru|holdings|holiday|house|"+"immobilien|industries|info|institute|int|international|jobs|kaufen|kim|kitchen|kiwi|koeln|kred|land|lighting|"+"limo|link|luxury|management|mango|marketing|menu|mil|mobi|moda|monash|museum|nagoya|name|net|neustar|ninja|"+"okinawa|onl|org|partners|parts|photo|photography|photos|pics|pink|plumbing|post|pro|productions|properties|"+"pub|qpon|recipes|red|rentals|repair|report|reviews|rich|ruhr|sexy|shiksha|shoes|singles|social|solar|"+"solutions|supplies|supply|support|systems|tattoo|technology|tel|tienda|tips|today|tokyo|tools|training|"+"travel|uno|vacations|ventures|viajes|villas|vision|vote|voting|voto|voyage|wang|watch|wed|wien|wiki|works|"+"xxx|xyz|zone|дети|онлайн|орг|сайт|بازار|شبكة|みんな|中信|中文网|公司|公益|在线|我爱你|政务|游戏|移动|网络|集团|삼성)"+"(?=[^0-9a-zA-Z@]|$))"));twttr.txt.regexen.validCCTLD=regexSupplant(RegExp("(?:(?:ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bl|bm|bn|bo|bq|br|bs|"+"bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|"+"et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|"+"im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|"+"me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|"+"pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|"+"sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|"+"ye|yt|za|zm|zw|мон|рф|срб|укр|қаз|الاردن|الجزائر|السعودية|المغرب|امارات|ایران|بھارت|تونس|سودان|سورية|عمان|فلسطين|قطر|مصر|مليسيا|پاکستان|"+"भारत|বাংলা|ভারত|ਭਾਰਤ|ભારત|இந்தியா|இலங்கை|சிங்கப்பூர்|భారత్|ලංකා|ไทย|გე|中国|中國|台湾|台灣|新加坡|"+"香港|한국)(?=[^0-9a-zA-Z@]|$))"));twttr.txt.regexen.validPunycode=regexSupplant(/(?:xn--[0-9a-z]+)/);twttr.txt.regexen.validDomain=regexSupplant(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/);twttr.txt.regexen.validAsciiDomain=regexSupplant(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi);twttr.txt.regexen.invalidShortDomain=regexSupplant(/^#{validDomainName}#{validCCTLD}$/);twttr.txt.regexen.validPortNumber=regexSupplant(/[0-9]+/);twttr.txt.regexen.validGeneralUrlPathChars=regexSupplant(/[a-z0-9!\*';:=\+,\.\$\/%#\[\]\-_~@|&#{latinAccentChars}]/i);twttr.txt.regexen.validUrlBalancedParens=regexSupplant("\\("+"(?:"+"#{validGeneralUrlPathChars}+"+"|"+"(?:"+"#{validGeneralUrlPathChars}*"+"\\("+"#{validGeneralUrlPathChars}+"+"\\)"+"#{validGeneralUrlPathChars}*"+")"+")"+"\\)","i");twttr.txt.regexen.validUrlPathEndingChars=regexSupplant(/[\+\-a-z0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i);twttr.txt.regexen.validUrlPath=regexSupplant("(?:"+"(?:"+"#{validGeneralUrlPathChars}*"+"(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*"+"#{validUrlPathEndingChars}"+")|(?:@#{validGeneralUrlPathChars}+/)"+")","i");twttr.txt.regexen.validUrlQueryChars=/[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i;twttr.txt.regexen.validUrlQueryEndingChars=/[a-z0-9_&=#\/]/i;twttr.txt.regexen.extractUrl=regexSupplant("("+"(#{validUrlPrecedingChars})"+"("+"(https?:\\/\\/)?"+"(#{validDomain})"+"(?::(#{validPortNumber}))?"+"(\\/#{validUrlPath}*)?"+"(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?"+")"+")","gi");twttr.txt.regexen.validTcoUrl=/^https?:\/\/t\.co\/[a-z0-9]+/i;twttr.txt.regexen.urlHasProtocol=/^https?:\/\//i;twttr.txt.regexen.urlHasHttps=/^https:\/\//i;twttr.txt.regexen.cashtag=/[a-z]{1,6}(?:[._][a-z]{1,2})?/i;twttr.txt.regexen.validCashtag=regexSupplant("(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])","gi");twttr.txt.regexen.validateUrlUnreserved=/[a-z0-9\-._~]/i;twttr.txt.regexen.validateUrlPctEncoded=/(?:%[0-9a-f]{2})/i;twttr.txt.regexen.validateUrlSubDelims=/[!$&'()*+,;=]/i;twttr.txt.regexen.validateUrlPchar=regexSupplant("(?:"+"#{validateUrlUnreserved}|"+"#{validateUrlPctEncoded}|"+"#{validateUrlSubDelims}|"+"[:|@]"+")","i");twttr.txt.regexen.validateUrlScheme=/(?:[a-z][a-z0-9+\-.]*)/i;twttr.txt.regexen.validateUrlUserinfo=regexSupplant("(?:"+"#{validateUrlUnreserved}|"+"#{validateUrlPctEncoded}|"+"#{validateUrlSubDelims}|"+":"+")*","i");twttr.txt.regexen.validateUrlDecOctet=/(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i;twttr.txt.regexen.validateUrlIpv4=regexSupplant(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i);twttr.txt.regexen.validateUrlIpv6=/(?:\[[a-f0-9:\.]+\])/i;twttr.txt.regexen.validateUrlIp=regexSupplant("(?:"+"#{validateUrlIpv4}|"+"#{validateUrlIpv6}"+")","i");twttr.txt.regexen.validateUrlSubDomainSegment=/(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i;twttr.txt.regexen.validateUrlDomainSegment=/(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i;twttr.txt.regexen.validateUrlDomainTld=/(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i;twttr.txt.regexen.validateUrlDomain=regexSupplant(/(?:(?:#{validateUrlSubDomainSegment]}\.)*(?:#{validateUrlDomainSegment]}\.)#{validateUrlDomainTld})/i);twttr.txt.regexen.validateUrlHost=regexSupplant("(?:"+"#{validateUrlIp}|"+"#{validateUrlDomain}"+")","i");twttr.txt.regexen.validateUrlUnicodeSubDomainSegment=/(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;twttr.txt.regexen.validateUrlUnicodeDomainSegment=/(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;twttr.txt.regexen.validateUrlUnicodeDomainTld=/(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;twttr.txt.regexen.validateUrlUnicodeDomain=regexSupplant(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i);twttr.txt.regexen.validateUrlUnicodeHost=regexSupplant("(?:"+"#{validateUrlIp}|"+"#{validateUrlUnicodeDomain}"+")","i");twttr.txt.regexen.validateUrlPort=/[0-9]{1,5}/;twttr.txt.regexen.validateUrlUnicodeAuthority=regexSupplant("(?:(#{validateUrlUserinfo})@)?"+"(#{validateUrlUnicodeHost})"+"(?::(#{validateUrlPort}))?","i");twttr.txt.regexen.validateUrlAuthority=regexSupplant("(?:(#{validateUrlUserinfo})@)?"+"(#{validateUrlHost})"+"(?::(#{validateUrlPort}))?","i");twttr.txt.regexen.validateUrlPath=regexSupplant(/(\/#{validateUrlPchar}*)*/i);twttr.txt.regexen.validateUrlQuery=regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i);twttr.txt.regexen.validateUrlFragment=regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i);twttr.txt.regexen.validateUrlUnencoded=regexSupplant("^"+"(?:"+"([^:/?#]+):\\/\\/"+")?"+"([^/?#]*)"+"([^?#]*)"+"(?:"+"\\?([^#]*)"+")?"+"(?:"+"#(.*)"+")?$","i");var DEFAULT_LIST_CLASS="tweet-url list-slug";var DEFAULT_USERNAME_CLASS="tweet-url username";var DEFAULT_HASHTAG_CLASS="tweet-url hashtag";var DEFAULT_CASHTAG_CLASS="tweet-url cashtag";var OPTIONS_NOT_ATTRIBUTES={urlClass:true,listClass:true,usernameClass:true,hashtagClass:true,cashtagClass:true,usernameUrlBase:true,listUrlBase:true,hashtagUrlBase:true,cashtagUrlBase:true,usernameUrlBlock:true,listUrlBlock:true,hashtagUrlBlock:true,linkUrlBlock:true,usernameIncludeSymbol:true,suppressLists:true,suppressNoFollow:true,targetBlank:true,suppressDataScreenName:true,urlEntities:true,symbolTag:true,textWithSymbolTag:true,urlTarget:true,invisibleTagAttrs:true,linkAttributeBlock:true,linkTextBlock:true,htmlEscapeNonEntities:true};var BOOLEAN_ATTRIBUTES={disabled:true,readonly:true,multiple:true,checked:true};function clone(o){var r={};for(var k in o){if(o.hasOwnProperty(k)){r[k]=o[k]}}return r}twttr.txt.tagAttrs=function(attributes){var htmlAttrs="";for(var k in attributes){var v=attributes[k];if(BOOLEAN_ATTRIBUTES[k]){v=v?k:null}if(v==null)continue;htmlAttrs+=" "+twttr.txt.htmlEscape(k)+'="'+twttr.txt.htmlEscape(v.toString())+'"'}return htmlAttrs};twttr.txt.linkToText=function(entity,text,attributes,options){if(!options.suppressNoFollow){attributes.rel="nofollow"}if(options.linkAttributeBlock){options.linkAttributeBlock(entity,attributes)}if(options.linkTextBlock){text=options.linkTextBlock(entity,text)}var d={text:text,attr:twttr.txt.tagAttrs(attributes)};return stringSupplant("<a#{attr}>#{text}</a>",d)};twttr.txt.linkToTextWithSymbol=function(entity,symbol,text,attributes,options){var taggedSymbol=options.symbolTag?"<"+options.symbolTag+">"+symbol+"</"+options.symbolTag+">":symbol;text=twttr.txt.htmlEscape(text);var taggedText=options.textWithSymbolTag?"<"+options.textWithSymbolTag+">"+text+"</"+options.textWithSymbolTag+">":text;if(options.usernameIncludeSymbol||!symbol.match(twttr.txt.regexen.atSigns)){return twttr.txt.linkToText(entity,taggedSymbol+taggedText,attributes,options)}else{return taggedSymbol+twttr.txt.linkToText(entity,taggedText,attributes,options)}};twttr.txt.linkToHashtag=function(entity,text,options){var hash=text.substring(entity.indices[0],entity.indices[0]+1);var hashtag=twttr.txt.htmlEscape(entity.hashtag);var attrs=clone(options.htmlAttrs||{});attrs.href=options.hashtagUrlBase+hashtag;attrs.title="#"+hashtag;attrs["class"]=options.hashtagClass;if(hashtag.charAt(0).match(twttr.txt.regexen.rtl_chars)){attrs["class"]+=" rtl"}if(options.targetBlank){attrs.target="_blank"}return twttr.txt.linkToTextWithSymbol(entity,hash,hashtag,attrs,options)};twttr.txt.linkToCashtag=function(entity,text,options){var cashtag=twttr.txt.htmlEscape(entity.cashtag);var attrs=clone(options.htmlAttrs||{});attrs.href=options.cashtagUrlBase+cashtag;attrs.title="$"+cashtag;attrs["class"]=options.cashtagClass;if(options.targetBlank){attrs.target="_blank"}return twttr.txt.linkToTextWithSymbol(entity,"$",cashtag,attrs,options)};twttr.txt.linkToMentionAndList=function(entity,text,options){var at=text.substring(entity.indices[0],entity.indices[0]+1);var user=twttr.txt.htmlEscape(entity.screenName);var slashListname=twttr.txt.htmlEscape(entity.listSlug);var isList=entity.listSlug&&!options.suppressLists;var attrs=clone(options.htmlAttrs||{});attrs["class"]=isList?options.listClass:options.usernameClass;attrs.href=isList?options.listUrlBase+user+slashListname:options.usernameUrlBase+user;if(!isList&&!options.suppressDataScreenName){attrs["data-screen-name"]=user}if(options.targetBlank){attrs.target="_blank"}return twttr.txt.linkToTextWithSymbol(entity,at,isList?user+slashListname:user,attrs,options)};twttr.txt.linkToUrl=function(entity,text,options){var url=entity.url;var displayUrl=url;var linkText=twttr.txt.htmlEscape(displayUrl);var urlEntity=options.urlEntities&&options.urlEntities[url]||entity;if(urlEntity.display_url){linkText=twttr.txt.linkTextWithEntity(urlEntity,options)}var attrs=clone(options.htmlAttrs||{});if(!url.match(twttr.txt.regexen.urlHasProtocol)){url="http://"+url}attrs.href=url;if(options.targetBlank){attrs.target="_blank"}if(options.urlClass){attrs["class"]=options.urlClass}if(options.urlTarget){attrs.target=options.urlTarget}if(!options.title&&urlEntity.display_url){attrs.title=urlEntity.expanded_url}return twttr.txt.linkToText(entity,linkText,attrs,options)};twttr.txt.linkTextWithEntity=function(entity,options){var displayUrl=entity.display_url;var expandedUrl=entity.expanded_url;var displayUrlSansEllipses=displayUrl.replace(/…/g,"");if(expandedUrl.indexOf(displayUrlSansEllipses)!=-1){var displayUrlIndex=expandedUrl.indexOf(displayUrlSansEllipses);var v={displayUrlSansEllipses:displayUrlSansEllipses,beforeDisplayUrl:expandedUrl.substr(0,displayUrlIndex),afterDisplayUrl:expandedUrl.substr(displayUrlIndex+displayUrlSansEllipses.length),precedingEllipsis:displayUrl.match(/^…/)?"…":"",followingEllipsis:displayUrl.match(/…$/)?"…":""};for(var k in v){if(v.hasOwnProperty(k)){v[k]=twttr.txt.htmlEscape(v[k])}}v["invisible"]=options.invisibleTagAttrs;return stringSupplant("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>",v)}return displayUrl};twttr.txt.autoLinkEntities=function(text,entities,options){options=clone(options||{});options.hashtagClass=options.hashtagClass||DEFAULT_HASHTAG_CLASS;options.hashtagUrlBase=options.hashtagUrlBase||"https://twitter.com/#!/search?q=%23";options.cashtagClass=options.cashtagClass||DEFAULT_CASHTAG_CLASS;options.cashtagUrlBase=options.cashtagUrlBase||"https://twitter.com/#!/search?q=%24";options.listClass=options.listClass||DEFAULT_LIST_CLASS;options.usernameClass=options.usernameClass||DEFAULT_USERNAME_CLASS;options.usernameUrlBase=options.usernameUrlBase||"https://twitter.com/";options.listUrlBase=options.listUrlBase||"https://twitter.com/";options.htmlAttrs=twttr.txt.extractHtmlAttrsFromOptions(options);options.invisibleTagAttrs=options.invisibleTagAttrs||"style='position:absolute;left:-9999px;'";var urlEntities,i,len;if(options.urlEntities){urlEntities={};for(i=0,len=options.urlEntities.length;i<len;i++){urlEntities[options.urlEntities[i].url]=options.urlEntities[i]}options.urlEntities=urlEntities}var result="";var beginIndex=0;entities.sort(function(a,b){return a.indices[0]-b.indices[0]});var nonEntity=options.htmlEscapeNonEntities?twttr.txt.htmlEscape:function(text){return text};for(var i=0;i<entities.length;i++){var entity=entities[i];result+=nonEntity(text.substring(beginIndex,entity.indices[0]));if(entity.url){result+=twttr.txt.linkToUrl(entity,text,options)}else if(entity.hashtag){result+=twttr.txt.linkToHashtag(entity,text,options)}else if(entity.screenName){result+=twttr.txt.linkToMentionAndList(entity,text,options)}else if(entity.cashtag){result+=twttr.txt.linkToCashtag(entity,text,options)}beginIndex=entity.indices[1]}result+=nonEntity(text.substring(beginIndex,text.length));return result};twttr.txt.autoLinkWithJSON=function(text,json,options){if(json.user_mentions){for(var i=0;i<json.user_mentions.length;i++){json.user_mentions[i].screenName=json.user_mentions[i].screen_name}}if(json.hashtags){for(var i=0;i<json.hashtags.length;i++){json.hashtags[i].hashtag=json.hashtags[i].text}}if(json.symbols){for(var i=0;i<json.symbols.length;i++){json.symbols[i].cashtag=json.symbols[i].text}}var entities=[];for(var key in json){entities=entities.concat(json[key])}twttr.txt.modifyIndicesFromUnicodeToUTF16(text,entities);return twttr.txt.autoLinkEntities(text,entities,options)};twttr.txt.extractHtmlAttrsFromOptions=function(options){var htmlAttrs={};for(var k in options){var v=options[k];if(OPTIONS_NOT_ATTRIBUTES[k])continue;if(BOOLEAN_ATTRIBUTES[k]){v=v?k:null}if(v==null)continue;htmlAttrs[k]=v}return htmlAttrs};twttr.txt.autoLink=function(text,options){var entities=twttr.txt.extractEntitiesWithIndices(text,{extractUrlsWithoutProtocol:false});return twttr.txt.autoLinkEntities(text,entities,options)};twttr.txt.autoLinkUsernamesOrLists=function(text,options){var entities=twttr.txt.extractMentionsOrListsWithIndices(text);return twttr.txt.autoLinkEntities(text,entities,options)};twttr.txt.autoLinkHashtags=function(text,options){var entities=twttr.txt.extractHashtagsWithIndices(text);return twttr.txt.autoLinkEntities(text,entities,options)};twttr.txt.autoLinkCashtags=function(text,options){var entities=twttr.txt.extractCashtagsWithIndices(text);return twttr.txt.autoLinkEntities(text,entities,options)};twttr.txt.autoLinkUrlsCustom=function(text,options){var entities=twttr.txt.extractUrlsWithIndices(text,{extractUrlsWithoutProtocol:false});return twttr.txt.autoLinkEntities(text,entities,options)};twttr.txt.removeOverlappingEntities=function(entities){entities.sort(function(a,b){return a.indices[0]-b.indices[0]});var prev=entities[0];for(var i=1;i<entities.length;i++){if(prev.indices[1]>entities[i].indices[0]){entities.splice(i,1);i--}else{prev=entities[i]}}};twttr.txt.extractEntitiesWithIndices=function(text,options){var entities=twttr.txt.extractUrlsWithIndices(text,options).concat(twttr.txt.extractMentionsOrListsWithIndices(text)).concat(twttr.txt.extractHashtagsWithIndices(text,{checkUrlOverlap:false})).concat(twttr.txt.extractCashtagsWithIndices(text));if(entities.length==0){return[]}twttr.txt.removeOverlappingEntities(entities);return entities};twttr.txt.extractMentions=function(text){var screenNamesOnly=[],screenNamesWithIndices=twttr.txt.extractMentionsWithIndices(text);for(var i=0;i<screenNamesWithIndices.length;i++){var screenName=screenNamesWithIndices[i].screenName;screenNamesOnly.push(screenName)}return screenNamesOnly};twttr.txt.extractMentionsWithIndices=function(text){var mentions=[],mentionOrList,mentionsOrLists=twttr.txt.extractMentionsOrListsWithIndices(text);for(var i=0;i<mentionsOrLists.length;i++){mentionOrList=mentionsOrLists[i];if(mentionOrList.listSlug==""){mentions.push({screenName:mentionOrList.screenName,indices:mentionOrList.indices})}}return mentions};twttr.txt.extractMentionsOrListsWithIndices=function(text){if(!text||!text.match(twttr.txt.regexen.atSigns)){return[]}var possibleNames=[],slashListname;text.replace(twttr.txt.regexen.validMentionOrList,function(match,before,atSign,screenName,slashListname,offset,chunk){var after=chunk.slice(offset+match.length);if(!after.match(twttr.txt.regexen.endMentionMatch)){slashListname=slashListname||"";var startPosition=offset+before.length;var endPosition=startPosition+screenName.length+slashListname.length+1;possibleNames.push({screenName:screenName,listSlug:slashListname,indices:[startPosition,endPosition]})}});return possibleNames};twttr.txt.extractReplies=function(text){if(!text){return null}var possibleScreenName=text.match(twttr.txt.regexen.validReply);if(!possibleScreenName||RegExp.rightContext.match(twttr.txt.regexen.endMentionMatch)){return null}return possibleScreenName[1]};twttr.txt.extractUrls=function(text,options){var urlsOnly=[],urlsWithIndices=twttr.txt.extractUrlsWithIndices(text,options);for(var i=0;i<urlsWithIndices.length;i++){urlsOnly.push(urlsWithIndices[i].url)}return urlsOnly};twttr.txt.extractUrlsWithIndices=function(text,options){if(!options){options={extractUrlsWithoutProtocol:true}}if(!text||(options.extractUrlsWithoutProtocol?!text.match(/\./):!text.match(/:/))){return[]}var urls=[];while(twttr.txt.regexen.extractUrl.exec(text)){var before=RegExp.$2,url=RegExp.$3,protocol=RegExp.$4,domain=RegExp.$5,path=RegExp.$7;var endPosition=twttr.txt.regexen.extractUrl.lastIndex,startPosition=endPosition-url.length;if(!protocol){if(!options.extractUrlsWithoutProtocol||before.match(twttr.txt.regexen.invalidUrlWithoutProtocolPrecedingChars)){continue}var lastUrl=null,lastUrlInvalidMatch=false,asciiEndPosition=0;domain.replace(twttr.txt.regexen.validAsciiDomain,function(asciiDomain){var asciiStartPosition=domain.indexOf(asciiDomain,asciiEndPosition);asciiEndPosition=asciiStartPosition+asciiDomain.length;lastUrl={url:asciiDomain,indices:[startPosition+asciiStartPosition,startPosition+asciiEndPosition]};lastUrlInvalidMatch=asciiDomain.match(twttr.txt.regexen.invalidShortDomain);if(!lastUrlInvalidMatch){urls.push(lastUrl)}});if(lastUrl==null){continue}if(path){if(lastUrlInvalidMatch){urls.push(lastUrl)}lastUrl.url=url.replace(domain,lastUrl.url);lastUrl.indices[1]=endPosition}}else{if(url.match(twttr.txt.regexen.validTcoUrl)){url=RegExp.lastMatch;endPosition=startPosition+url.length}urls.push({url:url,indices:[startPosition,endPosition]})}}return urls};twttr.txt.extractHashtags=function(text){var hashtagsOnly=[],hashtagsWithIndices=twttr.txt.extractHashtagsWithIndices(text);for(var i=0;i<hashtagsWithIndices.length;i++){hashtagsOnly.push(hashtagsWithIndices[i].hashtag)}return hashtagsOnly};twttr.txt.extractHashtagsWithIndices=function(text,options){if(!options){options={checkUrlOverlap:true}}if(!text||!text.match(twttr.txt.regexen.hashSigns)){return[]}var tags=[];text.replace(twttr.txt.regexen.validHashtag,function(match,before,hash,hashText,offset,chunk){var after=chunk.slice(offset+match.length);if(after.match(twttr.txt.regexen.endHashtagMatch))return;var startPosition=offset+before.length;var endPosition=startPosition+hashText.length+1;tags.push({hashtag:hashText,indices:[startPosition,endPosition]})});if(options.checkUrlOverlap){var urls=twttr.txt.extractUrlsWithIndices(text);if(urls.length>0){var entities=tags.concat(urls);twttr.txt.removeOverlappingEntities(entities);tags=[];for(var i=0;i<entities.length;i++){if(entities[i].hashtag){tags.push(entities[i])}}}}return tags};twttr.txt.extractCashtags=function(text){var cashtagsOnly=[],cashtagsWithIndices=twttr.txt.extractCashtagsWithIndices(text);for(var i=0;i<cashtagsWithIndices.length;i++){cashtagsOnly.push(cashtagsWithIndices[i].cashtag)}return cashtagsOnly};twttr.txt.extractCashtagsWithIndices=function(text){if(!text||text.indexOf("$")==-1){return[]}var tags=[];text.replace(twttr.txt.regexen.validCashtag,function(match,before,dollar,cashtag,offset,chunk){var startPosition=offset+before.length;var endPosition=startPosition+cashtag.length+1;tags.push({cashtag:cashtag,indices:[startPosition,endPosition]})});return tags};twttr.txt.modifyIndicesFromUnicodeToUTF16=function(text,entities){twttr.txt.convertUnicodeIndices(text,entities,false)};twttr.txt.modifyIndicesFromUTF16ToUnicode=function(text,entities){twttr.txt.convertUnicodeIndices(text,entities,true)};twttr.txt.getUnicodeTextLength=function(text){return text.replace(twttr.txt.regexen.non_bmp_code_pairs," ").length};twttr.txt.convertUnicodeIndices=function(text,entities,indicesInUTF16){if(entities.length==0){return}var charIndex=0;var codePointIndex=0;entities.sort(function(a,b){return a.indices[0]-b.indices[0]});var entityIndex=0;var entity=entities[0];while(charIndex<text.length){if(entity.indices[0]==(indicesInUTF16?charIndex:codePointIndex)){var len=entity.indices[1]-entity.indices[0];entity.indices[0]=indicesInUTF16?codePointIndex:charIndex;entity.indices[1]=entity.indices[0]+len;entityIndex++;if(entityIndex==entities.length){break}entity=entities[entityIndex]}var c=text.charCodeAt(charIndex);if(55296<=c&&c<=56319&&charIndex<text.length-1){c=text.charCodeAt(charIndex+1);if(56320<=c&&c<=57343){charIndex++}}codePointIndex++;charIndex++}};twttr.txt.splitTags=function(text){var firstSplits=text.split("<"),secondSplits,allSplits=[],split;for(var i=0;i<firstSplits.length;i+=1){split=firstSplits[i];if(!split){allSplits.push("")}else{secondSplits=split.split(">");for(var j=0;j<secondSplits.length;j+=1){allSplits.push(secondSplits[j])}}}return allSplits};twttr.txt.hitHighlight=function(text,hits,options){var defaultHighlightTag="em";hits=hits||[];options=options||{};if(hits.length===0){return text}var tagName=options.tag||defaultHighlightTag,tags=["<"+tagName+">","</"+tagName+">"],chunks=twttr.txt.splitTags(text),i,j,result="",chunkIndex=0,chunk=chunks[0],prevChunksLen=0,chunkCursor=0,startInChunk=false,chunkChars=chunk,flatHits=[],index,hit,tag,placed,hitSpot;for(i=0;i<hits.length;i+=1){for(j=0;j<hits[i].length;j+=1){flatHits.push(hits[i][j])}}for(index=0;index<flatHits.length;index+=1){hit=flatHits[index];tag=tags[index%2];placed=false;while(chunk!=null&&hit>=prevChunksLen+chunk.length){result+=chunkChars.slice(chunkCursor);if(startInChunk&&hit===prevChunksLen+chunkChars.length){result+=tag;placed=true}if(chunks[chunkIndex+1]){result+="<"+chunks[chunkIndex+1]+">"}prevChunksLen+=chunkChars.length;chunkCursor=0;chunkIndex+=2;chunk=chunks[chunkIndex];chunkChars=chunk;startInChunk=false}if(!placed&&chunk!=null){hitSpot=hit-prevChunksLen;
result+=chunkChars.slice(chunkCursor,hitSpot)+tag;chunkCursor=hitSpot;if(index%2===0){startInChunk=true}else{startInChunk=false}}else if(!placed){placed=true;result+=tag}}if(chunk!=null){if(chunkCursor<chunkChars.length){result+=chunkChars.slice(chunkCursor)}for(index=chunkIndex+1;index<chunks.length;index+=1){result+=index%2===0?chunks[index]:"<"+chunks[index]+">"}}return result};var MAX_LENGTH=140;var INVALID_CHARACTERS=[fromCode(65534),fromCode(65279),fromCode(65535),fromCode(8234),fromCode(8235),fromCode(8236),fromCode(8237),fromCode(8238)];twttr.txt.getTweetLength=function(text,options){if(!options){options={short_url_length:22,short_url_length_https:23}}var textLength=twttr.txt.getUnicodeTextLength(text),urlsWithIndices=twttr.txt.extractUrlsWithIndices(text);twttr.txt.modifyIndicesFromUTF16ToUnicode(text,urlsWithIndices);for(var i=0;i<urlsWithIndices.length;i++){textLength+=urlsWithIndices[i].indices[0]-urlsWithIndices[i].indices[1];if(urlsWithIndices[i].url.toLowerCase().match(twttr.txt.regexen.urlHasHttps)){textLength+=options.short_url_length_https}else{textLength+=options.short_url_length}}return textLength};twttr.txt.isInvalidTweet=function(text){if(!text){return"empty"}if(twttr.txt.getTweetLength(text)>MAX_LENGTH){return"too_long"}for(var i=0;i<INVALID_CHARACTERS.length;i++){if(text.indexOf(INVALID_CHARACTERS[i])>=0){return"invalid_characters"}}return false};twttr.txt.isValidTweetText=function(text){return!twttr.txt.isInvalidTweet(text)};twttr.txt.isValidUsername=function(username){if(!username){return false}var extracted=twttr.txt.extractMentions(username);return extracted.length===1&&extracted[0]===username.slice(1)};var VALID_LIST_RE=regexSupplant(/^#{validMentionOrList}$/);twttr.txt.isValidList=function(usernameList){var match=usernameList.match(VALID_LIST_RE);return!!(match&&match[1]==""&&match[4])};twttr.txt.isValidHashtag=function(hashtag){if(!hashtag){return false}var extracted=twttr.txt.extractHashtags(hashtag);return extracted.length===1&&extracted[0]===hashtag.slice(1)};twttr.txt.isValidUrl=function(url,unicodeDomains,requireProtocol){if(unicodeDomains==null){unicodeDomains=true}if(requireProtocol==null){requireProtocol=true}if(!url){return false}var urlParts=url.match(twttr.txt.regexen.validateUrlUnencoded);if(!urlParts||urlParts[0]!==url){return false}var scheme=urlParts[1],authority=urlParts[2],path=urlParts[3],query=urlParts[4],fragment=urlParts[5];if(!((!requireProtocol||isValidMatch(scheme,twttr.txt.regexen.validateUrlScheme)&&scheme.match(/^https?$/i))&&isValidMatch(path,twttr.txt.regexen.validateUrlPath)&&isValidMatch(query,twttr.txt.regexen.validateUrlQuery,true)&&isValidMatch(fragment,twttr.txt.regexen.validateUrlFragment,true))){return false}return unicodeDomains&&isValidMatch(authority,twttr.txt.regexen.validateUrlUnicodeAuthority)||!unicodeDomains&&isValidMatch(authority,twttr.txt.regexen.validateUrlAuthority)};function isValidMatch(string,regex,optional){if(!optional){return typeof string==="string"&&string.match(regex)&&RegExp["$&"]===string}return!string||string.match(regex)&&RegExp["$&"]===string}if(typeof module!="undefined"&&module.exports){module.exports=twttr.txt}if(typeof window!="undefined"){if(window.twttr){for(var prop in twttr){window.twttr[prop]=twttr[prop]}}else{window.twttr=twttr}}})();

/* LoadBuilder constructed module: */
loadrunner.Script.loaded.push("$vendor/twitter-text/twitter-text.js");
provide("lib/twitter-text",function(a){using("$vendor/twitter-text/twitter-text.js",function(){a(twttr.txt)})});
provide("dom/selection",function(a){var b=typeof document.selection!="undefined"&&typeof document.selection.createRange!="undefined";a({getSelectionRange:function(a){var c,d,e,f,g,h;a.focus();if(typeof a.selectionStart!="undefined")c=a.selectionStart,d=a.selectionEnd;else{if(!b)throw new Error("Unable to get selection range.");e=document.selection.createRange(),f=e.text.length;if(e.parentElement()!==a)throw new Error("Unable to get selection range.");a.type==="textarea"?(g=e.duplicate(),g.moveToElementText(a),g.setEndPoint("EndToEnd",e),c=g.text.length-f):(h=a.createTextRange(),h.setEndPoint("EndToStart",e),c=h.text.length),d=c+f}return{start:c,end:d}},getSelectionStart:function(a){return this.getSelectionRange(a).start},getSelectionEnd:function(a){return this.getSelectionRange(a).end},setSelectionRange:function(a,c,d){var e,f;a.focus(),typeof d=="undefined"&&(d=c);if(typeof a.selectionStart!="undefined")a.setSelectionRange(c,d);else if(b)e=a.value,f=a.createTextRange(),d-=c+e.slice(c+1,d).split("\n").length-1,c-=e.slice(0,c).split("\n").length-1,f.move("character",c),f.moveEnd("character",d),f.select();else throw new Error("Unable to set selection range.")},getSelectedText:function(a){var b=this.getSelectionRange(a);return a.value.substring(b.start,b.end)},insertText:function(a,b,c,d,e){d=d||c;var f=b.length,g=c+f,h=a.value.substring(0,c),i=a.value.substr(d);a.value=h+b+i,e===!0?this.setSelectionRange(a,c,g):this.setSelectionRange(a,g)},replaceSelectedText:function(a,b,c){var d=this.getSelectionRange(a);this.insertText(a,b,d.start,d.end,c)},wrapSelectedText:function(a,b,c,d){var e=b+this.getSelectedText(a)+c;this.replaceSelectedText(a,e,d)}})});
provide("tfw/intents/tweetbox",function(a){using("imports/jquery","dom/selection","lib/twitter-text",function(b,c,d){function e(a,d,e){this.$textarea=b(a),this.$form=b(a.form),this.$count=b('<input type="text" id="char-count" aria-live="assertive" disabled value="140"/>').insertBefore("#update-form .ft input.submit");var f=this.$textarea.val(),g=this;typeof d!="number"||typeof e!="number"||d===0&&e===0?0===f.indexOf("@")?c.setSelectionRange(a,f.length,f.length):c.setSelectionRange(a,0,0):c.setSelectionRange(a,d,e),this.$textarea.bind("keyup",function(){g.throttlecount||(g.updateCounter(),g.throttlecount=!0,window.setTimeout(function(){g.throttlecount=!1},200))}),g.updateCounter()}b.extend(e.prototype,{getTextLength:function(a){var c=twttr.txt.extractUrls(a),d=a.length-c.join("").length;b.each(c,function(a,b){d+=twttr.tco.length,/^https:/.test(b)&&(d+=1)});return d},updateCounter:function(){var a=140-this.getTweetLength();this.$count.val(a),a>=0?this.enable():this.disable(),a<20?this.$count.attr("aria-live","assertive"):this.$count.attr("aria-live","polite"),this.$count.toggleClass("warn",a<20),this.$count.toggleClass("superwarn",a<0)},getTweetLength:function(){return this.getTextLength(this.$textarea.val())},disable:function(){var a=b("#tweet-btn input");a.attr("disabled","disabled"),a.parent("span").addClass("btn-disabled")},enable:function(){var a=b("#tweet-btn input");a.attr("disabled",null),a.parent("span").removeClass("btn-disabled")}}),a(e)})})