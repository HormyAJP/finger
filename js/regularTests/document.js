"use strict";

Fingerprint.registerTest('document.parameters', function() {
    var knownProperties = [
        'activeElement',
        'adoptNode',
        'alinkColor',
        'all',
        'anchors',
        'applets',
        'async',
        'author',
        'baseURI',
        'bgColor',
        'body',
        'captureEvents',
        'caretRangeFromPoint',
        'characterSet',
        'charset',
        'childElementCount',
        'childNodes',
        'children',
        'compatMode',
        'contentType',
        'cookie',
        'createAttribute',
        'createAttributeNS',
        'createCDATASection',
        'createComment',
        'createDocumentFragment',
        'createElement',
        'createElementNS',
        'createEntityReference',
        'createEvent',
        'createNodeIterator',
        'createProcessingInstruction',
        'createRange',
        'createTextNode',
        'createTouch',
        'createTouchList',
        'createTreeWalker',
        'currentScript',
        'defaultView',
        'description',
        'designMode',
        'dir',
        'doctype',
        'document',
        'documentElement',
        'documentURI',
        'domain',
        'domConfig',
        'embeds',
        'enableStyleSheetsForSet',
        'exitPointerLock',
        'fgColor',
        'firstChild',
        'firstElementChild',
        'fonts',
        'forms',
        'fullscreen',
        'fullscreenElement',
        'getAnimations',
        'getElementsByClassName',
        'getElementsByTagName',
        'getElementsByTagNameNS',
        'head',
        'height',
        'hidden',
        'images',
        'implementation',
        'importNode',
        'inputEncoding',
        'isConnected',
        'lastChild',
        'lastElementChild',
        'lastModified',
        'lastStyleSheetSet',
        'length',
        'linkColor',
        'links',
        'log',
        'mozFullScreenElement',
        'mozFullScreenEnabled',
        'mozSetImageElement',
        'mozSyntheticDocument',
        'nextSibling',
        'nodeName',
        'nodeType',
        'nodeValue',
        'normalizeDocument',
        'origin',
        'ownerDocument',
        'parentElement',
        'parentNode',
        'plugins',
        'pointerLockElement',
        'preferredStyleSheetSet',
        'preferredStylesheetSet',
        'previousSibling',
        'readyState',
        'referrer',
        'releaseCapture',
        'releaseEvents',
        'rootElement',
        'routeEvent',
        'scripts',
        'scrollingElement',
        'selectedStyleSheetSet',
        'selectedStylesheetSet',
        'styleSheets',
        'styleSheetSets',
        'textContent',
        'timeline',
        'title',
        'undoManager',
        'visibilityState',
        'vlinkColor',
        'wasDiscarded',
        'webkitCurrentFullScreenElement',
        'webkitFullscreenElement',
        'webkitFullscreenEnabled',
        'webkitFullScreenKeyboardInputAllowed',
        'webkitHidden',
        'webkitIsFullScreen',
        'webkitVisibilityState',
        'width',
        'xmlEncoding',
        'xmlStandalone',
        'xmlVersion',
    ]

    var checkExistenceOnly = [
        'onabort',
        'onafterscriptexecute',
        'onanimationcancel',
        'onanimationend',
        'onanimationiteration',
        'onanimationstart',
        'onauxclick',
        'onbeforecopy',
        'onbeforecut',
        'onbeforeinput',
        'onbeforepaste',
        'onbeforescriptexecute',
        'onblur',
        'oncancel',
        'oncanplay',
        'oncanplaythrough',
        'onchange',
        'onclick',
        'onclose',
        'oncontextmenu',
        'oncopy',
        'oncuechange',
        'oncut',
        'ondblclick',
        'ondrag',
        'ondragend',
        'ondragenter',
        'ondragexit',
        'ondragleave',
        'ondragover',
        'ondragstart',
        'ondrop',
        'ondurationchange',
        'onemptied',
        'onended',
        'onerror',
        'onfocus',
        'onfreeze',
        'onfullscreenchange',
        'onfullscreenerror',
        'ongotpointercapture',
        'oninput',
        'oninvalid',
        'onkeydown',
        'onkeypress',
        'onkeyup',
        'onload',
        'onloadeddata',
        'onloadedmetadata',
        'onloadend',
        'onloadstart',
        'onlostpointercapture',
        'onmousedown',
        'onmouseenter',
        'onmouseleave',
        'onmousemove',
        'onmouseout',
        'onmouseover',
        'onmouseup',
        'onmousewheel',
        'onpaste',
        'onpause',
        'onplay',
        'onplaying',
        'onpointercancel',
        'onpointerdown',
        'onpointerenter',
        'onpointerleave',
        'onpointerlockchange',
        'onpointerlockerror',
        'onpointermove',
        'onpointerout',
        'onpointerover',
        'onpointerup',
        'onprogress',
        'onratechange',
        'onreadystatechange',
        'onrejectionhandled',
        'onreset',
        'onresize',
        'onresume',
        'onscroll',
        'onsearch',
        'onseeked',
        'onseeking',
        'onselect',
        'onselectionchange',
        'onselectstart',
        'onshow',
        'onsort',
        'onstalled',
        'onsubmit',
        'onsuspend',
        'ontimeupdate',
        'ontoggle',
        'ontouchcancel',
        'ontouchend',
        'ontouchmove',
        'ontouchstart',
        'ontransitioncancel',
        'ontransitionend',
        'onunhandledrejection',
        'onvisibilitychange',
        'onvolumechange',
        'onwaiting',
        'onwebkitfullscreenchange',
        'onwebkitfullscreenerror',
        'onwebkitmouseforcechanged',
        'onwebkitmouseforcedown',
        'onwebkitmouseforceup',
        'onwebkitmouseforcewillbegin',
        'onwheel',
        'location',
        'URL',
    ]

    var allProperties = knownProperties.concat(checkExistenceOnly);

    var available = '';
    for (var i = 0; i < allProperties.length; ++i) {
        var property = allProperties[i];
        if (property in document) {
            available += '1';
        } else {
            available += '0';
        }
    }
    return available;
});

Fingerprint.registerTest('document.domobjects', function() {
    var ret = safeDumpProtoHierarchy(document, 10);
    // logt("document.children", document.children)
    // logt("document.head", document.head)
    return ret;
});