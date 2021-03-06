! function(e) {
	var t = {};

	function n(i) {
		if (t[i]) return t[i].exports;
		var r = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, i) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: i
		})
	}, n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var i = Object.create(null);
		if (n.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var r in e) n.d(i, r, function(t) {
				return e[t]
			}.bind(null, r));
		return i
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 0)
}([function(e, t, n) {
	"use strict";
	var i = void 0,
		r = void 0;

	function a() {
		var e = {
			appContainer: document.body,
			mainContainer: document.getElementById("viewerContainer"),
			viewerContainer: document.getElementById("viewer"),
			eventBus: null,
			toolbar: {
				container: document.getElementById("toolbarViewer"),
				numPages: document.getElementById("numPages"),
				pageNumber: document.getElementById("pageNumber"),
				scaleSelectContainer: document.getElementById("scaleSelectContainer"),
				scaleSelect: document.getElementById("scaleSelect"),
				customScaleOption: document.getElementById("customScaleOption"),
				previous: document.getElementById("previous"),
				next: document.getElementById("next"),
				zoomIn: document.getElementById("zoomIn"),
				zoomOut: document.getElementById("zoomOut"),
				viewFind: document.getElementById("viewFind"),
				openFile: document.getElementById("openFile"),
				print: document.getElementById("print"),
				presentationModeButton: document.getElementById("presentationMode"),
				download: document.getElementById("download"),
				viewBookmark: document.getElementById("viewBookmark")
			},
			secondaryToolbar: {
				toolbar: document.getElementById("secondaryToolbar"),
				toggleButton: document.getElementById("secondaryToolbarToggle"),
				toolbarButtonContainer: document.getElementById("secondaryToolbarButtonContainer"),
				presentationModeButton: document.getElementById("secondaryPresentationMode"),
				openFileButton: document.getElementById("secondaryOpenFile"),
				printButton: document.getElementById("secondaryPrint"),
				downloadButton: document.getElementById("secondaryDownload"),
				viewBookmarkButton: document.getElementById("secondaryViewBookmark"),
				firstPageButton: document.getElementById("firstPage"),
				lastPageButton: document.getElementById("lastPage"),
				pageRotateCwButton: document.getElementById("pageRotateCw"),
				pageRotateCcwButton: document.getElementById("pageRotateCcw"),
				cursorSelectToolButton: document.getElementById("cursorSelectTool"),
				cursorHandToolButton: document.getElementById("cursorHandTool"),
				scrollVerticalButton: document.getElementById("scrollVertical"),
				scrollHorizontalButton: document.getElementById("scrollHorizontal"),
				scrollWrappedButton: document.getElementById("scrollWrapped"),
				spreadNoneButton: document.getElementById("spreadNone"),
				spreadOddButton: document.getElementById("spreadOdd"),
				spreadEvenButton: document.getElementById("spreadEven"),
				documentPropertiesButton: document.getElementById("documentProperties")
			},
			fullscreen: {
				contextFirstPage: document.getElementById("contextFirstPage"),
				contextLastPage: document.getElementById("contextLastPage"),
				contextPageRotateCw: document.getElementById("contextPageRotateCw"),
				contextPageRotateCcw: document.getElementById("contextPageRotateCcw")
			},
			sidebar: {
				outerContainer: document.getElementById("outerContainer"),
				viewerContainer: document.getElementById("viewerContainer"),
				toggleButton: document.getElementById("sidebarToggle"),
				thumbnailButton: document.getElementById("viewThumbnail"),
				outlineButton: document.getElementById("viewOutline"),
				attachmentsButton: document.getElementById("viewAttachments"),
				thumbnailView: document.getElementById("thumbnailView"),
				outlineView: document.getElementById("outlineView"),
				attachmentsView: document.getElementById("attachmentsView")
			},
			sidebarResizer: {
				outerContainer: document.getElementById("outerContainer"),
				resizer: document.getElementById("sidebarResizer")
			},
			findBar: {
				bar: document.getElementById("findbar"),
				toggleButton: document.getElementById("viewFind"),
				findField: document.getElementById("findInput"),
				highlightAllCheckbox: document.getElementById("findHighlightAll"),
				caseSensitiveCheckbox: document.getElementById("findMatchCase"),
				entireWordCheckbox: document.getElementById("findEntireWord"),
				findMsg: document.getElementById("findMsg"),
				findResultsCount: document.getElementById("findResultsCount"),
				findPreviousButton: document.getElementById("findPrevious"),
				findNextButton: document.getElementById("findNext")
			},
			passwordOverlay: {
				overlayName: "passwordOverlay",
				container: document.getElementById("passwordOverlay"),
				label: document.getElementById("passwordText"),
				input: document.getElementById("password"),
				submitButton: document.getElementById("passwordSubmit"),
				cancelButton: document.getElementById("passwordCancel")
			},
			documentProperties: {
				overlayName: "documentPropertiesOverlay",
				container: document.getElementById("documentPropertiesOverlay"),
				closeButton: document.getElementById("documentPropertiesClose"),
				fields: {
					fileName: document.getElementById("fileNameField"),
					fileSize: document.getElementById("fileSizeField"),
					title: document.getElementById("titleField"),
					author: document.getElementById("authorField"),
					subject: document.getElementById("subjectField"),
					keywords: document.getElementById("keywordsField"),
					creationDate: document.getElementById("creationDateField"),
					modificationDate: document.getElementById("modificationDateField"),
					creator: document.getElementById("creatorField"),
					producer: document.getElementById("producerField"),
					version: document.getElementById("versionField"),
					pageCount: document.getElementById("pageCountField"),
					pageSize: document.getElementById("pageSizeField"),
					linearized: document.getElementById("linearizedField")
				}
			},
			errorWrapper: {
				container: document.getElementById("errorWrapper"),
				errorMessage: document.getElementById("errorMessage"),
				closeButton: document.getElementById("errorClose"),
				errorMoreInfo: document.getElementById("errorMoreInfo"),
				moreInfoButton: document.getElementById("errorShowMore"),
				lessInfoButton: document.getElementById("errorShowLess")
			},
			printContainer: document.getElementById("printContainer"),
			openFileInputName: "fileInput",
			debuggerScriptPath: "./debugger.js"
		};
		window.PDFViewerApplication = i.PDFViewerApplication, window.PDFViewerApplicationOptions = r.AppOptions, i.PDFViewerApplication.run(e)
	}
	i = n(1), r = n(12), n(38), n(43), "interactive" === document.readyState || "complete" === document.readyState ? a() : document.addEventListener("DOMContentLoaded", a, !0)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFPrintServiceFactory = t.DefaultExternalServices = t.PDFViewerApplication = void 0;
	var i, r = n(2),
		a = (i = r) && i.__esModule ? i : {
			default: i
		},
		o = function() {
			return function(e, t) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return function(e, t) {
					var n = [],
						i = !0,
						r = !1,
						a = void 0;
					try {
						for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
					} catch (e) {
						r = !0, a = e
					} finally {
						try {
							!i && s.return && s.return()
						} finally {
							if (r) throw a
						}
					}
					return n
				}(e, t);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		s = n(6),
		u = n(7),
		l = n(8),
		c = n(10),
		d = n(11),
		h = n(12),
		f = n(14),
		p = n(15),
		v = n(16),
		g = n(17),
		m = n(18),
		w = n(19),
		b = n(20),
		y = n(22),
		_ = n(23),
		P = n(24),
		S = n(25),
		k = n(26),
		L = n(27),
		E = n(29),
		C = n(34),
		T = n(36),
		I = n(37);

	function x(e) {
		return function() {
			var t = e.apply(this, arguments);
			return new Promise(function(e, n) {
				return function i(r, a) {
					try {
						var o = t[r](a),
							s = o.value
					} catch (e) {
						return void n(e)
					}
					if (!o.done) return Promise.resolve(s).then(function(e) {
						i("next", e)
					}, function(e) {
						i("throw", e)
					});
					e(s)
				}("next")
			})
		}
	}
	var B = {
			updateFindControlState: function(e) {},
			updateFindMatchesCount: function(e) {},
			initPassiveLoading: function(e) {},
			fallback: function(e, t) {},
			reportTelemetry: function(e) {},
			createDownloadManager: function(e) {
				throw new Error("Not implemented: createDownloadManager")
			},
			createPreferences: function() {
				throw new Error("Not implemented: createPreferences")
			},
			createL10n: function(e) {
				throw new Error("Not implemented: createL10n")
			},
			supportsIntegratedFind: !1,
			supportsDocumentFonts: !0,
			supportsDocumentColors: !0,
			supportedMouseWheelZoomModifierKeys: {
				ctrlKey: !0,
				metaKey: !0
			}
		},
		M = {
			initialBookmark: document.location.hash.substring(1),
			initialized: !1,
			fellback: !1,
			appConfig: null,
			pdfDocument: null,
			pdfLoadingTask: null,
			printService: null,
			pdfViewer: null,
			pdfThumbnailViewer: null,
			pdfRenderingQueue: null,
			pdfPresentationMode: null,
			pdfDocumentProperties: null,
			pdfLinkService: null,
			pdfHistory: null,
			pdfSidebar: null,
			pdfSidebarResizer: null,
			pdfOutlineViewer: null,
			pdfAttachmentViewer: null,
			pdfCursorTools: null,
			store: null,
			downloadManager: null,
			overlayManager: null,
			preferences: null,
			toolbar: null,
			secondaryToolbar: null,
			eventBus: null,
			l10n: null,
			isInitialViewSet: !1,
			downloadComplete: !1,
			isViewerEmbedded: window.parent !== window,
			url: "",
			baseUrl: "",
			externalServices: B,
			_boundEvents: {},
			contentDispositionFilename: null,
			initialize: function() {
				var e = x(a.default.mark(function e(t) {
					var n, i = this;
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return this.preferences = this.externalServices.createPreferences(), this.appConfig = t, e.next = 4, this._readPreferences();
							case 4:
								return e.next = 6, this._parseHashParameters();
							case 6:
								return e.next = 8, this._initializeL10n();
							case 8:
								return this.isViewerEmbedded && h.AppOptions.get("externalLinkTarget") === u.LinkTarget.NONE && h.AppOptions.set("externalLinkTarget", u.LinkTarget.TOP), e.next = 11, this._initializeViewerComponents();
							case 11:
								this.bindEvents(), this.bindWindowEvents(), n = t.appContainer || document.documentElement, this.l10n.translate(n).then(function() {
									i.eventBus.dispatch("localized", {
										source: i
									})
								}), this.initialized = !0;
							case 16:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function(t) {
					return e.apply(this, arguments)
				}
			}(),
			_readPreferences: function() {
				var e = x(a.default.mark(function e() {
					var t, n, i;
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return t = {
									disableFontFace: !0,
									disableRange: !0,
									disableStream: !0,
									textLayerMode: s.TextLayerMode.DISABLE
								}, e.prev = 1, e.next = 4, this.preferences.getAll();
							case 4:
								n = e.sent, e.t0 = a.default.keys(n);
							case 6:
								if ((e.t1 = e.t0()).done) {
									e.next = 13;
									break
								}
								if (!((i = e.t1.value) in t && h.AppOptions.get(i) === t[i])) {
									e.next = 10;
									break
								}
								return e.abrupt("continue", 6);
							case 10:
								h.AppOptions.set(i, n[i]), e.next = 6;
								break;
							case 13:
								e.next = 17;
								break;
							case 15:
								e.prev = 15, e.t2 = e.catch(1);
							case 17:
							case "end":
								return e.stop()
						}
					}, e, this, [
						[1, 15]
					])
				}));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			_parseHashParameters: function() {
				var e = x(a.default.mark(function e() {
					var t, n, i, r;
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (h.AppOptions.get("pdfBugEnabled")) {
									e.next = 2;
									break
								}
								return e.abrupt("return");
							case 2:
								if (t = [], n = document.location.hash.substring(1), "disableworker" in (i = (0, s.parseQueryString)(n)) && "true" === i.disableworker && t.push(V()), "disablerange" in i && h.AppOptions.set("disableRange", "true" === i.disablerange), "disablestream" in i && h.AppOptions.set("disableStream", "true" === i.disablestream), "disableautofetch" in i && h.AppOptions.set("disableAutoFetch", "true" === i.disableautofetch), "disablefontface" in i && h.AppOptions.set("disableFontFace", "true" === i.disablefontface), "disablehistory" in i && h.AppOptions.set("disableHistory", "true" === i.disablehistory), "webgl" in i && h.AppOptions.set("enableWebGL", "true" === i.webgl), "useonlycsszoom" in i && h.AppOptions.set("useOnlyCssZoom", "true" === i.useonlycsszoom), "verbosity" in i && h.AppOptions.set("verbosity", 0 | i.verbosity), !("textlayer" in i)) {
									e.next = 23;
									break
								}
								e.t0 = i.textlayer, e.next = "off" === e.t0 ? 18 : "visible" === e.t0 ? 20 : "shadow" === e.t0 ? 20 : "hover" === e.t0 ? 20 : 23;
								break;
							case 18:
								return h.AppOptions.set("textLayerMode", s.TextLayerMode.DISABLE), e.abrupt("break", 23);
							case 20:
								return this.appConfig.viewerContainer.classList.add("textLayer-" + i.textlayer), e.abrupt("break", 23);
							case 23:
								return "pdfbug" in i && (h.AppOptions.set("pdfBug", !0), r = i.pdfbug.split(","), t.push(D(r))), "locale" in i && h.AppOptions.set("locale", i.locale), e.abrupt("return", Promise.all(t).catch(function(e) {
									console.error('_parseHashParameters: "' + e.message + '".')
								}));
							case 26:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			_initializeL10n: function() {
				var e = x(a.default.mark(function e() {
					var t;
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return this.l10n = this.externalServices.createL10n({
									locale: h.AppOptions.get("locale")
								}), e.next = 3, this.l10n.getDirection();
							case 3:
								t = e.sent, document.getElementsByTagName("html")[0].dir = t;
							case 5:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			_initializeViewerComponents: function() {
				var e = x(a.default.mark(function e() {
					var t, n, i, r, o, s, u, I, x, B, M;
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								t = this.appConfig, this.overlayManager = new p.OverlayManager, n = h.AppOptions.get("eventBusDispatchToDOM"), i = t.eventBus || (0, f.getGlobalEventBus)(n), this.eventBus = i, (r = new c.PDFRenderingQueue).onIdle = this.cleanup.bind(this), this.pdfRenderingQueue = r, o = new _.PDFLinkService({
									eventBus: i,
									externalLinkTarget: h.AppOptions.get("externalLinkTarget"),
									externalLinkRel: h.AppOptions.get("externalLinkRel")
								}), this.pdfLinkService = o, s = this.externalServices.createDownloadManager({
									disableCreateObjectURL: h.AppOptions.get("disableCreateObjectURL")
								}), this.downloadManager = s, u = new b.PDFFindController({
									linkService: o,
									eventBus: i
								}), this.findController = u, I = t.mainContainer, x = t.viewerContainer, this.pdfViewer = new E.PDFViewer({
									container: I,
									viewer: x,
									eventBus: i,
									renderingQueue: r,
									linkService: o,
									downloadManager: s,
									findController: u,
									renderer: h.AppOptions.get("renderer"),
									enableWebGL: h.AppOptions.get("enableWebGL"),
									l10n: this.l10n,
									textLayerMode: h.AppOptions.get("textLayerMode"),
									imageResourcesPath: h.AppOptions.get("imageResourcesPath"),
									renderInteractiveForms: h.AppOptions.get("renderInteractiveForms"),
									enablePrintAutoRotate: h.AppOptions.get("enablePrintAutoRotate"),
									useOnlyCssZoom: h.AppOptions.get("useOnlyCssZoom"),
									maxCanvasPixels: h.AppOptions.get("maxCanvasPixels")
								}), r.setViewer(this.pdfViewer), o.setViewer(this.pdfViewer), B = t.sidebar.thumbnailView, this.pdfThumbnailViewer = new L.PDFThumbnailViewer({
									container: B,
									renderingQueue: r,
									linkService: o,
									l10n: this.l10n
								}), r.setThumbnailViewer(this.pdfThumbnailViewer), this.pdfHistory = new y.PDFHistory({
									linkService: o,
									eventBus: i
								}), o.setHistory(this.pdfHistory), this.findBar = new w.PDFFindBar(t.findBar, i, this.l10n), this.pdfDocumentProperties = new m.PDFDocumentProperties(t.documentProperties, this.overlayManager, i, this.l10n), this.pdfCursorTools = new l.PDFCursorTools({
									container: I,
									eventBus: i,
									cursorToolOnLoad: h.AppOptions.get("cursorToolOnLoad")
								}), this.toolbar = new T.Toolbar(t.toolbar, i, this.l10n), this.secondaryToolbar = new C.SecondaryToolbar(t.secondaryToolbar, I, i), this.supportsFullscreen && (this.pdfPresentationMode = new S.PDFPresentationMode({
									container: I,
									viewer: x,
									pdfViewer: this.pdfViewer,
									eventBus: i,
									contextMenuItems: t.fullscreen
								})), this.passwordPrompt = new v.PasswordPrompt(t.passwordOverlay, this.overlayManager, this.l10n), this.pdfOutlineViewer = new P.PDFOutlineViewer({
									container: t.sidebar.outlineView,
									eventBus: i,
									linkService: o
								}), this.pdfAttachmentViewer = new g.PDFAttachmentViewer({
									container: t.sidebar.attachmentsView,
									eventBus: i,
									downloadManager: s
								}), (M = Object.create(t.sidebar)).pdfViewer = this.pdfViewer, M.pdfThumbnailViewer = this.pdfThumbnailViewer, this.pdfSidebar = new d.PDFSidebar(M, i, this.l10n), this.pdfSidebar.onToggled = this.forceRendering.bind(this), this.pdfSidebarResizer = new k.PDFSidebarResizer(t.sidebarResizer, i, this.l10n);
							case 39:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			run: function(e) {
				this.initialize(e).then(A)
			},
			zoomIn: function(e) {
				var t = this.pdfViewer.currentScale;
				do {
					t = (1.1 * t).toFixed(2), t = Math.ceil(10 * t) / 10, t = Math.min(s.MAX_SCALE, t)
				} while (--e > 0 && t < s.MAX_SCALE);
				this.pdfViewer.currentScaleValue = t
			},
			zoomOut: function(e) {
				var t = this.pdfViewer.currentScale;
				do {
					t = (t / 1.1).toFixed(2), t = Math.floor(10 * t) / 10, t = Math.max(s.MIN_SCALE, t)
				} while (--e > 0 && t > s.MIN_SCALE);
				this.pdfViewer.currentScaleValue = t
			},
			get pagesCount() {
				return this.pdfDocument ? this.pdfDocument.numPages : 0
			},
			set page(e) {
				this.pdfViewer.currentPageNumber = e
			},
			get page() {
				return this.pdfViewer.currentPageNumber
			},
			get printing() {
				return !!this.printService
			},
			get supportsPrinting() {
				return Ce.instance.supportsPrinting
			},
			get supportsFullscreen() {
				var e = void 0,
					t = document.documentElement;
				e = !!(t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || t.webkitCurrentFullScreenElement || t.msRequestFullscreen), 
                !1 !== document.fullscreenEnabled && !1 !== document.mozFullScreenEnabled && !1 !== document.webkitFullscreenEnabled && !1 !== document.webkitCurrentFullScreenElement && !1 !== document.msFullscreenEnabled || (e = !1), (0, u.shadow)(this, "supportsFullscreen", e)

                return e;
			},
			get supportsIntegratedFind() {
				return this.externalServices.supportsIntegratedFind
			},
			get supportsDocumentFonts() {
				return this.externalServices.supportsDocumentFonts
			},
			get supportsDocumentColors() {
				return this.externalServices.supportsDocumentColors
			},
			get loadingBar() {
				var e = new s.ProgressBar("#loadingBar");
				return (0, u.shadow)(this, "loadingBar", e)
			},
			get supportedMouseWheelZoomModifierKeys() {
				return this.externalServices.supportedMouseWheelZoomModifierKeys
			},
			initPassiveLoading: function() {
				throw new Error("Not implemented: initPassiveLoading")
			},
			setTitleUsingUrl: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				this.url = e, this.baseUrl = e.split("#")[0];
				var t = (0, s.getPDFFileNameFromURL)(e, "");
				if (!t) try {
					t = decodeURIComponent((0, u.getFilenameFromUrl)(e)) || e
				} catch (n) {
					t = e
				}
				this.setTitle(t)
			},
			setTitle: function(e) {
				this.isViewerEmbedded || (document.title = e)
			},
			close: function() {
				var e = x(a.default.mark(function e() {
					var t;
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (this.appConfig.errorWrapper.container.setAttribute("hidden", "true"), this.pdfLoadingTask) {
									e.next = 4;
									break
								}
								return e.abrupt("return");
							case 4:
								return t = this.pdfLoadingTask.destroy(), this.pdfLoadingTask = null, this.pdfDocument && (this.pdfDocument = null, this.pdfThumbnailViewer.setDocument(null), this.pdfViewer.setDocument(null), this.pdfLinkService.setDocument(null), this.pdfDocumentProperties.setDocument(null)), this.store = null, this.isInitialViewSet = !1, this.downloadComplete = !1, this.url = "", this.baseUrl = "", this.contentDispositionFilename = null, this.pdfSidebar.reset(), this.pdfOutlineViewer.reset(), this.pdfAttachmentViewer.reset(), this.findBar.reset(), this.toolbar.reset(), this.secondaryToolbar.reset(), "undefined" != typeof PDFBug && PDFBug.cleanup(), e.abrupt("return", t);
							case 21:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			open: function() {
				var e = x(a.default.mark(function e(t, n) {
					var i, r, o, s, l, c, d, f = this;
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (!this.pdfLoadingTask) {
									e.next = 3;
									break
								}
								return e.next = 3, this.close();
							case 3:
								for (r in i = h.AppOptions.getAll("worker")) u.GlobalWorkerOptions[r] = i[r];
								for (l in o = Object.create(null), "string" == typeof t ? (this.setTitleUsingUrl(t), o.url = t) : t && "byteLength" in t ? o.data = t : t.url && t.originalUrl && (this.setTitleUsingUrl(t.originalUrl), o.url = t.url), s = h.AppOptions.getAll("api")) o[l] = s[l];
								if (n)
									for (c in n) "length" === c && this.pdfDocumentProperties.setFileSize(n[c]), o[c] = n[c];
								return d = (0, u.getDocument)(o), this.pdfLoadingTask = d, d.onPassword = function(e, t) {
									f.passwordPrompt.setUpdateCallback(e, t), f.passwordPrompt.open()
								}, d.onProgress = function(e) {
									var t = e.loaded,
										n = e.total;
									f.progress(t / n)
								}, d.onUnsupportedFeature = this.fallback.bind(this), e.abrupt("return", d.promise.then(function(e) {
									f.load(e)
								}, function(e) {
									if (d === f.pdfLoadingTask) {
										var t = e && e.message;
										return (e instanceof u.InvalidPDFException ? f.l10n.get("invalid_file_error", null, "Invalid or corrupted PDF file.") : e instanceof u.MissingPDFException ? f.l10n.get("missing_file_error", null, "Missing PDF file.") : e instanceof u.UnexpectedResponseException ? f.l10n.get("unexpected_response_error", null, "Unexpected server response.") : f.l10n.get("loading_error", null, "An error occurred while loading the PDF.")).then(function(e) {
											throw f.error(e, {
												message: t
											}), new Error(e)
										})
									}
								}));
							case 16:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function(t, n) {
					return e.apply(this, arguments)
				}
			}(),
			download: function() {
				var e = this;

				function t() {
					r.downloadUrl(n, i)
				}
				var n = this.baseUrl,
					i = this.contentDispositionFilename || (0, s.getPDFFileNameFromURL)(this.url),
					r = this.downloadManager;
				r.onerror = function(t) {
					e.error("PDF failed to download: " + t)
				}, this.pdfDocument && this.downloadComplete ? this.pdfDocument.getData().then(function(e) {
					var t = new Blob([e], {
						type: "application/pdf"
					});
					r.download(t, n, i)
				}).catch(t) : t()
			},
			fallback: function(e) {},
			error: function(e, t) {
				var n = [this.l10n.get("error_version_info", {
					version: u.version || "?",
					build: u.build || "?"
				}, "PDF.js v{{version}} (build: {{build}})")];
				t && (n.push(this.l10n.get("error_message", {
					message: t.message
				}, "Message: {{message}}")), t.stack ? n.push(this.l10n.get("error_stack", {
					stack: t.stack
				}, "Stack: {{stack}}")) : (t.filename && n.push(this.l10n.get("error_file", {
					file: t.filename
				}, "File: {{file}}")), t.lineNumber && n.push(this.l10n.get("error_line", {
					line: t.lineNumber
				}, "Line: {{line}}"))));
				var i = this.appConfig.errorWrapper,
					r = i.container;
				r.removeAttribute("hidden"), i.errorMessage.textContent = e;
				var a = i.closeButton;
				a.onclick = function() {
					r.setAttribute("hidden", "true")
				};
				var o = i.errorMoreInfo,
					l = i.moreInfoButton,
					c = i.lessInfoButton;
				l.onclick = function() {
					o.removeAttribute("hidden"), l.setAttribute("hidden", "true"), c.removeAttribute("hidden"), o.style.height = o.scrollHeight + "px"
				}, c.onclick = function() {
					o.setAttribute("hidden", "true"), l.removeAttribute("hidden"), c.setAttribute("hidden", "true")
				}, l.oncontextmenu = s.noContextMenuHandler, c.oncontextmenu = s.noContextMenuHandler, a.oncontextmenu = s.noContextMenuHandler, l.removeAttribute("hidden"), c.setAttribute("hidden", "true"), Promise.all(n).then(function(e) {
					o.value = e.join("\n")
				})
			},
			progress: function(e) {
				var t = this;
				if (!this.downloadComplete) {
					var n = Math.round(100 * e);
					if (n > this.loadingBar.percent || isNaN(n)) this.loadingBar.percent = n, (this.pdfDocument ? this.pdfDocument.loadingParams.disableAutoFetch : h.AppOptions.get("disableAutoFetch")) && n && (this.disableAutoFetchLoadingBarTimeout && (clearTimeout(this.disableAutoFetchLoadingBarTimeout), this.disableAutoFetchLoadingBarTimeout = null), this.loadingBar.show(), this.disableAutoFetchLoadingBarTimeout = setTimeout(function() {
						t.loadingBar.hide(), t.disableAutoFetchLoadingBarTimeout = null
					}, 5e3))
				}
			},
			load: function(e) {
				var t = this;
				this.pdfDocument = e, e.getDownloadInfo().then(function() {
					t.downloadComplete = !0, t.loadingBar.hide(), l.then(function() {
						t.eventBus.dispatch("documentloaded", {
							source: t
						}), t.eventBus.dispatch("documentload", {
							source: t
						})
					})
				});
				var n = e.getPageMode().catch(function() {});
				this.toolbar.setPagesCount(e.numPages, !1), this.secondaryToolbar.setPagesCount(e.numPages);
				var i = this.store = new I.ViewHistory(e.fingerprint);
				this.pdfLinkService.setDocument(e, null), this.pdfDocumentProperties.setDocument(e, this.url);
				var r = this.pdfViewer;
				r.setDocument(e);
				var l = r.firstPagePromise,
					c = r.pagesPromise,
					f = r.onePageRendered,
					p = this.pdfThumbnailViewer;
				p.setDocument(e), l.then(function(u) {
					if (t.loadingBar.setWidth(t.appConfig.viewerContainer), !h.AppOptions.get("disableHistory") && !t.isViewerEmbedded) {
						var l = !h.AppOptions.get("showPreviousViewOnLoad");
						t.pdfHistory.initialize(e.fingerprint, l), t.pdfHistory.initialBookmark && (t.initialBookmark = t.pdfHistory.initialBookmark, t.initialRotation = t.pdfHistory.initialRotation)
					}
					var f, p = i.getMultiple({
						page: null,
						zoom: s.DEFAULT_SCALE_VALUE,
						scrollLeft: "0",
						scrollTop: "0",
						rotation: null,
						sidebarView: d.SidebarView.NONE,
						scrollMode: null,
						spreadMode: null
					}).catch(function() {});
					Promise.all([p, n]).then((f = x(a.default.mark(function e(n) {
						var i, s, u, l, d, f, p, v = o(n, 2),
							g = v[0],
							m = void 0 === g ? {} : g,
							w = v[1];
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return i = t.initialBookmark, s = h.AppOptions.get("defaultZoomValue"), u = s ? "zoom=" + s : null, l = null, d = h.AppOptions.get("sidebarViewOnLoad"), f = h.AppOptions.get("scrollModeOnLoad"), p = h.AppOptions.get("spreadModeOnLoad"), m.page && h.AppOptions.get("showPreviousViewOnLoad") && (u = "page=" + m.page + "&zoom=" + (s || m.zoom) + "," + m.scrollLeft + "," + m.scrollTop, l = parseInt(m.rotation, 10), d = d || 0 | m.sidebarView, f = f || 0 | m.scrollMode, p = p || 0 | m.spreadMode), w && !h.AppOptions.get("disablePageMode") && (d = d || Ee(w)), t.setInitialView(u, {
										rotation: l,
										sidebarView: d,
										scrollMode: f,
										spreadMode: p
									}), t.eventBus.dispatch("documentinit", {
										source: t
									}), t.isViewerEmbedded || r.focus(), e.next = 14, Promise.race([c, new Promise(function(e) {
										setTimeout(e, 1e4)
									})]);
								case 14:
									if (i || u) {
										e.next = 16;
										break
									}
									return e.abrupt("return");
								case 16:
									if (!r.hasEqualPageSizes) {
										e.next = 18;
										break
									}
									return e.abrupt("return");
								case 18:
									t.initialBookmark = i, r.currentScaleValue = r.currentScaleValue, t.setInitialView(u);
								case 21:
								case "end":
									return e.stop()
							}
						}, e, t)
					})), function(e) {
						return f.apply(this, arguments)
					})).then(function() {
						r.update()
					})
				}), e.getPageLabels().then(function(n) {
					if (n && !h.AppOptions.get("disablePageLabels")) {
						var i = 0,
							a = n.length;
						if (a === t.pagesCount) {
							for (; i < a && n[i] === (i + 1).toString();) i++;
							i !== a && (r.setPageLabels(n), p.setPageLabels(n), t.toolbar.setPagesCount(e.numPages, !0), t.toolbar.setPageNumber(r.currentPageNumber, r.currentPageLabel))
						} else console.error("The number of Page Labels does not match the number of pages in the document.")
					}
				}), c.then(function() {
					t.supportsPrinting && e.getJavaScript().then(function(e) {
						if (e) {
							e.some(function(e) {
								return !!e && (console.warn("Warning: JavaScript is not supported"), t.fallback(u.UNSUPPORTED_FEATURES.javaScript), !0)
							});
							for (var n = /\bprint\s*\(/, i = 0, r = e.length; i < r; i++) {
								var a = e[i];
								if (a && n.test(a)) return void setTimeout(function() {
									window.print()
								})
							}
						}
					})
				}), Promise.all([f, s.animationStarted]).then(function() {
					e.getOutline().then(function(e) {
						t.pdfOutlineViewer.render({
							outline: e
						})
					}), e.getAttachments().then(function(e) {
						t.pdfAttachmentViewer.render({
							attachments: e
						})
					})
				}), e.getMetadata().then(function(n) {
					var i = n.info,
						r = n.metadata,
						a = n.contentDispositionFilename;
					t.documentInfo = i, t.metadata = r, t.contentDispositionFilename = a, console.log("PDF " + e.fingerprint + " [" + i.PDFFormatVersion + " " + (i.Producer || "-").trim() + " / " + (i.Creator || "-").trim() + "] (PDF.js: " + (u.version || "-") + (h.AppOptions.get("enableWebGL") ? " [WebGL]" : "") + ")");
					var o = void 0;
					if (r && r.has("dc:title")) {
						var s = r.get("dc:title");
						"Untitled" !== s && (o = s)
					}!o && i && i.Title && (o = i.Title), o ? t.setTitle(o + " - " + (a || document.title)) : a && t.setTitle(a), i.IsAcroFormPresent && (console.warn("Warning: AcroForm/XFA is not supported"), t.fallback(u.UNSUPPORTED_FEATURES.forms))
				})
			},
			setInitialView: function(e) {
				var t, n, i = this,
					r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					a = r.rotation,
					o = r.sidebarView,
					u = r.scrollMode,
					l = r.spreadMode,
					c = function(e) {
						(0, s.isValidRotation)(e) && (i.pdfViewer.pagesRotation = e)
					};
				t = u, n = l, Number.isInteger(t) && (i.pdfViewer.scrollMode = t), Number.isInteger(n) && (i.pdfViewer.spreadMode = n), this.isInitialViewSet = !0, this.pdfSidebar.setInitialView(o), this.initialBookmark ? (c(this.initialRotation), delete this.initialRotation, this.pdfLinkService.setHash(this.initialBookmark), this.initialBookmark = null) : e && (c(a), this.pdfLinkService.setHash(e)), this.toolbar.setPageNumber(this.pdfViewer.currentPageNumber, this.pdfViewer.currentPageLabel), this.secondaryToolbar.setPageNumber(this.pdfViewer.currentPageNumber), this.pdfViewer.currentScaleValue || (this.pdfViewer.currentScaleValue = s.DEFAULT_SCALE_VALUE)
			},
			cleanup: function() {
				this.pdfDocument && (this.pdfViewer.cleanup(), this.pdfThumbnailViewer.cleanup(), this.pdfViewer.renderer !== s.RendererType.SVG && this.pdfDocument.cleanup())
			},
			forceRendering: function() {
				this.pdfRenderingQueue.printing = this.printing, this.pdfRenderingQueue.isThumbnailViewEnabled = this.pdfSidebar.isThumbnailViewVisible, this.pdfRenderingQueue.renderHighestPriority()
			},
			beforePrint: function() {
				var e = this;
				if (!this.printService)
					if (this.supportsPrinting)
						if (this.pdfViewer.pageViewsReady) {
							var t = this.pdfViewer.getPagesOverview(),
								n = this.appConfig.printContainer,
								i = Ce.instance.createPrintService(this.pdfDocument, t, n, this.l10n);
							this.printService = i, this.forceRendering(), i.layout()
						} else this.l10n.get("printing_not_ready", null, "Warning: The PDF is not fully loaded for printing.").then(function(e) {
							window.alert(e)
						});
				else this.l10n.get("printing_not_supported", null, "Warning: Printing is not fully supported by this browser.").then(function(t) {
					e.error(t)
				})
			},
			afterPrint: function() {
				this.printService && (this.printService.destroy(), this.printService = null), this.forceRendering()
			},
			rotatePages: function(e) {
				if (this.pdfDocument) {
					var t = (this.pdfViewer.pagesRotation + 360 + e) % 360;
					this.pdfViewer.pagesRotation = t
				}
			},
			requestPresentationMode: function() {
				this.pdfPresentationMode && this.pdfPresentationMode.request()
			},
			bindEvents: function() {
				var e = this.eventBus,
					t = this._boundEvents;
				t.beforePrint = this.beforePrint.bind(this), t.afterPrint = this.afterPrint.bind(this), e.on("resize", Q), e.on("hashchange", Z), e.on("beforeprint", t.beforePrint), e.on("afterprint", t.afterPrint), e.on("pagerendered", F), e.on("textlayerrendered", U), e.on("updateviewarea", G), e.on("pagechanging", ye), e.on("scalechanging", we), e.on("rotationchanging", be), e.on("sidebarviewchanged", W), e.on("pagemode", z), e.on("namedaction", j), e.on("presentationmodechanged", H), e.on("presentationmode", Y), e.on("openfile", J), e.on("print", $), e.on("download", ee), e.on("firstpage", te), e.on("lastpage", ne), e.on("nextpage", ie), e.on("previouspage", re), e.on("zoomin", ae), e.on("zoomout", oe), e.on("pagenumberchanged", se), e.on("scalechanged", ue), e.on("rotatecw", le), e.on("rotateccw", ce), e.on("switchscrollmode", de), e.on("scrollmodechanged", q), e.on("switchspreadmode", he), e.on("spreadmodechanged", K), e.on("documentproperties", fe), e.on("find", pe), e.on("findfromurlhash", ve), e.on("updatefindmatchescount", ge), e.on("updatefindcontrolstate", me), e.on("fileinputchange", X)
			},
			bindWindowEvents: function() {
				var e = this.eventBus,
					t = this._boundEvents;
				t.windowResize = function() {
					e.dispatch("resize", {
						source: window
					})
				}, t.windowHashChange = function() {
					e.dispatch("hashchange", {
						source: window,
						hash: document.location.hash.substring(1)
					})
				}, t.windowBeforePrint = function() {
					e.dispatch("beforeprint", {
						source: window
					})
				}, t.windowAfterPrint = function() {
					e.dispatch("afterprint", {
						source: window
					})
				}, window.addEventListener("wheel", Se), window.addEventListener("click", ke), window.addEventListener("keydown", Le), window.addEventListener("resize", t.windowResize), window.addEventListener("hashchange", t.windowHashChange), window.addEventListener("beforeprint", t.windowBeforePrint), window.addEventListener("afterprint", t.windowAfterPrint)
			},
			unbindEvents: function() {
				var e = this.eventBus,
					t = this._boundEvents;
				e.off("resize", Q), e.off("hashchange", Z), e.off("beforeprint", t.beforePrint), e.off("afterprint", t.afterPrint), e.off("pagerendered", F), e.off("textlayerrendered", U), e.off("updateviewarea", G), e.off("pagechanging", ye), e.off("scalechanging", we), e.off("rotationchanging", be), e.off("sidebarviewchanged", W), e.off("pagemode", z), e.off("namedaction", j), e.off("presentationmodechanged", H), e.off("presentationmode", Y), e.off("openfile", J), e.off("print", $), e.off("download", ee), e.off("firstpage", te), e.off("lastpage", ne), e.off("nextpage", ie), e.off("previouspage", re), e.off("zoomin", ae), e.off("zoomout", oe), e.off("pagenumberchanged", se), e.off("scalechanged", ue), e.off("rotatecw", le), e.off("rotateccw", ce), e.off("switchscrollmode", de), e.off("scrollmodechanged", q), e.off("switchspreadmode", he), e.off("spreadmodechanged", K), e.off("documentproperties", fe), e.off("find", pe), e.off("findfromurlhash", ve), e.off("updatefindmatchescount", ge), e.off("updatefindcontrolstate", me), e.off("fileinputchange", X), t.beforePrint = null, t.afterPrint = null
			},
			unbindWindowEvents: function() {
				var e = this._boundEvents;
				window.removeEventListener("wheel", Se), window.removeEventListener("click", ke), window.removeEventListener("keydown", Le), window.removeEventListener("resize", e.windowResize), window.removeEventListener("hashchange", e.windowHashChange), window.removeEventListener("beforeprint", e.windowBeforePrint), window.removeEventListener("afterprint", e.windowAfterPrint), e.windowResize = null, e.windowHashChange = null, e.windowBeforePrint = null, e.windowAfterPrint = null
			}
		},
		N = void 0,
		O = ["null", "http://mozilla.github.io", "https://mozilla.github.io"];

	function V() {
		return u.GlobalWorkerOptions.workerSrc || (u.GlobalWorkerOptions.workerSrc = h.AppOptions.get("workerSrc")), (0, u.loadScript)(u.PDFWorker.getWorkerSrc())
	}

	function D(e) {
		var t = M.appConfig;
		return (0, u.loadScript)(t.debuggerScriptPath).then(function() {
			PDFBug.enable(e), PDFBug.init({
				OPS: u.OPS,
				createObjectURL: u.createObjectURL
			}, t.mainContainer)
		})
	}



	function A() {
		var e, t = M.appConfig,
			n = document.location.search.substring(1),
			i = (0, s.parseQueryString)(n);

		e = "file" in i ? i.file : h.AppOptions.get("defaultUrl"), N(e);
		var r = document.createElement("input");
		r.id = t.openFileInputName, r.className = "fileInput", r.setAttribute("type", "file"), r.oncontextmenu = s.noContextMenuHandler, document.body.appendChild(r), window.File && window.FileReader && window.FileList && window.Blob ? r.value = null : (t.toolbar.openFile.setAttribute("hidden", "true"), t.secondaryToolbar.openFileButton.setAttribute("hidden", "true")), r.addEventListener("change", function(e) {
			var t = e.target.files;
			t && 0 !== t.length && M.eventBus.dispatch("fileinputchange", {
				source: this,
				fileInput: e.target
			})
		}), t.mainContainer.addEventListener("dragover", function(e) {
			e.preventDefault(), e.dataTransfer.dropEffect = "move"
		}), t.mainContainer.addEventListener("drop", function(e) {
			e.preventDefault();
			var t = e.dataTransfer.files;
			t && 0 !== t.length && M.eventBus.dispatch("fileinputchange", {
				source: this,
				fileInput: e.dataTransfer
			})
		}), M.supportsPrinting || (t.toolbar.print.classList.add("hidden"), t.secondaryToolbar.printButton.classList.add("hidden")), M.supportsFullscreen || (t.toolbar.presentationModeButton.classList.add("hidden"), t.secondaryToolbar.presentationModeButton.classList.add("hidden")), M.supportsIntegratedFind && t.toolbar.viewFind.classList.add("hidden"), t.mainContainer.addEventListener("transitionend", function(e) {

			e.target === this && M.eventBus.dispatch("resize", {
				source: this
			})
		}, !0), t.sidebar.toggleButton.addEventListener("click", function() {
			M.pdfSidebar.toggle()
		});
		try {
			R(e)
		} catch (e) {
			M.l10n.get("loading_error", null, "An error occurred while loading the PDF.").then(function(t) {
				M.error(t, e)
			})
		}
	}
	N = function(e) {
		if (void 0 !== e) try {
			var t = new u.URL(window.location.href).origin || "null";
			if (O.includes(t)) return;
			var n = new u.URL(e, window.location.href),
				i = n.origin,
				r = n.protocol;
			if (i !== t && "blob:" !== r) throw new Error("file origin does not match viewer's")
		} catch (e) {
			var a = e && e.message;
			throw M.l10n.get("loading_error", null, "An error occurred while loading the PDF.").then(function(e) {
				M.error(e, {
					message: a
				})
			}), e
		}
	};
	var R = void 0;

	function F(e) {
		var t = e.pageNumber,
			n = t - 1,
			i = M.pdfViewer.getPageView(n);
		if (t === M.page && M.toolbar.updateLoadingIndicatorState(!1), i) {
			if (M.pdfSidebar.isThumbnailViewVisible) M.pdfThumbnailViewer.getThumbnail(n).setImage(i);
			"undefined" != typeof Stats && Stats.enabled && i.stats && Stats.add(t, i.stats), i.error && M.l10n.get("rendering_error", null, "An error occurred while rendering the page.").then(function(e) {
				M.error(e, i.error)
			})
		}
	}

	function U(e) {}

	function z(e) {
		var t = e.mode,
			n = void 0;
		switch (t) {
			case "thumbs":
				n = d.SidebarView.THUMBS;
				break;
			case "bookmarks":
			case "outline":
				n = d.SidebarView.OUTLINE;
				break;
			case "attachments":
				n = d.SidebarView.ATTACHMENTS;
				break;
			case "none":
				n = d.SidebarView.NONE;
				break;
			default:
				return void console.error('Invalid "pagemode" hash parameter: ' + t)
		}
		M.pdfSidebar.switchView(n, !0)
	}

	function j(e) {
		switch (e.action) {
			case "GoToPage":
				M.appConfig.toolbar.pageNumber.select();
				break;
			case "Find":
				M.supportsIntegratedFind || M.findBar.toggle()
		}
	}

	function H(e) {
		var t = e.active,
			n = e.switchInProgress;
		M.pdfViewer.presentationModeState = n ? s.PresentationModeState.CHANGING : t ? s.PresentationModeState.FULLSCREEN : s.PresentationModeState.NORMAL
	}

	function W(e) {
		M.pdfRenderingQueue.isThumbnailViewEnabled = M.pdfSidebar.isThumbnailViewVisible;
		var t = M.store;
		t && M.isInitialViewSet && t.set("sidebarView", e.view).catch(function() {})
	}

	function G(e) {
		var t = e.location,
			n = M.store;
		n && M.isInitialViewSet && n.setMultiple({
			page: t.pageNumber,
			zoom: t.scale,
			scrollLeft: t.left,
			scrollTop: t.top,
			rotation: t.rotation
		}).catch(function() {});
		var i = M.pdfLinkService.getAnchorUrl(t.pdfOpenParams);
		M.appConfig.toolbar.viewBookmark.href = i, M.appConfig.secondaryToolbar.viewBookmarkButton.href = i;
		var r = M.pdfViewer.getPageView(M.page - 1).renderingState !== c.RenderingStates.FINISHED;
		M.toolbar.updateLoadingIndicatorState(r)
	}

	function q(e) {
		var t = M.store;
		t && M.isInitialViewSet && t.set("scrollMode", e.mode).catch(function() {})
	}

	function K(e) {
		var t = M.store;
		t && M.isInitialViewSet && t.set("spreadMode", e.mode).catch(function() {})
	}

	function Q() {
		var e = M.pdfDocument,
			t = M.pdfViewer;
		if (e) {
			var n = t.currentScaleValue;
			"auto" !== n && "page-fit" !== n && "page-width" !== n || (t.currentScaleValue = n), t.update()
		}
	}

	function Z(e) {
		var t = e.hash;
		t && (M.isInitialViewSet ? M.pdfHistory.popStateInProgress || M.pdfLinkService.setHash(t) : M.initialBookmark = t)
	}
	R = function(e) {
		if (e && 0 === e.lastIndexOf("file:", 0)) {
			M.setTitleUsingUrl(e);
			var t = new XMLHttpRequest;
			t.onload = function() {
				M.open(new Uint8Array(t.response))
			};
			try {
				t.open("GET", e), t.responseType = "arraybuffer", t.send()
			} catch (e) {
				throw e
			}
		} else e && M.open(e)
	};
	var X = void 0;

	function Y() {
		M.requestPresentationMode()
	}

	function J() {
		var e = M.appConfig.openFileInputName;
		document.getElementById(e).click()
	}

	function $() {
		window.print()
	}

	function ee() {
		M.download()
	}

	function te() {
		M.pdfDocument && (M.page = 1)
	}

	function ne() {
		M.pdfDocument && (M.page = M.pagesCount)
	}

	function ie() {
		M.page++
	}

	function re() {
		M.page--
	}

	function ae() {
		M.zoomIn()
	}

	function oe() {
		M.zoomOut()
	}

	function se(e) {
		var t = M.pdfViewer;
		t.currentPageLabel = e.value, e.value !== t.currentPageNumber.toString() && e.value !== t.currentPageLabel && M.toolbar.setPageNumber(t.currentPageNumber, t.currentPageLabel)
	}

	function ue(e) {
		M.pdfViewer.currentScaleValue = e.value
	}

	function le() {
		M.rotatePages(90)
	}

	function ce() {
		M.rotatePages(-90)
	}

	function de(e) {
		M.pdfViewer.scrollMode = e.mode
	}

	function he(e) {
		M.pdfViewer.spreadMode = e.mode
	}

	function fe() {
		M.pdfDocumentProperties.open()
	}

	function pe(e) {
		M.findController.executeCommand("find" + e.type, {
			query: e.query,
			phraseSearch: e.phraseSearch,
			caseSensitive: e.caseSensitive,
			entireWord: e.entireWord,
			highlightAll: e.highlightAll,
			findPrevious: e.findPrevious
		})
	}

	function ve(e) {
		M.findController.executeCommand("find", {
			query: e.query,
			phraseSearch: e.phraseSearch,
			caseSensitive: !1,
			entireWord: !1,
			highlightAll: !0,
			findPrevious: !1
		})
	}

	function ge(e) {
		var t = e.matchesCount;
		M.supportsIntegratedFind ? M.externalServices.updateFindMatchesCount(t) : M.findBar.updateResultsCount(t)
	}

	function me(e) {
		var t = e.state,
			n = e.previous,
			i = e.matchesCount;
		M.supportsIntegratedFind ? M.externalServices.updateFindControlState({
			result: t,
			findPrevious: n,
			matchesCount: i
		}) : M.findBar.updateUIState(t, n, i)
	}

	function we(e) {
		M.toolbar.setPageScale(e.presetValue, e.scale), M.pdfViewer.update()
	}

	function be(e) {
		M.pdfThumbnailViewer.pagesRotation = e.pagesRotation, M.forceRendering(), M.pdfViewer.currentPageNumber = e.pageNumber
	}

	function ye(e) {
		var t = e.pageNumber;
		if (M.toolbar.setPageNumber(t, e.pageLabel || null), M.secondaryToolbar.setPageNumber(t), M.pdfSidebar.isThumbnailViewVisible && M.pdfThumbnailViewer.scrollThumbnailIntoView(t), "undefined" != typeof Stats && Stats.enabled) {
			var n = M.pdfViewer.getPageView(t - 1);
			n && n.stats && Stats.add(t, n.stats)
		}
	}
	X = function(e) {
		if (!M.pdfViewer || !M.pdfViewer.isInPresentationMode) {
			var t = e.fileInput.files[0];
			if (u.URL.createObjectURL && !h.AppOptions.get("disableCreateObjectURL")) {
				var n = u.URL.createObjectURL(t);
				t.name && (n = {
					url: n,
					originalUrl: t.name
				}), M.open(n)
			} else {
				M.setTitleUsingUrl(t.name);
				var i = new FileReader;
				i.onload = function(e) {
					var t = e.target.result;
					M.open(new Uint8Array(t))
				}, i.readAsArrayBuffer(t)
			}
			var r = M.appConfig;
			r.toolbar.viewBookmark.setAttribute("hidden", "true"), r.secondaryToolbar.viewBookmarkButton.setAttribute("hidden", "true"), r.toolbar.download.setAttribute("hidden", "true"), r.secondaryToolbar.downloadButton.setAttribute("hidden", "true")
		}
	};
	var _e = !1,
		Pe = void 0;

	function Se(e) {
		var t = M.pdfViewer;
		if (!t.isInPresentationMode)
			if (e.ctrlKey || e.metaKey) {
				var n = M.supportedMouseWheelZoomModifierKeys;
				if (e.ctrlKey && !n.ctrlKey || e.metaKey && !n.metaKey) return;
				if (e.preventDefault(), _e) return;
				var i = t.currentScale,
					r = 3 * (0, s.normalizeWheelEventDelta)(e);
				r < 0 ? M.zoomOut(-r) : M.zoomIn(r);
				var a = t.currentScale;
				if (i !== a) {
					var o = a / i - 1,
						u = t.container.getBoundingClientRect(),
						l = e.clientX - u.left,
						c = e.clientY - u.top;
					t.container.scrollLeft += l * o, t.container.scrollTop += c * o
				}
			} else _e = !0, clearTimeout(Pe), Pe = setTimeout(function() {
				_e = !1
			}, 1e3)
	}

	function ke(e) {
		if (M.secondaryToolbar.isOpen) {
			var t = M.appConfig;
			(M.pdfViewer.containsElement(e.target) || t.toolbar.container.contains(e.target) && e.target !== t.secondaryToolbar.toggleButton) && M.secondaryToolbar.close()
		}
	}

	function Le(e) {
		if (!M.overlayManager.active) {
			var t = !1,
				n = !1,
				i = (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0),
				r = M.pdfViewer,
				a = r && r.isInPresentationMode;
			if (1 === i || 8 === i || 5 === i || 12 === i) switch (e.keyCode) {
				case 70:
					M.supportsIntegratedFind || (M.findBar.open(), t = !0);
					break;
				case 71:
					if (!M.supportsIntegratedFind) {
						var o = M.findController.state;
						o && M.findController.executeCommand("findagain", {
							query: o.query,
							phraseSearch: o.phraseSearch,
							caseSensitive: o.caseSensitive,
							entireWord: o.entireWord,
							highlightAll: o.highlightAll,
							findPrevious: 5 === i || 12 === i
						}), t = !0
					}
					break;
				case 61:
				case 107:
				case 187:
				case 171:
					a || M.zoomIn(), t = !0;
					break;
				case 173:
				case 109:
				case 189:
					a || M.zoomOut(), t = !0;
					break;
				case 48:
				case 96:
					a || (setTimeout(function() {
						r.currentScaleValue = s.DEFAULT_SCALE_VALUE
					}), t = !1);
					break;
				case 38:
					(a || M.page > 1) && (M.page = 1, t = !0, n = !0);
					break;
				case 40:
					(a || M.page < M.pagesCount) && (M.page = M.pagesCount, t = !0, n = !0)
			}
			if (1 === i || 8 === i) switch (e.keyCode) {
				case 83:
					M.download(), t = !0
			}
			if (3 === i || 10 === i) switch (e.keyCode) {
				case 80:
					M.requestPresentationMode(), t = !0;
					break;
				case 71:
					M.appConfig.toolbar.pageNumber.select(), t = !0
			}
			if (t) return n && !a && r.focus(), void e.preventDefault();
			var u = document.activeElement || document.querySelector(":focus"),
				c = u && u.tagName.toUpperCase();
			if ("INPUT" !== c && "TEXTAREA" !== c && "SELECT" !== c || 27 === e.keyCode) {
				if (0 === i) {
					var d = 0,
						h = !1;
					switch (e.keyCode) {
						case 38:
						case 33:
							r.isVerticalScrollbarEnabled && (h = !0), d = -1;
							break;
						case 8:
							a || (h = !0), d = -1;
							break;
						case 37:
							r.isHorizontalScrollbarEnabled && (h = !0);
						case 75:
						case 80:
							d = -1;
							break;
						case 27:
							M.secondaryToolbar.isOpen && (M.secondaryToolbar.close(), t = !0), !M.supportsIntegratedFind && M.findBar.opened && (M.findBar.close(), t = !0);
							break;
						case 40:
						case 34:
							r.isVerticalScrollbarEnabled && (h = !0), d = 1;
							break;
						case 13:
						case 32:
							a || (h = !0), d = 1;
							break;
						case 39:
							r.isHorizontalScrollbarEnabled && (h = !0);
						case 74:
						case 78:
							d = 1;
							break;
						case 36:
							(a || M.page > 1) && (M.page = 1, t = !0, n = !0);
							break;
						case 35:
							(a || M.page < M.pagesCount) && (M.page = M.pagesCount, t = !0, n = !0);
							break;
						case 83:
							M.pdfCursorTools.switchTool(l.CursorTool.SELECT);
							break;
						case 72:
							M.pdfCursorTools.switchTool(l.CursorTool.HAND);
							break;
						case 82:
							M.rotatePages(90)
					}
					0 === d || h && "page-fit" !== r.currentScaleValue || (d > 0 ? M.page < M.pagesCount && M.page++ : M.page > 1 && M.page--, t = !0)
				}
				if (4 === i) switch (e.keyCode) {
					case 13:
					case 32:
						if (!a && "page-fit" !== r.currentScaleValue) break;
						M.page > 1 && M.page--, t = !0;
						break;
					case 82:
						M.rotatePages(-90)
				}
				t || a || (e.keyCode >= 33 && e.keyCode <= 40 || 32 === e.keyCode && "BUTTON" !== c) && (n = !0), n && !r.containsElement(u) && r.focus(), t && e.preventDefault()
			}
		}
	}

	function Ee(e) {
		switch (e) {
			case "UseNone":
				return d.SidebarView.NONE;
			case "UseThumbs":
				return d.SidebarView.THUMBS;
			case "UseOutlines":
				return d.SidebarView.OUTLINE;
			case "UseAttachments":
				return d.SidebarView.ATTACHMENTS
		}
		return d.SidebarView.NONE
	}
	var Ce = {
		instance: {
			supportsPrinting: !1,
			createPrintService: function() {
				throw new Error("Not implemented: createPrintService")
			}
		}
	};
	t.PDFViewerApplication = M, t.DefaultExternalServices = B, t.PDFPrintServiceFactory = Ce
}, function(e, t, n) {
	"use strict";
	e.exports = n(3)
}, function(e, t, n) {
	"use strict";
	var i = function() {
			return this
		}() || Function("return this")(),
		r = i.regeneratorRuntime && Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime") >= 0,
		a = r && i.regeneratorRuntime;
	if (i.regeneratorRuntime = void 0, e.exports = n(4), r) i.regeneratorRuntime = a;
	else try {
		delete i.regeneratorRuntime
	} catch (e) {
		i.regeneratorRuntime = void 0
	}
}, function(e, t, n) {
	"use strict";
	(function(e) {
		var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		! function(n) {
			var i, r = Object.prototype,
				a = r.hasOwnProperty,
				o = "function" == typeof Symbol ? Symbol : {},
				s = o.iterator || "@@iterator",
				u = o.asyncIterator || "@@asyncIterator",
				l = o.toStringTag || "@@toStringTag",
				c = "object" === t(e),
				d = n.regeneratorRuntime;
			if (d) c && (e.exports = d);
			else {
				(d = n.regeneratorRuntime = c ? e.exports : {}).wrap = _;
				var h = "suspendedStart",
					f = "suspendedYield",
					p = "executing",
					v = "completed",
					g = {},
					m = {};
				m[s] = function() {
					return this
				};
				var w = Object.getPrototypeOf,
					b = w && w(w(M([])));
				b && b !== r && a.call(b, s) && (m = b);
				var y = L.prototype = S.prototype = Object.create(m);
				k.prototype = y.constructor = L, L.constructor = k, L[l] = k.displayName = "GeneratorFunction", d.isGeneratorFunction = function(e) {
					var t = "function" == typeof e && e.constructor;
					return !!t && (t === k || "GeneratorFunction" === (t.displayName || t.name))
				}, d.mark = function(e) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(e, L) : (e.__proto__ = L, l in e || (e[l] = "GeneratorFunction")), e.prototype = Object.create(y), e
				}, d.awrap = function(e) {
					return {
						__await: e
					}
				}, E(C.prototype), C.prototype[u] = function() {
					return this
				}, d.AsyncIterator = C, d.async = function(e, t, n, i) {
					var r = new C(_(e, t, n, i));
					return d.isGeneratorFunction(t) ? r : r.next().then(function(e) {
						return e.done ? e.value : r.next()
					})
				}, E(y), y[l] = "Generator", y[s] = function() {
					return this
				}, y.toString = function() {
					return "[object Generator]"
				}, d.keys = function(e) {
					var t = [];
					for (var n in e) t.push(n);
					return t.reverse(),
						function n() {
							for (; t.length;) {
								var i = t.pop();
								if (i in e) return n.value = i, n.done = !1, n
							}
							return n.done = !0, n
						}
				}, d.values = M, B.prototype = {
					constructor: B,
					reset: function(e) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach(x), !e)
							for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = i)
					},
					stop: function() {
						this.done = !0;
						var e = this.tryEntries[0].completion;
						if ("throw" === e.type) throw e.arg;
						return this.rval
					},
					dispatchException: function(e) {
						if (this.done) throw e;
						var t = this;

						function n(n, r) {
							return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = i), !!r
						}
						for (var r = this.tryEntries.length - 1; r >= 0; --r) {
							var o = this.tryEntries[r],
								s = o.completion;
							if ("root" === o.tryLoc) return n("end");
							if (o.tryLoc <= this.prev) {
								var u = a.call(o, "catchLoc"),
									l = a.call(o, "finallyLoc");
								if (u && l) {
									if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
									if (this.prev < o.finallyLoc) return n(o.finallyLoc)
								} else if (u) {
									if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
								} else {
									if (!l) throw new Error("try statement without catch or finally");
									if (this.prev < o.finallyLoc) return n(o.finallyLoc)
								}
							}
						}
					},
					abrupt: function(e, t) {
						for (var n = this.tryEntries.length - 1; n >= 0; --n) {
							var i = this.tryEntries[n];
							if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
								var r = i;
								break
							}
						}
						r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
						var o = r ? r.completion : {};
						return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, g) : this.complete(o)
					},
					complete: function(e, t) {
						if ("throw" === e.type) throw e.arg;
						return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
					},
					finish: function(e) {
						for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t];
							if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), g
						}
					},
					catch: function(e) {
						for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t];
							if (n.tryLoc === e) {
								var i = n.completion;
								if ("throw" === i.type) {
									var r = i.arg;
									x(n)
								}
								return r
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(e, t, n) {
						return this.delegate = {
							iterator: M(e),
							resultName: t,
							nextLoc: n
						}, "next" === this.method && (this.arg = i), g
					}
				}
			}

			function _(e, t, n, i) {
				var r = t && t.prototype instanceof S ? t : S,
					a = Object.create(r.prototype),
					o = new B(i || []);
				return a._invoke = function(e, t, n) {
					var i = h;
					return function(r, a) {
						if (i === p) throw new Error("Generator is already running");
						if (i === v) {
							if ("throw" === r) throw a;
							return N()
						}
						for (n.method = r, n.arg = a;;) {
							var o = n.delegate;
							if (o) {
								var s = T(o, n);
								if (s) {
									if (s === g) continue;
									return s
								}
							}
							if ("next" === n.method) n.sent = n._sent = n.arg;
							else if ("throw" === n.method) {
								if (i === h) throw i = v, n.arg;
								n.dispatchException(n.arg)
							} else "return" === n.method && n.abrupt("return", n.arg);
							i = p;
							var u = P(e, t, n);
							if ("normal" === u.type) {
								if (i = n.done ? v : f, u.arg === g) continue;
								return {
									value: u.arg,
									done: n.done
								}
							}
							"throw" === u.type && (i = v, n.method = "throw", n.arg = u.arg)
						}
					}
				}(e, n, o), a
			}

			function P(e, t, n) {
				try {
					return {
						type: "normal",
						arg: e.call(t, n)
					}
				} catch (e) {
					return {
						type: "throw",
						arg: e
					}
				}
			}

			function S() {}

			function k() {}

			function L() {}

			function E(e) {
				["next", "throw", "return"].forEach(function(t) {
					e[t] = function(e) {
						return this._invoke(t, e)
					}
				})
			}

			function C(e) {
				var n;
				this._invoke = function(i, r) {
					function o() {
						return new Promise(function(n, o) {
							! function n(i, r, o, s) {
								var u = P(e[i], e, r);
								if ("throw" !== u.type) {
									var l = u.arg,
										c = l.value;
									return c && "object" === (void 0 === c ? "undefined" : t(c)) && a.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
										n("next", e, o, s)
									}, function(e) {
										n("throw", e, o, s)
									}) : Promise.resolve(c).then(function(e) {
										l.value = e, o(l)
									}, s)
								}
								s(u.arg)
							}(i, r, n, o)
						})
					}
					return n = n ? n.then(o, o) : o()
				}
			}

			function T(e, t) {
				var n = e.iterator[t.method];
				if (n === i) {
					if (t.delegate = null, "throw" === t.method) {
						if (e.iterator.return && (t.method = "return", t.arg = i, T(e, t), "throw" === t.method)) return g;
						t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
					}
					return g
				}
				var r = P(n, e.iterator, t.arg);
				if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, g;
				var a = r.arg;
				return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = i), t.delegate = null, g) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, g)
			}

			function I(e) {
				var t = {
					tryLoc: e[0]
				};
				1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
			}

			function x(e) {
				var t = e.completion || {};
				t.type = "normal", delete t.arg, e.completion = t
			}

			function B(e) {
				this.tryEntries = [{
					tryLoc: "root"
				}], e.forEach(I, this), this.reset(!0)
			}

			function M(e) {
				if (e) {
					var t = e[s];
					if (t) return t.call(e);
					if ("function" == typeof e.next) return e;
					if (!isNaN(e.length)) {
						var n = -1,
							r = function t() {
								for (; ++n < e.length;)
									if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
								return t.value = i, t.done = !0, t
							};
						return r.next = r
					}
				}
				return {
					next: N
				}
			}

			function N() {
				return {
					value: i,
					done: !0
				}
			}
		}(function() {
			return this
		}() || Function("return this")())
	}).call(this, n(5)(e))
}, function(e, t, n) {
	"use strict";
	e.exports = function(e) {
		return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
			enumerable: !0,
			get: function() {
				return e.l
			}
		}), Object.defineProperty(e, "id", {
			enumerable: !0,
			get: function() {
				return e.i
			}
		}), e.webpackPolyfill = 1), e
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.moveToEndOfArray = t.waitOnEventOrTimeout = t.WaitOnType = t.animationStarted = t.normalizeWheelEventDelta = t.binarySearchFirstItem = t.watchScroll = t.scrollIntoView = t.getOutputScale = t.approximateFraction = t.getPageSizeInches = t.roundToDivide = t.getVisibleElements = t.backtrackBeforeAllVisibleElements = t.parseQueryString = t.noContextMenuHandler = t.getPDFFileNameFromURL = t.ProgressBar = t.EventBus = t.NullL10n = t.TextLayerMode = t.RendererType = t.PresentationModeState = t.isPortraitOrientation = t.isValidRotation = t.VERTICAL_PADDING = t.SCROLLBAR_PADDING = t.MAX_AUTO_SCALE = t.UNKNOWN_SCALE = t.MAX_SCALE = t.MIN_SCALE = t.DEFAULT_SCALE = t.DEFAULT_SCALE_VALUE = t.CSS_UNITS = void 0;
	var i, r = n(2),
		a = (i = r) && i.__esModule ? i : {
			default: i
		},
		o = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		u = function() {
			return function(e, t) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return function(e, t) {
					var n = [],
						i = !0,
						r = !1,
						a = void 0;
					try {
						for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
					} catch (e) {
						r = !0, a = e
					} finally {
						try {
							!i && s.return && s.return()
						} finally {
							if (r) throw a
						}
					}
					return n
				}(e, t);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}();

	function l(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function c(e) {
		return function() {
			var t = e.apply(this, arguments);
			return new Promise(function(e, n) {
				return function i(r, a) {
					try {
						var o = t[r](a),
							s = o.value
					} catch (e) {
						return void n(e)
					}
					if (!o.done) return Promise.resolve(s).then(function(e) {
						i("next", e)
					}, function(e) {
						i("throw", e)
					});
					e(s)
				}("next")
			})
		}
	}

	function d(e, t) {
		return t ? e.replace(/\{\{\s*(\w+)\s*\}\}/g, function(e, n) {
			return n in t ? t[n] : "{{" + n + "}}"
		}) : e
	}
	var h = {
		getLanguage: function() {
			var e = c(a.default.mark(function e() {
				return a.default.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.abrupt("return", "en-us");
						case 1:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function() {
				return e.apply(this, arguments)
			}
		}(),
		getDirection: function() {
			var e = c(a.default.mark(function e() {
				return a.default.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.abrupt("return", "ltr");
						case 1:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function() {
				return e.apply(this, arguments)
			}
		}(),
		get: function() {
			var e = c(a.default.mark(function e(t, n, i) {
				return a.default.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.abrupt("return", d(i, n));
						case 1:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t, n, i) {
				return e.apply(this, arguments)
			}
		}(),
		translate: function() {
			var e = c(a.default.mark(function e(t) {
				return a.default.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}()
	};

	function f(e, t) {
		var n = 0,
			i = e.length - 1;
		if (0 === e.length || !t(e[i])) return e.length;
		if (t(e[n])) return n;
		for (; n < i;) {
			var r = n + i >> 1;
			t(e[r]) ? i = r : n = r + 1
		}
		return n
	}

	function p(e, t, n) {
		if (e < 2) return e;
		var i = t[e].div,
			r = i.offsetTop + i.clientTop;
		r >= n && (r = (i = t[e - 1].div).offsetTop + i.clientTop);
		for (var a = e - 2; a >= 0 && !((i = t[a].div).offsetTop + i.clientTop + i.clientHeight <= r); --a) e = a;
		return e
	}
	var v = {
		EVENT: "event",
		TIMEOUT: "timeout"
	};
	var g = new Promise(function(e) {
			window.requestAnimationFrame(e)
		}),
		m = function() {
			function e() {
				var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).dispatchToDOM,
					n = void 0 !== t && t;
				l(this, e), this._listeners = Object.create(null), this._dispatchToDOM = !0 === n
			}
			return o(e, [{
				key: "on",
				value: function(e, t) {
					var n = this._listeners[e];
					n || (n = [], this._listeners[e] = n), n.push(t)
				}
			}, {
				key: "off",
				value: function(e, t) {
					var n = this._listeners[e],
						i = void 0;
					!n || (i = n.indexOf(t)) < 0 || n.splice(i, 1)
				}
			}, {
				key: "dispatch",
				value: function(e) {
					var t = this._listeners[e];
					if (t && 0 !== t.length) {
						var n = Array.prototype.slice.call(arguments, 1);
						t.slice(0).forEach(function(e) {
							e.apply(null, n)
						}), this._dispatchToDOM && this._dispatchDOMEvent(e, n)
					} else if (this._dispatchToDOM) {
						var i = Array.prototype.slice.call(arguments, 1);
						this._dispatchDOMEvent(e, i)
					}
				}
			}, {
				key: "_dispatchDOMEvent",
				value: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
					if (this._dispatchToDOM) {
						var n = Object.create(null);
						if (t && t.length > 0) {
							var i = t[0];
							for (var r in i) {
								var a = i[r];
								if ("source" !== r) n[r] = a;
								else if (a === window || a === document) return
							}
						}
						var o = document.createEvent("CustomEvent");
						o.initCustomEvent(e, !0, !0, n), document.dispatchEvent(o)
					}
				}
			}]), e
		}();
	var w = function() {
		function e(t) {
			var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				i = n.height,
				r = n.width,
				a = n.units;
			l(this, e), this.visible = !0, this.div = document.querySelector(t + " .progress"), this.bar = this.div.parentNode, this.height = i || 100, this.width = r || 100, this.units = a || "%", this.div.style.height = this.height + this.units, this.percent = 0
		}
		return o(e, [{
			key: "_updateBar",
			value: function() {
				if (this._indeterminate) return this.div.classList.add("indeterminate"), void(this.div.style.width = this.width + this.units);
				this.div.classList.remove("indeterminate");
				var e = this.width * this._percent / 100;
				this.div.style.width = e + this.units
			}
		}, {
			key: "setWidth",
			value: function(e) {
				if (e) {
					var t = e.parentNode.offsetWidth - e.offsetWidth;
					t > 0 && this.bar.setAttribute("style", "width: calc(100% - " + t + "px);")
				}
			}
		}, {
			key: "hide",
			value: function() {
				this.visible && (this.visible = !1, this.bar.classList.add("hidden"), document.body.classList.remove("loadingInProgress"))
			}
		}, {
			key: "show",
			value: function() {
				this.visible || (this.visible = !0, document.body.classList.add("loadingInProgress"), this.bar.classList.remove("hidden"))
			}
		}, {
			key: "percent",
			get: function() {
				return this._percent
			},
			set: function(e) {
				var t, n, i;
				this._indeterminate = isNaN(e), this._percent = (t = e, n = 0, i = 100, Math.min(Math.max(t, n), i)), this._updateBar()
			}
		}]), e
	}();
	t.CSS_UNITS = 96 / 72, t.DEFAULT_SCALE_VALUE = "page-width", t.DEFAULT_SCALE = 1, t.MIN_SCALE = .1, t.MAX_SCALE = 10, t.UNKNOWN_SCALE = 0, t.MAX_AUTO_SCALE = 1.25, t.SCROLLBAR_PADDING = 40, t.VERTICAL_PADDING = 5, t.isValidRotation = function(e) {
		return Number.isInteger(e) && e % 90 == 0
	}, t.isPortraitOrientation = function(e) {
		return e.width <= e.height
	}, t.PresentationModeState = {
		UNKNOWN: 0,
		NORMAL: 1,
		CHANGING: 2,
		FULLSCREEN: 3
	}, t.RendererType = {
		CANVAS: "canvas",
		SVG: "svg"
	}, t.TextLayerMode = {
		DISABLE: 0,
		ENABLE: 1,
		ENABLE_ENHANCE: 2
	}, t.NullL10n = h, t.EventBus = m, t.ProgressBar = w, t.getPDFFileNameFromURL = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "document.pdf";
		if ("string" != typeof e) return t;
		if (function(e) {
				for (var t = 0, n = e.length; t < n && "" === e[t].trim();) t++;
				return "data:" === e.substring(t, t + 5).toLowerCase()
			}(e)) return console.warn('getPDFFileNameFromURL: ignoring "data:" URL for performance reasons.'), t;
		var n = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
			i = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(e),
			r = n.exec(i[1]) || n.exec(i[2]) || n.exec(i[3]);
		if (r && (r = r[0]).includes("%")) try {
			r = n.exec(decodeURIComponent(r))[0]
		} catch (e) {}
		return r || t
	}, t.noContextMenuHandler = function(e) {
		e.preventDefault()
	}, t.parseQueryString = function(e) {
		for (var t = e.split("&"), n = Object.create(null), i = 0, r = t.length; i < r; ++i) {
			var a = t[i].split("="),
				o = a[0].toLowerCase(),
				s = a.length > 1 ? a[1] : null;
			n[decodeURIComponent(o)] = decodeURIComponent(s)
		}
		return n
	}, t.backtrackBeforeAllVisibleElements = p, t.getVisibleElements = function(e, t) {
		var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
			r = e.scrollTop,
			a = r + e.clientHeight,
			o = e.scrollLeft,
			s = o + e.clientWidth,
			u = [],
			l = void 0,
			c = void 0,
			d = void 0,
			h = void 0,
			v = void 0,
			g = void 0,
			m = void 0,
			w = void 0,
			b = void 0,
			y = 0 === t.length ? 0 : f(t, i ? function(e) {
				var t = e.div;
				return t.offsetLeft + t.clientLeft + t.clientWidth > o
			} : function(e) {
				var t = e.div;
				return t.offsetTop + t.clientTop + t.clientHeight > r
			});
		t.length > 0 && !i && (y = p(y, t, r));
		for (var _ = i ? s : -1, P = y, S = t.length; P < S; P++) {
			if (g = (c = (l = t[P]).div).offsetLeft + c.clientLeft, d = c.offsetTop + c.clientTop, w = g + (m = c.clientWidth), v = d + (h = c.clientHeight), -1 === _) v >= a && (_ = v);
			else if ((i ? g : d) > _) break;
			v <= r || d >= a || w <= o || g >= s || (b = (h - (Math.max(0, r - d) + Math.max(0, v - a))) * (m - (Math.max(0, o - g) + Math.max(0, w - s))) * 100 / h / m | 0, u.push({
				id: l.id,
				x: g,
				y: d,
				view: l,
				percent: b
			}))
		}
		var k = u[0],
			L = u[u.length - 1];
		return n && u.sort(function(e, t) {
			var n = e.percent - t.percent;
			return Math.abs(n) > .001 ? -n : e.id - t.id
		}), {
			first: k,
			last: L,
			views: u
		}
	}, t.roundToDivide = function(e, t) {
		var n = e % t;
		return 0 === n ? e : Math.round(e - n + t)
	}, t.getPageSizeInches = function(e) {
		var t = e.view,
			n = e.userUnit,
			i = e.rotate,
			r = u(t, 4),
			a = r[0],
			o = r[1],
			s = i % 180 != 0,
			l = (r[2] - a) / 72 * n,
			c = (r[3] - o) / 72 * n;
		return {
			width: s ? c : l,
			height: s ? l : c
		}
	}, t.approximateFraction = function(e) {
		if (Math.floor(e) === e) return [e, 1];
		var t = 1 / e;
		if (t > 8) return [1, 8];
		if (Math.floor(t) === t) return [1, t];
		for (var n = e > 1 ? t : e, i = 0, r = 1, a = 1, o = 1;;) {
			var s = i + a,
				u = r + o;
			if (u > 8) break;
			n <= s / u ? (a = s, o = u) : (i = s, r = u)
		}
		return n - i / r < a / o - n ? n === e ? [i, r] : [r, i] : n === e ? [a, o] : [o, a]
	}, t.getOutputScale = function(e) {
		var t = (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1);
		return {
			sx: t,
			sy: t,
			scaled: 1 !== t
		}
	}, t.scrollIntoView = function(e, t) {
		var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			i = e.offsetParent;
		if (i) {
			for (var r = e.offsetTop + e.clientTop, a = e.offsetLeft + e.clientLeft; i.clientHeight === i.scrollHeight && i.clientWidth === i.scrollWidth || n && "hidden" === getComputedStyle(i).overflow;)
				if (i.dataset._scaleY && (r /= i.dataset._scaleY, a /= i.dataset._scaleX), r += i.offsetTop, a += i.offsetLeft, !(i = i.offsetParent)) return;
			t && (void 0 !== t.top && (r += t.top), void 0 !== t.left && (a += t.left, i.scrollLeft = a)), i.scrollTop = r
		} else console.error("offsetParent is not set -- cannot scroll")
	}, t.watchScroll = function(e, t) {
		var n = function(n) {
				r || (r = window.requestAnimationFrame(function() {
					r = null;
					var n = e.scrollLeft,
						a = i.lastX;
					n !== a && (i.right = n > a), i.lastX = n;
					var o = e.scrollTop,
						s = i.lastY;
					o !== s && (i.down = o > s), i.lastY = o, t(i)
				}))
			},
			i = {
				right: !0,
				down: !0,
				lastX: e.scrollLeft,
				lastY: e.scrollTop,
				_eventHandler: n
			},
			r = null;
		return e.addEventListener("scroll", n, !0), i
	}, t.binarySearchFirstItem = f, t.normalizeWheelEventDelta = function(e) {
		var t = Math.sqrt(e.deltaX * e.deltaX + e.deltaY * e.deltaY),
			n = Math.atan2(e.deltaY, e.deltaX);
		return -.25 * Math.PI < n && n < .75 * Math.PI && (t = -t), 0 === e.deltaMode ? t /= 900 : 1 === e.deltaMode && (t /= 30), t
	}, t.animationStarted = g, t.WaitOnType = v, t.waitOnEventOrTimeout = function(e) {
		var t = e.target,
			n = e.name,
			i = e.delay,
			r = void 0 === i ? 0 : i;
		return new Promise(function(e, i) {
			if ("object" !== (void 0 === t ? "undefined" : s(t)) || !n || "string" != typeof n || !(Number.isInteger(r) && r >= 0)) throw new Error("waitOnEventOrTimeout - invalid parameters.");

			function a(i) {
				t instanceof m ? t.off(n, o) : t.removeEventListener(n, o), l && clearTimeout(l), e(i)
			}
			var o = a.bind(null, v.EVENT);
			t instanceof m ? t.on(n, o) : t.addEventListener(n, o);
			var u = a.bind(null, v.TIMEOUT),
				l = setTimeout(u, r)
		})
	}, t.moveToEndOfArray = function(e, t) {
		for (var n = [], i = e.length, r = 0, a = 0; a < i; ++a) t(e[a]) ? n.push(e[a]) : (e[r] = e[a], ++r);
		for (var o = 0; r < i; ++o, ++r) e[r] = n[o]
	}
}, function(e, t, n) {
	"use strict";
	var i = void 0;
	i = "undefined" != typeof window && window["pdfjs-dist/build/pdf"] ? window["pdfjs-dist/build/pdf"] : require("../build/pdf.js"), e.exports = i
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFCursorTools = t.CursorTool = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(9);
	var a = {
			SELECT: 0,
			HAND: 1,
			ZOOM: 2
		},
		o = function() {
			function e(t) {
				var n = this,
					i = t.container,
					o = t.eventBus,
					s = t.cursorToolOnLoad,
					u = void 0 === s ? a.SELECT : s;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.container = i, this.eventBus = o, this.active = a.SELECT, this.activeBeforePresentationMode = null, this.handTool = new r.GrabToPan({
					element: this.container
				}), this._addEventListeners(), Promise.resolve().then(function() {
					n.switchTool(u)
				})
			}
			return i(e, [{
				key: "switchTool",
				value: function(e) {
					var t = this;
					if (null === this.activeBeforePresentationMode && e !== this.active) {
						var n = function() {
							switch (t.active) {
								case a.SELECT:
									break;
								case a.HAND:
									t.handTool.deactivate();
									break;
								case a.ZOOM:
							}
						};
						switch (e) {
							case a.SELECT:
								n();
								break;
							case a.HAND:
								n(), this.handTool.activate();
								break;
							case a.ZOOM:
							default:
								return void console.error('switchTool: "' + e + '" is an unsupported value.')
						}
						this.active = e, this._dispatchEvent()
					}
				}
			}, {
				key: "_dispatchEvent",
				value: function() {
					this.eventBus.dispatch("cursortoolchanged", {
						source: this,
						tool: this.active
					})
				}
			}, {
				key: "_addEventListeners",
				value: function() {
					var e = this;
					this.eventBus.on("switchcursortool", function(t) {
						e.switchTool(t.tool)
					}), this.eventBus.on("presentationmodechanged", function(t) {
						if (!t.switchInProgress) {
							var n = void 0;
							t.active ? (n = e.active, e.switchTool(a.SELECT), e.activeBeforePresentationMode = n) : (n = e.activeBeforePresentationMode, e.activeBeforePresentationMode = null, e.switchTool(n))
						}
					})
				}
			}, {
				key: "activeTool",
				get: function() {
					return this.active
				}
			}]), e
		}();
	t.CursorTool = a, t.PDFCursorTools = o
}, function(e, t, n) {
	"use strict";

	function i(e) {
		this.element = e.element, this.document = e.element.ownerDocument, "function" == typeof e.ignoreTarget && (this.ignoreTarget = e.ignoreTarget), this.onActiveChanged = e.onActiveChanged, this.activate = this.activate.bind(this), this.deactivate = this.deactivate.bind(this), this.toggle = this.toggle.bind(this), this._onmousedown = this._onmousedown.bind(this), this._onmousemove = this._onmousemove.bind(this), this._endPan = this._endPan.bind(this), (this.overlay = document.createElement("div")).className = "grab-to-pan-grabbing"
	}
	var r;
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), i.prototype = {
		CSS_CLASS_GRAB: "grab-to-pan-grab",
		activate: function() {
			this.active || (this.active = !0, this.element.addEventListener("mousedown", this._onmousedown, !0), this.element.classList.add(this.CSS_CLASS_GRAB), this.onActiveChanged && this.onActiveChanged(!0))
		},
		deactivate: function() {
			this.active && (this.active = !1, this.element.removeEventListener("mousedown", this._onmousedown, !0), this._endPan(), this.element.classList.remove(this.CSS_CLASS_GRAB), this.onActiveChanged && this.onActiveChanged(!1))
		},
		toggle: function() {
			this.active ? this.deactivate() : this.activate()
		},
		ignoreTarget: function(e) {
			return e[r]("a[href], a[href] *, input, textarea, button, button *, select, option")
		},
		_onmousedown: function(e) {
			if (0 === e.button && !this.ignoreTarget(e.target)) {
				if (e.originalTarget) try {
					e.originalTarget.tagName
				} catch (e) {
					return
				}
				this.scrollLeftStart = this.element.scrollLeft, this.scrollTopStart = this.element.scrollTop, this.clientXStart = e.clientX, this.clientYStart = e.clientY, this.document.addEventListener("mousemove", this._onmousemove, !0), this.document.addEventListener("mouseup", this._endPan, !0), this.element.addEventListener("scroll", this._endPan, !0), e.preventDefault(), e.stopPropagation();
				var t = document.activeElement;
				t && !t.contains(e.target) && t.blur()
			}
		},
		_onmousemove: function(e) {
			if (this.element.removeEventListener("scroll", this._endPan, !0), function(e) {
					if ("buttons" in e && a) return !(1 & e.buttons);
					if (s || u) return 0 === e.which
				}(e)) this._endPan();
			else {
				var t = e.clientX - this.clientXStart,
					n = e.clientY - this.clientYStart,
					i = this.scrollTopStart - n,
					r = this.scrollLeftStart - t;
				this.element.scrollTo ? this.element.scrollTo({
					top: i,
					left: r,
					behavior: "instant"
				}) : (this.element.scrollTop = i, this.element.scrollLeft = r), this.overlay.parentNode || document.body.appendChild(this.overlay)
			}
		},
		_endPan: function() {
			this.element.removeEventListener("scroll", this._endPan, !0), this.document.removeEventListener("mousemove", this._onmousemove, !0), this.document.removeEventListener("mouseup", this._endPan, !0), this.overlay.remove()
		}
	}, ["webkitM", "mozM", "msM", "oM", "m"].some(function(e) {
		var t = e + "atches";
		return t in document.documentElement && (r = t), (t += "Selector") in document.documentElement && (r = t), r
	});
	var a = !document.documentMode || document.documentMode > 9,
		o = window.chrome,
		s = o && (o.webstore || o.app),
		u = /Apple/.test(navigator.vendor) && /Version\/([6-9]\d*|[1-5]\d+)/.test(navigator.userAgent);
	t.GrabToPan = i
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}();
	var r = {
			INITIAL: 0,
			RUNNING: 1,
			PAUSED: 2,
			FINISHED: 3
		},
		a = function() {
			function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.pdfViewer = null, this.pdfThumbnailViewer = null, this.onIdle = null, this.highestPriorityPage = null, this.idleTimeout = null, this.printing = !1, this.isThumbnailViewEnabled = !1
			}
			return i(e, [{
				key: "setViewer",
				value: function(e) {
					this.pdfViewer = e
				}
			}, {
				key: "setThumbnailViewer",
				value: function(e) {
					this.pdfThumbnailViewer = e
				}
			}, {
				key: "isHighestPriority",
				value: function(e) {
					return this.highestPriorityPage === e.renderingId
				}
			}, {
				key: "renderHighestPriority",
				value: function(e) {
					this.idleTimeout && (clearTimeout(this.idleTimeout), this.idleTimeout = null), this.pdfViewer.forceRendering(e) || this.pdfThumbnailViewer && this.isThumbnailViewEnabled && this.pdfThumbnailViewer.forceRendering() || this.printing || this.onIdle && (this.idleTimeout = setTimeout(this.onIdle.bind(this), 3e4))
				}
			}, {
				key: "getHighestPriority",
				value: function(e, t, n) {
					var i = e.views,
						r = i.length;
					if (0 === r) return !1;
					for (var a = 0; a < r; ++a) {
						var o = i[a].view;
						if (!this.isViewFinished(o)) return o
					}
					if (n) {
						var s = e.last.id;
						if (t[s] && !this.isViewFinished(t[s])) return t[s]
					} else {
						var u = e.first.id - 2;
						if (t[u] && !this.isViewFinished(t[u])) return t[u]
					}
					return null
				}
			}, {
				key: "isViewFinished",
				value: function(e) {
					return e.renderingState === r.FINISHED
				}
			}, {
				key: "renderView",
				value: function(e) {
					var t = this;
					switch (e.renderingState) {
						case r.FINISHED:
							return !1;
						case r.PAUSED:
							this.highestPriorityPage = e.renderingId, e.resume();
							break;
						case r.RUNNING:
							this.highestPriorityPage = e.renderingId;
							break;
						case r.INITIAL:
							this.highestPriorityPage = e.renderingId;
							var n = function() {
								t.renderHighestPriority()
							};
							e.draw().then(n, n)
					}
					return !0
				}
			}]), e
		}();
	t.RenderingStates = r, t.PDFRenderingQueue = a
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFSidebar = t.SidebarView = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(6),
		a = n(10);
	var o = {
			NONE: 0,
			THUMBS: 1,
			OUTLINE: 2,
			ATTACHMENTS: 3
		},
		s = function() {
			function e(t, n) {
				var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.NullL10n;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.isOpen = !1, this.active = o.THUMBS, this.isInitialViewSet = !1, this.onToggled = null, this.pdfViewer = t.pdfViewer, this.pdfThumbnailViewer = t.pdfThumbnailViewer, this.outerContainer = t.outerContainer, this.viewerContainer = t.viewerContainer, this.toggleButton = t.toggleButton, this.thumbnailButton = t.thumbnailButton, this.outlineButton = t.outlineButton, this.attachmentsButton = t.attachmentsButton, this.thumbnailView = t.thumbnailView, this.outlineView = t.outlineView, this.attachmentsView = t.attachmentsView, this.disableNotification = t.disableNotification || !1, this.eventBus = n, this.l10n = i, this._addEventListeners()
			}
			return i(e, [{
				key: "reset",
				value: function() {
					this.isInitialViewSet = !1, this._hideUINotification(null), this.switchView(o.THUMBS), this.outlineButton.disabled = !1, this.attachmentsButton.disabled = !1
				}
			}, {
				key: "setInitialView",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.NONE;
					if (!this.isInitialViewSet)
						if (this.isInitialViewSet = !0, this.isOpen && e === o.NONE) this._dispatchEvent();
						else {
							var t = e === this.visibleView;
							this.switchView(e, !0), t && this._dispatchEvent()
						}
				}
			}, {
				key: "switchView",
				value: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					if (e !== o.NONE) {
						var n = e !== this.active,
							i = !1;
						switch (e) {
							case o.THUMBS:
								this.thumbnailButton.classList.add("toggled"), this.outlineButton.classList.remove("toggled"), this.attachmentsButton.classList.remove("toggled"), this.thumbnailView.classList.remove("hidden"), this.outlineView.classList.add("hidden"), this.attachmentsView.classList.add("hidden"), this.isOpen && n && (this._updateThumbnailViewer(), i = !0);
								break;
							case o.OUTLINE:
								if (this.outlineButton.disabled) return;
								this.thumbnailButton.classList.remove("toggled"), this.outlineButton.classList.add("toggled"), this.attachmentsButton.classList.remove("toggled"), this.thumbnailView.classList.add("hidden"), this.outlineView.classList.remove("hidden"), this.attachmentsView.classList.add("hidden");
								break;
							case o.ATTACHMENTS:
								if (this.attachmentsButton.disabled) return;
								this.thumbnailButton.classList.remove("toggled"), this.outlineButton.classList.remove("toggled"), this.attachmentsButton.classList.add("toggled"), this.thumbnailView.classList.add("hidden"), this.outlineView.classList.add("hidden"), this.attachmentsView.classList.remove("hidden");
								break;
							default:
								return void console.error('PDFSidebar_switchView: "' + e + '" is an unsupported value.')
						}
						this.active = 0 | e, !t || this.isOpen ? (i && this._forceRendering(), n && this._dispatchEvent(), this._hideUINotification(this.active)) : this.open()
					} else this.close()
				}
			}, {
				key: "open",
				value: function() {
					this.isOpen || (this.isOpen = !0, this.toggleButton.classList.add("toggled"), this.outerContainer.classList.add("sidebarMoving"), this.outerContainer.classList.add("sidebarOpen"), this.active === o.THUMBS && this._updateThumbnailViewer(), this._forceRendering(), this._dispatchEvent(), this._hideUINotification(this.active))
				}
			}, {
				key: "close",
				value: function() {
					this.isOpen && (this.isOpen = !1, this.toggleButton.classList.remove("toggled"), this.outerContainer.classList.add("sidebarMoving"), this.outerContainer.classList.remove("sidebarOpen"), this._forceRendering(), this._dispatchEvent())
				}
			}, {
				key: "toggle",
				value: function() {
					this.isOpen ? this.close() : this.open()
				}
			}, {
				key: "_dispatchEvent",
				value: function() {
					this.eventBus.dispatch("sidebarviewchanged", {
						source: this,
						view: this.visibleView
					})
				}
			}, {
				key: "_forceRendering",
				value: function() {
					this.onToggled ? this.onToggled() : (this.pdfViewer.forceRendering(), this.pdfThumbnailViewer.forceRendering())
				}
			}, {
				key: "_updateThumbnailViewer",
				value: function() {
					for (var e = this.pdfViewer, t = this.pdfThumbnailViewer, n = e.pagesCount, i = 0; i < n; i++) {
						var r = e.getPageView(i);
						if (r && r.renderingState === a.RenderingStates.FINISHED) t.getThumbnail(i).setImage(r)
					}
					t.scrollThumbnailIntoView(e.currentPageNumber)
				}
			}, {
				key: "_showUINotification",
				value: function(e) {
					var t = this;
					if (!this.disableNotification) {
						if (this.l10n.get("toggle_sidebar_notification.title", null, "Toggle Sidebar (document contains outline/attachments)").then(function(e) {
								t.toggleButton.title = e
							}), this.isOpen) {
							if (e === this.active) return
						} else this.toggleButton.classList.add("pdfSidebarNotification");
						switch (e) {
							case o.OUTLINE:
								this.outlineButton.classList.add("pdfSidebarNotification");
								break;
							case o.ATTACHMENTS:
								this.attachmentsButton.classList.add("pdfSidebarNotification")
						}
					}
				}
			}, {
				key: "_hideUINotification",
				value: function(e) {
					var t = this;
					if (!this.disableNotification) {
						var n = function(e) {
							switch (e) {
								case o.OUTLINE:
									t.outlineButton.classList.remove("pdfSidebarNotification");
									break;
								case o.ATTACHMENTS:
									t.attachmentsButton.classList.remove("pdfSidebarNotification")
							}
						};
						if (this.isOpen || null === e)
							if (this.toggleButton.classList.remove("pdfSidebarNotification"), null === e) {
								for (e in o) n(o[e]);
								this.l10n.get("toggle_sidebar.title", null, "Toggle Sidebar").then(function(e) {
									t.toggleButton.title = e
								})
							} else n(e)
					}
				}
			}, {
				key: "_addEventListeners",
				value: function() {
					var e = this;
					this.viewerContainer.addEventListener("transitionend", function(t) {
						t.target === e.viewerContainer && e.outerContainer.classList.remove("sidebarMoving")
					}), this.thumbnailButton.addEventListener("click", function() {
						e.switchView(o.THUMBS)
					}), this.outlineButton.addEventListener("click", function() {
						e.switchView(o.OUTLINE)
					}), this.outlineButton.addEventListener("dblclick", function() {
						e.eventBus.dispatch("toggleoutlinetree", {
							source: e
						})
					}), this.attachmentsButton.addEventListener("click", function() {
						e.switchView(o.ATTACHMENTS)
					}), this.eventBus.on("outlineloaded", function(t) {
						var n = t.outlineCount;
						e.outlineButton.disabled = !n, n ? e._showUINotification(o.OUTLINE) : e.active === o.OUTLINE && e.switchView(o.THUMBS)
					}), this.eventBus.on("attachmentsloaded", function(t) {
						if (t.attachmentsCount) return e.attachmentsButton.disabled = !1, void e._showUINotification(o.ATTACHMENTS);
						Promise.resolve().then(function() {
							e.attachmentsView.hasChildNodes() || (e.attachmentsButton.disabled = !0, e.active === o.ATTACHMENTS && e.switchView(o.THUMBS))
						})
					}), this.eventBus.on("presentationmodechanged", function(t) {
						t.active || t.switchInProgress || !e.isThumbnailViewVisible || e._updateThumbnailViewer()
					})
				}
			}, {
				key: "visibleView",
				get: function() {
					return this.isOpen ? this.active : o.NONE
				}
			}, {
				key: "isThumbnailViewVisible",
				get: function() {
					return this.isOpen && this.active === o.THUMBS
				}
			}, {
				key: "isOutlineViewVisible",
				get: function() {
					return this.isOpen && this.active === o.OUTLINE
				}
			}, {
				key: "isAttachmentsViewVisible",
				get: function() {
					return this.isOpen && this.active === o.ATTACHMENTS
				}
			}]), e
		}();
	t.SidebarView = o, t.PDFSidebar = s
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.OptionKind = t.AppOptions = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(7),
		a = n(13);
	var o = {
			VIEWER: "viewer",
			API: "api",
			WORKER: "worker"
		},
		s = {
			cursorToolOnLoad: {
				value: 0,
				kind: o.VIEWER
			},
			defaultUrl: {
				value: "compressed.tracemonkey-pldi-09.pdf",
				kind: o.VIEWER
			},
			defaultZoomValue: {
				value: "",
				kind: o.VIEWER
			},
			disableHistory: {
				value: !1,
				kind: o.VIEWER
			},
			disablePageLabels: {
				value: !1,
				kind: o.VIEWER
			},
			disablePageMode: {
				value: !1,
				kind: o.VIEWER
			},
			enablePrintAutoRotate: {
				value: !1,
				kind: o.VIEWER
			},
			enableWebGL: {
				value: !1,
				kind: o.VIEWER
			},
			eventBusDispatchToDOM: {
				value: !1,
				kind: o.VIEWER
			},
			externalLinkRel: {
				value: "noopener noreferrer nofollow",
				kind: o.VIEWER
			},
			externalLinkTarget: {
				value: 0,
				kind: o.VIEWER
			},
			imageResourcesPath: {
				value: "./images/",
				kind: o.VIEWER
			},
			maxCanvasPixels: {
				value: a.viewerCompatibilityParams.maxCanvasPixels || 16777216,
				kind: o.VIEWER
			},
			pdfBugEnabled: {
				value: !1,
				kind: o.VIEWER
			},
			renderer: {
				value: "canvas",
				kind: o.VIEWER
			},
			renderInteractiveForms: {
				value: !1,
				kind: o.VIEWER
			},
			showPreviousViewOnLoad: {
				value: !0,
				kind: o.VIEWER
			},
			sidebarViewOnLoad: {
				value: 0,
				kind: o.VIEWER
			},
			scrollModeOnLoad: {
				value: 0,
				kind: o.VIEWER
			},
			spreadModeOnLoad: {
				value: 0,
				kind: o.VIEWER
			},
			textLayerMode: {
				value: 1,
				kind: o.VIEWER
			},
			useOnlyCssZoom: {
				value: !1,
				kind: o.VIEWER
			},
			cMapPacked: {
				value: !0,
				kind: o.API
			},
			cMapUrl: {
				value: "../web/cmaps/",
				kind: o.API
			},
			disableAutoFetch: {
				value: !1,
				kind: o.API
			},
			disableCreateObjectURL: {
				value: r.apiCompatibilityParams.disableCreateObjectURL || !1,
				kind: o.API
			},
			disableFontFace: {
				value: !1,
				kind: o.API
			},
			disableRange: {
				value: !1,
				kind: o.API
			},
			disableStream: {
				value: !1,
				kind: o.API
			},
			isEvalSupported: {
				value: !0,
				kind: o.API
			},
			maxImageSize: {
				value: -1,
				kind: o.API
			},
			pdfBug: {
				value: !1,
				kind: o.API
			},
			postMessageTransfers: {
				value: !0,
				kind: o.API
			},
			verbosity: {
				value: 1,
				kind: o.API
			},
			workerPort: {
				value: null,
				kind: o.WORKER
			},
			workerSrc: {
				value: "../build/pdf.worker.js",
				kind: o.WORKER
			}
		};
	s.locale = {
		value: "undefined" != typeof navigator ? navigator.language : "en-US",
		kind: o.VIEWER
	};
	var u = Object.create(null),
		l = function() {
			function e() {
				throw function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), new Error("Cannot initialize AppOptions.")
			}
			return i(e, null, [{
				key: "get",
				value: function(e) {
					var t = s[e],
						n = u[e];
					return void 0 !== n ? n : void 0 !== t ? t.value : void 0
				}
			}, {
				key: "getAll",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = Object.create(null);
					for (var n in s) {
						var i = s[n],
							r = u[n];
						e && i.kind !== e || (t[n] = void 0 !== r ? r : i.value)
					}
					return t
				}
			}, {
				key: "set",
				value: function(e, t) {
					u[e] = t
				}
			}, {
				key: "remove",
				value: function(e) {
					delete u[e]
				}
			}]), e
		}();
	t.AppOptions = l, t.OptionKind = o
}, function(e, t, n) {
	"use strict";
	var i = Object.create(null),
		r = "undefined" != typeof navigator && navigator.userAgent || "",
		a = /Android/.test(r);
	(/\b(iPad|iPhone|iPod)(?=;)/.test(r) || a) && (i.maxCanvasPixels = 5242880), t.viewerCompatibilityParams = Object.freeze(i)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getGlobalEventBus = t.attachDOMEventsToEventBus = void 0;
	var i = n(6);

	function r(e) {
		e.on("documentload", function() {
			var e = document.createEvent("CustomEvent");
			e.initCustomEvent("documentload", !0, !0, {}), window.dispatchEvent(e)
		}), e.on("pagerendered", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("pagerendered", !0, !0, {
				pageNumber: e.pageNumber,
				cssTransform: e.cssTransform
			}), e.source.div.dispatchEvent(t)
		}), e.on("textlayerrendered", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("textlayerrendered", !0, !0, {
				pageNumber: e.pageNumber
			}), e.source.textLayerDiv.dispatchEvent(t)
		}), e.on("pagechange", function(e) {
			var t = document.createEvent("UIEvents");
			t.initUIEvent("pagechange", !0, !0, window, 0), t.pageNumber = e.pageNumber, e.source.container.dispatchEvent(t)
		}), e.on("pagesinit", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("pagesinit", !0, !0, null), e.source.container.dispatchEvent(t)
		}), e.on("pagesloaded", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("pagesloaded", !0, !0, {
				pagesCount: e.pagesCount
			}), e.source.container.dispatchEvent(t)
		}), e.on("scalechange", function(e) {
			var t = document.createEvent("UIEvents");
			t.initUIEvent("scalechange", !0, !0, window, 0), t.scale = e.scale, t.presetValue = e.presetValue, e.source.container.dispatchEvent(t)
		}), e.on("updateviewarea", function(e) {
			var t = document.createEvent("UIEvents");
			t.initUIEvent("updateviewarea", !0, !0, window, 0), t.location = e.location, e.source.container.dispatchEvent(t)
		}), e.on("find", function(e) {
			if (e.source !== window) {
				var t = document.createEvent("CustomEvent");
				t.initCustomEvent("find" + e.type, !0, !0, {
					query: e.query,
					phraseSearch: e.phraseSearch,
					caseSensitive: e.caseSensitive,
					highlightAll: e.highlightAll,
					findPrevious: e.findPrevious
				}), window.dispatchEvent(t)
			}
		}), e.on("attachmentsloaded", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("attachmentsloaded", !0, !0, {
				attachmentsCount: e.attachmentsCount
			}), e.source.container.dispatchEvent(t)
		}), e.on("sidebarviewchanged", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("sidebarviewchanged", !0, !0, {
				view: e.view
			}), e.source.outerContainer.dispatchEvent(t)
		}), e.on("pagemode", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("pagemode", !0, !0, {
				mode: e.mode
			}), e.source.pdfViewer.container.dispatchEvent(t)
		}), e.on("namedaction", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("namedaction", !0, !0, {
				action: e.action
			}), e.source.pdfViewer.container.dispatchEvent(t)
		}), e.on("presentationmodechanged", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("presentationmodechanged", !0, !0, {
				active: e.active,
				switchInProgress: e.switchInProgress
			}), window.dispatchEvent(t)
		}), e.on("outlineloaded", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("outlineloaded", !0, !0, {
				outlineCount: e.outlineCount
			}), e.source.container.dispatchEvent(t)
		})
	}
	var a = null;
	t.attachDOMEventsToEventBus = r, t.getGlobalEventBus = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
		return a || (a = new i.EventBus({
			dispatchToDOM: e
		}), e || r(a)), a
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.OverlayManager = void 0;
	var i, r = n(2),
		a = (i = r) && i.__esModule ? i : {
			default: i
		},
		o = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}();

	function s(e) {
		return function() {
			var t = e.apply(this, arguments);
			return new Promise(function(e, n) {
				return function i(r, a) {
					try {
						var o = t[r](a),
							s = o.value
					} catch (e) {
						return void n(e)
					}
					if (!o.done) return Promise.resolve(s).then(function(e) {
						i("next", e)
					}, function(e) {
						i("throw", e)
					});
					e(s)
				}("next")
			})
		}
	}
	var u = function() {
		function e() {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this._overlays = {}, this._active = null, this._keyDownBound = this._keyDown.bind(this)
		}
		return o(e, [{
			key: "register",
			value: function() {
				var e = s(a.default.mark(function e(t, n) {
					var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
						o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (i = void 0, t && n && (i = n.parentNode)) {
									e.next = 5;
									break
								}
								throw new Error("Not enough parameters.");
							case 5:
								if (!this._overlays[t]) {
									e.next = 7;
									break
								}
								throw new Error("The overlay is already registered.");
							case 7:
								this._overlays[t] = {
									element: n,
									container: i,
									callerCloseMethod: r,
									canForceClose: o
								};
							case 8:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function(t, n) {
					return e.apply(this, arguments)
				}
			}()
		}, {
			key: "unregister",
			value: function() {
				var e = s(a.default.mark(function e(t) {
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (this._overlays[t]) {
									e.next = 4;
									break
								}
								throw new Error("The overlay does not exist.");
							case 4:
								if (this._active !== t) {
									e.next = 6;
									break
								}
								throw new Error("The overlay cannot be removed while it is active.");
							case 6:
								delete this._overlays[t];
							case 7:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function(t) {
					return e.apply(this, arguments)
				}
			}()
		}, {
			key: "open",
			value: function() {
				var e = s(a.default.mark(function e(t) {
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (this._overlays[t]) {
									e.next = 4;
									break
								}
								throw new Error("The overlay does not exist.");
							case 4:
								if (!this._active) {
									e.next = 14;
									break
								}
								if (!this._overlays[t].canForceClose) {
									e.next = 9;
									break
								}
								this._closeThroughCaller(), e.next = 14;
								break;
							case 9:
								if (this._active !== t) {
									e.next = 13;
									break
								}
								throw new Error("The overlay is already active.");
							case 13:
								throw new Error("Another overlay is currently active.");
							case 14:
								this._active = t, this._overlays[this._active].element.classList.remove("hidden"), this._overlays[this._active].container.classList.remove("hidden"), window.addEventListener("keydown", this._keyDownBound);
							case 18:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function(t) {
					return e.apply(this, arguments)
				}
			}()
		}, {
			key: "close",
			value: function() {
				var e = s(a.default.mark(function e(t) {
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (this._overlays[t]) {
									e.next = 4;
									break
								}
								throw new Error("The overlay does not exist.");
							case 4:
								if (this._active) {
									e.next = 8;
									break
								}
								throw new Error("The overlay is currently not active.");
							case 8:
								if (this._active === t) {
									e.next = 10;
									break
								}
								throw new Error("Another overlay is currently active.");
							case 10:
								this._overlays[this._active].container.classList.add("hidden"), this._overlays[this._active].element.classList.add("hidden"), this._active = null, window.removeEventListener("keydown", this._keyDownBound);
							case 14:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function(t) {
					return e.apply(this, arguments)
				}
			}()
		}, {
			key: "_keyDown",
			value: function(e) {
				this._active && 27 === e.keyCode && (this._closeThroughCaller(), e.preventDefault())
			}
		}, {
			key: "_closeThroughCaller",
			value: function() {
				this._overlays[this._active].callerCloseMethod && this._overlays[this._active].callerCloseMethod(), this._active && this.close(this._active)
			}
		}, {
			key: "active",
			get: function() {
				return this._active
			}
		}]), e
	}();
	t.OverlayManager = u
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PasswordPrompt = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(6),
		a = n(7);
	var o = function() {
		function e(t, n) {
			var i = this,
				a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.NullL10n;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.overlayName = t.overlayName, this.container = t.container, this.label = t.label, this.input = t.input, this.submitButton = t.submitButton, this.cancelButton = t.cancelButton, this.overlayManager = n, this.l10n = a, this.updateCallback = null, this.reason = null, this.submitButton.addEventListener("click", this.verify.bind(this)), this.cancelButton.addEventListener("click", this.close.bind(this)), this.input.addEventListener("keydown", function(e) {
				13 === e.keyCode && i.verify()
			}), this.overlayManager.register(this.overlayName, this.container, this.close.bind(this), !0)
		}
		return i(e, [{
			key: "open",
			value: function() {
				var e = this;
				this.overlayManager.open(this.overlayName).then(function() {
					e.input.focus();
					(e.reason === a.PasswordResponses.INCORRECT_PASSWORD ? e.l10n.get("password_invalid", null, "Invalid password. Please try again.") : e.l10n.get("password_label", null, "Enter the password to open this PDF file.")).then(function(t) {
						e.label.textContent = t
					})
				})
			}
		}, {
			key: "close",
			value: function() {
				var e = this;
				this.overlayManager.close(this.overlayName).then(function() {
					e.input.value = ""
				})
			}
		}, {
			key: "verify",
			value: function() {
				var e = this.input.value;
				if (e && e.length > 0) return this.close(), this.updateCallback(e)
			}
		}, {
			key: "setUpdateCallback",
			value: function(e, t) {
				this.updateCallback = e, this.reason = t
			}
		}]), e
	}();
	t.PasswordPrompt = o
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFAttachmentViewer = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(7);
	var a = function() {
		function e(t) {
			var n = t.container,
				i = t.eventBus,
				r = t.downloadManager;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.container = n, this.eventBus = i, this.downloadManager = r, this.reset(), this.eventBus.on("fileattachmentannotation", this._appendAttachment.bind(this))
		}
		return i(e, [{
			key: "reset",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				this.attachments = null, this.container.textContent = "", e || (this._renderedCapability = (0, r.createPromiseCapability)())
			}
		}, {
			key: "_dispatchEvent",
			value: function(e) {
				this._renderedCapability.resolve(), this.eventBus.dispatch("attachmentsloaded", {
					source: this,
					attachmentsCount: e
				})
			}
		}, {
			key: "_bindPdfLink",
			value: function(e, t, n) {
				if (this.downloadManager.disableCreateObjectURL) throw new Error('bindPdfLink: Unsupported "disableCreateObjectURL" value.');
				var i = void 0;
				e.onclick = function() {
					i || (i = (0, r.createObjectURL)(t, "application/pdf"));
					var e;
					return e = "?file=" + encodeURIComponent(i + "#" + n), window.open(e), !1
				}
			}
		}, {
			key: "_bindLink",
			value: function(e, t, n) {
				var i = this;
				e.onclick = function() {
					return i.downloadManager.downloadData(t, n, ""), !1
				}
			}
		}, {
			key: "render",
			value: function(e) {
				var t = e.attachments,
					n = e.keepRenderedCapability,
					i = void 0 !== n && n,
					a = 0;
				if (this.attachments && this.reset(!0 === i), this.attachments = t || null, t) {
					var o = Object.keys(t).sort(function(e, t) {
						return e.toLowerCase().localeCompare(t.toLowerCase())
					});
					a = o.length;
					for (var s = 0; s < a; s++) {
						var u = t[o[s]],
							l = (0, r.removeNullCharacters)((0, r.getFilenameFromUrl)(u.filename)),
							c = document.createElement("div");
						c.className = "attachmentsItem";
						var d = document.createElement("button");
						d.textContent = l, /\.pdf$/i.test(l) && !this.downloadManager.disableCreateObjectURL ? this._bindPdfLink(d, u.content, l) : this._bindLink(d, u.content, l), c.appendChild(d), this.container.appendChild(c)
					}
					this._dispatchEvent(a)
				} else this._dispatchEvent(a)
			}
		}, {
			key: "_appendAttachment",
			value: function(e) {
				var t = this,
					n = e.id,
					i = e.filename,
					r = e.content;
				this._renderedCapability.promise.then(function() {
					var e = t.attachments;
					if (e) {
						for (var a in e)
							if (n === a) return
					} else e = Object.create(null);
					e[n] = {
						filename: i,
						content: r
					}, t.render({
						attachments: e,
						keepRenderedCapability: !0
					})
				})
			}
		}]), e
	}();
	t.PDFAttachmentViewer = a
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFDocumentProperties = void 0;
	var i = function() {
			return function(e, t) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return function(e, t) {
					var n = [],
						i = !0,
						r = !1,
						a = void 0;
					try {
						for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
					} catch (e) {
						r = !0, a = e
					} finally {
						try {
							!i && s.return && s.return()
						} finally {
							if (r) throw a
						}
					}
					return n
				}(e, t);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		a = n(6),
		o = n(7);
	var s = ["en-us", "en-lr", "my"],
		u = {
			"8.5x11": "Letter",
			"8.5x14": "Legal"
		},
		l = {
			"297x420": "A3",
			"210x297": "A4"
		};

	function c(e, t, n) {
		return n[(t ? e.width : e.height) + "x" + (t ? e.height : e.width)]
	}
	var d = function() {
		function e(t, n, i) {
			var r = t.overlayName,
				o = t.fields,
				u = t.container,
				l = t.closeButton,
				c = this,
				d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.NullL10n;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.overlayName = r, this.fields = o, this.container = u, this.overlayManager = n, this.l10n = d, this._reset(), l && l.addEventListener("click", this.close.bind(this)), this.overlayManager.register(this.overlayName, this.container, this.close.bind(this)), i && (i.on("pagechanging", function(e) {
				c._currentPageNumber = e.pageNumber
			}), i.on("rotationchanging", function(e) {
				c._pagesRotation = e.pagesRotation
			})), this._isNonMetricLocale = !0, d.getLanguage().then(function(e) {
				c._isNonMetricLocale = s.includes(e)
			})
		}
		return r(e, [{
			key: "open",
			value: function() {
				var e = this,
					t = function(t) {
						Object.defineProperty(e, "fieldData", {
							value: Object.freeze(t),
							writable: !1,
							enumerable: !0,
							configurable: !0
						})
					};
				Promise.all([this.overlayManager.open(this.overlayName), this._dataAvailableCapability.promise]).then(function() {
					var n = e._currentPageNumber,
						r = e._pagesRotation;
					e.fieldData && n === e.fieldData._currentPageNumber && r === e.fieldData._pagesRotation ? e._updateUI() : e.pdfDocument.getMetadata().then(function(t) {
						var i = t.info,
							o = t.metadata,
							s = t.contentDispositionFilename;
						return Promise.all([i, o, s || (0, a.getPDFFileNameFromURL)(e.url || ""), e._parseFileSize(e.maybeFileSize), e._parseDate(i.CreationDate), e._parseDate(i.ModDate), e.pdfDocument.getPage(n).then(function(t) {
							return e._parsePageSize((0, a.getPageSizeInches)(t), r)
						}), e._parseLinearization(i.IsLinearized)])
					}).then(function(a) {
						var o = i(a, 8),
							s = o[0],
							u = (o[1], o[2]),
							l = o[3],
							c = o[4],
							d = o[5],
							h = o[6],
							f = o[7];
						return t({
							fileName: u,
							fileSize: l,
							title: s.Title,
							author: s.Author,
							subject: s.Subject,
							keywords: s.Keywords,
							creationDate: c,
							modificationDate: d,
							creator: s.Creator,
							producer: s.Producer,
							version: s.PDFFormatVersion,
							pageCount: e.pdfDocument.numPages,
							pageSize: h,
							linearized: f,
							_currentPageNumber: n,
							_pagesRotation: r
						}), e._updateUI(), e.pdfDocument.getDownloadInfo()
					}).then(function(t) {
						var n = t.length;
						return e.maybeFileSize = n, e._parseFileSize(n)
					}).then(function(n) {
						if (n !== e.fieldData.fileSize) {
							var i = Object.assign(Object.create(null), e.fieldData);
							i.fileSize = n, t(i), e._updateUI()
						}
					})
				})
			}
		}, {
			key: "close",
			value: function() {
				this.overlayManager.close(this.overlayName)
			}
		}, {
			key: "setDocument",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
				this.pdfDocument && (this._reset(), this._updateUI(!0)), e && (this.pdfDocument = e, this.url = t, this._dataAvailableCapability.resolve())
			}
		}, {
			key: "setFileSize",
			value: function(e) {
				Number.isInteger(e) && e > 0 && (this.maybeFileSize = e)
			}
		}, {
			key: "_reset",
			value: function() {
				this.pdfDocument = null, this.url = null, this.maybeFileSize = 0, delete this.fieldData, this._dataAvailableCapability = (0, o.createPromiseCapability)(), this._currentPageNumber = 1, this._pagesRotation = 0
			}
		}, {
			key: "_updateUI",
			value: function() {
				if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.fieldData) {
					if (this.overlayManager.active === this.overlayName)
						for (var e in this.fields) {
							var t = this.fieldData[e];
							this.fields[e].textContent = t || 0 === t ? t : "-"
						}
				} else
					for (var n in this.fields) this.fields[n].textContent = "-"
			}
		}, {
			key: "_parseFileSize",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = e / 1024;
				return t ? t < 1024 ? this.l10n.get("document_properties_kb", {
					size_kb: (+t.toPrecision(3)).toLocaleString(),
					size_b: e.toLocaleString()
				}, "{{size_kb}} KB ({{size_b}} bytes)") : this.l10n.get("document_properties_mb", {
					size_mb: (+(t / 1024).toPrecision(3)).toLocaleString(),
					size_b: e.toLocaleString()
				}, "{{size_mb}} MB ({{size_b}} bytes)") : Promise.resolve(void 0)
			}
		}, {
			key: "_parsePageSize",
			value: function(e, t) {
				var n = this;
				if (!e) return Promise.resolve(void 0);
				t % 180 != 0 && (e = {
					width: e.height,
					height: e.width
				});
				var r = (0, a.isPortraitOrientation)(e),
					o = {
						width: Math.round(100 * e.width) / 100,
						height: Math.round(100 * e.height) / 100
					},
					s = {
						width: Math.round(25.4 * e.width * 10) / 10,
						height: Math.round(25.4 * e.height * 10) / 10
					},
					d = null,
					h = c(o, r, u) || c(s, r, l);
				if (!(h || Number.isInteger(s.width) && Number.isInteger(s.height))) {
					var f = {
							width: 25.4 * e.width,
							height: 25.4 * e.height
						},
						p = {
							width: Math.round(s.width),
							height: Math.round(s.height)
						};
					Math.abs(f.width - p.width) < .1 && Math.abs(f.height - p.height) < .1 && (h = c(p, r, l)) && (o = {
						width: Math.round(p.width / 25.4 * 100) / 100,
						height: Math.round(p.height / 25.4 * 100) / 100
					}, s = p)
				}
				return h && (d = this.l10n.get("document_properties_page_size_name_" + h.toLowerCase(), null, h)), Promise.all([this._isNonMetricLocale ? o : s, this.l10n.get("document_properties_page_size_unit_" + (this._isNonMetricLocale ? "inches" : "millimeters"), null, this._isNonMetricLocale ? "in" : "mm"), d, this.l10n.get("document_properties_page_size_orientation_" + (r ? "portrait" : "landscape"), null, r ? "portrait" : "landscape")]).then(function(e) {
					var t = i(e, 4),
						r = t[0],
						a = r.width,
						o = r.height,
						s = t[1],
						u = t[2],
						l = t[3];
					return n.l10n.get("document_properties_page_size_dimension_" + (u ? "name_" : "") + "string", {
						width: a.toLocaleString(),
						height: o.toLocaleString(),
						unit: s,
						name: u,
						orientation: l
					}, "{{width}} ?? {{height}} {{unit}} (" + (u ? "{{name}}, " : "") + "{{orientation}})")
				})
			}
		}, {
			key: "_parseDate",
			value: function(e) {
				if (e) {
					var t = e;
					"D:" === t.substring(0, 2) && (t = t.substring(2));
					var n = parseInt(t.substring(0, 4), 10),
						i = parseInt(t.substring(4, 6), 10) - 1,
						r = parseInt(t.substring(6, 8), 10),
						a = parseInt(t.substring(8, 10), 10),
						o = parseInt(t.substring(10, 12), 10),
						s = parseInt(t.substring(12, 14), 10),
						u = t.substring(14, 15),
						l = parseInt(t.substring(15, 17), 10),
						c = parseInt(t.substring(18, 20), 10);
					"-" === u ? (a += l, o += c) : "+" === u && (a -= l, o -= c);
					var d = new Date(Date.UTC(n, i, r, a, o, s)),
						h = d.toLocaleDateString(),
						f = d.toLocaleTimeString();
					return this.l10n.get("document_properties_date_string", {
						date: h,
						time: f
					}, "{{date}}, {{time}}")
				}
			}
		}, {
			key: "_parseLinearization",
			value: function(e) {
				return this.l10n.get("document_properties_linearized_" + (e ? "yes" : "no"), null, e ? "Yes" : "No")
			}
		}]), e
	}();
	t.PDFDocumentProperties = d
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFFindBar = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(6),
		a = n(20);
	var o = function() {
		function e(t) {
			var n = this,
				i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.getGlobalEventBus)(),
				a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.NullL10n;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.opened = !1, this.bar = t.bar || null, this.toggleButton = t.toggleButton || null, this.findField = t.findField || null, this.highlightAll = t.highlightAllCheckbox || null, this.caseSensitive = t.caseSensitiveCheckbox || null, this.entireWord = t.entireWordCheckbox || null, this.findMsg = t.findMsg || null, this.findResultsCount = t.findResultsCount || null, this.findPreviousButton = t.findPreviousButton || null, this.findNextButton = t.findNextButton || null, this.eventBus = i, this.l10n = a, this.toggleButton.addEventListener("click", function() {
				n.toggle()
			}), this.findField.addEventListener("input", function() {
				n.dispatchEvent("")
			}), this.bar.addEventListener("keydown", function(e) {
				switch (e.keyCode) {
					case 13:
						e.target === n.findField && n.dispatchEvent("again", e.shiftKey);
						break;
					case 27:
						n.close()
				}
			}), this.findPreviousButton.addEventListener("click", function() {
				n.dispatchEvent("again", !0)
			}), this.findNextButton.addEventListener("click", function() {
				n.dispatchEvent("again", !1)
			}), this.highlightAll.addEventListener("click", function() {
				n.dispatchEvent("highlightallchange")
			}), this.caseSensitive.addEventListener("click", function() {
				n.dispatchEvent("casesensitivitychange")
			}), this.entireWord.addEventListener("click", function() {
				n.dispatchEvent("entirewordchange")
			}), this.eventBus.on("resize", this._adjustWidth.bind(this))
		}
		return i(e, [{
			key: "reset",
			value: function() {
				this.updateUIState()
			}
		}, {
			key: "dispatchEvent",
			value: function(e, t) {
				this.eventBus.dispatch("find", {
					source: this,
					type: e,
					query: this.findField.value,
					phraseSearch: !0,
					caseSensitive: this.caseSensitive.checked,
					entireWord: this.entireWord.checked,
					highlightAll: this.highlightAll.checked,
					findPrevious: t
				})
			}
		}, {
			key: "updateUIState",
			value: function(e, t, n) {
				var i = this,
					r = !1,
					o = "",
					s = "";
				switch (e) {
					case a.FindState.FOUND:
						break;
					case a.FindState.PENDING:
						s = "pending";
						break;
					case a.FindState.NOT_FOUND:
						o = this.l10n.get("find_not_found", null, "Phrase not found"), r = !0;
						break;
					case a.FindState.WRAPPED:
						o = t ? this.l10n.get("find_reached_top", null, "Reached top of document, continued from bottom") : this.l10n.get("find_reached_bottom", null, "Reached end of document, continued from top")
				}
				this.findField.classList.toggle("notFound", r), this.findField.setAttribute("data-status", s), Promise.resolve(o).then(function(e) {
					i.findMsg.textContent = e, i._adjustWidth()
				}), this.updateResultsCount(n)
			}
		}, {
			key: "updateResultsCount",
			value: function() {
				var e = this,
					t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					n = t.current,
					i = void 0 === n ? 0 : n,
					r = t.total,
					a = void 0 === r ? 0 : r;
				if (this.findResultsCount) {
					var o = "";
					a > 0 && (o = a > 1e3 ? this.l10n.get("find_match_count_limit", {
						limit: 1e3
					}, "More than {{limit}} matches") : this.l10n.get("find_match_count", {
						current: i,
						total: a
					}, "{{current}} of {{total}} match" + (1 !== a ? "es" : ""))), Promise.resolve(o).then(function(t) {
						e.findResultsCount.textContent = t, e.findResultsCount.classList[a ? "remove" : "add"]("hidden"), e._adjustWidth()
					})
				}
			}
		}, {
			key: "open",
			value: function() {
				this.opened || (this.opened = !0, this.toggleButton.classList.add("toggled"), this.bar.classList.remove("hidden")), this.findField.select(), this.findField.focus(), this._adjustWidth()
			}
		}, {
			key: "close",
			value: function() {
				this.opened && (this.opened = !1, this.toggleButton.classList.remove("toggled"), this.bar.classList.add("hidden"), this.eventBus.dispatch("findbarclose", {
					source: this
				}))
			}
		}, {
			key: "toggle",
			value: function() {
				this.opened ? this.close() : this.open()
			}
		}, {
			key: "_adjustWidth",
			value: function() {
				this.opened && (this.bar.classList.remove("wrapContainers"), this.bar.clientHeight > this.bar.firstElementChild.clientHeight && this.bar.classList.add("wrapContainers"))
			}
		}]), e
	}();
	t.PDFFindBar = o
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFFindController = t.FindState = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(7),
		a = n(21),
		o = n(14);
	var s = {
			FOUND: 0,
			NOT_FOUND: 1,
			WRAPPED: 2,
			PENDING: 3
		},
		u = {
			"???": "'",
			"???": "'",
			"???": "'",
			"???": "'",
			"???": '"',
			"???": '"',
			"???": '"',
			"???": '"',
			"??": "1/4",
			"??": "1/2",
			"??": "3/4"
		},
		l = function() {
			function e(t) {
				var n = t.linkService,
					i = t.eventBus,
					r = void 0 === i ? (0, o.getGlobalEventBus)() : i;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this._linkService = n, this._eventBus = r, this._reset(), r.on("findbarclose", this._onFindBarClose.bind(this));
				var a = Object.keys(u).join("");
				this._normalizationRegex = new RegExp("[" + a + "]", "g")
			}
			return i(e, [{
				key: "setDocument",
				value: function(e) {
					this._pdfDocument && this._reset(), e && (this._pdfDocument = e, this._firstPageCapability.resolve())
				}
			}, {
				key: "executeCommand",
				value: function(e, t) {
					var n = this,
						i = this._pdfDocument;
					null !== this._state && "findagain" === e || (this._dirtyMatch = !0), this._state = t, this._updateUIState(s.PENDING), this._firstPageCapability.promise.then(function() {
						!n._pdfDocument || i && n._pdfDocument !== i || (n._extractText(), n._findTimeout && (clearTimeout(n._findTimeout), n._findTimeout = null), "find" === e ? n._findTimeout = setTimeout(function() {
							n._nextMatch(), n._findTimeout = null
						}, 250) : n._nextMatch())
					})
				}
			}, {
				key: "_reset",
				value: function() {
					this._highlightMatches = !1, this._pdfDocument = null, this._pageMatches = [], this._pageMatchesLength = null, this._state = null, this._selected = {
						pageIdx: -1,
						matchIdx: -1
					}, this._offset = {
						pageIdx: null,
						matchIdx: null
					}, this._extractTextPromises = [], this._pageContents = [], this._matchesCountTotal = 0, this._pagesToSearch = null, this._pendingFindMatches = Object.create(null), this._resumePageIdx = null, this._dirtyMatch = !1, clearTimeout(this._findTimeout), this._findTimeout = null, this._firstPageCapability = (0, r.createPromiseCapability)()
				}
			}, {
				key: "_normalize",
				value: function(e) {
					return e.replace(this._normalizationRegex, function(e) {
						return u[e]
					})
				}
			}, {
				key: "_prepareMatches",
				value: function(e, t, n) {
					function i(e, t) {
						var n = e[t],
							i = e[t + 1];
						if (t < e.length - 1 && n.match === i.match) return n.skipped = !0, !0;
						for (var r = t - 1; r >= 0; r--) {
							var a = e[r];
							if (!a.skipped) {
								if (a.match + a.matchLength < n.match) break;
								if (a.match + a.matchLength >= n.match + n.matchLength) return n.skipped = !0, !0
							}
						}
						return !1
					}
					e.sort(function(e, t) {
						return e.match === t.match ? e.matchLength - t.matchLength : e.match - t.match
					});
					for (var r = 0, a = e.length; r < a; r++) i(e, r) || (t.push(e[r].match), n.push(e[r].matchLength))
				}
			}, {
				key: "_isEntireWord",
				value: function(e, t, n) {
					if (t > 0) {
						var i = e.charCodeAt(t),
							r = e.charCodeAt(t - 1);
						if ((0, a.getCharacterType)(i) === (0, a.getCharacterType)(r)) return !1
					}
					var o = t + n - 1;
					if (o < e.length - 1) {
						var s = e.charCodeAt(o),
							u = e.charCodeAt(o + 1);
						if ((0, a.getCharacterType)(s) === (0, a.getCharacterType)(u)) return !1
					}
					return !0
				}
			}, {
				key: "_calculatePhraseMatch",
				value: function(e, t, n, i) {
					for (var r = [], a = e.length, o = -a; - 1 !== (o = n.indexOf(e, o + a));) i && !this._isEntireWord(n, o, a) || r.push(o);
					this._pageMatches[t] = r
				}
			}, {
				key: "_calculateWordMatch",
				value: function(e, t, n, i) {
					for (var r = [], a = e.match(/\S+/g), o = 0, s = a.length; o < s; o++)
						for (var u = a[o], l = u.length, c = -l; - 1 !== (c = n.indexOf(u, c + l));) i && !this._isEntireWord(n, c, l) || r.push({
							match: c,
							matchLength: l,
							skipped: !1
						});
					this._pageMatchesLength || (this._pageMatchesLength = []), this._pageMatchesLength[t] = [], this._pageMatches[t] = [], this._prepareMatches(r, this._pageMatches[t], this._pageMatchesLength[t])
				}
			}, {
				key: "_calculateMatch",
				value: function(e) {
					var t = this._normalize(this._pageContents[e]),
						n = this._normalize(this._state.query),
						i = this._state,
						r = i.caseSensitive,
						a = i.entireWord,
						o = i.phraseSearch;
					if (0 !== n.length) {
						r || (t = t.toLowerCase(), n = n.toLowerCase()), o ? this._calculatePhraseMatch(n, e, t, a) : this._calculateWordMatch(n, e, t, a), this._updatePage(e), this._resumePageIdx === e && (this._resumePageIdx = null, this._nextPageMatch());
						var s = this._pageMatches[e].length;
						s > 0 && (this._matchesCountTotal += s, this._updateUIResultsCount())
					}
				}
			}, {
				key: "_extractText",
				value: function() {
					var e = this;
					if (!(this._extractTextPromises.length > 0))
						for (var t = Promise.resolve(), n = function(n, i) {
								var a = (0, r.createPromiseCapability)();
								e._extractTextPromises[n] = a.promise, t = t.then(function() {
									return e._pdfDocument.getPage(n + 1).then(function(e) {
										return e.getTextContent({
											normalizeWhitespace: !0
										})
									}).then(function(t) {
										for (var i = t.items, r = [], o = 0, s = i.length; o < s; o++) r.push(i[o].str);
										e._pageContents[n] = r.join(""), a.resolve(n)
									}, function(t) {
										console.error("Unable to get text content for page " + (n + 1), t), e._pageContents[n] = "", a.resolve(n)
									})
								})
							}, i = 0, a = this._linkService.pagesCount; i < a; i++) n(i)
				}
			}, {
				key: "_updatePage",
				value: function(e) {
					this._selected.pageIdx === e && (this._linkService.page = e + 1), this._eventBus.dispatch("updatetextlayermatches", {
						source: this,
						pageIndex: e
					})
				}
			}, {
				key: "_nextMatch",
				value: function() {
					var e = this,
						t = this._state.findPrevious,
						n = this._linkService.page - 1,
						i = this._linkService.pagesCount;
					if (this._highlightMatches = !0, this._dirtyMatch) {
						this._dirtyMatch = !1, this._selected.pageIdx = this._selected.matchIdx = -1, this._offset.pageIdx = n, this._offset.matchIdx = null, this._resumePageIdx = null, this._pageMatches.length = 0, this._pageMatchesLength = null, this._matchesCountTotal = 0;
						for (var r = 0; r < i; r++) this._updatePage(r), r in this._pendingFindMatches || (this._pendingFindMatches[r] = !0, this._extractTextPromises[r].then(function(t) {
							delete e._pendingFindMatches[t], e._calculateMatch(t)
						}))
					}
					if ("" !== this._state.query) {
						if (!this._resumePageIdx) {
							var a = this._offset;
							if (this._pagesToSearch = i, null !== a.matchIdx) {
								var o = this._pageMatches[a.pageIdx].length;
								if (!t && a.matchIdx + 1 < o || t && a.matchIdx > 0) return a.matchIdx = t ? a.matchIdx - 1 : a.matchIdx + 1, void this._updateMatch(!0);
								this._advanceOffsetPage(t)
							}
							this._nextPageMatch()
						}
					} else this._updateUIState(s.FOUND)
				}
			}, {
				key: "_matchesReady",
				value: function(e) {
					var t = this._offset,
						n = e.length,
						i = this._state.findPrevious;
					return n ? (t.matchIdx = i ? n - 1 : 0, this._updateMatch(!0), !0) : (this._advanceOffsetPage(i), !!(t.wrapped && (t.matchIdx = null, this._pagesToSearch < 0)) && (this._updateMatch(!1), !0))
				}
			}, {
				key: "_nextPageMatch",
				value: function() {
					null !== this._resumePageIdx && console.error("There can only be one pending page.");
					var e = null;
					do {
						var t = this._offset.pageIdx;
						if (!(e = this._pageMatches[t])) {
							this._resumePageIdx = t;
							break
						}
					} while (!this._matchesReady(e))
				}
			}, {
				key: "_advanceOffsetPage",
				value: function(e) {
					var t = this._offset,
						n = this._linkService.pagesCount;
					t.pageIdx = e ? t.pageIdx - 1 : t.pageIdx + 1, t.matchIdx = null, this._pagesToSearch--, (t.pageIdx >= n || t.pageIdx < 0) && (t.pageIdx = e ? n - 1 : 0, t.wrapped = !0)
				}
			}, {
				key: "_updateMatch",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = s.NOT_FOUND,
						n = this._offset.wrapped;
					if (this._offset.wrapped = !1, e) {
						var i = this._selected.pageIdx;
						this._selected.pageIdx = this._offset.pageIdx, this._selected.matchIdx = this._offset.matchIdx, t = n ? s.WRAPPED : s.FOUND, -1 !== i && i !== this._selected.pageIdx && this._updatePage(i)
					}
					this._updateUIState(t, this._state.findPrevious), -1 !== this._selected.pageIdx && this._updatePage(this._selected.pageIdx)
				}
			}, {
				key: "_onFindBarClose",
				value: function(e) {
					var t = this,
						n = this._pdfDocument;
					this._firstPageCapability.promise.then(function() {
						!t._pdfDocument || n && t._pdfDocument !== n || (t._findTimeout && (clearTimeout(t._findTimeout), t._findTimeout = null, t._updateUIState(s.FOUND)), t._highlightMatches = !1, t._eventBus.dispatch("updatetextlayermatches", {
							source: t,
							pageIndex: -1
						}))
					})
				}
			}, {
				key: "_requestMatchesCount",
				value: function() {
					var e = this._selected,
						t = e.pageIdx,
						n = e.matchIdx,
						i = 0,
						r = this._matchesCountTotal;
					if (-1 !== n) {
						for (var a = 0; a < t; a++) i += this._pageMatches[a] && this._pageMatches[a].length || 0;
						i += n + 1
					}
					return (i < 1 || i > r) && (i = r = 0), {
						current: i,
						total: r
					}
				}
			}, {
				key: "_updateUIResultsCount",
				value: function() {
					this._eventBus.dispatch("updatefindmatchescount", {
						source: this,
						matchesCount: this._requestMatchesCount()
					})
				}
			}, {
				key: "_updateUIState",
				value: function(e, t) {
					this._eventBus.dispatch("updatefindcontrolstate", {
						source: this,
						state: e,
						previous: t,
						matchesCount: this._requestMatchesCount()
					})
				}
			}, {
				key: "highlightMatches",
				get: function() {
					return this._highlightMatches
				}
			}, {
				key: "pageMatches",
				get: function() {
					return this._pageMatches
				}
			}, {
				key: "pageMatchesLength",
				get: function() {
					return this._pageMatchesLength
				}
			}, {
				key: "selected",
				get: function() {
					return this._selected
				}
			}, {
				key: "state",
				get: function() {
					return this._state
				}
			}]), e
		}();
	t.FindState = s, t.PDFFindController = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = {
		SPACE: 0,
		ALPHA_LETTER: 1,
		PUNCT: 2,
		HAN_LETTER: 3,
		KATAKANA_LETTER: 4,
		HIRAGANA_LETTER: 5,
		HALFWIDTH_KATAKANA_LETTER: 6,
		THAI_LETTER: 7
	};
	t.CharacterType = i, t.getCharacterType = function(e) {
		return function(e) {
			return e < 11904
		}(e) ? function(e) {
			return 0 == (65408 & e)
		}(e) ? function(e) {
			return 32 === e || 9 === e || 13 === e || 10 === e
		}(e) ? i.SPACE : function(e) {
			return e >= 97 && e <= 122 || e >= 65 && e <= 90
		}(e) || function(e) {
			return e >= 48 && e <= 57
		}(e) || 95 === e ? i.ALPHA_LETTER : i.PUNCT : function(e) {
			return 3584 == (65408 & e)
		}(e) ? i.THAI_LETTER : 160 === e ? i.SPACE : i.ALPHA_LETTER : function(e) {
			return e >= 13312 && e <= 40959 || e >= 63744 && e <= 64255
		}(e) ? i.HAN_LETTER : function(e) {
			return e >= 12448 && e <= 12543
		}(e) ? i.KATAKANA_LETTER : function(e) {
			return e >= 12352 && e <= 12447
		}(e) ? i.HIRAGANA_LETTER : function(e) {
			return e >= 65376 && e <= 65439
		}(e) ? i.HALFWIDTH_KATAKANA_LETTER : i.ALPHA_LETTER
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.isDestArraysEqual = t.isDestHashesEqual = t.PDFHistory = void 0;
	var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		a = n(6),
		o = n(14);

	function s() {
		return document.location.hash
	}

	function u(e) {
		var t = unescape(s()).substring(1),
			n = 0 | (0, a.parseQueryString)(t).page;
		return Number.isInteger(n) && n > 0 && n <= e.pagesCount || (n = null), {
			hash: t,
			page: n,
			rotation: e.rotation
		}
	}
	var l = function() {
		function e(t) {
			var n = this,
				i = t.linkService,
				r = t.eventBus;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.linkService = i, this.eventBus = r || (0, o.getGlobalEventBus)(), this.initialized = !1, this.initialBookmark = null, this.initialRotation = null, this._boundEvents = Object.create(null), this._isViewerInPresentationMode = !1, this._isPagesLoaded = !1, this.eventBus.on("presentationmodechanged", function(e) {
				n._isViewerInPresentationMode = e.active || e.switchInProgress
			}), this.eventBus.on("pagesloaded", function(e) {
				n._isPagesLoaded = !!e.pagesCount
			})
		}
		return r(e, [{
			key: "initialize",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (e && "string" == typeof e) {
					var n = this.initialized && this.fingerprint !== e;
					this.fingerprint = e, this.initialized || this._bindEvents();
					var i = window.history.state;
					if (this.initialized = !0, this.initialBookmark = null, this.initialRotation = null, this._popStateInProgress = !1, this._blockHashChange = 0, this._currentHash = s(), this._numPositionUpdates = 0, this._uid = this._maxUid = 0, this._destination = null, this._position = null, !this._isValidState(i) || t) {
						var r = u(this.linkService),
							a = r.hash,
							o = r.page,
							l = r.rotation;
						return !a || n || t ? void this._pushOrReplaceState(null, !0) : void this._pushOrReplaceState({
							hash: a,
							page: o,
							rotation: l
						}, !0)
					}
					var c = i.destination;
					this._updateInternalState(c, i.uid, !0), this._uid > this._maxUid && (this._maxUid = this._uid), void 0 !== c.rotation && (this.initialRotation = c.rotation), c.dest ? (this.initialBookmark = JSON.stringify(c.dest), this._destination.page = null) : c.hash ? this.initialBookmark = c.hash : c.page && (this.initialBookmark = "page=" + c.page)
				} else console.error('PDFHistory.initialize: The "fingerprint" must be a non-empty string.')
			}
		}, {
			key: "push",
			value: function(e) {
				var t = this,
					n = e.namedDest,
					i = e.explicitDest,
					r = e.pageNumber;
				if (this.initialized)
					if ((!n || "string" == typeof n) && Array.isArray(i) && Number.isInteger(r) && r > 0 && r <= this.linkService.pagesCount) {
						var a = n || JSON.stringify(i);
						if (a) {
							var o = !1;
							if (this._destination && (c(this._destination.hash, a) || d(this._destination.dest, i))) {
								if (this._destination.page) return;
								o = !0
							}
							this._popStateInProgress && !o || (this._pushOrReplaceState({
								dest: i,
								hash: a,
								page: r,
								rotation: this.linkService.rotation
							}, o), this._popStateInProgress || (this._popStateInProgress = !0, Promise.resolve().then(function() {
								t._popStateInProgress = !1
							})))
						}
					} else console.error("PDFHistory.push: Invalid parameters.")
			}
		}, {
			key: "pushCurrentPosition",
			value: function() {
				this.initialized && !this._popStateInProgress && this._tryPushCurrentPosition()
			}
		}, {
			key: "back",
			value: function() {
				if (this.initialized && !this._popStateInProgress) {
					var e = window.history.state;
					this._isValidState(e) && e.uid > 0 && window.history.back()
				}
			}
		}, {
			key: "forward",
			value: function() {
				if (this.initialized && !this._popStateInProgress) {
					var e = window.history.state;
					this._isValidState(e) && e.uid < this._maxUid && window.history.forward()
				}
			}
		}, {
			key: "_pushOrReplaceState",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || !this._destination,
					n = {
						fingerprint: this.fingerprint,
						uid: t ? this._uid : this._uid + 1,
						destination: e
					};
				this._updateInternalState(e, n.uid), t ? window.history.replaceState(n, "") : (this._maxUid = this._uid, window.history.pushState(n, ""))
			}
		}, {
			key: "_tryPushCurrentPosition",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				if (this._position) {
					var t = this._position;
					if (e && ((t = Object.assign(Object.create(null), this._position)).temporary = !0), this._destination) {
						if (this._destination.temporary) this._pushOrReplaceState(t, !0);
						else if (this._destination.hash !== t.hash && (this._destination.page || !(this._numPositionUpdates <= 50))) {
							var n = !1;
							if (this._destination.page === t.first || this._destination.page === t.page) {
								if (this._destination.dest || !this._destination.first) return;
								n = !0
							}
							this._pushOrReplaceState(t, n)
						}
					} else this._pushOrReplaceState(t)
				}
			}
		}, {
			key: "_isValidState",
			value: function(e) {
				return !!e && (e.fingerprint === this.fingerprint && (!(!Number.isInteger(e.uid) || e.uid < 0) && (null !== e.destination && "object" === i(e.destination))))
			}
		}, {
			key: "_updateInternalState",
			value: function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), n && e && e.temporary && delete e.temporary, this._destination = e, this._uid = t, this._numPositionUpdates = 0
			}
		}, {
			key: "_updateViewarea",
			value: function(e) {
				var t = this,
					n = e.location;
				this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._position = {
					hash: this._isViewerInPresentationMode ? "page=" + n.pageNumber : n.pdfOpenParams.substring(1),
					page: this.linkService.page,
					first: n.pageNumber,
					rotation: n.rotation
				}, this._popStateInProgress || (this._isPagesLoaded && this._destination && !this._destination.page && this._numPositionUpdates++, this._updateViewareaTimeout = setTimeout(function() {
					t._popStateInProgress || t._tryPushCurrentPosition(!0), t._updateViewareaTimeout = null
				}, 1e3))
			}
		}, {
			key: "_popState",
			value: function(e) {
				var t = this,
					n = e.state,
					i = s(),
					r = this._currentHash !== i;
				if (this._currentHash = i, n) {
					if (this._isValidState(n)) {
						this._popStateInProgress = !0, r && (this._blockHashChange++, (0, a.waitOnEventOrTimeout)({
							target: window,
							name: "hashchange",
							delay: 1e3
						}).then(function() {
							t._blockHashChange--
						}));
						var o = n.destination;
						this._updateInternalState(o, n.uid, !0), this._uid > this._maxUid && (this._maxUid = this._uid), (0, a.isValidRotation)(o.rotation) && (this.linkService.rotation = o.rotation), o.dest ? this.linkService.navigateTo(o.dest) : o.hash ? this.linkService.setHash(o.hash) : o.page && (this.linkService.page = o.page), Promise.resolve().then(function() {
							t._popStateInProgress = !1
						})
					}
				} else {
					this._uid++;
					var l = u(this.linkService),
						c = l.hash,
						d = l.page,
						h = l.rotation;
					this._pushOrReplaceState({
						hash: c,
						page: d,
						rotation: h
					}, !0)
				}
			}
		}, {
			key: "_bindEvents",
			value: function() {
				var e = this,
					t = this._boundEvents,
					n = this.eventBus;
				t.updateViewarea = this._updateViewarea.bind(this), t.popState = this._popState.bind(this), t.pageHide = function(t) {
					e._destination && !e._destination.temporary || e._tryPushCurrentPosition()
				}, n.on("updateviewarea", t.updateViewarea), window.addEventListener("popstate", t.popState), window.addEventListener("pagehide", t.pageHide)
			}
		}, {
			key: "popStateInProgress",
			get: function() {
				return this.initialized && (this._popStateInProgress || this._blockHashChange > 0)
			}
		}]), e
	}();

	function c(e, t) {
		return "string" == typeof e && "string" == typeof t && (e === t || (0, a.parseQueryString)(e).nameddest === t)
	}

	function d(e, t) {
		function n(e, t) {
			if ((void 0 === e ? "undefined" : i(e)) !== (void 0 === t ? "undefined" : i(t))) return !1;
			if (Array.isArray(e) || Array.isArray(t)) return !1;
			if (null !== e && "object" === (void 0 === e ? "undefined" : i(e)) && null !== t) {
				if (Object.keys(e).length !== Object.keys(t).length) return !1;
				for (var r in e)
					if (!n(e[r], t[r])) return !1;
				return !0
			}
			return e === t || Number.isNaN(e) && Number.isNaN(t)
		}
		if (!Array.isArray(e) || !Array.isArray(t)) return !1;
		if (e.length !== t.length) return !1;
		for (var r = 0, a = e.length; r < a; r++)
			if (!n(e[r], t[r])) return !1;
		return !0
	}
	t.PDFHistory = l, t.isDestHashesEqual = c, t.isDestArraysEqual = d
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.SimpleLinkService = t.PDFLinkService = void 0;
	var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		a = n(14),
		o = n(6);

	function s(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	var u = function() {
		function e() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				n = t.eventBus,
				i = t.externalLinkTarget,
				r = void 0 === i ? null : i,
				o = t.externalLinkRel,
				u = void 0 === o ? null : o;
			s(this, e), this.eventBus = n || (0, a.getGlobalEventBus)(), this.externalLinkTarget = r, this.externalLinkRel = u, this.baseUrl = null, this.pdfDocument = null, this.pdfViewer = null, this.pdfHistory = null, this._pagesRefCache = null
		}
		return r(e, [{
			key: "setDocument",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
				this.baseUrl = t, this.pdfDocument = e, this._pagesRefCache = Object.create(null)
			}
		}, {
			key: "setViewer",
			value: function(e) {
				this.pdfViewer = e
			}
		}, {
			key: "setHistory",
			value: function(e) {
				this.pdfHistory = e
			}
		}, {
			key: "navigateTo",
			value: function(e) {
				var t = this;
				new Promise(function(n, i) {
					"string" != typeof e ? n({
						namedDest: "",
						explicitDest: e
					}) : t.pdfDocument.getDestination(e).then(function(t) {
						n({
							namedDest: e,
							explicitDest: t
						})
					})
				}).then(function(n) {
					Array.isArray(n.explicitDest) ? function n(i) {
						var r = i.namedDest,
							a = i.explicitDest,
							o = a[0],
							s = void 0;
						if (o instanceof Object) {
							if (null === (s = t._cachedPageNumber(o))) return void t.pdfDocument.getPageIndex(o).then(function(e) {
								t.cachePageRef(e + 1, o), n({
									namedDest: r,
									explicitDest: a
								})
							}).catch(function() {
								console.error('PDFLinkService.navigateTo: "' + o + '" is not a valid page reference, for dest="' + e + '".')
							})
						} else {
							if (!Number.isInteger(o)) return void console.error('PDFLinkService.navigateTo: "' + o + '" is not a valid destination reference, for dest="' + e + '".');
							s = o + 1
						}!s || s < 1 || s > t.pagesCount ? console.error('PDFLinkService.navigateTo: "' + s + '" is not a valid page number, for dest="' + e + '".') : (t.pdfHistory && (t.pdfHistory.pushCurrentPosition(), t.pdfHistory.push({
							namedDest: r,
							explicitDest: a,
							pageNumber: s
						})), t.pdfViewer.scrollPageIntoView({
							pageNumber: s,
							destArray: a
						}))
					}(n) : console.error('PDFLinkService.navigateTo: "' + n.explicitDest + '" is not a valid destination array, for dest="' + e + '".')
				})
			}
		}, {
			key: "getDestinationHash",
			value: function(e) {
				if ("string" == typeof e) return this.getAnchorUrl("#" + escape(e));
				if (Array.isArray(e)) {
					var t = JSON.stringify(e);
					return this.getAnchorUrl("#" + escape(t))
				}
				return this.getAnchorUrl("")
			}
		}, {
			key: "getAnchorUrl",
			value: function(e) {
				return (this.baseUrl || "") + e
			}
		}, {
			key: "setHash",
			value: function(e) {
				var t = void 0,
					n = void 0;
				if (e.includes("=")) {
					var r = (0, o.parseQueryString)(e);
					if ("search" in r && this.eventBus.dispatch("findfromurlhash", {
							source: this,
							query: r.search.replace(/"/g, ""),
							phraseSearch: "true" === r.phrase
						}), "nameddest" in r) return void this.navigateTo(r.nameddest);
					if ("page" in r && (t = 0 | r.page || 1), "zoom" in r) {
						var a = r.zoom.split(","),
							s = a[0],
							u = parseFloat(s);
						s.includes("Fit") ? "Fit" === s || "FitB" === s ? n = [null, {
							name: s
						}] : "FitH" === s || "FitBH" === s || "FitV" === s || "FitBV" === s ? n = [null, {
							name: s
						}, a.length > 1 ? 0 | a[1] : null] : "FitR" === s ? 5 !== a.length ? console.error('PDFLinkService.setHash: Not enough parameters for "FitR".') : n = [null, {
							name: s
						}, 0 | a[1], 0 | a[2], 0 | a[3], 0 | a[4]] : console.error('PDFLinkService.setHash: "' + s + '" is not a valid zoom value.') : n = [null, {
							name: "XYZ"
						}, a.length > 1 ? 0 | a[1] : null, a.length > 2 ? 0 | a[2] : null, u ? u / 100 : s]
					}
					n ? this.pdfViewer.scrollPageIntoView({
						pageNumber: t || this.page,
						destArray: n,
						allowNegativeOffset: !0
					}) : t && (this.page = t), "pagemode" in r && this.eventBus.dispatch("pagemode", {
						source: this,
						mode: r.pagemode
					})
				} else {
					n = unescape(e);
					try {
						n = JSON.parse(n), Array.isArray(n) || (n = n.toString())
					} catch (e) {}
					if ("string" == typeof n || function(e) {
							if (!Array.isArray(e)) return !1;
							var t = e.length,
								n = !0;
							if (t < 2) return !1;
							var r = e[0];
							if (!("object" === (void 0 === r ? "undefined" : i(r)) && Number.isInteger(r.num) && Number.isInteger(r.gen) || Number.isInteger(r) && r >= 0)) return !1;
							var a = e[1];
							if ("object" !== (void 0 === a ? "undefined" : i(a)) || "string" != typeof a.name) return !1;
							switch (a.name) {
								case "XYZ":
									if (5 !== t) return !1;
									break;
								case "Fit":
								case "FitB":
									return 2 === t;
								case "FitH":
								case "FitBH":
								case "FitV":
								case "FitBV":
									if (3 !== t) return !1;
									break;
								case "FitR":
									if (6 !== t) return !1;
									n = !1;
									break;
								default:
									return !1
							}
							for (var o = 2; o < t; o++) {
								var s = e[o];
								if (!("number" == typeof s || n && null === s)) return !1
							}
							return !0
						}(n)) return void this.navigateTo(n);
					console.error('PDFLinkService.setHash: "' + unescape(e) + '" is not a valid destination.')
				}
			}
		}, {
			key: "executeNamedAction",
			value: function(e) {
				switch (e) {
					case "GoBack":
						this.pdfHistory && this.pdfHistory.back();
						break;
					case "GoForward":
						this.pdfHistory && this.pdfHistory.forward();
						break;
					case "NextPage":
						this.page < this.pagesCount && this.page++;
						break;
					case "PrevPage":
						this.page > 1 && this.page--;
						break;
					case "LastPage":
						this.page = this.pagesCount;
						break;
					case "FirstPage":
						this.page = 1
				}
				this.eventBus.dispatch("namedaction", {
					source: this,
					action: e
				})
			}
		}, {
			key: "cachePageRef",
			value: function(e, t) {
				if (t) {
					var n = t.num + " " + t.gen + " R";
					this._pagesRefCache[n] = e
				}
			}
		}, {
			key: "_cachedPageNumber",
			value: function(e) {
				var t = e.num + " " + e.gen + " R";
				return this._pagesRefCache && this._pagesRefCache[t] || null
			}
		}, {
			key: "pagesCount",
			get: function() {
				return this.pdfDocument ? this.pdfDocument.numPages : 0
			}
		}, {
			key: "page",
			get: function() {
				return this.pdfViewer.currentPageNumber
			},
			set: function(e) {
				this.pdfViewer.currentPageNumber = e
			}
		}, {
			key: "rotation",
			get: function() {
				return this.pdfViewer.pagesRotation
			},
			set: function(e) {
				this.pdfViewer.pagesRotation = e
			}
		}]), e
	}();
	var l = function() {
		function e() {
			s(this, e), this.externalLinkTarget = null, this.externalLinkRel = null
		}
		return r(e, [{
			key: "navigateTo",
			value: function(e) {}
		}, {
			key: "getDestinationHash",
			value: function(e) {
				return "#"
			}
		}, {
			key: "getAnchorUrl",
			value: function(e) {
				return "#"
			}
		}, {
			key: "setHash",
			value: function(e) {}
		}, {
			key: "executeNamedAction",
			value: function(e) {}
		}, {
			key: "cachePageRef",
			value: function(e, t) {}
		}, {
			key: "pagesCount",
			get: function() {
				return 0
			}
		}, {
			key: "page",
			get: function() {
				return 0
			},
			set: function(e) {}
		}, {
			key: "rotation",
			get: function() {
				return 0
			},
			set: function(e) {}
		}]), e
	}();
	t.PDFLinkService = u, t.SimpleLinkService = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFOutlineViewer = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(7);
	var a = function() {
		function e(t) {
			var n = t.container,
				i = t.linkService,
				r = t.eventBus;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.container = n, this.linkService = i, this.eventBus = r, this.reset(), r.on("toggleoutlinetree", this.toggleOutlineTree.bind(this))
		}
		return i(e, [{
			key: "reset",
			value: function() {
				this.outline = null, this.lastToggleIsShow = !0, this.container.textContent = "", this.container.classList.remove("outlineWithDeepNesting")
			}
		}, {
			key: "_dispatchEvent",
			value: function(e) {
				this.eventBus.dispatch("outlineloaded", {
					source: this,
					outlineCount: e
				})
			}
		}, {
			key: "_bindLink",
			value: function(e, t) {
				var n = t.url,
					i = t.newWindow,
					a = t.dest,
					o = this.linkService;
				n ? (0, r.addLinkAttributes)(e, {
					url: n,
					target: i ? r.LinkTarget.BLANK : o.externalLinkTarget,
					rel: o.externalLinkRel
				}) : (e.href = o.getDestinationHash(a), e.onclick = function() {
					return a && o.navigateTo(a), !1
				})
			}
		}, {
			key: "_setStyles",
			value: function(e, t) {
				var n = "";
				t.bold && (n += "font-weight: bold;"), t.italic && (n += "font-style: italic;"), n && e.setAttribute("style", n)
			}
		}, {
			key: "_addToggleButton",
			value: function(e) {
				var t = this,
					n = document.createElement("div");
				n.className = "outlineItemToggler", n.onclick = function(i) {
					if (i.stopPropagation(), n.classList.toggle("outlineItemsHidden"), i.shiftKey) {
						var r = !n.classList.contains("outlineItemsHidden");
						t._toggleOutlineItem(e, r)
					}
				}, e.insertBefore(n, e.firstChild)
			}
		}, {
			key: "_toggleOutlineItem",
			value: function(e, t) {
				this.lastToggleIsShow = t;
				for (var n = e.querySelectorAll(".outlineItemToggler"), i = 0, r = n.length; i < r; ++i) n[i].classList[t ? "remove" : "add"]("outlineItemsHidden")
			}
		}, {
			key: "toggleOutlineTree",
			value: function() {
				this.outline && this._toggleOutlineItem(this.container, !this.lastToggleIsShow)
			}
		}, {
			key: "render",
			value: function(e) {
				var t = e.outline,
					n = 0;
				if (this.outline && this.reset(), this.outline = t || null, t) {
					for (var i = document.createDocumentFragment(), a = [{
							parent: i,
							items: this.outline
						}], o = !1; a.length > 0;)
						for (var s = a.shift(), u = 0, l = s.items.length; u < l; u++) {
							var c = s.items[u],
								d = document.createElement("div");
							d.className = "outlineItem";
							var h = document.createElement("a");
							if (this._bindLink(h, c), this._setStyles(h, c), h.textContent = (0, r.removeNullCharacters)(c.title) || "???", d.appendChild(h), c.items.length > 0) {
								o = !0, this._addToggleButton(d);
								var f = document.createElement("div");
								f.className = "outlineItems", d.appendChild(f), a.push({
									parent: f,
									items: c.items
								})
							}
							s.parent.appendChild(d), n++
						}
					o && this.container.classList.add("outlineWithDeepNesting"), this.container.appendChild(i), this._dispatchEvent(n)
				} else this._dispatchEvent(n)
			}
		}]), e
	}();
	t.PDFOutlineViewer = a
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFPresentationMode = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(6);
	var a = Math.PI / 6,
		o = function() {
			function e(t) {
				var n = this,
					i = t.container,
					r = t.viewer,
					a = void 0 === r ? null : r,
					o = t.pdfViewer,
					s = t.eventBus,
					u = t.contextMenuItems,
					l = void 0 === u ? null : u;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.container = i, this.viewer = a || i.firstElementChild, this.pdfViewer = o, this.eventBus = s, this.active = !1, this.args = null, this.contextMenuOpen = !1, this.mouseScrollTimeStamp = 0, this.mouseScrollDelta = 0, this.touchSwipeState = null, l && (l.contextFirstPage.addEventListener("click", function() {
					n.contextMenuOpen = !1, n.eventBus.dispatch("firstpage", {
						source: n
					})
				}), l.contextLastPage.addEventListener("click", function() {
					n.contextMenuOpen = !1, n.eventBus.dispatch("lastpage", {
						source: n
					})
				}), l.contextPageRotateCw.addEventListener("click", function() {
					n.contextMenuOpen = !1, n.eventBus.dispatch("rotatecw", {
						source: n
					})
				}), l.contextPageRotateCcw.addEventListener("click", function() {
					n.contextMenuOpen = !1, n.eventBus.dispatch("rotateccw", {
						source: n
					})
				}))
			}
			return i(e, [{
				key: "request",
				value: function() {
					if (this.switchInProgress || this.active || !this.viewer.hasChildNodes()) return !1;
					if (this._addFullscreenChangeListeners(), this._setSwitchInProgress(), this._notifyStateChange(), this.container.requestFullscreen) this.container.requestFullscreen();
					else if (this.container.mozRequestFullScreen) this.container.mozRequestFullScreen();
					else if (this.container.webkitRequestFullscreen) this.container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
					else {
						if (!this.container.msRequestFullscreen) return !1;
						this.container.msRequestFullscreen()
					}
					return this.args = {
						page: this.pdfViewer.currentPageNumber,
						previousScale: this.pdfViewer.currentScaleValue
					}, !0
				}
			}, {
				key: "_mouseWheel",
				value: function(e) {
					if (this.active) {
						e.preventDefault();
						var t = (0, r.normalizeWheelEventDelta)(e),
							n = (new Date).getTime(),
							i = this.mouseScrollTimeStamp;
						if (!(n > i && n - i < 50) && ((this.mouseScrollDelta > 0 && t < 0 || this.mouseScrollDelta < 0 && t > 0) && this._resetMouseScrollState(), this.mouseScrollDelta += t, Math.abs(this.mouseScrollDelta) >= .1)) {
							var a = this.mouseScrollDelta;
							this._resetMouseScrollState(), (a > 0 ? this._goToPreviousPage() : this._goToNextPage()) && (this.mouseScrollTimeStamp = n)
						}
					}
				}
			}, {
				key: "_goToPreviousPage",
				value: function() {
					var e = this.pdfViewer.currentPageNumber;
					return !(e <= 1) && (this.pdfViewer.currentPageNumber = e - 1, !0)
				}
			}, {
				key: "_goToNextPage",
				value: function() {
					var e = this.pdfViewer.currentPageNumber;
					return !(e >= this.pdfViewer.pagesCount) && (this.pdfViewer.currentPageNumber = e + 1, !0)
				}
			}, {
				key: "_notifyStateChange",
				value: function() {
					this.eventBus.dispatch("presentationmodechanged", {
						source: this,
						active: this.active,
						switchInProgress: !!this.switchInProgress
					})
				}
			}, {
				key: "_setSwitchInProgress",
				value: function() {
					var e = this;
					this.switchInProgress && clearTimeout(this.switchInProgress), this.switchInProgress = setTimeout(function() {
						e._removeFullscreenChangeListeners(), delete e.switchInProgress, e._notifyStateChange()
					}, 1500)
				}
			}, {
				key: "_resetSwitchInProgress",
				value: function() {
					this.switchInProgress && (clearTimeout(this.switchInProgress), delete this.switchInProgress)
				}
			}, {
				key: "_enter",
				value: function() {
					var e = this;
					this.active = !0, this._resetSwitchInProgress(), this._notifyStateChange(), this.container.classList.add("pdfPresentationMode"), setTimeout(function() {
						e.pdfViewer.currentPageNumber = e.args.page, e.pdfViewer.currentScaleValue = "page-fit"
					}, 0), this._addWindowListeners(), this._showControls(), this.contextMenuOpen = !1, this.container.setAttribute("contextmenu", "viewerContextMenu"), window.getSelection().removeAllRanges()
				}
			}, {
				key: "_exit",
				value: function() {
					var e = this,
						t = this.pdfViewer.currentPageNumber;
					this.container.classList.remove("pdfPresentationMode"), setTimeout(function() {
						e.active = !1, e._removeFullscreenChangeListeners(), e._notifyStateChange(), e.pdfViewer.currentScaleValue = e.args.previousScale, e.pdfViewer.currentPageNumber = t, e.args = null
					}, 0), this._removeWindowListeners(), this._hideControls(), this._resetMouseScrollState(), this.container.removeAttribute("contextmenu"), this.contextMenuOpen = !1
				}
			}, {
				key: "_mouseDown",
				value: function(e) {
					if (this.contextMenuOpen) return this.contextMenuOpen = !1, void e.preventDefault();
					0 === e.button && (e.target.href && e.target.classList.contains("internalLink") || (e.preventDefault(), e.shiftKey ? this._goToPreviousPage() : this._goToNextPage()))
				}
			}, {
				key: "_contextMenu",
				value: function() {
					this.contextMenuOpen = !0
				}
			}, {
				key: "_showControls",
				value: function() {
					var e = this;
					this.controlsTimeout ? clearTimeout(this.controlsTimeout) : this.container.classList.add("pdfPresentationModeControls"), this.controlsTimeout = setTimeout(function() {
						e.container.classList.remove("pdfPresentationModeControls"), delete e.controlsTimeout
					}, 3e3)
				}
			}, {
				key: "_hideControls",
				value: function() {
					this.controlsTimeout && (clearTimeout(this.controlsTimeout), this.container.classList.remove("pdfPresentationModeControls"), delete this.controlsTimeout)
				}
			}, {
				key: "_resetMouseScrollState",
				value: function() {
					this.mouseScrollTimeStamp = 0, this.mouseScrollDelta = 0
				}
			}, {
				key: "_touchSwipe",
				value: function(e) {
					if (this.active)
						if (e.touches.length > 1) this.touchSwipeState = null;
						else switch (e.type) {
							case "touchstart":
								this.touchSwipeState = {
									startX: e.touches[0].pageX,
									startY: e.touches[0].pageY,
									endX: e.touches[0].pageX,
									endY: e.touches[0].pageY
								};
								break;
							case "touchmove":
								if (null === this.touchSwipeState) return;
								this.touchSwipeState.endX = e.touches[0].pageX, this.touchSwipeState.endY = e.touches[0].pageY, e.preventDefault();
								break;
							case "touchend":
								if (null === this.touchSwipeState) return;
								var t = 0,
									n = this.touchSwipeState.endX - this.touchSwipeState.startX,
									i = this.touchSwipeState.endY - this.touchSwipeState.startY,
									r = Math.abs(Math.atan2(i, n));
								Math.abs(n) > 50 && (r <= a || r >= Math.PI - a) ? t = n : Math.abs(i) > 50 && Math.abs(r - Math.PI / 2) <= a && (t = i), t > 0 ? this._goToPreviousPage() : t < 0 && this._goToNextPage()
						}
				}
			}, {
				key: "_addWindowListeners",
				value: function() {
					this.showControlsBind = this._showControls.bind(this), this.mouseDownBind = this._mouseDown.bind(this), this.mouseWheelBind = this._mouseWheel.bind(this), this.resetMouseScrollStateBind = this._resetMouseScrollState.bind(this), this.contextMenuBind = this._contextMenu.bind(this), this.touchSwipeBind = this._touchSwipe.bind(this), window.addEventListener("mousemove", this.showControlsBind), window.addEventListener("mousedown", this.mouseDownBind), window.addEventListener("wheel", this.mouseWheelBind), window.addEventListener("keydown", this.resetMouseScrollStateBind), window.addEventListener("contextmenu", this.contextMenuBind), window.addEventListener("touchstart", this.touchSwipeBind), window.addEventListener("touchmove", this.touchSwipeBind), window.addEventListener("touchend", this.touchSwipeBind)
				}
			}, {
				key: "_removeWindowListeners",
				value: function() {
					window.removeEventListener("mousemove", this.showControlsBind), window.removeEventListener("mousedown", this.mouseDownBind), window.removeEventListener("wheel", this.mouseWheelBind), window.removeEventListener("keydown", this.resetMouseScrollStateBind), window.removeEventListener("contextmenu", this.contextMenuBind), window.removeEventListener("touchstart", this.touchSwipeBind), window.removeEventListener("touchmove", this.touchSwipeBind), window.removeEventListener("touchend", this.touchSwipeBind), delete this.showControlsBind, delete this.mouseDownBind, delete this.mouseWheelBind, delete this.resetMouseScrollStateBind, delete this.contextMenuBind, delete this.touchSwipeBind
				}
			}, {
				key: "_fullscreenChange",
				value: function() {
					this.isFullscreen ? this._enter() : this._exit()
				}
			}, {
				key: "_addFullscreenChangeListeners",
				value: function() {
					this.fullscreenChangeBind = this._fullscreenChange.bind(this), window.addEventListener("fullscreenchange", this.fullscreenChangeBind), window.addEventListener("mozfullscreenchange", this.fullscreenChangeBind), window.addEventListener("webkitfullscreenchange", this.fullscreenChangeBind), window.addEventListener("MSFullscreenChange", this.fullscreenChangeBind)
				}
			}, {
				key: "_removeFullscreenChangeListeners",
				value: function() {
					window.removeEventListener("fullscreenchange", this.fullscreenChangeBind), window.removeEventListener("mozfullscreenchange", this.fullscreenChangeBind), window.removeEventListener("webkitfullscreenchange", this.fullscreenChangeBind), window.removeEventListener("MSFullscreenChange", this.fullscreenChangeBind), delete this.fullscreenChangeBind
				}
			}, {
				key: "isFullscreen",
				get: function() {
					return !!(document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement)
				}
			}]), e
		}();
	t.PDFPresentationMode = o
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFSidebarResizer = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(6);
	var a = "--sidebar-width",
		o = 200,
		s = function() {
			function e(t, n) {
				var i = this,
					s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.NullL10n;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.enabled = !1, this.isRTL = !1, this.sidebarOpen = !1, this.doc = document.documentElement, this._width = null, this._outerContainerWidth = null, this._boundEvents = Object.create(null), this.outerContainer = t.outerContainer, this.resizer = t.resizer, this.eventBus = n, this.l10n = s, "undefined" != typeof CSS && "function" == typeof CSS.supports && CSS.supports(a, "calc(-1 * " + o + "px)") ? (this.enabled = !0, this.resizer.classList.remove("hidden"), this.l10n.getDirection().then(function(e) {
					i.isRTL = "rtl" === e
				}), this._addEventListeners()) : console.warn("PDFSidebarResizer: The browser does not support resizing of the sidebar.")
			}
			return i(e, [{
				key: "_updateWidth",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
					if (!this.enabled) return !1;
					var t = Math.floor(this.outerContainerWidth / 2);
					return e > t && (e = t), e < o && (e = o), e !== this._width && (this._width = e, this.doc.style.setProperty(a, e + "px"), !0)
				}
			}, {
				key: "_mouseMove",
				value: function(e) {
					var t = e.clientX;
					this.isRTL && (t = this.outerContainerWidth - t), this._updateWidth(t)
				}
			}, {
				key: "_mouseUp",
				value: function(e) {
					this.outerContainer.classList.remove("sidebarResizing"), this.eventBus.dispatch("resize", {
						source: this
					});
					var t = this._boundEvents;
					window.removeEventListener("mousemove", t.mouseMove), window.removeEventListener("mouseup", t.mouseUp)
				}
			}, {
				key: "_addEventListeners",
				value: function() {
					var e = this;
					if (this.enabled) {
						var t = this._boundEvents;
						t.mouseMove = this._mouseMove.bind(this), t.mouseUp = this._mouseUp.bind(this), this.resizer.addEventListener("mousedown", function(n) {
							0 === n.button && (e.outerContainer.classList.add("sidebarResizing"), window.addEventListener("mousemove", t.mouseMove), window.addEventListener("mouseup", t.mouseUp))
						}), this.eventBus.on("sidebarviewchanged", function(t) {
							e.sidebarOpen = !(!t || !t.view)
						}), this.eventBus.on("resize", function(t) {
							if (t && t.source === window && (e._outerContainerWidth = null, e._width))
								if (e.sidebarOpen) {
									e.outerContainer.classList.add("sidebarResizing");
									var n = e._updateWidth(e._width);
									Promise.resolve().then(function() {
										e.outerContainer.classList.remove("sidebarResizing"), n && e.eventBus.dispatch("resize", {
											source: e
										})
									})
								} else e._updateWidth(e._width)
						})
					}
				}
			}, {
				key: "outerContainerWidth",
				get: function() {
					return this._outerContainerWidth || (this._outerContainerWidth = this.outerContainer.clientWidth), this._outerContainerWidth
				}
			}]), e
		}();
	t.PDFSidebarResizer = s
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFThumbnailViewer = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(6),
		a = n(28);
	var o = function() {
		function e(t) {
			var n = t.container,
				i = t.linkService,
				a = t.renderingQueue,
				o = t.l10n,
				s = void 0 === o ? r.NullL10n : o;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.container = n, this.linkService = i, this.renderingQueue = a, this.l10n = s, this.scroll = (0, r.watchScroll)(this.container, this._scrollUpdated.bind(this)), this._resetView()
		}
		return i(e, [{
			key: "_scrollUpdated",
			value: function() {
				this.renderingQueue.renderHighestPriority()
			}
		}, {
			key: "getThumbnail",
			value: function(e) {
				return this._thumbnails[e]
			}
		}, {
			key: "_getVisibleThumbs",
			value: function() {
				return (0, r.getVisibleElements)(this.container, this._thumbnails)
			}
		}, {
			key: "scrollThumbnailIntoView",
			value: function(e) {
				if (this.pdfDocument) {
					var t = this._thumbnails[e - 1];
					if (t) {
						if (e !== this._currentPageNumber) this._thumbnails[this._currentPageNumber - 1].div.classList.remove("selected"), t.div.classList.add("selected");
						var n = this._getVisibleThumbs(),
							i = n.views.length;
						if (i > 0) {
							var a = n.first.id,
								o = i > 1 ? n.last.id : a,
								s = !1;
							e <= a || e >= o ? s = !0 : n.views.some(function(t) {
								return t.id === e && (s = t.percent < 100, !0)
							}), s && (0, r.scrollIntoView)(t.div, {
								top: -19
							})
						}
						this._currentPageNumber = e
					} else console.error('scrollThumbnailIntoView: Invalid "pageNumber" parameter.')
				}
			}
		}, {
			key: "cleanup",
			value: function() {
				a.PDFThumbnailView.cleanup()
			}
		}, {
			key: "_resetView",
			value: function() {
				this._thumbnails = [], this._currentPageNumber = 1, this._pageLabels = null, this._pagesRotation = 0, this._pagesRequests = [], this.container.textContent = ""
			}
		}, {
			key: "setDocument",
			value: function(e) {
				var t = this;
				this.pdfDocument && (this._cancelRendering(), this._resetView()), this.pdfDocument = e, e && e.getPage(1).then(function(n) {
					for (var i = e.numPages, r = n.getViewport(1), o = 1; o <= i; ++o) {
						var s = new a.PDFThumbnailView({
							container: t.container,
							id: o,
							defaultViewport: r.clone(),
							linkService: t.linkService,
							renderingQueue: t.renderingQueue,
							disableCanvasToImageConversion: !1,
							l10n: t.l10n
						});
						t._thumbnails.push(s)
					}
					t._thumbnails[t._currentPageNumber - 1].div.classList.add("selected")
				}).catch(function(e) {
					console.error("Unable to initialize thumbnail viewer", e)
				})
			}
		}, {
			key: "_cancelRendering",
			value: function() {
				for (var e = 0, t = this._thumbnails.length; e < t; e++) this._thumbnails[e] && this._thumbnails[e].cancelRendering()
			}
		}, {
			key: "setPageLabels",
			value: function(e) {
				if (this.pdfDocument) {
					e ? Array.isArray(e) && this.pdfDocument.numPages === e.length ? this._pageLabels = e : (this._pageLabels = null, console.error("PDFThumbnailViewer_setPageLabels: Invalid page labels.")) : this._pageLabels = null;
					for (var t = 0, n = this._thumbnails.length; t < n; t++) {
						var i = this._pageLabels && this._pageLabels[t];
						this._thumbnails[t].setPageLabel(i)
					}
				}
			}
		}, {
			key: "_ensurePdfPageLoaded",
			value: function(e) {
				var t = this;
				if (e.pdfPage) return Promise.resolve(e.pdfPage);
				var n = e.id;
				if (this._pagesRequests[n]) return this._pagesRequests[n];
				var i = this.pdfDocument.getPage(n).then(function(i) {
					return e.setPdfPage(i), t._pagesRequests[n] = null, i
				}).catch(function(e) {
					console.error("Unable to get page for thumb view", e), t._pagesRequests[n] = null
				});
				return this._pagesRequests[n] = i, i
			}
		}, {
			key: "forceRendering",
			value: function() {
				var e = this,
					t = this._getVisibleThumbs(),
					n = this.renderingQueue.getHighestPriority(t, this._thumbnails, this.scroll.down);
				return !!n && (this._ensurePdfPageLoaded(n).then(function() {
					e.renderingQueue.renderView(n)
				}), !0)
			}
		}, {
			key: "pagesRotation",
			get: function() {
				return this._pagesRotation
			},
			set: function(e) {
				if (!(0, r.isValidRotation)(e)) throw new Error("Invalid thumbnails rotation angle.");
				if (this.pdfDocument && this._pagesRotation !== e) {
					this._pagesRotation = e;
					for (var t = 0, n = this._thumbnails.length; t < n; t++) this._thumbnails[t].update(e)
				}
			}
		}]), e
	}();
	t.PDFThumbnailViewer = o
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFThumbnailView = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(7),
		a = n(6),
		o = n(10);
	var s, u = 1,
		l = 98,
		c = (s = null, {
			getCanvas: function(e, t) {
				var n = s;
				n || (n = document.createElement("canvas"), s = n), n.width = e, n.height = t, n.mozOpaque = !0;
				var i = n.getContext("2d", {
					alpha: !1
				});
				return i.save(), i.fillStyle = "rgb(255, 255, 255)", i.fillRect(0, 0, e, t), i.restore(), n
			},
			destroyCanvas: function() {
				var e = s;
				e && (e.width = 0, e.height = 0), s = null
			}
		}),
		d = function() {
			function e(t) {
				var n = t.container,
					i = t.id,
					r = t.defaultViewport,
					s = t.linkService,
					c = t.renderingQueue,
					d = t.disableCanvasToImageConversion,
					h = void 0 !== d && d,
					f = t.l10n,
					p = void 0 === f ? a.NullL10n : f;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.id = i, this.renderingId = "thumbnail" + i, this.pageLabel = null, this.pdfPage = null, this.rotation = 0, this.viewport = r, this.pdfPageRotate = r.rotation, this.linkService = s, this.renderingQueue = c, this.renderTask = null, this.renderingState = o.RenderingStates.INITIAL, this.resume = null, this.disableCanvasToImageConversion = h, this.pageWidth = this.viewport.width, this.pageHeight = this.viewport.height, this.pageRatio = this.pageWidth / this.pageHeight, this.canvasWidth = l, this.canvasHeight = this.canvasWidth / this.pageRatio | 0, this.scale = this.canvasWidth / this.pageWidth, this.l10n = p;
				var v = document.createElement("a");
				v.href = s.getAnchorUrl("#page=" + i), this.l10n.get("thumb_page_title", {
					page: i
				}, "Page {{page}}").then(function(e) {
					v.title = e
				}), v.onclick = function() {
					return s.page = i, !1
				}, this.anchor = v;
				var g = document.createElement("div");
				g.className = "thumbnail", g.setAttribute("data-page-number", this.id), this.div = g;
				var m = document.createElement("div");
				m.className = "thumbnailSelectionRing";
				var w = 2 * u;
				m.style.width = this.canvasWidth + w + "px", m.style.height = this.canvasHeight + w + "px", this.ring = m, g.appendChild(m), v.appendChild(g), n.appendChild(v)
			}
			return i(e, [{
				key: "setPdfPage",
				value: function(e) {
					this.pdfPage = e, this.pdfPageRotate = e.rotate;
					var t = (this.rotation + this.pdfPageRotate) % 360;
					this.viewport = e.getViewport(1, t), this.reset()
				}
			}, {
				key: "reset",
				value: function() {
					this.cancelRendering(), this.pageWidth = this.viewport.width, this.pageHeight = this.viewport.height, this.pageRatio = this.pageWidth / this.pageHeight, this.canvasHeight = this.canvasWidth / this.pageRatio | 0, this.scale = this.canvasWidth / this.pageWidth, this.div.removeAttribute("data-loaded");
					for (var e = this.ring, t = e.childNodes, n = t.length - 1; n >= 0; n--) e.removeChild(t[n]);
					var i = 2 * u;
					e.style.width = this.canvasWidth + i + "px", e.style.height = this.canvasHeight + i + "px", this.canvas && (this.canvas.width = 0, this.canvas.height = 0, delete this.canvas), this.image && (this.image.removeAttribute("src"), delete this.image)
				}
			}, {
				key: "update",
				value: function(e) {
					void 0 !== e && (this.rotation = e);
					var t = (this.rotation + this.pdfPageRotate) % 360;
					this.viewport = this.viewport.clone({
						scale: 1,
						rotation: t
					}), this.reset()
				}
			}, {
				key: "cancelRendering",
				value: function() {
					this.renderTask && (this.renderTask.cancel(), this.renderTask = null), this.renderingState = o.RenderingStates.INITIAL, this.resume = null
				}
			}, {
				key: "_getPageDrawContext",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = document.createElement("canvas");
					this.canvas = t, t.mozOpaque = !0;
					var n = t.getContext("2d", {
							alpha: !1
						}),
						i = (0, a.getOutputScale)(n);
					return t.width = this.canvasWidth * i.sx | 0, t.height = this.canvasHeight * i.sy | 0, t.style.width = this.canvasWidth + "px", t.style.height = this.canvasHeight + "px", !e && i.scaled && n.scale(i.sx, i.sy), n
				}
			}, {
				key: "_convertCanvasToImage",
				value: function() {
					var e = this;
					if (this.canvas && this.renderingState === o.RenderingStates.FINISHED) {
						var t = this.renderingId;
						if (this.disableCanvasToImageConversion) return this.canvas.id = t, this.canvas.className = "thumbnailImage", this.l10n.get("thumb_page_canvas", {
							page: this.pageId
						}, "Thumbnail of Page {{page}}").then(function(t) {
							e.canvas.setAttribute("aria-label", t)
						}), this.div.setAttribute("data-loaded", !0), void this.ring.appendChild(this.canvas);
						var n = document.createElement("img");
						n.id = t, n.className = "thumbnailImage", this.l10n.get("thumb_page_canvas", {
							page: this.pageId
						}, "Thumbnail of Page {{page}}").then(function(e) {
							n.setAttribute("aria-label", e)
						}), n.style.width = this.canvasWidth + "px", n.style.height = this.canvasHeight + "px", n.src = this.canvas.toDataURL(), this.image = n, this.div.setAttribute("data-loaded", !0), this.ring.appendChild(n), this.canvas.width = 0, this.canvas.height = 0, delete this.canvas
					}
				}
			}, {
				key: "draw",
				value: function() {
					var e = this;
					if (this.renderingState !== o.RenderingStates.INITIAL) return console.error("Must be in new state before drawing"), Promise.resolve(void 0);
					this.renderingState = o.RenderingStates.RUNNING;
					var t = (0, r.createPromiseCapability)(),
						n = function(n) {
							a === e.renderTask && (e.renderTask = null), n instanceof r.RenderingCancelledException ? t.resolve(void 0) : (e.renderingState = o.RenderingStates.FINISHED, e._convertCanvasToImage(), n ? t.reject(n) : t.resolve(void 0))
						},
						i = {
							canvasContext: this._getPageDrawContext(),
							viewport: this.viewport.clone({
								scale: this.scale
							})
						},
						a = this.renderTask = this.pdfPage.render(i);
					return a.onContinue = function(t) {
						if (!e.renderingQueue.isHighestPriority(e)) return e.renderingState = o.RenderingStates.PAUSED, void(e.resume = function() {
							e.renderingState = o.RenderingStates.RUNNING, t()
						});
						t()
					}, a.promise.then(function() {
						n(null)
					}, function(e) {
						n(e)
					}), t.promise
				}
			}, {
				key: "setImage",
				value: function(e) {
					if (this.renderingState === o.RenderingStates.INITIAL) {
						var t = e.canvas;
						if (t) {
							this.pdfPage || this.setPdfPage(e.pdfPage), this.renderingState = o.RenderingStates.FINISHED;
							var n = this._getPageDrawContext(!0),
								i = n.canvas;
							if (t.width <= 2 * i.width) return n.drawImage(t, 0, 0, t.width, t.height, 0, 0, i.width, i.height), void this._convertCanvasToImage();
							for (var r = i.width << 3, a = i.height << 3, s = c.getCanvas(r, a), u = s.getContext("2d"); r > t.width || a > t.height;) r >>= 1, a >>= 1;
							for (u.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, a); r > 2 * i.width;) u.drawImage(s, 0, 0, r, a, 0, 0, r >> 1, a >> 1), r >>= 1, a >>= 1;
							n.drawImage(s, 0, 0, r, a, 0, 0, i.width, i.height), this._convertCanvasToImage()
						}
					}
				}
			}, {
				key: "setPageLabel",
				value: function(e) {
					var t = this;
					this.pageLabel = "string" == typeof e ? e : null, this.l10n.get("thumb_page_title", {
						page: this.pageId
					}, "Page {{page}}").then(function(e) {
						t.anchor.title = e
					}), this.renderingState === o.RenderingStates.FINISHED && this.l10n.get("thumb_page_canvas", {
						page: this.pageId
					}, "Thumbnail of Page {{page}}").then(function(e) {
						t.image ? t.image.setAttribute("aria-label", e) : t.disableCanvasToImageConversion && t.canvas && t.canvas.setAttribute("aria-label", e)
					})
				}
			}, {
				key: "pageId",
				get: function() {
					return null !== this.pageLabel ? this.pageLabel : this.id
				}
			}], [{
				key: "cleanup",
				value: function() {
					c.destroyCanvas()
				}
			}]), e
		}();
	t.PDFThumbnailView = d
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFViewer = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(30),
		a = n(6),
		o = n(7);
	var s = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, r.BaseViewer), i(t, [{
			key: "_scrollIntoView",
			value: function(e) {
				var t = e.pageDiv,
					n = e.pageSpot,
					i = void 0 === n ? null : n;
				if (!i && !this.isInPresentationMode) {
					var o = t.offsetLeft + t.clientLeft,
						s = o + t.clientWidth,
						u = this.container,
						l = u.scrollLeft,
						c = u.clientWidth;
					(this._scrollMode === r.ScrollMode.HORIZONTAL || o < l || s > l + c) && (i = {
						left: 0,
						top: 0
					})
				}(0, a.scrollIntoView)(t, i)
			}
		}, {
			key: "_getVisiblePages",
			value: function() {
				if (!this.isInPresentationMode) return (0, a.getVisibleElements)(this.container, this._pages, !0, this._scrollMode === r.ScrollMode.HORIZONTAL);
				var e = this._pages[this._currentPageNumber - 1];
				return {
					first: e,
					last: e,
					views: [{
						id: e.id,
						view: e
					}]
				}
			}
		}, {
			key: "update",
			value: function() {
				var e = this._getVisiblePages(),
					t = e.views,
					n = t.length;
				if (0 !== n) {
					this._resizeBuffer(n, t), this.renderingQueue.renderHighestPriority(e);
					for (var i = this._currentPageNumber, r = !1, a = 0; a < n; ++a) {
						var o = t[a];
						if (o.percent < 100) break;
						if (o.id === i) {
							r = !0;
							break
						}
					}
					r || (i = t[0].id), this.isInPresentationMode || this._setCurrentPageNumber(i), this._updateLocation(e.first), this.eventBus.dispatch("updateviewarea", {
						source: this,
						location: this._location
					})
				}
			}
		}, {
			key: "_setDocumentViewerElement",
			get: function() {
				return (0, o.shadow)(this, "_setDocumentViewerElement", this.viewer)
			}
		}, {
			key: "_isScrollModeHorizontal",
			get: function() {
				return !this.isInPresentationMode && this._scrollMode === r.ScrollMode.HORIZONTAL
			}
		}]), t
	}();
	t.PDFViewer = s
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.SpreadMode = t.ScrollMode = t.BaseViewer = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(6),
		a = n(10),
		o = n(31),
		s = n(7),
		u = n(14),
		l = n(32),
		c = n(23),
		d = n(33);
	var h = {
			VERTICAL: 0,
			HORIZONTAL: 1,
			WRAPPED: 2
		},
		f = {
			NONE: 0,
			ODD: 1,
			EVEN: 2
		};

	function p(e) {
		var t = [];
		this.push = function(n) {
			var i = t.indexOf(n);
			i >= 0 && t.splice(i, 1), t.push(n), t.length > e && t.shift().destroy()
		}, this.resize = function(n, i) {
			if (e = n, i) {
				for (var a = new Set, o = 0, s = i.length; o < s; ++o) a.add(i[o].id);
				(0, r.moveToEndOfArray)(t, function(e) {
					return a.has(e.id)
				})
			}
			for (; t.length > e;) t.shift().destroy()
		}
	}
	var v = function() {
		function e(t) {
			var n = this;
			if (function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.constructor === e) throw new Error("Cannot initialize BaseViewer.");
			this._name = this.constructor.name, this.container = t.container, this.viewer = t.viewer || t.container.firstElementChild, this.eventBus = t.eventBus || (0, u.getGlobalEventBus)(), this.linkService = t.linkService || new c.SimpleLinkService, this.downloadManager = t.downloadManager || null, this.findController = t.findController || null, this.removePageBorders = t.removePageBorders || !1, this.textLayerMode = Number.isInteger(t.textLayerMode) ? t.textLayerMode : r.TextLayerMode.ENABLE, this.imageResourcesPath = t.imageResourcesPath || "", this.renderInteractiveForms = t.renderInteractiveForms || !1, this.enablePrintAutoRotate = t.enablePrintAutoRotate || !1, this.renderer = t.renderer || r.RendererType.CANVAS, this.enableWebGL = t.enableWebGL || !1, this.useOnlyCssZoom = t.useOnlyCssZoom || !1, this.maxCanvasPixels = t.maxCanvasPixels, this.l10n = t.l10n || r.NullL10n, this.defaultRenderingQueue = !t.renderingQueue, this.defaultRenderingQueue ? (this.renderingQueue = new a.PDFRenderingQueue, this.renderingQueue.setViewer(this)) : this.renderingQueue = t.renderingQueue, this.scroll = (0, r.watchScroll)(this.container, this._scrollUpdate.bind(this)), this.presentationModeState = r.PresentationModeState.UNKNOWN, this._resetView(), this.removePageBorders && this.viewer.classList.add("removePageBorders"), Promise.resolve().then(function() {
				n.eventBus.dispatch("baseviewerinit", {
					source: n
				})
			})
		}
		return i(e, [{
			key: "getPageView",
			value: function(e) {
				return this._pages[e]
			}
		}, {
			key: "_setCurrentPageNumber",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (this._currentPageNumber !== e)
					if (0 < e && e <= this.pagesCount) {
						var n = {
							source: this,
							pageNumber: e,
							pageLabel: this._pageLabels && this._pageLabels[e - 1]
						};
						this._currentPageNumber = e, this.eventBus.dispatch("pagechanging", n), this.eventBus.dispatch("pagechange", n), t && this._resetCurrentPageView()
					} else console.error(this._name + '._setCurrentPageNumber: "' + e + '" is out of bounds.');
				else t && this._resetCurrentPageView()
			}
		}, {
			key: "setDocument",
			value: function(e) {
				var t = this;
				if (this.pdfDocument && (this._cancelRendering(), this._resetView(), this.findController && this.findController.setDocument(null)), this.pdfDocument = e, e) {
					var n = e.numPages,
						i = (0, s.createPromiseCapability)();
					this.pagesPromise = i.promise, i.promise.then(function() {
						t._pageViewsReady = !0, t.eventBus.dispatch("pagesloaded", {
							source: t,
							pagesCount: n
						})
					});
					var a = !1,
						o = (0, s.createPromiseCapability)();
					this.onePageRendered = o.promise;
					var u = function(e) {
							e.onBeforeDraw = function() {
								t._buffer.push(e)
							}, e.onAfterDraw = function() {
								a || (a = !0, o.resolve())
							}
						},
						c = e.getPage(1);
					this.firstPagePromise = c, c.then(function(a) {
						for (var s = t.currentScale, c = a.getViewport(s * r.CSS_UNITS), d = 1; d <= n; ++d) {
							var h = null;
							t.textLayerMode !== r.TextLayerMode.DISABLE && (h = t);
							var p = new l.PDFPageView({
								container: t._setDocumentViewerElement,
								eventBus: t.eventBus,
								id: d,
								scale: s,
								defaultViewport: c.clone(),
								renderingQueue: t.renderingQueue,
								textLayerFactory: h,
								textLayerMode: t.textLayerMode,
								annotationLayerFactory: t,
								imageResourcesPath: t.imageResourcesPath,
								renderInteractiveForms: t.renderInteractiveForms,
								renderer: t.renderer,
								enableWebGL: t.enableWebGL,
								useOnlyCssZoom: t.useOnlyCssZoom,
								maxCanvasPixels: t.maxCanvasPixels,
								l10n: t.l10n
							});
							u(p), t._pages.push(p)
						}
						t._spreadMode !== f.NONE && t._updateSpreadMode(), o.promise.then(function() {
							if (e.loadingParams.disableAutoFetch) i.resolve();
							else
								for (var r = n, a = function(n) {
										e.getPage(n).then(function(e) {
											var a = t._pages[n - 1];
											a.pdfPage || a.setPdfPage(e), t.linkService.cachePageRef(n, e.ref), 0 == --r && i.resolve()
										}, function(e) {
											console.error("Unable to get page " + n + " to initialize viewer", e), 0 == --r && i.resolve()
										})
									}, o = 1; o <= n; ++o) a(o)
						}), t.eventBus.dispatch("pagesinit", {
							source: t
						}), t.findController && t.findController.setDocument(e), t.defaultRenderingQueue && t.update()
					}).catch(function(e) {
						console.error("Unable to initialize viewer", e)
					})
				}
			}
		}, {
			key: "setPageLabels",
			value: function(e) {
				if (this.pdfDocument) {
					e ? Array.isArray(e) && this.pdfDocument.numPages === e.length ? this._pageLabels = e : (this._pageLabels = null, console.error(this._name + ".setPageLabels: Invalid page labels.")) : this._pageLabels = null;
					for (var t = 0, n = this._pages.length; t < n; t++) {
						var i = this._pages[t],
							r = this._pageLabels && this._pageLabels[t];
						i.setPageLabel(r)
					}
				}
			}
		}, {
			key: "_resetView",
			value: function() {
				this._pages = [], this._currentPageNumber = 1, this._currentScale = r.UNKNOWN_SCALE, this._currentScaleValue = null, this._pageLabels = null, this._buffer = new p(10), this._location = null, this._pagesRotation = 0, this._pagesRequests = [], this._pageViewsReady = !1, this._scrollMode = h.VERTICAL, this._spreadMode = f.NONE, this.viewer.textContent = "", this._updateScrollMode()
			}
		}, {
			key: "_scrollUpdate",
			value: function() {
				0 !== this.pagesCount && this.update()
			}
		}, {
			key: "_scrollIntoView",
			value: function(e) {
				e.pageDiv, e.pageSpot, e.pageNumber;
				throw new Error("Not implemented: _scrollIntoView")
			}
		}, {
			key: "_setScaleDispatchEvent",
			value: function(e, t) {
				var n = {
					source: this,
					scale: e,
					presetValue: arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? t : void 0
				};
				this.eventBus.dispatch("scalechanging", n), this.eventBus.dispatch("scalechange", n)
			}
		}, {
			key: "_setScaleUpdatePages",
			value: function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				if (this._currentScaleValue = t.toString(), function(e, t) {
						return t === e || Math.abs(t - e) < 1e-15
					}(this._currentScale, e)) i && this._setScaleDispatchEvent(e, t, !0);
				else {
					for (var r = 0, a = this._pages.length; r < a; r++) this._pages[r].update(e);
					if (this._currentScale = e, !n) {
						var o = this._currentPageNumber,
							s = void 0;
						!this._location || this.isInPresentationMode || this.isChangingPresentationMode || (o = this._location.pageNumber, s = [null, {
							name: "XYZ"
						}, this._location.left, this._location.top, null]), this.scrollPageIntoView({
							pageNumber: o,
							destArray: s,
							allowNegativeOffset: !0
						})
					}
					this._setScaleDispatchEvent(e, t, i), this.defaultRenderingQueue && this.update()
				}
			}
		}, {
			key: "_setScale",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = parseFloat(e);
				if (n > 0) this._setScaleUpdatePages(n, e, t, !1);
				else {
					var i = this._pages[this._currentPageNumber - 1];
					if (!i) return;
					var a = this.isInPresentationMode || this.removePageBorders,
						o = a ? 0 : r.SCROLLBAR_PADDING,
						s = a ? 0 : r.VERTICAL_PADDING;
					if (!a && this._isScrollModeHorizontal) {
						var u = [s, o];
						o = u[0], s = u[1]
					}
					var l = (this.container.clientWidth - o) / i.width * i.scale,
						c = (this.container.clientHeight - s) / i.height * i.scale;
					switch (e) {
						case "page-actual":
							n = 1;
							break;
						case "page-width":
							n = l;
							break;
						case "page-height":
							n = c;
							break;
						case "page-fit":
							n = Math.min(l, c);
							break;
						case "auto":
							var d = (0, r.isPortraitOrientation)(i) ? l : Math.min(c, l);
							n = Math.min(r.MAX_AUTO_SCALE, d);
							break;
						default:
							return void console.error(this._name + '._setScale: "' + e + '" is an unknown zoom value.')
					}
					this._setScaleUpdatePages(n, e, t, !0)
				}
			}
		}, {
			key: "_resetCurrentPageView",
			value: function() {
				this.isInPresentationMode && this._setScale(this._currentScaleValue, !0);
				var e = this._pages[this._currentPageNumber - 1];
				this._scrollIntoView({
					pageDiv: e.div
				})
			}
		}, {
			key: "scrollPageIntoView",
			value: function(e) {
				if (this.pdfDocument) {
					var t = e.pageNumber || 0,
						n = e.destArray || null,
						i = e.allowNegativeOffset || !1;
					if (!this.isInPresentationMode && n) {
						var a = this._pages[t - 1];
						if (a) {
							var o = 0,
								s = 0,
								u = 0,
								l = 0,
								c = void 0,
								d = void 0,
								h = a.rotation % 180 != 0,
								f = (h ? a.height : a.width) / a.scale / r.CSS_UNITS,
								p = (h ? a.width : a.height) / a.scale / r.CSS_UNITS,
								v = 0;
							switch (n[1].name) {
								case "XYZ":
									o = n[2], s = n[3], v = n[4], o = null !== o ? o : 0, s = null !== s ? s : p;
									break;
								case "Fit":
								case "FitB":
									v = "page-fit";
									break;
								case "FitH":
								case "FitBH":
									v = "page-width", null === (s = n[2]) && this._location && (o = this._location.left, s = this._location.top);
									break;
								case "FitV":
								case "FitBV":
									o = n[2], u = f, l = p, v = "page-height";
									break;
								case "FitR":
									o = n[2], s = n[3], u = n[4] - o, l = n[5] - s;
									var g = this.removePageBorders ? 0 : r.SCROLLBAR_PADDING,
										m = this.removePageBorders ? 0 : r.VERTICAL_PADDING;
									c = (this.container.clientWidth - g) / u / r.CSS_UNITS, d = (this.container.clientHeight - m) / l / r.CSS_UNITS, v = Math.min(Math.abs(c), Math.abs(d));
									break;
								default:
									return void console.error(this._name + '.scrollPageIntoView: "' + n[1].name + '" is not a valid destination type.')
							}
							if (v && v !== this._currentScale ? this.currentScaleValue = v : this._currentScale === r.UNKNOWN_SCALE && (this.currentScaleValue = r.DEFAULT_SCALE_VALUE), "page-fit" !== v || n[4]) {
								var w = [a.viewport.convertToViewportPoint(o, s), a.viewport.convertToViewportPoint(o + u, s + l)],
									b = Math.min(w[0][0], w[1][0]),
									y = Math.min(w[0][1], w[1][1]);
								i || (b = Math.max(b, 0), y = Math.max(y, 0)), this._scrollIntoView({
									pageDiv: a.div,
									pageSpot: {
										left: b,
										top: y
									},
									pageNumber: t
								})
							} else this._scrollIntoView({
								pageDiv: a.div,
								pageNumber: t
							})
						} else console.error(this._name + '.scrollPageIntoView: Invalid "pageNumber" parameter.')
					} else this._setCurrentPageNumber(t, !0)
				}
			}
		}, {
			key: "_resizeBuffer",
			value: function(e, t) {
				var n = Math.max(10, 2 * e + 1);
				this._buffer.resize(n, t)
			}
		}, {
			key: "_updateLocation",
			value: function(e) {
				var t = this._currentScale,
					n = this._currentScaleValue,
					i = parseFloat(n) === t ? Math.round(1e4 * t) / 100 : n,
					r = e.id,
					a = "#page=" + r;
				a += "&zoom=" + i;
				var o = this._pages[r - 1],
					s = this.container,
					u = o.getPagePoint(s.scrollLeft - e.x, s.scrollTop - e.y),
					l = Math.round(u[0]),
					c = Math.round(u[1]);
				a += "," + l + "," + c, this._location = {
					pageNumber: r,
					scale: i,
					top: c,
					left: l,
					rotation: this._pagesRotation,
					pdfOpenParams: a
				}
			}
		}, {
			key: "update",
			value: function() {
				throw new Error("Not implemented: update")
			}
		}, {
			key: "containsElement",
			value: function(e) {
				return this.container.contains(e)
			}
		}, {
			key: "focus",
			value: function() {
				this.container.focus()
			}
		}, {
			key: "_getVisiblePages",
			value: function() {
				throw new Error("Not implemented: _getVisiblePages")
			}
		}, {
			key: "cleanup",
			value: function() {
				for (var e = 0, t = this._pages.length; e < t; e++) this._pages[e] && this._pages[e].renderingState !== a.RenderingStates.FINISHED && this._pages[e].reset()
			}
		}, {
			key: "_cancelRendering",
			value: function() {
				for (var e = 0, t = this._pages.length; e < t; e++) this._pages[e] && this._pages[e].cancelRendering()
			}
		}, {
			key: "_ensurePdfPageLoaded",
			value: function(e) {
				var t = this;
				if (e.pdfPage) return Promise.resolve(e.pdfPage);
				var n = e.id;
				if (this._pagesRequests[n]) return this._pagesRequests[n];
				var i = this.pdfDocument.getPage(n).then(function(i) {
					return e.pdfPage || e.setPdfPage(i), t._pagesRequests[n] = null, i
				}).catch(function(e) {
					console.error("Unable to get page for page view", e), t._pagesRequests[n] = null
				});
				return this._pagesRequests[n] = i, i
			}
		}, {
			key: "forceRendering",
			value: function(e) {
				var t = this,
					n = e || this._getVisiblePages(),
					i = this._isScrollModeHorizontal ? this.scroll.right : this.scroll.down,
					r = this.renderingQueue.getHighestPriority(n, this._pages, i);
				return !!r && (this._ensurePdfPageLoaded(r).then(function() {
					t.renderingQueue.renderView(r)
				}), !0)
			}
		}, {
			key: "createTextLayerBuilder",
			value: function(e, t, n) {
				var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				return new d.TextLayerBuilder({
					textLayerDiv: e,
					eventBus: this.eventBus,
					pageIndex: t,
					viewport: n,
					findController: this.isInPresentationMode ? null : this.findController,
					enhanceTextSelection: !this.isInPresentationMode && i
				})
			}
		}, {
			key: "createAnnotationLayerBuilder",
			value: function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
					i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
					a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.NullL10n;
				return new o.AnnotationLayerBuilder({
					pageDiv: e,
					pdfPage: t,
					imageResourcesPath: n,
					renderInteractiveForms: i,
					linkService: this.linkService,
					downloadManager: this.downloadManager,
					l10n: a
				})
			}
		}, {
			key: "getPagesOverview",
			value: function() {
				var e = this._pages.map(function(e) {
					var t = e.pdfPage.getViewport(1);
					return {
						width: t.width,
						height: t.height,
						rotation: t.rotation
					}
				});
				if (!this.enablePrintAutoRotate) return e;
				var t = (0, r.isPortraitOrientation)(e[0]);
				return e.map(function(e) {
					return t === (0, r.isPortraitOrientation)(e) ? e : {
						width: e.height,
						height: e.width,
						rotation: (e.rotation + 90) % 360
					}
				})
			}
		}, {
			key: "_updateScrollMode",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = this._scrollMode,
					n = this.viewer;
				n.classList.toggle("scrollHorizontal", t === h.HORIZONTAL), n.classList.toggle("scrollWrapped", t === h.WRAPPED), this.pdfDocument && e && (this._currentScaleValue && isNaN(this._currentScaleValue) && this._setScale(this._currentScaleValue, !0), this.scrollPageIntoView({
					pageNumber: e
				}), this.update())
			}
		}, {
			key: "_updateSpreadMode",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
				if (this.pdfDocument) {
					var t = this.viewer,
						n = this._pages;
					if (t.textContent = "", this._spreadMode === f.NONE)
						for (var i = 0, r = n.length; i < r; ++i) t.appendChild(n[i].div);
					else
						for (var a = this._spreadMode - 1, o = null, s = 0, u = n.length; s < u; ++s) null === o ? ((o = document.createElement("div")).className = "spread", t.appendChild(o)) : s % 2 === a && (o = o.cloneNode(!1), t.appendChild(o)), o.appendChild(n[s].div);
					e && (this.scrollPageIntoView({
						pageNumber: e
					}), this.update())
				}
			}
		}, {
			key: "pagesCount",
			get: function() {
				return this._pages.length
			}
		}, {
			key: "pageViewsReady",
			get: function() {
				return this._pageViewsReady
			}
		}, {
			key: "currentPageNumber",
			get: function() {
				return this._currentPageNumber
			},
			set: function(e) {
				if (!Number.isInteger(e)) throw new Error("Invalid page number.");
				this.pdfDocument && this._setCurrentPageNumber(e, !0)
			}
		}, {
			key: "currentPageLabel",
			get: function() {
				return this._pageLabels && this._pageLabels[this._currentPageNumber - 1]
			},
			set: function(e) {
				var t = 0 | e;
				if (this._pageLabels) {
					var n = this._pageLabels.indexOf(e);
					n >= 0 && (t = n + 1)
				}
				this.currentPageNumber = t
			}
		}, {
			key: "currentScale",
			get: function() {
				return this._currentScale !== r.UNKNOWN_SCALE ? this._currentScale : r.DEFAULT_SCALE
			},
			set: function(e) {
				if (isNaN(e)) throw new Error("Invalid numeric scale");
				this.pdfDocument && this._setScale(e, !1)
			}
		}, {
			key: "currentScaleValue",
			get: function() {
				return this._currentScaleValue
			},
			set: function(e) {
				this.pdfDocument && this._setScale(e, !1)
			}
		}, {
			key: "pagesRotation",
			get: function() {
				return this._pagesRotation
			},
			set: function(e) {
				if (!(0, r.isValidRotation)(e)) throw new Error("Invalid pages rotation angle.");
				if (this.pdfDocument && this._pagesRotation !== e) {
					this._pagesRotation = e;
					for (var t = this._currentPageNumber, n = 0, i = this._pages.length; n < i; n++) {
						var a = this._pages[n];
						a.update(a.scale, e)
					}
					this._currentScaleValue && this._setScale(this._currentScaleValue, !0), this.eventBus.dispatch("rotationchanging", {
						source: this,
						pagesRotation: e,
						pageNumber: t
					}), this.defaultRenderingQueue && this.update()
				}
			}
		}, {
			key: "_setDocumentViewerElement",
			get: function() {
				throw new Error("Not implemented: _setDocumentViewerElement")
			}
		}, {
			key: "_isScrollModeHorizontal",
			get: function() {
				throw new Error("Not implemented: _isScrollModeHorizontal")
			}
		}, {
			key: "isInPresentationMode",
			get: function() {
				return this.presentationModeState === r.PresentationModeState.FULLSCREEN
			}
		}, {
			key: "isChangingPresentationMode",
			get: function() {
				return this.presentationModeState === r.PresentationModeState.CHANGING
			}
		}, {
			key: "isHorizontalScrollbarEnabled",
			get: function() {
				return !this.isInPresentationMode && this.container.scrollWidth > this.container.clientWidth
			}
		}, {
			key: "isVerticalScrollbarEnabled",
			get: function() {
				return !this.isInPresentationMode && this.container.scrollHeight > this.container.clientHeight
			}
		}, {
			key: "hasEqualPageSizes",
			get: function() {
				for (var e = this._pages[0], t = 1, n = this._pages.length; t < n; ++t) {
					var i = this._pages[t];
					if (i.width !== e.width || i.height !== e.height) return !1
				}
				return !0
			}
		}, {
			key: "scrollMode",
			get: function() {
				return this._scrollMode
			},
			set: function(e) {
				if (this._scrollMode !== e) {
					if (!Number.isInteger(e) || !Object.values(h).includes(e)) throw new Error("Invalid scroll mode: " + e);
					this._scrollMode = e, this.eventBus.dispatch("scrollmodechanged", {
						source: this,
						mode: e
					}), this._updateScrollMode(this._currentPageNumber)
				}
			}
		}, {
			key: "spreadMode",
			get: function() {
				return this._spreadMode
			},
			set: function(e) {
				if (this._spreadMode !== e) {
					if (!Number.isInteger(e) || !Object.values(f).includes(e)) throw new Error("Invalid spread mode: " + e);
					this._spreadMode = e, this.eventBus.dispatch("spreadmodechanged", {
						source: this,
						mode: e
					}), this._updateSpreadMode(this._currentPageNumber)
				}
			}
		}]), e
	}();
	t.BaseViewer = v, t.ScrollMode = h, t.SpreadMode = f
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.DefaultAnnotationLayerFactory = t.AnnotationLayerBuilder = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(7),
		a = n(6),
		o = n(23);

	function s(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	var u = function() {
			function e(t) {
				var n = t.pageDiv,
					i = t.pdfPage,
					r = t.linkService,
					o = t.downloadManager,
					u = t.imageResourcesPath,
					l = void 0 === u ? "" : u,
					c = t.renderInteractiveForms,
					d = void 0 !== c && c,
					h = t.l10n,
					f = void 0 === h ? a.NullL10n : h;
				s(this, e), this.pageDiv = n, this.pdfPage = i, this.linkService = r, this.downloadManager = o, this.imageResourcesPath = l, this.renderInteractiveForms = d, this.l10n = f, this.div = null, this._cancelled = !1
			}
			return i(e, [{
				key: "render",
				value: function(e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "display";
					this.pdfPage.getAnnotations({
						intent: n
					}).then(function(n) {
						if (!t._cancelled) {
							var i = {
								viewport: e.clone({
									dontFlip: !0
								}),
								div: t.div,
								annotations: n,
								page: t.pdfPage,
								imageResourcesPath: t.imageResourcesPath,
								renderInteractiveForms: t.renderInteractiveForms,
								linkService: t.linkService,
								downloadManager: t.downloadManager
							};
							if (t.div) r.AnnotationLayer.update(i);
							else {
								if (0 === n.length) return;
								t.div = document.createElement("div"), t.div.className = "annotationLayer", t.pageDiv.appendChild(t.div), i.div = t.div, r.AnnotationLayer.render(i), t.l10n.translate(t.div)
							}
						}
					})
				}
			}, {
				key: "cancel",
				value: function() {
					this._cancelled = !0
				}
			}, {
				key: "hide",
				value: function() {
					this.div && this.div.setAttribute("hidden", "true")
				}
			}]), e
		}(),
		l = function() {
			function e() {
				s(this, e)
			}
			return i(e, [{
				key: "createAnnotationLayerBuilder",
				value: function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
						i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.NullL10n;
					return new u({
						pageDiv: e,
						pdfPage: t,
						imageResourcesPath: n,
						renderInteractiveForms: i,
						linkService: new o.SimpleLinkService,
						l10n: r
					})
				}
			}]), e
		}();
	t.AnnotationLayerBuilder = u, t.DefaultAnnotationLayerFactory = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFPageView = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(6),
		a = n(7),
		o = n(14),
		s = n(10);
	var u = n(13).viewerCompatibilityParams.maxCanvasPixels || 16777216,
		l = function() {
			function e(t) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e);
				var n = t.container,
					i = t.defaultViewport;
				this.id = t.id, this.renderingId = "page" + this.id, this.pdfPage = null, this.pageLabel = null, this.rotation = 0, this.scale = t.scale || r.DEFAULT_SCALE, this.viewport = i, this.pdfPageRotate = i.rotation, this.hasRestrictedScaling = !1, this.textLayerMode = Number.isInteger(t.textLayerMode) ? t.textLayerMode : r.TextLayerMode.ENABLE, this.imageResourcesPath = t.imageResourcesPath || "", this.renderInteractiveForms = t.renderInteractiveForms || !1, this.useOnlyCssZoom = t.useOnlyCssZoom || !1, this.maxCanvasPixels = t.maxCanvasPixels || u, this.eventBus = t.eventBus || (0, o.getGlobalEventBus)(), this.renderingQueue = t.renderingQueue, this.textLayerFactory = t.textLayerFactory, this.annotationLayerFactory = t.annotationLayerFactory, this.renderer = t.renderer || r.RendererType.CANVAS, this.enableWebGL = t.enableWebGL || !1, this.l10n = t.l10n || r.NullL10n, this.paintTask = null, this.paintedViewportMap = new WeakMap, this.renderingState = s.RenderingStates.INITIAL, this.resume = null, this.error = null, this.onBeforeDraw = null, this.onAfterDraw = null, this.annotationLayer = null, this.textLayer = null, this.zoomLayer = null;
				var a = document.createElement("div");
				a.className = "page", a.style.width = Math.floor(this.viewport.width) + "px", a.style.height = Math.floor(this.viewport.height) + "px", a.setAttribute("data-page-number", this.id), this.div = a, n.appendChild(a)
			}
			return i(e, [{
				key: "setPdfPage",
				value: function(e) {
					this.pdfPage = e, this.pdfPageRotate = e.rotate;
					var t = (this.rotation + this.pdfPageRotate) % 360;
					this.viewport = e.getViewport(this.scale * r.CSS_UNITS, t), this.stats = e.stats, this.reset()
				}
			}, {
				key: "destroy",
				value: function() {
					this.reset(), this.pdfPage && this.pdfPage.cleanup()
				}
			}, {
				key: "_resetZoomLayer",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					if (this.zoomLayer) {
						var t = this.zoomLayer.firstChild;
						this.paintedViewportMap.delete(t), t.width = 0, t.height = 0, e && this.zoomLayer.remove(), this.zoomLayer = null
					}
				}
			}, {
				key: "reset",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					this.cancelRendering(t);
					var n = this.div;
					n.style.width = Math.floor(this.viewport.width) + "px", n.style.height = Math.floor(this.viewport.height) + "px";
					for (var i = n.childNodes, r = e && this.zoomLayer || null, a = t && this.annotationLayer && this.annotationLayer.div || null, o = i.length - 1; o >= 0; o--) {
						var s = i[o];
						r !== s && a !== s && n.removeChild(s)
					}
					n.removeAttribute("data-loaded"), a ? this.annotationLayer.hide() : this.annotationLayer && (this.annotationLayer.cancel(), this.annotationLayer = null), r || (this.canvas && (this.paintedViewportMap.delete(this.canvas), this.canvas.width = 0, this.canvas.height = 0, delete this.canvas), this._resetZoomLayer()), this.svg && (this.paintedViewportMap.delete(this.svg), delete this.svg), this.loadingIconDiv = document.createElement("div"), this.loadingIconDiv.className = "loadingIcon", n.appendChild(this.loadingIconDiv)
				}
			}, {
				key: "update",
				value: function(e, t) {
					this.scale = e || this.scale, void 0 !== t && (this.rotation = t);
					var n = (this.rotation + this.pdfPageRotate) % 360;
					if (this.viewport = this.viewport.clone({
							scale: this.scale * r.CSS_UNITS,
							rotation: n
						}), this.svg) return this.cssTransform(this.svg, !0), void this.eventBus.dispatch("pagerendered", {
						source: this,
						pageNumber: this.id,
						cssTransform: !0
					});
					var i = !1;
					if (this.canvas && this.maxCanvasPixels > 0) {
						var a = this.outputScale;
						(Math.floor(this.viewport.width) * a.sx | 0) * (Math.floor(this.viewport.height) * a.sy | 0) > this.maxCanvasPixels && (i = !0)
					}
					if (this.canvas) {
						if (this.useOnlyCssZoom || this.hasRestrictedScaling && i) return this.cssTransform(this.canvas, !0), void this.eventBus.dispatch("pagerendered", {
							source: this,
							pageNumber: this.id,
							cssTransform: !0
						});
						this.zoomLayer || this.canvas.hasAttribute("hidden") || (this.zoomLayer = this.canvas.parentNode, this.zoomLayer.style.position = "absolute")
					}
					this.zoomLayer && this.cssTransform(this.zoomLayer.firstChild), this.reset(!0, !0)
				}
			}, {
				key: "cancelRendering",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = this.renderingState;
					this.paintTask && (this.paintTask.cancel(), this.paintTask = null), this.renderingState = s.RenderingStates.INITIAL, this.resume = null, this.textLayer && (this.textLayer.cancel(), this.textLayer = null), !e && this.annotationLayer && (this.annotationLayer.cancel(), this.annotationLayer = null), t !== s.RenderingStates.INITIAL && this.eventBus.dispatch("pagecancelled", {
						source: this,
						pageNumber: this.id,
						renderingState: t
					})
				}
			}, {
				key: "cssTransform",
				value: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = this.viewport.width,
						i = this.viewport.height,
						r = this.div;
					e.style.width = e.parentNode.style.width = r.style.width = Math.floor(n) + "px", e.style.height = e.parentNode.style.height = r.style.height = Math.floor(i) + "px";
					var a = this.viewport.rotation - this.paintedViewportMap.get(e).rotation,
						o = Math.abs(a),
						s = 1,
						u = 1;
					90 !== o && 270 !== o || (s = i / n, u = n / i);
					var l = "rotate(" + a + "deg) scale(" + s + "," + u + ")";
					if (e.style.transform = l, this.textLayer) {
						var c = this.textLayer.viewport,
							d = this.viewport.rotation - c.rotation,
							h = Math.abs(d),
							f = n / c.width;
						90 !== h && 270 !== h || (f = n / c.height);
						var p = this.textLayer.textLayerDiv,
							v = void 0,
							g = void 0;
						switch (h) {
							case 0:
								v = g = 0;
								break;
							case 90:
								v = 0, g = "-" + p.style.height;
								break;
							case 180:
								v = "-" + p.style.width, g = "-" + p.style.height;
								break;
							case 270:
								v = "-" + p.style.width, g = 0;
								break;
							default:
								console.error("Bad rotation value.")
						}
						p.style.transform = "rotate(" + h + "deg) scale(" + f + ", " + f + ") translate(" + v + ", " + g + ")", p.style.transformOrigin = "0% 0%"
					}
					t && this.annotationLayer && this.annotationLayer.render(this.viewport, "display")
				}
			}, {
				key: "getPagePoint",
				value: function(e, t) {
					return this.viewport.convertToPdfPoint(e, t)
				}
			}, {
				key: "draw",
				value: function() {
					var e = this;
					if (this.renderingState !== s.RenderingStates.INITIAL && (console.error("Must be in new state before drawing"), this.reset()), !this.pdfPage) return this.renderingState = s.RenderingStates.FINISHED, Promise.reject(new Error("Page is not loaded"));
					this.renderingState = s.RenderingStates.RUNNING;
					var t = this.pdfPage,
						n = this.div,
						i = document.createElement("div");
					i.style.width = n.style.width, i.style.height = n.style.height, i.classList.add("canvasWrapper"), this.annotationLayer && this.annotationLayer.div ? n.insertBefore(i, this.annotationLayer.div) : n.appendChild(i);
					var o = null;
					if (this.textLayerMode !== r.TextLayerMode.DISABLE && this.textLayerFactory) {
						var u = document.createElement("div");
						u.className = "textLayer", u.style.width = i.style.width, u.style.height = i.style.height, this.annotationLayer && this.annotationLayer.div ? n.insertBefore(u, this.annotationLayer.div) : n.appendChild(u), o = this.textLayerFactory.createTextLayerBuilder(u, this.id - 1, this.viewport, this.textLayerMode === r.TextLayerMode.ENABLE_ENHANCE)
					}
					this.textLayer = o;
					var l = null;
					this.renderingQueue && (l = function(t) {
						if (!e.renderingQueue.isHighestPriority(e)) return e.renderingState = s.RenderingStates.PAUSED, void(e.resume = function() {
							e.renderingState = s.RenderingStates.RUNNING, t()
						});
						t()
					});
					var c = function(i) {
							return d === e.paintTask && (e.paintTask = null), i instanceof a.RenderingCancelledException ? (e.error = null, Promise.resolve(void 0)) : (e.renderingState = s.RenderingStates.FINISHED, e.loadingIconDiv && (n.removeChild(e.loadingIconDiv), delete e.loadingIconDiv), e._resetZoomLayer(!0), e.error = i, e.stats = t.stats, e.onAfterDraw && e.onAfterDraw(), e.eventBus.dispatch("pagerendered", {
								source: e,
								pageNumber: e.id,
								cssTransform: !1
							}), i ? Promise.reject(i) : Promise.resolve(void 0))
						},
						d = this.renderer === r.RendererType.SVG ? this.paintOnSvg(i) : this.paintOnCanvas(i);
					d.onRenderContinue = l, this.paintTask = d;
					var h = d.promise.then(function() {
						return c(null).then(function() {
							if (o) {
								var e = t.streamTextContent({
									normalizeWhitespace: !0
								});
								o.setTextContentStream(e), o.render()
							}
						})
					}, function(e) {
						return c(e)
					});
					return this.annotationLayerFactory && (this.annotationLayer || (this.annotationLayer = this.annotationLayerFactory.createAnnotationLayerBuilder(n, t, this.imageResourcesPath, this.renderInteractiveForms, this.l10n)), this.annotationLayer.render(this.viewport, "display")), n.setAttribute("data-loaded", !0), this.onBeforeDraw && this.onBeforeDraw(), h
				}
			}, {
				key: "paintOnCanvas",
				value: function(e) {
					var t = (0, a.createPromiseCapability)(),
						n = {
							promise: t.promise,
							onRenderContinue: function(e) {
								e()
							},
							cancel: function() {
								m.cancel()
							}
						},
						i = this.viewport,
						o = document.createElement("canvas");
					o.id = this.renderingId, o.setAttribute("hidden", "hidden");
					var s = !0,
						u = function() {
							s && (o.removeAttribute("hidden"), s = !1)
						};
					e.appendChild(o), this.canvas = o, o.mozOpaque = !0;
					var l = o.getContext("2d", {
							alpha: !1
						}),
						c = (0, r.getOutputScale)(l);
					if (this.outputScale = c, this.useOnlyCssZoom) {
						var d = i.clone({
							scale: r.CSS_UNITS
						});
						c.sx *= d.width / i.width, c.sy *= d.height / i.height, c.scaled = !0
					}
					if (this.maxCanvasPixels > 0) {
						var h = i.width * i.height,
							f = Math.sqrt(this.maxCanvasPixels / h);
						c.sx > f || c.sy > f ? (c.sx = f, c.sy = f, c.scaled = !0, this.hasRestrictedScaling = !0) : this.hasRestrictedScaling = !1
					}
					var p = (0, r.approximateFraction)(c.sx),
						v = (0, r.approximateFraction)(c.sy);
					o.width = (0, r.roundToDivide)(i.width * c.sx, p[0]), o.height = (0, r.roundToDivide)(i.height * c.sy, v[0]), o.style.width = (0, r.roundToDivide)(i.width, p[1]) + "px", o.style.height = (0, r.roundToDivide)(i.height, v[1]) + "px", this.paintedViewportMap.set(o, i);
					var g = {
							canvasContext: l,
							transform: c.scaled ? [c.sx, 0, 0, c.sy, 0, 0] : null,
							viewport: this.viewport,
							enableWebGL: this.enableWebGL,
							renderInteractiveForms: this.renderInteractiveForms
						},
						m = this.pdfPage.render(g);
					return m.onContinue = function(e) {
						u(), n.onRenderContinue ? n.onRenderContinue(e) : e()
					}, m.promise.then(function() {
						u(), t.resolve(void 0)
					}, function(e) {
						u(), t.reject(e)
					}), n
				}
			}, {
				key: "paintOnSvg",
				value: function(e) {
					var t = this,
						n = !1,
						i = function() {
							if (n) throw new a.RenderingCancelledException("Rendering cancelled, page " + t.id, "svg")
						},
						o = this.pdfPage,
						u = this.viewport.clone({
							scale: r.CSS_UNITS
						});
					return {
						promise: o.getOperatorList().then(function(n) {
							return i(), new a.SVGGraphics(o.commonObjs, o.objs).getSVG(n, u).then(function(n) {
								i(), t.svg = n, t.paintedViewportMap.set(n, u), n.style.width = e.style.width, n.style.height = e.style.height, t.renderingState = s.RenderingStates.FINISHED, e.appendChild(n)
							})
						}),
						onRenderContinue: function(e) {
							e()
						},
						cancel: function() {
							n = !0
						}
					}
				}
			}, {
				key: "setPageLabel",
				value: function(e) {
					this.pageLabel = "string" == typeof e ? e : null, null !== this.pageLabel ? this.div.setAttribute("data-page-label", this.pageLabel) : this.div.removeAttribute("data-page-label")
				}
			}, {
				key: "width",
				get: function() {
					return this.viewport.width
				}
			}, {
				key: "height",
				get: function() {
					return this.viewport.height
				}
			}]), e
		}();
	t.PDFPageView = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.DefaultTextLayerFactory = t.TextLayerBuilder = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(14),
		a = n(7),
		o = n(6);

	function s(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	var u = function() {
			function e(t) {
				var n = t.textLayerDiv,
					i = t.eventBus,
					a = t.pageIndex,
					o = t.viewport,
					u = t.findController,
					l = void 0 === u ? null : u,
					c = t.enhanceTextSelection,
					d = void 0 !== c && c;
				s(this, e), this.textLayerDiv = n, this.eventBus = i || (0, r.getGlobalEventBus)(), this.textContent = null, this.textContentItemsStr = [], this.textContentStream = null, this.renderingDone = !1, this.pageIdx = a, this.pageNumber = this.pageIdx + 1, this.matches = [], this.viewport = o, this.textDivs = [], this.findController = l, this.textLayerRenderTask = null, this.enhanceTextSelection = d, this._boundEvents = Object.create(null), this._bindEvents(), this._bindMouse()
			}
			return i(e, [{
				key: "_finishRendering",
				value: function() {
					if (this.renderingDone = !0, !this.enhanceTextSelection) {
						var e = document.createElement("div");
						e.className = "endOfContent", this.textLayerDiv.appendChild(e)
					}
					this.eventBus.dispatch("textlayerrendered", {
						source: this,
						pageNumber: this.pageNumber,
						numTextDivs: this.textDivs.length
					})
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
					if ((this.textContent || this.textContentStream) && !this.renderingDone) {
						this.cancel(), this.textDivs = [];
						var n = document.createDocumentFragment();
						this.textLayerRenderTask = (0, a.renderTextLayer)({
							textContent: this.textContent,
							textContentStream: this.textContentStream,
							container: n,
							viewport: this.viewport,
							textDivs: this.textDivs,
							textContentItemsStr: this.textContentItemsStr,
							timeout: t,
							enhanceTextSelection: this.enhanceTextSelection
						}), this.textLayerRenderTask.promise.then(function() {
							e.textLayerDiv.appendChild(n), e._finishRendering(), e.updateMatches()
						}, function(e) {})
					}
				}
			}, {
				key: "cancel",
				value: function() {
					this.textLayerRenderTask && (this.textLayerRenderTask.cancel(), this.textLayerRenderTask = null)
				}
			}, {
				key: "setTextContentStream",
				value: function(e) {
					this.cancel(), this.textContentStream = e
				}
			}, {
				key: "setTextContent",
				value: function(e) {
					this.cancel(), this.textContent = e
				}
			}, {
				key: "convertMatches",
				value: function(e, t) {
					var n = 0,
						i = 0,
						r = this.textContentItemsStr,
						a = r.length - 1,
						o = null === this.findController ? 0 : this.findController.state.query.length,
						s = [];
					if (!e) return s;
					for (var u = 0, l = e.length; u < l; u++) {
						for (var c = e[u]; n !== a && c >= i + r[n].length;) i += r[n].length, n++;
						n === r.length && console.error("Could not find a matching mapping");
						var d = {
							begin: {
								divIdx: n,
								offset: c - i
							}
						};
						for (c += t ? t[u] : o; n !== a && c > i + r[n].length;) i += r[n].length, n++;
						d.end = {
							divIdx: n,
							offset: c - i
						}, s.push(d)
					}
					return s
				}
			}, {
				key: "renderMatches",
				value: function(e) {
					if (0 !== e.length) {
						var t = this.textContentItemsStr,
							n = this.textDivs,
							i = null,
							r = this.pageIdx,
							a = null !== this.findController && r === this.findController.selected.pageIdx,
							s = null === this.findController ? -1 : this.findController.selected.matchIdx,
							u = {
								divIdx: -1,
								offset: void 0
							},
							l = s,
							c = l + 1;
						if (null !== this.findController && this.findController.state.highlightAll) l = 0, c = e.length;
						else if (!a) return;
						for (var d = l; d < c; d++) {
							var h = e[d],
								f = h.begin,
								p = h.end,
								v = a && d === s ? " selected" : "";
							if (this.findController && this.findController.selected.matchIdx === d && this.findController.selected.pageIdx === r) {
								var g = {
									top: -50,
									left: -400
								};
								(0, o.scrollIntoView)(n[f.divIdx], g, !0)
							}
							if (i && f.divIdx === i.divIdx ? y(i.divIdx, i.offset, f.offset) : (null !== i && y(i.divIdx, i.offset, u.offset), b(f)), f.divIdx === p.divIdx) y(f.divIdx, f.offset, p.offset, "highlight" + v);
							else {
								y(f.divIdx, f.offset, u.offset, "highlight begin" + v);
								for (var m = f.divIdx + 1, w = p.divIdx; m < w; m++) n[m].className = "highlight middle" + v;
								b(p, "highlight end" + v)
							}
							i = p
						}
						i && y(i.divIdx, i.offset, u.offset)
					}

					function b(e, t) {
						var i = e.divIdx;
						n[i].textContent = "", y(i, 0, e.offset, t)
					}

					function y(e, i, r, a) {
						var o = n[e],
							s = t[e].substring(i, r),
							u = document.createTextNode(s);
						if (a) {
							var l = document.createElement("span");
							return l.className = a, l.appendChild(u), void o.appendChild(l)
						}
						o.appendChild(u)
					}
				}
			}, {
				key: "updateMatches",
				value: function() {
					if (this.renderingDone) {
						for (var e = this.matches, t = this.textDivs, n = this.textContentItemsStr, i = -1, r = 0, a = e.length; r < a; r++) {
							for (var o = e[r], s = Math.max(i, o.begin.divIdx), u = o.end.divIdx; s <= u; s++) {
								var l = t[s];
								l.textContent = n[s], l.className = ""
							}
							i = o.end.divIdx + 1
						}
						if (this.findController && this.findController.highlightMatches) {
							var c = void 0,
								d = void 0;
							null !== this.findController && (c = this.findController.pageMatches[this.pageIdx] || null, d = this.findController.pageMatchesLength && this.findController.pageMatchesLength[this.pageIdx] || null), this.matches = this.convertMatches(c, d), this.renderMatches(this.matches)
						}
					}
				}
			}, {
				key: "_bindEvents",
				value: function() {
					var e = this,
						t = this.eventBus,
						n = this._boundEvents;
					n.pageCancelled = function(i) {
						if (i.pageNumber === e.pageNumber)
							if (e.textLayerRenderTask) console.error("TextLayerBuilder._bindEvents: `this.cancel()` should have been called when the page was reset, or rendering cancelled.");
							else
								for (var r in n) t.off(r.toLowerCase(), n[r]), delete n[r]
					}, n.updateTextLayerMatches = function(t) {
						t.pageIndex !== e.pageIdx && -1 !== t.pageIndex || e.updateMatches()
					}, t.on("pagecancelled", n.pageCancelled), t.on("updatetextlayermatches", n.updateTextLayerMatches)
				}
			}, {
				key: "_bindMouse",
				value: function() {
					var e = this,
						t = this.textLayerDiv,
						n = null;
					t.addEventListener("mousedown", function(i) {
						if (e.enhanceTextSelection && e.textLayerRenderTask) return e.textLayerRenderTask.expandTextDivs(!0), void(n && (clearTimeout(n), n = null));
						var r = t.querySelector(".endOfContent");
						if (r) {
							var a = i.target !== t;
							if (a = a && "none" !== window.getComputedStyle(r).getPropertyValue("-moz-user-select")) {
								var o = t.getBoundingClientRect(),
									s = Math.max(0, (i.pageY - o.top) / o.height);
								r.style.top = (100 * s).toFixed(2) + "%"
							}
							r.classList.add("active")
						}
					}), t.addEventListener("mouseup", function() {
						if (e.enhanceTextSelection && e.textLayerRenderTask) n = setTimeout(function() {
							e.textLayerRenderTask && e.textLayerRenderTask.expandTextDivs(!1), n = null
						}, 300);
						else {
							var i = t.querySelector(".endOfContent");
							i && (i.style.top = "", i.classList.remove("active"))
						}
					})
				}
			}]), e
		}(),
		l = function() {
			function e() {
				s(this, e)
			}
			return i(e, [{
				key: "createTextLayerBuilder",
				value: function(e, t, n) {
					var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return new u({
						textLayerDiv: e,
						pageIndex: t,
						viewport: n,
						enhanceTextSelection: i
					})
				}
			}]), e
		}();
	t.TextLayerBuilder = u, t.DefaultTextLayerFactory = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.SecondaryToolbar = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(30),
		a = n(8),
		o = n(35),
		s = n(6);
	var u = function() {
		function e(t, n, i) {
			var s = this;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.toolbar = t.toolbar, this.toggleButton = t.toggleButton, this.toolbarButtonContainer = t.toolbarButtonContainer, this.buttons = [{
				element: t.presentationModeButton,
				eventName: "presentationmode",
				close: !0
			}, {
				element: t.openFileButton,
				eventName: "openfile",
				close: !0
			}, {
				element: t.printButton,
				eventName: "print",
				close: !0
			}, {
				element: t.downloadButton,
				eventName: "download",
				close: !0
			}, {
				element: t.viewBookmarkButton,
				eventName: null,
				close: !0
			}, {
				element: t.firstPageButton,
				eventName: "firstpage",
				close: !0
			}, {
				element: t.lastPageButton,
				eventName: "lastpage",
				close: !0
			}, {
				element: t.pageRotateCwButton,
				eventName: "rotatecw",
				close: !1
			}, {
				element: t.pageRotateCcwButton,
				eventName: "rotateccw",
				close: !1
			}, {
				element: t.cursorSelectToolButton,
				eventName: "switchcursortool",
				eventDetails: {
					tool: a.CursorTool.SELECT
				},
				close: !0
			}, {
				element: t.cursorHandToolButton,
				eventName: "switchcursortool",
				eventDetails: {
					tool: a.CursorTool.HAND
				},
				close: !0
			}, {
				element: t.scrollVerticalButton,
				eventName: "switchscrollmode",
				eventDetails: {
					mode: r.ScrollMode.VERTICAL
				},
				close: !0
			}, {
				element: t.scrollHorizontalButton,
				eventName: "switchscrollmode",
				eventDetails: {
					mode: r.ScrollMode.HORIZONTAL
				},
				close: !0
			}, {
				element: t.scrollWrappedButton,
				eventName: "switchscrollmode",
				eventDetails: {
					mode: r.ScrollMode.WRAPPED
				},
				close: !0
			}, {
				element: t.spreadNoneButton,
				eventName: "switchspreadmode",
				eventDetails: {
					mode: r.SpreadMode.NONE
				},
				close: !0
			}, {
				element: t.spreadOddButton,
				eventName: "switchspreadmode",
				eventDetails: {
					mode: r.SpreadMode.ODD
				},
				close: !0
			}, {
				element: t.spreadEvenButton,
				eventName: "switchspreadmode",
				eventDetails: {
					mode: r.SpreadMode.EVEN
				},
				close: !0
			}, {
				element: t.documentPropertiesButton,
				eventName: "documentproperties",
				close: !0
			}], this.items = {
				firstPage: t.firstPageButton,
				lastPage: t.lastPageButton,
				pageRotateCw: t.pageRotateCwButton,
				pageRotateCcw: t.pageRotateCcwButton
			}, this.mainContainer = n, this.eventBus = i, this.opened = !1, this.containerHeight = null, this.previousContainerHeight = null, this.reset(), this._bindClickListeners(), this._bindCursorToolsListener(t), this._bindScrollModeListener(t), this._bindSpreadModeListener(t), this.eventBus.on("resize", this._setMaxHeight.bind(this)), this.eventBus.on("baseviewerinit", function(e) {
				e.source instanceof o.PDFSinglePageViewer ? s.toolbarButtonContainer.classList.add("hiddenScrollModeButtons", "hiddenSpreadModeButtons") : s.toolbarButtonContainer.classList.remove("hiddenScrollModeButtons", "hiddenSpreadModeButtons")
			})
		}
		return i(e, [{
			key: "setPageNumber",
			value: function(e) {
				this.pageNumber = e, this._updateUIState()
			}
		}, {
			key: "setPagesCount",
			value: function(e) {
				this.pagesCount = e, this._updateUIState()
			}
		}, {
			key: "reset",
			value: function() {
				this.pageNumber = 0, this.pagesCount = 0, this._updateUIState(), this.eventBus.dispatch("secondarytoolbarreset", {
					source: this
				})
			}
		}, {
			key: "_updateUIState",
			value: function() {
				this.items.firstPage.disabled = this.pageNumber <= 1, this.items.lastPage.disabled = this.pageNumber >= this.pagesCount, this.items.pageRotateCw.disabled = 0 === this.pagesCount, this.items.pageRotateCcw.disabled = 0 === this.pagesCount
			}
		}, {
			key: "_bindClickListeners",
			value: function() {
				var e = this;
				this.toggleButton.addEventListener("click", this.toggle.bind(this));
				var t = function(t) {
					var n = e.buttons[t],
						i = n.element,
						r = n.eventName,
						a = n.close,
						o = n.eventDetails;
					i.addEventListener("click", function(t) {
						if (null !== r) {
							var n = {
								source: e
							};
							for (var i in o) n[i] = o[i];
							e.eventBus.dispatch(r, n)
						}
						a && e.close()
					})
				};
				for (var n in this.buttons) t(n)
			}
		}, {
			key: "_bindCursorToolsListener",
			value: function(e) {
				this.eventBus.on("cursortoolchanged", function(t) {
					switch (e.cursorSelectToolButton.classList.remove("toggled"), e.cursorHandToolButton.classList.remove("toggled"), t.tool) {
						case a.CursorTool.SELECT:
							e.cursorSelectToolButton.classList.add("toggled");
							break;
						case a.CursorTool.HAND:
							e.cursorHandToolButton.classList.add("toggled")
					}
				})
			}
		}, {
			key: "_bindScrollModeListener",
			value: function(e) {
				var t = this;

				function n(t) {
					switch (e.scrollVerticalButton.classList.remove("toggled"), e.scrollHorizontalButton.classList.remove("toggled"), e.scrollWrappedButton.classList.remove("toggled"), t.mode) {
						case r.ScrollMode.VERTICAL:
							e.scrollVerticalButton.classList.add("toggled");
							break;
						case r.ScrollMode.HORIZONTAL:
							e.scrollHorizontalButton.classList.add("toggled");
							break;
						case r.ScrollMode.WRAPPED:
							e.scrollWrappedButton.classList.add("toggled")
					}
					var n = t.mode === r.ScrollMode.HORIZONTAL;
					e.spreadNoneButton.disabled = n, e.spreadOddButton.disabled = n, e.spreadEvenButton.disabled = n
				}
				this.eventBus.on("scrollmodechanged", n), this.eventBus.on("secondarytoolbarreset", function(e) {
					e.source === t && n({
						mode: r.ScrollMode.VERTICAL
					})
				})
			}
		}, {
			key: "_bindSpreadModeListener",
			value: function(e) {
				var t = this;

				function n(t) {
					switch (e.spreadNoneButton.classList.remove("toggled"), e.spreadOddButton.classList.remove("toggled"), e.spreadEvenButton.classList.remove("toggled"), t.mode) {
						case r.SpreadMode.NONE:
							e.spreadNoneButton.classList.add("toggled");
							break;
						case r.SpreadMode.ODD:
							e.spreadOddButton.classList.add("toggled");
							break;
						case r.SpreadMode.EVEN:
							e.spreadEvenButton.classList.add("toggled")
					}
				}
				this.eventBus.on("spreadmodechanged", n), this.eventBus.on("secondarytoolbarreset", function(e) {
					e.source === t && n({
						mode: r.SpreadMode.NONE
					})
				})
			}
		}, {
			key: "open",
			value: function() {
				this.opened || (this.opened = !0, this._setMaxHeight(), this.toggleButton.classList.add("toggled"), this.toolbar.classList.remove("hidden"))
			}
		}, {
			key: "close",
			value: function() {
				this.opened && (this.opened = !1, this.toolbar.classList.add("hidden"), this.toggleButton.classList.remove("toggled"))
			}
		}, {
			key: "toggle",
			value: function() {
				this.opened ? this.close() : this.open()
			}
		}, {
			key: "_setMaxHeight",
			value: function() {
				this.opened && (this.containerHeight = this.mainContainer.clientHeight, this.containerHeight !== this.previousContainerHeight && (this.toolbarButtonContainer.setAttribute("style", "max-height: " + (this.containerHeight - s.SCROLLBAR_PADDING) + "px;"), this.previousContainerHeight = this.containerHeight))
			}
		}, {
			key: "isOpen",
			get: function() {
				return this.opened
			}
		}]), e
	}();
	t.SecondaryToolbar = u
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFSinglePageViewer = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = function e(t, n, i) {
			null === t && (t = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(t, n);
			if (void 0 === r) {
				var a = Object.getPrototypeOf(t);
				return null === a ? void 0 : e(a, n, i)
			}
			if ("value" in r) return r.value;
			var o = r.get;
			return void 0 !== o ? o.call(i) : void 0
		},
		a = n(30),
		o = n(6),
		s = n(7);
	var u = function(e) {
		function t(e) {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var n = function(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.eventBus.on("pagesinit", function(e) {
				n._ensurePageViewVisible()
			}), n
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, a.BaseViewer), i(t, [{
			key: "_resetView",
			value: function() {
				r(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_resetView", this).call(this), this._previousPageNumber = 1, this._shadowViewer = document.createDocumentFragment()
			}
		}, {
			key: "_ensurePageViewVisible",
			value: function() {
				var e = this._pages[this._currentPageNumber - 1],
					t = this._pages[this._previousPageNumber - 1],
					n = this.viewer.childNodes;
				switch (n.length) {
					case 0:
						this.viewer.appendChild(e.div);
						break;
					case 1:
						if (n[0] !== t.div) throw new Error("_ensurePageViewVisible: Unexpected previously visible page.");
						if (e === t) break;
						this._shadowViewer.appendChild(t.div), this.viewer.appendChild(e.div), this.container.scrollTop = 0;
						break;
					default:
						throw new Error("_ensurePageViewVisible: Only one page should be visible at a time.")
				}
				this._previousPageNumber = this._currentPageNumber
			}
		}, {
			key: "_scrollUpdate",
			value: function() {
				this._updateScrollDown && this._updateScrollDown(), r(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_scrollUpdate", this).call(this)
			}
		}, {
			key: "_scrollIntoView",
			value: function(e) {
				var t = this,
					n = e.pageDiv,
					i = e.pageSpot,
					r = void 0 === i ? null : i,
					a = e.pageNumber,
					s = void 0 === a ? null : a;
				s && this._setCurrentPageNumber(s);
				var u = this._currentPageNumber >= this._previousPageNumber,
					l = this._location;
				this._ensurePageViewVisible(), (0, o.scrollIntoView)(n, r), this._updateScrollDown = function() {
					t.scroll.down = u, delete t._updateScrollDown
				}, setTimeout(function() {
					t._location === l && (t._updateScrollDown && t._updateScrollDown(), t.update())
				}, 0)
			}
		}, {
			key: "_getVisiblePages",
			value: function() {
				if (!this.pagesCount) return {
					views: []
				};
				var e = this._pages[this._currentPageNumber - 1],
					t = e.div,
					n = {
						id: e.id,
						x: t.offsetLeft + t.clientLeft,
						y: t.offsetTop + t.clientTop,
						view: e
					};
				return {
					first: n,
					last: n,
					views: [n]
				}
			}
		}, {
			key: "update",
			value: function() {
				var e = this._getVisiblePages(),
					t = e.views.length;
				0 !== t && (this._resizeBuffer(t), this.renderingQueue.renderHighestPriority(e), this._updateLocation(e.first), this.eventBus.dispatch("updateviewarea", {
					source: this,
					location: this._location
				}))
			}
		}, {
			key: "_updateScrollMode",
			value: function() {}
		}, {
			key: "_updateSpreadMode",
			value: function() {}
		}, {
			key: "_setDocumentViewerElement",
			get: function() {
				return (0, s.shadow)(this, "_setDocumentViewerElement", this._shadowViewer)
			}
		}, {
			key: "_isScrollModeHorizontal",
			get: function() {
				return (0, s.shadow)(this, "_isScrollModeHorizontal", !1)
			}
		}]), t
	}();
	t.PDFSinglePageViewer = u
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Toolbar = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(6);
	var a = function() {
		function e(t, n) {
			var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.NullL10n;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.toolbar = t.container, this.eventBus = n, this.l10n = i, this.items = t, this._wasLocalized = !1, this.reset(), this._bindListeners()
		}
		return i(e, [{
			key: "setPageNumber",
			value: function(e, t) {
				this.pageNumber = e, this.pageLabel = t, this._updateUIState(!1)
			}
		}, {
			key: "setPagesCount",
			value: function(e, t) {
				this.pagesCount = e, this.hasPageLabels = t, this._updateUIState(!0)
			}
		}, {
			key: "setPageScale",
			value: function(e, t) {
				this.pageScaleValue = (e || t).toString(), this.pageScale = t, this._updateUIState(!1)
			}
		}, {
			key: "reset",
			value: function() {
				this.pageNumber = 0, this.pageLabel = null, this.hasPageLabels = !1, this.pagesCount = 0, this.pageScaleValue = r.DEFAULT_SCALE_VALUE, this.pageScale = r.DEFAULT_SCALE, this._updateUIState(!0)
			}
		}, {
			key: "_bindListeners",
			value: function() {
				var e = this,
					t = this.eventBus,
					n = this.items,
					i = this;
				n.previous.addEventListener("click", function() {
					t.dispatch("previouspage", {
						source: i
					})
				}), n.next.addEventListener("click", function() {
					t.dispatch("nextpage", {
						source: i
					})
				}), n.zoomIn.addEventListener("click", function() {
					t.dispatch("zoomin", {
						source: i
					})
				}), n.zoomOut.addEventListener("click", function() {
					t.dispatch("zoomout", {
						source: i
					})
				}), n.pageNumber.addEventListener("click", function() {
					this.select()
				}), n.pageNumber.addEventListener("change", function() {
					t.dispatch("pagenumberchanged", {
						source: i,
						value: this.value
					})
				}), n.scaleSelect.addEventListener("change", function() {
					"custom" !== this.value && t.dispatch("scalechanged", {
						source: i,
						value: this.value
					})
				}), n.presentationModeButton.addEventListener("click", function() {
					t.dispatch("presentationmode", {
						source: i
					})
				}), n.openFile.addEventListener("click", function() {
					t.dispatch("openfile", {
						source: i
					})
				}), n.print.addEventListener("click", function() {
					t.dispatch("print", {
						source: i
					})
				}), n.download.addEventListener("click", function() {
					t.dispatch("download", {
						source: i
					})
				}), n.scaleSelect.oncontextmenu = r.noContextMenuHandler, t.on("localized", function() {
					e._localized()
				})
			}
		}, {
			key: "_localized",
			value: function() {
				this._wasLocalized = !0, this._adjustScaleWidth(), this._updateUIState(!0)
			}
		}, {
			key: "_updateUIState",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				if (this._wasLocalized) {
					var t = this.pageNumber,
						n = this.pagesCount,
						i = this.pageScaleValue,
						a = this.pageScale,
						o = this.items;
					e && (this.hasPageLabels ? o.pageNumber.type = "text" : (o.pageNumber.type = "number", this.l10n.get("of_pages", {
						pagesCount: n
					}, "of {{pagesCount}}").then(function(e) {
						o.numPages.textContent = e
					})), o.pageNumber.max = n), this.hasPageLabels ? (o.pageNumber.value = this.pageLabel, this.l10n.get("page_of_pages", {
						pageNumber: t,
						pagesCount: n
					}, "({{pageNumber}} of {{pagesCount}})").then(function(e) {
						o.numPages.textContent = e
					})) : o.pageNumber.value = t, o.previous.disabled = t <= 1, o.next.disabled = t >= n, o.zoomOut.disabled = a <= r.MIN_SCALE, o.zoomIn.disabled = a >= r.MAX_SCALE;
					var s = Math.round(1e4 * a) / 100;
					this.l10n.get("page_scale_percent", {
						scale: s
					}, "{{scale}}%").then(function(e) {
						for (var t = o.scaleSelect.options, n = !1, r = 0, a = t.length; r < a; r++) {
							var s = t[r];
							s.value === i ? (s.selected = !0, n = !0) : s.selected = !1
						}
						n || (o.customScaleOption.textContent = e, o.customScaleOption.selected = !0)
					})
				}
			}
		}, {
			key: "updateLoadingIndicatorState",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				this.items.pageNumber.classList.toggle("visiblePageIsLoading", e)
			}
		}, {
			key: "_adjustScaleWidth",
			value: function() {
				var e = this.items.scaleSelectContainer,
					t = this.items.scaleSelect;
				r.animationStarted.then(function() {
					if (0 === e.clientWidth && e.setAttribute("style", "display: inherit;"), e.clientWidth > 0) {
						t.setAttribute("style", "min-width: inherit;");
						var n = t.clientWidth + 8;
						t.setAttribute("style", "min-width: " + (n + 22) + "px;"), e.setAttribute("style", "min-width: " + n + "px; max-width: " + n + "px;")
					}
				})
			}
		}]), e
	}();
	t.Toolbar = a
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.ViewHistory = void 0;
	var i, r = n(2),
		a = (i = r) && i.__esModule ? i : {
			default: i
		},
		o = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}();

	function s(e) {
		return function() {
			var t = e.apply(this, arguments);
			return new Promise(function(e, n) {
				return function i(r, a) {
					try {
						var o = t[r](a),
							s = o.value
					} catch (e) {
						return void n(e)
					}
					if (!o.done) return Promise.resolve(s).then(function(e) {
						i("next", e)
					}, function(e) {
						i("throw", e)
					});
					e(s)
				}("next")
			})
		}
	}
	var u = 20,
		l = function() {
			function e(t) {
				var n = this,
					i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.fingerprint = t, this.cacheSize = i, this._initializedPromise = this._readFromStorage().then(function(e) {
					var t = JSON.parse(e || "{}");
					if ("files" in t)
						for (; t.files.length >= n.cacheSize;) t.files.shift();
					else t.files = [];
					for (var i = -1, r = 0, a = t.files.length; r < a; r++) {
						if (t.files[r].fingerprint === n.fingerprint) {
							i = r;
							break
						}
					} - 1 === i && (i = t.files.push({
						fingerprint: n.fingerprint
					}) - 1), n.file = t.files[i], n.database = t
				})
			}
			return o(e, [{
				key: "_writeToStorage",
				value: function() {
					var e = s(a.default.mark(function e() {
						var t;
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									t = JSON.stringify(this.database), localStorage.setItem("pdfjs.history", t);
								case 2:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function() {
						return e.apply(this, arguments)
					}
				}()
			}, {
				key: "_readFromStorage",
				value: function() {
					var e = s(a.default.mark(function e() {
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.abrupt("return", localStorage.getItem("pdfjs.history"));
								case 1:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function() {
						return e.apply(this, arguments)
					}
				}()
			}, {
				key: "set",
				value: function() {
					var e = s(a.default.mark(function e(t, n) {
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, this._initializedPromise;
								case 2:
									return this.file[t] = n, e.abrupt("return", this._writeToStorage());
								case 4:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function(t, n) {
						return e.apply(this, arguments)
					}
				}()
			}, {
				key: "setMultiple",
				value: function() {
					var e = s(a.default.mark(function e(t) {
						var n;
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, this._initializedPromise;
								case 2:
									for (n in t) this.file[n] = t[n];
									return e.abrupt("return", this._writeToStorage());
								case 4:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			}, {
				key: "get",
				value: function() {
					var e = s(a.default.mark(function e(t, n) {
						var i;
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, this._initializedPromise;
								case 2:
									return i = this.file[t], e.abrupt("return", void 0 !== i ? i : n);
								case 4:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function(t, n) {
						return e.apply(this, arguments)
					}
				}()
			}, {
				key: "getMultiple",
				value: function() {
					var e = s(a.default.mark(function e(t) {
						var n, i, r;
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, this._initializedPromise;
								case 2:
									for (i in n = Object.create(null), t) r = this.file[i], n[i] = void 0 !== r ? r : t[i];
									return e.abrupt("return", n);
								case 5:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			}]), e
		}();
	t.ViewHistory = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.GenericCom = void 0;
	var i, r = n(2),
		a = (i = r) && i.__esModule ? i : {
			default: i
		},
		o = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		s = n(1),
		u = n(39),
		l = n(40),
		c = n(41);

	function d(e) {
		return function() {
			var t = e.apply(this, arguments);
			return new Promise(function(e, n) {
				return function i(r, a) {
					try {
						var o = t[r](a),
							s = o.value
					} catch (e) {
						return void n(e)
					}
					if (!o.done) return Promise.resolve(s).then(function(e) {
						i("next", e)
					}, function(e) {
						i("throw", e)
					});
					e(s)
				}("next")
			})
		}
	}
	var h = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, u.BasePreferences), o(t, [{
				key: "_writeToStorage",
				value: function() {
					var e = d(a.default.mark(function e(t) {
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									localStorage.setItem("pdfjs.preferences", JSON.stringify(t));
								case 1:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			}, {
				key: "_readFromStorage",
				value: function() {
					var e = d(a.default.mark(function e(t) {
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.abrupt("return", JSON.parse(localStorage.getItem("pdfjs.preferences")));
								case 1:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			}]), t
		}(),
		f = Object.create(s.DefaultExternalServices);
	f.createDownloadManager = function(e) {
		return new l.DownloadManager(e)
	}, f.createPreferences = function() {
		return new h
	}, f.createL10n = function(e) {
		var t = e.locale,
			n = void 0 === t ? "en-US" : t;
		return new c.GenericL10n(n)
	}, s.PDFViewerApplication.externalServices = f, t.GenericCom = {}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.BasePreferences = void 0;
	var i, r = n(2),
		a = (i = r) && i.__esModule ? i : {
			default: i
		},
		o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		s = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}();

	function u(e) {
		return function() {
			var t = e.apply(this, arguments);
			return new Promise(function(e, n) {
				return function i(r, a) {
					try {
						var o = t[r](a),
							s = o.value
					} catch (e) {
						return void n(e)
					}
					if (!o.done) return Promise.resolve(s).then(function(e) {
						i("next", e)
					}, function(e) {
						i("throw", e)
					});
					e(s)
				}("next")
			})
		}
	}
	var l = null;
	var c = function() {
		function e() {
			var t = this;
			if (function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.constructor === e) throw new Error("Cannot initialize BasePreferences.");
			this.prefs = null, this._initializedPromise = (l || (l = Promise.resolve({
				showPreviousViewOnLoad: !0,
				defaultZoomValue: "",
				sidebarViewOnLoad: 0,
				cursorToolOnLoad: 0,
				enableWebGL: !1,
				eventBusDispatchToDOM: !1,
				pdfBugEnabled: !1,
				disableRange: !1,
				disableStream: !1,
				disableAutoFetch: !1,
				disableFontFace: !1,
				textLayerMode: 1,
				useOnlyCssZoom: !1,
				externalLinkTarget: 0,
				renderer: "canvas",
				renderInteractiveForms: !1,
				enablePrintAutoRotate: !1,
				disablePageMode: !1,
				disablePageLabels: !1,
				scrollModeOnLoad: 0,
				spreadModeOnLoad: 0
			})), l).then(function(e) {
				return Object.defineProperty(t, "defaults", {
					value: Object.freeze(e),
					writable: !1,
					enumerable: !0,
					configurable: !1
				}), t.prefs = Object.assign(Object.create(null), e), t._readFromStorage(e)
			}).then(function(e) {
				if (e)
					for (var n in e) {
						var i = t.defaults[n],
							r = e[n];
						void 0 !== i && (void 0 === r ? "undefined" : o(r)) === (void 0 === i ? "undefined" : o(i)) && (t.prefs[n] = r)
					}
			})
		}
		return s(e, [{
			key: "_writeToStorage",
			value: function() {
				var e = u(a.default.mark(function e(t) {
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								throw new Error("Not implemented: _writeToStorage");
							case 1:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function(t) {
					return e.apply(this, arguments)
				}
			}()
		}, {
			key: "_readFromStorage",
			value: function() {
				var e = u(a.default.mark(function e(t) {
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								throw new Error("Not implemented: _readFromStorage");
							case 1:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function(t) {
					return e.apply(this, arguments)
				}
			}()
		}, {
			key: "reset",
			value: function() {
				var e = u(a.default.mark(function e() {
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.next = 2, this._initializedPromise;
							case 2:
								return this.prefs = Object.assign(Object.create(null), this.defaults), e.abrupt("return", this._writeToStorage(this.defaults));
							case 4:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function() {
					return e.apply(this, arguments)
				}
			}()
		}, {
			key: "set",
			value: function() {
				var e = u(a.default.mark(function e(t, n) {
					var i, r, s;
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.next = 2, this._initializedPromise;
							case 2:
								if (void 0 !== (i = this.defaults[t])) {
									e.next = 7;
									break
								}
								throw new Error('Set preference: "' + t + '" is undefined.');
							case 7:
								if (void 0 !== n) {
									e.next = 9;
									break
								}
								throw new Error("Set preference: no value is specified.");
							case 9:
								if (r = void 0 === n ? "undefined" : o(n), s = void 0 === i ? "undefined" : o(i), r === s) {
									e.next = 19;
									break
								}
								if ("number" !== r || "string" !== s) {
									e.next = 16;
									break
								}
								n = n.toString(), e.next = 17;
								break;
							case 16:
								throw new Error('Set preference: "' + n + '" is a ' + r + ", expected a " + s + ".");
							case 17:
								e.next = 21;
								break;
							case 19:
								if ("number" !== r || Number.isInteger(n)) {
									e.next = 21;
									break
								}
								throw new Error('Set preference: "' + n + '" must be an integer.');
							case 21:
								return this.prefs[t] = n, e.abrupt("return", this._writeToStorage(this.prefs));
							case 23:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function(t, n) {
					return e.apply(this, arguments)
				}
			}()
		}, {
			key: "get",
			value: function() {
				var e = u(a.default.mark(function e(t) {
					var n, i;
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.next = 2, this._initializedPromise;
							case 2:
								if (void 0 !== (n = this.defaults[t])) {
									e.next = 7;
									break
								}
								throw new Error('Get preference: "' + t + '" is undefined.');
							case 7:
								if (void 0 === (i = this.prefs[t])) {
									e.next = 10;
									break
								}
								return e.abrupt("return", i);
							case 10:
								return e.abrupt("return", n);
							case 11:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function(t) {
					return e.apply(this, arguments)
				}
			}()
		}, {
			key: "getAll",
			value: function() {
				var e = u(a.default.mark(function e() {
					return a.default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.next = 2, this._initializedPromise;
							case 2:
								return e.abrupt("return", Object.assign(Object.create(null), this.defaults, this.prefs));
							case 3:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function() {
					return e.apply(this, arguments)
				}
			}()
		}]), e
	}();
	t.BasePreferences = c
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.DownloadManager = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = n(7);
	var a = r.apiCompatibilityParams.disableCreateObjectURL || !1;

	function o(e, t) {
		var n = document.createElement("a");
		if (!n.click) throw new Error('DownloadManager: "a.click()" is not supported.');
		n.href = e, n.target = "_parent", "download" in n && (n.download = t), (document.body || document.documentElement).appendChild(n), n.click(), n.remove()
	}
	var s = function() {
		function e(t) {
			var n = t.disableCreateObjectURL,
				i = void 0 === n ? a : n;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.disableCreateObjectURL = i
		}
		return i(e, [{
			key: "downloadUrl",
			value: function(e, t) {
				(0, r.createValidAbsoluteUrl)(e, "http://example.com") && o(e + "#pdfjs.action=download", t)
			}
		}, {
			key: "downloadData",
			value: function(e, t, n) {
				if (navigator.msSaveBlob) return navigator.msSaveBlob(new Blob([e], {
					type: n
				}), t);
				o((0, r.createObjectURL)(e, n, this.disableCreateObjectURL), t)
			}
		}, {
			key: "download",
			value: function(e, t, n) {
				navigator.msSaveBlob ? navigator.msSaveBlob(e, n) || this.downloadUrl(t, n) : this.disableCreateObjectURL ? this.downloadUrl(t, n) : o(r.URL.createObjectURL(e), n)
			}
		}]), e
	}();
	t.DownloadManager = s
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.GenericL10n = void 0;
	var i, r = n(2),
		a = (i = r) && i.__esModule ? i : {
			default: i
		},
		o = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}();

	function s(e) {
		return function() {
			var t = e.apply(this, arguments);
			return new Promise(function(e, n) {
				return function i(r, a) {
					try {
						var o = t[r](a),
							s = o.value
					} catch (e) {
						return void n(e)
					}
					if (!o.done) return Promise.resolve(s).then(function(e) {
						i("next", e)
					}, function(e) {
						i("throw", e)
					});
					e(s)
				}("next")
			})
		}
	}
	n(42);
	var u = document.webL10n,
		l = function() {
			function e(t) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this._lang = t, this._ready = new Promise(function(e, n) {
					u.setLanguage(t, function() {
						e(u)
					})
				})
			}
			return o(e, [{
				key: "getLanguage",
				value: function() {
					var e = s(a.default.mark(function e() {
						var t;
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, this._ready;
								case 2:
									return t = e.sent, e.abrupt("return", t.getLanguage());
								case 4:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function() {
						return e.apply(this, arguments)
					}
				}()
			}, {
				key: "getDirection",
				value: function() {
					var e = s(a.default.mark(function e() {
						var t;
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, this._ready;
								case 2:
									return t = e.sent, e.abrupt("return", t.getDirection());
								case 4:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function() {
						return e.apply(this, arguments)
					}
				}()
			}, {
				key: "get",
				value: function() {
					var e = s(a.default.mark(function e(t, n, i) {
						var r;
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, this._ready;
								case 2:
									return r = e.sent, e.abrupt("return", r.get(t, n, i));
								case 4:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function(t, n, i) {
						return e.apply(this, arguments)
					}
				}()
			}, {
				key: "translate",
				value: function() {
					var e = s(a.default.mark(function e(t) {
						var n;
						return a.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, this._ready;
								case 2:
									return n = e.sent, e.abrupt("return", n.translate(t));
								case 4:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			}]), e
		}();
	t.GenericL10n = l
}, function(e, t, n) {
	"use strict";
	document.webL10n = function(e, t, n) {
		var i = {},
			r = "",
			a = "textContent",
			o = "",
			s = {},
			u = "loading",
			l = !0;

		function c(e) {
			var n = t.createEvent("Event");
			n.initEvent("localized", !0, !1), n.language = e, t.dispatchEvent(n)
		}

		function d(e, t, n) {
			t = t || function(e) {}, n = n || function() {};
			var i = new XMLHttpRequest;
			i.open("GET", e, l), i.overrideMimeType && i.overrideMimeType("text/plain; charset=utf-8"), i.onreadystatechange = function() {
				4 == i.readyState && (200 == i.status || 0 === i.status ? t(i.responseText) : n())
			}, i.onerror = n, i.ontimeout = n;
			try {
				i.send(null)
			} catch (e) {
				n()
			}
		}

		function h(e, t, n, o) {
			var s = e.replace(/[^\/]*$/, "") || "./";
			d(e, function(e) {
				r += e,
					function(e, n) {
						var i = {},
							r = /^\s*|\s*$/,
							a = /^\s*#|^\s*$/,
							o = /^\s*\[(.*)\]\s*$/,
							u = /^\s*@import\s+url\((.*)\)\s*$/i,
							l = /^([^=\s]*)\s*=\s*(.+)$/;

						function c(e, n, c) {
							var d = e.replace(r, "").split(/[\r\n]+/),
								f = "*",
								p = t.split("-", 1)[0],
								v = !1,
								g = "";
							! function e() {
								for (;;) {
									if (!d.length) return void c();
									var r = d.shift();
									if (!a.test(r)) {
										if (n) {
											if (g = o.exec(r)) {
												f = g[1].toLowerCase(), v = "*" !== f && f !== t && f !== p;
												continue
											}
											if (v) continue;
											if (g = u.exec(r)) return void h(s + g[1], e)
										}
										var m = r.match(l);
										m && 3 == m.length && (i[m[1]] = (w = m[2]).lastIndexOf("\\") < 0 ? w : w.replace(/\\\\/g, "\\").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\{/g, "{").replace(/\\}/g, "}").replace(/\\"/g, '"').replace(/\\'/g, "'"))
									}
								}
								var w
							}()
						}

						function h(e, t) {
							d(e, function(e) {
								c(e, !1, t)
							}, function() {
								console.warn(e + " not found."), t()
							})
						}
						c(e, !0, function() {
							n(i)
						})
					}(e, function(e) {
						for (var t in e) {
							var r, o, s = t.lastIndexOf(".");
							s > 0 ? (r = t.substring(0, s), o = t.substring(s + 1)) : (r = t, o = a), i[r] || (i[r] = {}), i[r][o] = e[t]
						}
						n && n()
					})
			}, o)
		}

		function f(e, n) {
			e && (e = e.toLowerCase()), n = n || function() {}, i = {}, r = "", o = "", o = e;
			var a, s = t.querySelectorAll('link[type="application/l10n"]'),
				l = s.length;
			if (0 === l) {
				var d = (a = t.querySelector('script[type="application/l10n"]')) ? JSON.parse(a.innerHTML) : null;
				if (d && d.locales && d.default_locale) {
					if (console.log("using the embedded JSON directory, early way out"), !(i = d.locales[e])) {
						var f = d.default_locale.toLowerCase();
						for (var p in d.locales) {
							if ((p = p.toLowerCase()) === e) {
								i = d.locales[e];
								break
							}
							p === f && (i = d.locales[f])
						}
					}
					n()
				} else console.log("no resource to load, early way out");
				return c(e), void(u = "complete")
			}
			var v, g = 0;

			function m(e) {
				var t = e.href;
				this.load = function(e, n) {
					h(t, e, n, function() {
						console.warn(t + " not found."), console.warn('"' + e + '" resource not found'), o = "", n()
					})
				}
			}
			v = function() {
				++g >= l && (n(), c(e), u = "complete")
			};
			for (var w = 0; w < l; w++) {
				new m(s[w]).load(e, v)
			}
		}

		function p(e, t, n) {
			var r = i[e];
			if (!r) {
				if (console.warn("#" + e + " is undefined."), !n) return null;
				r = n
			}
			var a = {};
			for (var o in r) {
				var s = r[o];
				s = g(s = v(s, t, e, o), t, e), a[o] = s
			}
			return a
		}

		function v(e, t, n, r) {
			var a = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/.exec(e);
			if (!a || !a.length) return e;
			var o, u = a[1],
				l = a[2];
			(t && l in t ? o = t[l] : l in i && (o = i[l]), u in s) && (e = (0, s[u])(e, o, n, r));
			return e
		}

		function g(e, t, n) {
			return e.replace(/\{\{\s*(.+?)\s*\}\}/g, function(e, r) {
				return t && r in t ? t[r] : r in i ? i[r] : (console.log("argument {{" + r + "}} for #" + n + " is undefined."), e)
			})
		}

		function m(e) {
			var n = function(e) {
				if (!e) return {};
				var t = e.getAttribute("data-l10n-id"),
					n = e.getAttribute("data-l10n-args"),
					i = {};
				if (n) try {
					i = JSON.parse(n)
				} catch (e) {
					console.warn("could not parse arguments for #" + t)
				}
				return {
					id: t,
					args: i
				}
			}(e);
			if (n.id) {
				var i = p(n.id, n.args);
				if (i) {
					if (i[a]) {
						if (0 === function(e) {
								if (e.children) return e.children.length;
								if (void 0 !== e.childElementCount) return e.childElementCount;
								for (var t = 0, n = 0; n < e.childNodes.length; n++) t += 1 === e.nodeType ? 1 : 0;
								return t
							}(e)) e[a] = i[a];
						else {
							for (var r = e.childNodes, o = !1, s = 0, u = r.length; s < u; s++) 3 === r[s].nodeType && /\S/.test(r[s].nodeValue) && (o ? r[s].nodeValue = "" : (r[s].nodeValue = i[a], o = !0));
							if (!o) {
								var l = t.createTextNode(i[a]);
								e.insertBefore(l, e.firstChild)
							}
						}
						delete i[a]
					}
					for (var c in i) e[c] = i[c]
				} else console.warn("#" + n.id + " is undefined.")
			}
		}
		return s.plural = function(e, t, n, r) {
			var u = parseFloat(t);
			if (isNaN(u)) return e;
			if (r != a) return e;
			s._pluralRules || (s._pluralRules = function(e) {
				function t(e, t) {
					return -1 !== t.indexOf(e)
				}

				function n(e, t, n) {
					return t <= e && e <= n
				}
				var i = {
						0: function(e) {
							return "other"
						},
						1: function(e) {
							return n(e % 100, 3, 10) ? "few" : 0 === e ? "zero" : n(e % 100, 11, 99) ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
						},
						2: function(e) {
							return 0 !== e && e % 10 == 0 ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
						},
						3: function(e) {
							return 1 == e ? "one" : "other"
						},
						4: function(e) {
							return n(e, 0, 1) ? "one" : "other"
						},
						5: function(e) {
							return n(e, 0, 2) && 2 != e ? "one" : "other"
						},
						6: function(e) {
							return 0 === e ? "zero" : e % 10 == 1 && e % 100 != 11 ? "one" : "other"
						},
						7: function(e) {
							return 2 == e ? "two" : 1 == e ? "one" : "other"
						},
						8: function(e) {
							return n(e, 3, 6) ? "few" : n(e, 7, 10) ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
						},
						9: function(e) {
							return 0 === e || 1 != e && n(e % 100, 1, 19) ? "few" : 1 == e ? "one" : "other"
						},
						10: function(e) {
							return n(e % 10, 2, 9) && !n(e % 100, 11, 19) ? "few" : e % 10 != 1 || n(e % 100, 11, 19) ? "other" : "one"
						},
						11: function(e) {
							return n(e % 10, 2, 4) && !n(e % 100, 12, 14) ? "few" : e % 10 == 0 || n(e % 10, 5, 9) || n(e % 100, 11, 14) ? "many" : e % 10 == 1 && e % 100 != 11 ? "one" : "other"
						},
						12: function(e) {
							return n(e, 2, 4) ? "few" : 1 == e ? "one" : "other"
						},
						13: function(e) {
							return n(e % 10, 2, 4) && !n(e % 100, 12, 14) ? "few" : 1 != e && n(e % 10, 0, 1) || n(e % 10, 5, 9) || n(e % 100, 12, 14) ? "many" : 1 == e ? "one" : "other"
						},
						14: function(e) {
							return n(e % 100, 3, 4) ? "few" : e % 100 == 2 ? "two" : e % 100 == 1 ? "one" : "other"
						},
						15: function(e) {
							return 0 === e || n(e % 100, 2, 10) ? "few" : n(e % 100, 11, 19) ? "many" : 1 == e ? "one" : "other"
						},
						16: function(e) {
							return e % 10 == 1 && 11 != e ? "one" : "other"
						},
						17: function(e) {
							return 3 == e ? "few" : 0 === e ? "zero" : 6 == e ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
						},
						18: function(e) {
							return 0 === e ? "zero" : n(e, 0, 2) && 0 !== e && 2 != e ? "one" : "other"
						},
						19: function(e) {
							return n(e, 2, 10) ? "few" : n(e, 0, 1) ? "one" : "other"
						},
						20: function(e) {
							return !n(e % 10, 3, 4) && e % 10 != 9 || n(e % 100, 10, 19) || n(e % 100, 70, 79) || n(e % 100, 90, 99) ? e % 1e6 == 0 && 0 !== e ? "many" : e % 10 != 2 || t(e % 100, [12, 72, 92]) ? e % 10 != 1 || t(e % 100, [11, 71, 91]) ? "other" : "one" : "two" : "few"
						},
						21: function(e) {
							return 0 === e ? "zero" : 1 == e ? "one" : "other"
						},
						22: function(e) {
							return n(e, 0, 1) || n(e, 11, 99) ? "one" : "other"
						},
						23: function(e) {
							return n(e % 10, 1, 2) || e % 20 == 0 ? "one" : "other"
						},
						24: function(e) {
							return n(e, 3, 10) || n(e, 13, 19) ? "few" : t(e, [2, 12]) ? "two" : t(e, [1, 11]) ? "one" : "other"
						}
					},
					r = {
						af: 3,
						ak: 4,
						am: 4,
						ar: 1,
						asa: 3,
						az: 0,
						be: 11,
						bem: 3,
						bez: 3,
						bg: 3,
						bh: 4,
						bm: 0,
						bn: 3,
						bo: 0,
						br: 20,
						brx: 3,
						bs: 11,
						ca: 3,
						cgg: 3,
						chr: 3,
						cs: 12,
						cy: 17,
						da: 3,
						de: 3,
						dv: 3,
						dz: 0,
						ee: 3,
						el: 3,
						en: 3,
						eo: 3,
						es: 3,
						et: 3,
						eu: 3,
						fa: 0,
						ff: 5,
						fi: 3,
						fil: 4,
						fo: 3,
						fr: 5,
						fur: 3,
						fy: 3,
						ga: 8,
						gd: 24,
						gl: 3,
						gsw: 3,
						gu: 3,
						guw: 4,
						gv: 23,
						ha: 3,
						haw: 3,
						he: 2,
						hi: 4,
						hr: 11,
						hu: 0,
						id: 0,
						ig: 0,
						ii: 0,
						is: 3,
						it: 3,
						iu: 7,
						ja: 0,
						jmc: 3,
						jv: 0,
						ka: 0,
						kab: 5,
						kaj: 3,
						kcg: 3,
						kde: 0,
						kea: 0,
						kk: 3,
						kl: 3,
						km: 0,
						kn: 0,
						ko: 0,
						ksb: 3,
						ksh: 21,
						ku: 3,
						kw: 7,
						lag: 18,
						lb: 3,
						lg: 3,
						ln: 4,
						lo: 0,
						lt: 10,
						lv: 6,
						mas: 3,
						mg: 4,
						mk: 16,
						ml: 3,
						mn: 3,
						mo: 9,
						mr: 3,
						ms: 0,
						mt: 15,
						my: 0,
						nah: 3,
						naq: 7,
						nb: 3,
						nd: 3,
						ne: 3,
						nl: 3,
						nn: 3,
						no: 3,
						nr: 3,
						nso: 4,
						ny: 3,
						nyn: 3,
						om: 3,
						or: 3,
						pa: 3,
						pap: 3,
						pl: 13,
						ps: 3,
						pt: 3,
						rm: 3,
						ro: 9,
						rof: 3,
						ru: 11,
						rwk: 3,
						sah: 0,
						saq: 3,
						se: 7,
						seh: 3,
						ses: 0,
						sg: 0,
						sh: 11,
						shi: 19,
						sk: 12,
						sl: 14,
						sma: 7,
						smi: 7,
						smj: 7,
						smn: 7,
						sms: 7,
						sn: 3,
						so: 3,
						sq: 3,
						sr: 11,
						ss: 3,
						ssy: 3,
						st: 3,
						sv: 3,
						sw: 3,
						syr: 3,
						ta: 3,
						te: 3,
						teo: 3,
						th: 0,
						ti: 4,
						tig: 3,
						tk: 3,
						tl: 4,
						tn: 3,
						to: 0,
						tr: 0,
						ts: 3,
						tzm: 22,
						uk: 11,
						ur: 3,
						ve: 3,
						vi: 0,
						vun: 3,
						wa: 4,
						wae: 3,
						wo: 0,
						xh: 3,
						xog: 3,
						yo: 0,
						zh: 0,
						zu: 3
					}[e.replace(/-.*$/, "")];
				return r in i ? i[r] : (console.warn("plural form unknown for [" + e + "]"), function() {
					return "other"
				})
			}(o));
			var l = "[" + s._pluralRules(u) + "]";
			return 0 === u && n + "[zero]" in i ? e = i[n + "[zero]"][r] : 1 == u && n + "[one]" in i ? e = i[n + "[one]"][r] : 2 == u && n + "[two]" in i ? e = i[n + "[two]"][r] : n + l in i ? e = i[n + l][r] : n + "[other]" in i && (e = i[n + "[other]"][r]), e
		}, {
			get: function(e, t, n) {
				var i, r = e.lastIndexOf("."),
					o = a;
				r > 0 && (o = e.substring(r + 1), e = e.substring(0, r)), n && ((i = {})[o] = n);
				var s = p(e, t, i);
				return s && o in s ? s[o] : "{{" + e + "}}"
			},
			getData: function() {
				return i
			},
			getText: function() {
				return r
			},
			getLanguage: function() {
				return o
			},
			setLanguage: function(e, t) {
				f(e, function() {
					t && t()
				})
			},
			getDirection: function() {
				var e = o.split("-", 1)[0];
				return ["ar", "he", "fa", "ps", "ur"].indexOf(e) >= 0 ? "rtl" : "ltr"
			},
			translate: function(e) {
				for (var n = function(e) {
						return e ? e.querySelectorAll("*[data-l10n-id]") : []
					}(e = e || t.documentElement), i = n.length, r = 0; r < i; r++) m(n[r]);
				m(e)
			},
			getReadyState: function() {
				return u
			},
			ready: function(n) {
				n && ("complete" == u || "interactive" == u ? e.setTimeout(function() {
					n()
				}) : t.addEventListener && t.addEventListener("localized", function e() {
					t.removeEventListener("localized", e), n()
				}))
			}
		}
	}(window, document)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFPrintService = void 0;
	var i = n(6),
		r = n(1),
		a = n(7),
		o = null,
		s = null;

	function u(e, t, n, r) {
		this.pdfDocument = e, this.pagesOverview = t, this.printContainer = n, this.l10n = r || i.NullL10n, this.disableCreateObjectURL = e.loadingParams.disableCreateObjectURL, this.currentPage = -1, this.scratchCanvas = document.createElement("canvas")
	}
	u.prototype = {
		layout: function() {
			this.throwIfInactive();
			var e = document.querySelector("body");
			e.setAttribute("data-pdfjsprinting", !0), this.pagesOverview.every(function(e) {
				return e.width === this.pagesOverview[0].width && e.height === this.pagesOverview[0].height
			}, this) || console.warn("Not all pages have the same size. The printed result may be incorrect!"), this.pageStyleSheet = document.createElement("style");
			var t = this.pagesOverview[0];
			this.pageStyleSheet.textContent = "@supports ((size:A4) and (size:1pt 1pt)) {@page { size: " + t.width + "pt " + t.height + "pt;}}", e.appendChild(this.pageStyleSheet)
		},
		destroy: function() {
			o === this && (this.printContainer.textContent = "", this.pageStyleSheet && (this.pageStyleSheet.remove(), this.pageStyleSheet = null), this.scratchCanvas.width = this.scratchCanvas.height = 0, this.scratchCanvas = null, o = null, g().then(function() {
				"printServiceOverlay" === s.active && s.close("printServiceOverlay")
			}))
		},
		renderPages: function() {
			var e = this,
				t = this.pagesOverview.length;
			return new Promise(function n(r, a) {
				if (e.throwIfInactive(), ++e.currentPage >= t) return h(t, t, e.l10n), void r();
				var s = e.currentPage;
				h(s, t, e.l10n),
					function(e, t, n, r) {
						var a = o.scratchCanvas;
						a.width = Math.floor(r.width * (150 / 72)), a.height = Math.floor(r.height * (150 / 72));
						var s = Math.floor(r.width * i.CSS_UNITS) + "px",
							u = Math.floor(r.height * i.CSS_UNITS) + "px",
							l = a.getContext("2d");
						return l.save(), l.fillStyle = "rgb(255, 255, 255)", l.fillRect(0, 0, a.width, a.height), l.restore(), t.getPage(n).then(function(e) {
							var t = {
								canvasContext: l,
								transform: [150 / 72, 0, 0, 150 / 72, 0, 0],
								viewport: e.getViewport(1, r.rotation),
								intent: "print"
							};
							return e.render(t).promise
						}).then(function() {
							return {
								width: s,
								height: u
							}
						})
					}(0, e.pdfDocument, s + 1, e.pagesOverview[s]).then(e.useRenderedPage.bind(e)).then(function() {
						n(r, a)
					}, a)
			})
		},
		useRenderedPage: function(e) {
			this.throwIfInactive();
			var t = document.createElement("img");
			t.style.width = e.width, t.style.height = e.height;
			var n = this.scratchCanvas;
			"toBlob" in n && !this.disableCreateObjectURL ? n.toBlob(function(e) {
				t.src = a.URL.createObjectURL(e)
			}) : t.src = n.toDataURL();
			var i = document.createElement("div");
			return i.appendChild(t), this.printContainer.appendChild(i), new Promise(function(e, n) {
				t.onload = e, t.onerror = n
			})
		},
		performPrint: function() {
			var e = this;
			return this.throwIfInactive(), new Promise(function(t) {
				setTimeout(function() {
					e.active ? (l.call(window), setTimeout(t, 20)) : t()
				}, 0)
			})
		},
		get active() {
			return this === o
		},
		throwIfInactive: function() {
			if (!this.active) throw new Error("This print request was cancelled or completed.")
		}
	};
	var l = window.print;

	function c(e) {
		var t = document.createEvent("CustomEvent");
		t.initCustomEvent(e, !1, !1, "custom"), window.dispatchEvent(t)
	}

	function d() {
		o && (o.destroy(), c("afterprint"))
	}

	function h(e, t, n) {
		var i = document.getElementById("printServiceOverlay"),
			r = Math.round(100 * e / t),
			a = i.querySelector("progress"),
			o = i.querySelector(".relative-progress");
		a.value = r, n.get("print_progress_percent", {
			progress: r
		}, r + "%").then(function(e) {
			o.textContent = e
		})
	}
	window.print = function() {
		if (o) console.warn("Ignored window.print() because of a pending print job.");
		else {
			g().then(function() {
				o && s.open("printServiceOverlay")
			});
			try {
				c("beforeprint")
			} finally {
				if (!o) return console.error("Expected print service to be initialized."), void g().then(function() {
					"printServiceOverlay" === s.active && s.close("printServiceOverlay")
				});
				var e = o;
				o.renderPages().then(function() {
					return e.performPrint()
				}).catch(function() {}).then(function() {
					e.active && d()
				})
			}
		}
	};
	var f = !!document.attachEvent;
	if (window.addEventListener("keydown", function(e) {
			if (80 === e.keyCode && (e.ctrlKey || e.metaKey) && !e.altKey && (!e.shiftKey || window.chrome || window.opera)) {
				if (window.print(), f) return;
				return e.preventDefault(), void(e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.stopPropagation())
			}
		}, !0), f && document.attachEvent("onkeydown", function(e) {
			if (80 === (e = e || window.event).keyCode && e.ctrlKey) return e.keyCode = 0, !1
		}), "onbeforeprint" in window) {
		var p = function(e) {
			"custom" !== e.detail && e.stopImmediatePropagation && e.stopImmediatePropagation()
		};
		window.addEventListener("beforeprint", p), window.addEventListener("afterprint", p)
	}
	var v = void 0;

	function g() {
		if (!v) {
			if (!(s = r.PDFViewerApplication.overlayManager)) throw new Error("The overlay manager has not yet been initialized.");
			v = s.register("printServiceOverlay", document.getElementById("printServiceOverlay"), d, !0), document.getElementById("printCancel").onclick = d
		}
		return v
	}
	r.PDFPrintServiceFactory.instance = {
		supportsPrinting: !0,
		createPrintService: function(e, t, n, i) {
			if (o) throw new Error("The print service is created and active.");
			return o = new u(e, t, n, i)
		}
	}, t.PDFPrintService = u
}]);