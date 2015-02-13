﻿/*
 Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
 */

		(function() {
			var a = function(b, c) {
				var d = 1, e = 2, f = 4, g = 8, h = /^\s*(\d+)((px)|\%)?\s*$/i, i = /(^\s*(\d+)((px)|\%)?\s*$)|^$/i, j = /^\d+px$/, k = function() {
					var B = this.getValue(), C = this.getDialog(), D = B.match(h);
					if (D) {
						if (D[2] == '%')
							p(C, false);
						B = D[1];
					}
					if (C.lockRatio) {
						var E = C.originalElement;
						if (E.getCustomData('isReady') == 'true')
							if (this.id == 'txtHeight') {
								if (B && B != '0')
									B = Math.round(E.$.width * (B / E.$.height));
								if (!isNaN(B))
									C.setValueOf('info', 'txtWidth', B);
							} else {
								if (B && B != '0')
									B = Math.round(E.$.height * (B / E.$.width));
								if (!isNaN(B))
									C.setValueOf('info', 'txtHeight', B);
							}
					}
					l(C);
				}, l = function(B) {
					if (!B.originalElement || !B.preview)
						return 1;
					B.commitContent(f, B.preview);
					return 0;
				};
				function m() {
					var B = arguments, C = this.getContentElement('advanced', 'txtdlgGenStyle');
					C && C.commit.apply(C, B);
					this.foreach(function(D) {
						if (D.commit && D.id != 'txtdlgGenStyle')
							D.commit.apply(D, B);
					});
				}
				;
				var n;
				function o(B) {
					if (n)
						return;
					n = 1;
					var C = this.getDialog(), D = C.imageElement;
					if (D) {
						this.commit(d, D);
						B = [].concat(B);
						var E = B.length, F;
						for (var G = 0; G < E; G++) {
							F = C.getContentElement.apply(C, B[G].split(':'));
							F && F.setup(d, D);
						}
					}
					n = 0;
				}
				;
				var p = function(B, C) {
					if (!B.getContentElement('info', 'ratioLock'))
						return null;
					var D = B.originalElement;
					if (!D)
						return null;
					if (C == 'check') {
						if (!B.userlockRatio && D.getCustomData('isReady') == 'true') {
							var E = B.getValueOf('info', 'txtWidth'), F = B.getValueOf('info', 'txtHeight'), G = D.$.width * 1000 / D.$.height, H = E * 1000 / F;
							B.lockRatio = false;
							if (!E && !F)
								B.lockRatio = true;
							else if (!isNaN(G) && !isNaN(H))
								if (Math.round(G) == Math.round(H))
									B.lockRatio = true;
						}
					} else if (C != undefined)
						B.lockRatio = C;
					else {
						B.userlockRatio = 1;
						B.lockRatio = !B.lockRatio;
					}
					var I = CKEDITOR.document.getById(w);
					if (B.lockRatio)
						I.removeClass('cke_btn_unlocked');
					else
						I.addClass('cke_btn_unlocked');
					I.setAttribute('aria-checked', B.lockRatio);
					if (CKEDITOR.env.hc) {
						var J = I.getChild(0);
						J.setHtml(B.lockRatio ? CKEDITOR.env.ie ? '■' : '▣' : CKEDITOR.env.ie ? '□' : '▢');
					}
					return B.lockRatio;
				}, q = function(B) {
					var C = B.originalElement;
					if (C.getCustomData('isReady') == 'true') {
						var D = B.getContentElement('info', 'txtWidth'), E = B.getContentElement('info', 'txtHeight');
						D && D.setValue(C.$.width);
						E && E.setValue(C.$.height);
					}
					l(B);
				}, r = function(B, C) {
					if (B != d)
						return;
					function D(I, J) {
						var K = I.match(h);
						if (K) {
							if (K[2] == '%') {
								K[1] += '%';
								p(E, false);
							}
							return K[1];
						}
						return J;
					}
					;
					var E = this.getDialog(), F = '', G = this.id == 'txtWidth' ? 'width' : 'height', H = C.getAttribute(G);
					if (H)
						F = D(H, F);
					F = D(C.getStyle(G), F);
					this.setValue(F);
				}, s, t = function() {
					var B = this.originalElement;
					B.setCustomData('isReady', 'true');
					B.removeListener('load', t);
					B.removeListener('error', u);
					B.removeListener('abort', u);
					CKEDITOR.document.getById(y).setStyle('display', 'none');
					if (!this.dontResetSize)
						q(this);
					if (this.firstLoad)
						CKEDITOR.tools.setTimeout(function() {
							p(this, 'check');
						}, 0, this);
					this.firstLoad = false;
					this.dontResetSize = false;
				}, u = function() {
					var D = this;
					var B = D.originalElement;
					B.removeListener('load', t);
					B.removeListener('error', u);
					B.removeListener('abort', u);
					var C = CKEDITOR.getUrl(b.skinPath + 'images/noimage.png');
					if (D.preview)
						D.preview.setAttribute('src', C);
					CKEDITOR.document.getById(y).setStyle('display', 'none');
					p(D, false);
				}, v = function(B) {
					return CKEDITOR.tools.getNextId() + '_' + B;
				}, w = v('btnLockSizes'), x = v('btnResetSize'), y = v('ImagePreviewLoader'), z = v('previewLink'), A = v('previewImage');
				return{title: b.lang.image[c == 'image' ? 'title' : 'titleButton'], minWidth: 420, minHeight: 360, onShow: function() {
						var H = this;
						H.imageElement = false;
						H.linkElement = false;
						H.imageEditMode = false;
						H.linkEditMode = false;
						H.lockRatio = true;
						H.userlockRatio = 0;
						H.dontResetSize = false;
						H.firstLoad = true;
						H.addLink = false;
						var B = H.getParentEditor(), C = B.getSelection(), D = C && C.getSelectedElement(), E = D && D.getAscendant('a');
						CKEDITOR.document.getById(y).setStyle('display', 'none');
						s = new CKEDITOR.dom.element('img', B.document);
						H.preview = CKEDITOR.document.getById(A);
						H.originalElement = B.document.createElement('img');
						H.originalElement.setAttribute('alt', '');
						H.originalElement.setCustomData('isReady', 'false');
						if (E) {
							H.linkElement = E;
							H.linkEditMode = true;
							var F = E.getChildren();
							if (F.count() == 1) {
								var G = F.getItem(0).getName();
								if (G == 'img' || G == 'input') {
									H.imageElement = F.getItem(0);
									if (H.imageElement.getName() == 'img')
										H.imageEditMode = 'img';
									else if (H.imageElement.getName() == 'input')
										H.imageEditMode = 'input';
								}
							}
							if (c == 'image')
								H.setupContent(e, E);
						}
						if (D && D.getName() == 'img' && !D.data('cke-realelement') || D && D.getName() == 'input' && D.getAttribute('type') == 'image') {
							H.imageEditMode = D.getName();
							H.imageElement = D;
						}
						if (H.imageEditMode) {
							H.cleanImageElement = H.imageElement;
							H.imageElement = H.cleanImageElement.clone(true, true);
							H.setupContent(d, H.imageElement);
						} else
							H.imageElement = B.document.createElement('img');
						p(H, true);
						if (!CKEDITOR.tools.trim(H.getValueOf('info', 'txtUrl'))) {
							H.preview.removeAttribute('src');
							H.preview.setStyle('display', 'none');
						}
					}, onOk: function() {
						var C = this;
						if (C.imageEditMode) {
							var B = C.imageEditMode;
							if (c == 'image' && B == 'input' && confirm(b.lang.image.button2Img)) {
								B = 'img';
								C.imageElement = b.document.createElement('img');
								C.imageElement.setAttribute('alt', '');
								b.insertElement(C.imageElement);
							} else if (c != 'image' && B == 'img' && confirm(b.lang.image.img2Button)) {
								B = 'input';
								C.imageElement = b.document.createElement('input');
								C.imageElement.setAttributes({type: 'image', alt: ''});
								b.insertElement(C.imageElement);
							} else {
								C.imageElement = C.cleanImageElement;
								delete C.cleanImageElement;
							}
						} else {
							if (c == 'image')
								C.imageElement = b.document.createElement('img');
							else {
								C.imageElement = b.document.createElement('input');
								C.imageElement.setAttribute('type', 'image');
							}
							C.imageElement.setAttribute('alt', '');
						}
						if (!C.linkEditMode)
							C.linkElement = b.document.createElement('a');
						C.commitContent(d, C.imageElement);
						C.commitContent(e, C.linkElement);
						if (!C.imageElement.getAttribute('style'))
							C.imageElement.removeAttribute('style');
						if (!C.imageEditMode) {
							if (C.addLink) {
								if (!C.linkEditMode) {
									b.insertElement(C.linkElement);
									C.linkElement.append(C.imageElement, false);
								} else
									b.insertElement(C.imageElement);
							} else
								b.insertElement(C.imageElement);
						} else if (!C.linkEditMode && C.addLink) {
							b.insertElement(C.linkElement);
							C.imageElement.appendTo(C.linkElement);
						} else if (C.linkEditMode && !C.addLink) {
							b.getSelection().selectElement(C.linkElement);
							b.insertElement(C.imageElement);
						}
					}, onLoad: function() {
						var C = this;
						if (c != 'image')
							C.hidePage('Link');
						var B = C._.element.getDocument();
						if (C.getContentElement('info', 'ratioLock')) {
							C.addFocusable(B.getById(x), 5);
							C.addFocusable(B.getById(w), 5);
						}
						C.commitContent = m;
					}, onHide: function() {
						var B = this;
						if (B.preview)
							B.commitContent(g, B.preview);
						if (B.originalElement) {
							B.originalElement.removeListener('load', t);
							B.originalElement.removeListener('error', u);
							B.originalElement.removeListener('abort', u);
							B.originalElement.remove();
							B.originalElement = false;
						}
						delete B.imageElement;
					}, contents: [{id: 'info', label: b.lang.image.infoTab, accessKey: 'I', elements: [{type: 'vbox', padding: 0, children: [{type: 'hbox', widths: ['280px', '110px'], align: 'right', children: [{id: 'txtUrl', type: 'text', label: b.lang.common.url, required: true, onChange: function() {
														var B = this.getDialog(), C = this.getValue();
														if (C.length > 0) {
															B = this.getDialog();
															var D = B.originalElement;
															B.preview.removeStyle('display');
															D.setCustomData('isReady', 'false');
															var E = CKEDITOR.document.getById(y);
															if (E)
																E.setStyle('display', '');
															D.on('load', t, B);
															D.on('error', u, B);
															D.on('abort', u, B);
															D.setAttribute('src', C);
															s.setAttribute('src', C);
															B.preview.setAttribute('src', s.$.src);
															l(B);
														} else if (B.preview) {
															B.preview.removeAttribute('src');
															B.preview.setStyle('display', 'none');
														}
													}, setup: function(B, C) {
														if (B == d) {
															var D = C.data('cke-saved-src') || C.getAttribute('src'), E = this;
															this.getDialog().dontResetSize = true;
															E.setValue(D);
															E.setInitValue();
														}
													}, commit: function(B, C) {
														var D = this;
														if (B == d && (D.getValue() || D.isChanged())) {
															C.data('cke-saved-src', D.getValue());
															C.setAttribute('src', D.getValue());
														} else if (B == g) {
															C.setAttribute('src', '');
															C.removeAttribute('src');
														}
													}, validate: CKEDITOR.dialog.validate.notEmpty(b.lang.image.urlMissing)}, {type: 'button', id: 'browse', style: 'display:inline-block;margin-top:10px;', align: 'center', label: b.lang.common.browseServer, hidden: true, filebrowser: 'info:txtUrl'}]}]}, {id: 'txtAlt', type: 'text', label: b.lang.image.alt, accessKey: 'T', 'default': '', onChange: function() {
										l(this.getDialog());
									}, setup: function(B, C) {
										if (B == d)
											this.setValue(C.getAttribute('alt'));
									}, commit: function(B, C) {
										var D = this;
										if (B == d) {
											if (D.getValue() || D.isChanged())
												C.setAttribute('alt', D.getValue());
										} else if (B == f)
											C.setAttribute('alt', D.getValue());
										else if (B == g)
											C.removeAttribute('alt');
									}}, {type: 'hbox', children: [{id: 'basic', type: 'vbox', children: [{type: 'hbox', widths: ['50%', '50%'], children: [{type: 'vbox', padding: 1, children: [{type: 'text', width: '40px', id: 'txtWidth', label: b.lang.common.width, onKeyUp: k, onChange: function() {
																		o.call(this, 'advanced:txtdlgGenStyle');
																	}, validate: function() {
																		var B = this.getValue().match(i), C = !!(B && parseInt(B[1], 10) !== 0);
																		if (!C)
																			alert(b.lang.common.invalidWidth);
																		return C;
																	}, setup: r, commit: function(B, C, D) {
																		var E = this.getValue();
																		if (B == d) {
																			if (E)
																				C.setStyle('width', CKEDITOR.tools.cssLength(E));
																			else
																				C.removeStyle('width');
																			!D && C.removeAttribute('width');
																		} else if (B == f) {
																			var F = E.match(h);
																			if (!F) {
																				var G = this.getDialog().originalElement;
																				if (G.getCustomData('isReady') == 'true')
																					C.setStyle('width', G.$.width + 'px');
																			} else
																				C.setStyle('width', CKEDITOR.tools.cssLength(E));
																		} else if (B == g) {
																			C.removeAttribute('width');
																			C.removeStyle('width');
																		}
																	}}, {type: 'text', id: 'txtHeight', width: '40px', label: b.lang.common.height, onKeyUp: k, onChange: function() {
																		o.call(this, 'advanced:txtdlgGenStyle');
																	}, validate: function() {
																		var B = this.getValue().match(i), C = !!(B && parseInt(B[1], 10) !== 0);
																		if (!C)
																			alert(b.lang.common.invalidHeight);
																		return C;
																	}, setup: r, commit: function(B, C, D) {
																		var E = this.getValue();
																		if (B == d) {
																			if (E)
																				C.setStyle('height', CKEDITOR.tools.cssLength(E));
																			else
																				C.removeStyle('height');
																			!D && C.removeAttribute('height');
																		} else if (B == f) {
																			var F = E.match(h);
																			if (!F) {
																				var G = this.getDialog().originalElement;
																				if (G.getCustomData('isReady') == 'true')
																					C.setStyle('height', G.$.height + 'px');
																			} else
																				C.setStyle('height', CKEDITOR.tools.cssLength(E));
																		} else if (B == g) {
																			C.removeAttribute('height');
																			C.removeStyle('height');
																		}
																	}}]}, {id: 'ratioLock', type: 'html', style: 'margin-top:30px;width:40px;height:40px;', onLoad: function() {
																var B = CKEDITOR.document.getById(x), C = CKEDITOR.document.getById(w);
																if (B) {
																	B.on('click', function(D) {
																		q(this);
																		D.data && D.data.preventDefault();
																	}, this.getDialog());
																	B.on('mouseover', function() {
																		this.addClass('cke_btn_over');
																	}, B);
																	B.on('mouseout', function() {
																		this.removeClass('cke_btn_over');
																	}, B);
																}
																if (C) {
																	C.on('click', function(D) {
																		var I = this;
																		var E = p(I), F = I.originalElement, G = I.getValueOf('info', 'txtWidth');
																		if (F.getCustomData('isReady') == 'true' && G) {
																			var H = F.$.height / F.$.width * G;
																			if (!isNaN(H)) {
																				I.setValueOf('info', 'txtHeight', Math.round(H));
																				l(I);
																			}
																		}
																		D.data && D.data.preventDefault();
																	}, this.getDialog());
																	C.on('mouseover', function() {
																		this.addClass('cke_btn_over');
																	}, C);
																	C.on('mouseout', function() {
																		this.removeClass('cke_btn_over');
																	}, C);
																}
															}, html: '<div><a href="javascript:void(0)" tabindex="-1" title="' + b.lang.image.lockRatio + '" class="cke_btn_locked" id="' + w + '" role="checkbox"><span class="cke_icon"></span><span class="cke_label">' + b.lang.image.lockRatio + '</span></a>' + '<a href="javascript:void(0)" tabindex="-1" title="' + b.lang.image.resetSize + '" class="cke_btn_reset" id="' + x + '" role="button"><span class="cke_label">' + b.lang.image.resetSize + '</span></a>' + '</div>'}]}, {type: 'vbox', padding: 1, children: [{type: 'text', id: 'txtBorder', width: '60px', label: b.lang.image.border, 'default': '', onKeyUp: function() {
																l(this.getDialog());
															}, onChange: function() {
																o.call(this, 'advanced:txtdlgGenStyle');
															}, validate: CKEDITOR.dialog.validate.integer(b.lang.image.validateBorder), setup: function(B, C) {
																if (B == d) {
																	var D, E = C.getStyle('border-width');
																	E = E && E.match(/^(\d+px)(?: \1 \1 \1)?$/);
																	D = E && parseInt(E[1], 10);
																	isNaN(parseInt(D, 10)) && (D = C.getAttribute('border'));
																	this.setValue(D);
																}
															}, commit: function(B, C, D) {
																var E = parseInt(this.getValue(), 10);
																if (B == d || B == f) {
																	if (!isNaN(E)) {
																		C.setStyle('border-width', CKEDITOR.tools.cssLength(E));
																		C.setStyle('border-style', 'solid');
																	} else if (!E && this.isChanged()) {
																		C.removeStyle('border-width');
																		C.removeStyle('border-style');
																		C.removeStyle('border-color');
																	}
																	if (!D && B == d)
																		C.removeAttribute('border');
																} else if (B == g) {
																	C.removeAttribute('border');
																	C.removeStyle('border-width');
																	C.removeStyle('border-style');
																	C.removeStyle('border-color');
																}
															}}, {type: 'text', id: 'txtHSpace', width: '60px', label: b.lang.image.hSpace, 'default': '', onKeyUp: function() {
																l(this.getDialog());
															}, onChange: function() {
																o.call(this, 'advanced:txtdlgGenStyle');
															}, validate: CKEDITOR.dialog.validate.integer(b.lang.image.validateHSpace), setup: function(B, C) {
																if (B == d) {
																	var D, E, F, G = C.getStyle('margin-left'), H = C.getStyle('margin-right');
																	G = G && G.match(j);
																	H = H && H.match(j);
																	E = parseInt(G, 10);
																	F = parseInt(H, 10);
																	D = E == F && E;
																	isNaN(parseInt(D, 10)) && (D = C.getAttribute('hspace'));
																	this.setValue(D);
																}
															}, commit: function(B, C, D) {
																var E = parseInt(this.getValue(), 10);
																if (B == d || B == f) {
																	if (!isNaN(E)) {
																		C.setStyle('margin-left', CKEDITOR.tools.cssLength(E));
																		C.setStyle('margin-right', CKEDITOR.tools.cssLength(E));
																	} else if (!E && this.isChanged()) {
																		C.removeStyle('margin-left');
																		C.removeStyle('margin-right');
																	}
																	if (!D && B == d)
																		C.removeAttribute('hspace');
																} else if (B == g) {
																	C.removeAttribute('hspace');
																	C.removeStyle('margin-left');
																	C.removeStyle('margin-right');
																}
															}}, {type: 'text', id: 'txtVSpace', width: '60px', label: b.lang.image.vSpace, 'default': '', onKeyUp: function() {
																l(this.getDialog());
															}, onChange: function() {
																o.call(this, 'advanced:txtdlgGenStyle');
															}, validate: CKEDITOR.dialog.validate.integer(b.lang.image.validateVSpace), setup: function(B, C) {
																if (B == d) {
																	var D, E, F, G = C.getStyle('margin-top'), H = C.getStyle('margin-bottom');
																	G = G && G.match(j);
																	H = H && H.match(j);
																	E = parseInt(G, 10);
																	F = parseInt(H, 10);
																	D = E == F && E;
																	isNaN(parseInt(D, 10)) && (D = C.getAttribute('vspace'));
																	this.setValue(D);
																}
															}, commit: function(B, C, D) {
																var E = parseInt(this.getValue(), 10);
																if (B == d || B == f) {
																	if (!isNaN(E)) {
																		C.setStyle('margin-top', CKEDITOR.tools.cssLength(E));
																		C.setStyle('margin-bottom', CKEDITOR.tools.cssLength(E));
																	} else if (!E && this.isChanged()) {
																		C.removeStyle('margin-top');
																		C.removeStyle('margin-bottom');
																	}
																	if (!D && B == d)
																		C.removeAttribute('vspace');
																} else if (B == g) {
																	C.removeAttribute('vspace');
																	C.removeStyle('margin-top');
																	C.removeStyle('margin-bottom');
																}
															}}, {id: 'cmbAlign', type: 'select', widths: ['35%', '65%'], style: 'width:90px', label: b.lang.common.align, 'default': '', items: [[b.lang.common.notSet, ''], [b.lang.common.alignLeft, 'left'], [b.lang.common.alignRight, 'right']], onChange: function() {
																l(this.getDialog());
																o.call(this, 'advanced:txtdlgGenStyle');
															}, setup: function(B, C) {
																if (B == d) {
																	var D = C.getStyle('float');
																	switch (D) {
																		case 'inherit':
																		case 'none':
																			D = '';
																	}
																	!D && (D = (C.getAttribute('align') || '').toLowerCase());
																	this.setValue(D);
																}
															}, commit: function(B, C, D) {
																var E = this.getValue();
																if (B == d || B == f) {
																	if (E)
																		C.setStyle('float', E);
																	else
																		C.removeStyle('float');
																	if (!D && B == d) {
																		E = (C.getAttribute('align') || '').toLowerCase();
																		switch (E) {
																			case 'left':
																			case 'right':
																				C.removeAttribute('align');
																		}
																	}
																} else if (B == g)
																	C.removeStyle('float');
															}}]}]}, {type: 'vbox', height: '250px', children: [{type: 'html', id: 'htmlPreview', style: 'width:95%;', html: '<div>' + CKEDITOR.tools.htmlEncode(b.lang.common.preview) + '<br>' + '<div id="' + y + '" class="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div>' + '<div class="ImagePreviewBox"><table><tr><td>' + '<a href="javascript:void(0)" target="_blank" onclick="return false;" id="' + z + '">' + '<img id="' + A + '" alt="" /></a>' + (b.config.image_previewText || 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.') + '</td></tr></table></div></div>'}]}]}]}, {id: 'Link', label: b.lang.link.title, padding: 0, elements: [{id: 'txtUrl', type: 'text', label: b.lang.common.url, style: 'width: 100%', 'default': '', setup: function(B, C) {
										if (B == e) {
											var D = C.data('cke-saved-href');
											if (!D)
												D = C.getAttribute('href');
											this.setValue(D);
										}
									}, commit: function(B, C) {
										var E = this;
										if (B == e)
											if (E.getValue() || E.isChanged()) {
												var D = decodeURI(E.getValue());
												C.data('cke-saved-href', D);
												C.setAttribute('href', D);
												if (E.getValue() || !b.config.image_removeLinkByEmptyURL)
													E.getDialog().addLink = true;
											}
									}}, {type: 'button', id: 'browse', filebrowser: {action: 'Browse', target: 'Link:txtUrl', url: b.config.filebrowserImageBrowseLinkUrl}, style: 'float:right', hidden: true, label: b.lang.common.browseServer}, {id: 'cmbTarget', type: 'select', label: b.lang.common.target, 'default': '', items: [[b.lang.common.notSet, ''], [b.lang.common.targetNew, '_blank'], [b.lang.common.targetTop, '_top'], [b.lang.common.targetSelf, '_self'], [b.lang.common.targetParent, '_parent']], setup: function(B, C) {
										if (B == e)
											this.setValue(C.getAttribute('target') || '');
									}, commit: function(B, C) {
										if (B == e)
											if (this.getValue() || this.isChanged())
												C.setAttribute('target', this.getValue());
									}}]}, {id: 'Upload', hidden: true, filebrowser: 'uploadButton', label: b.lang.image.upload, elements: [{type: 'file', id: 'upload', label: b.lang.image.btnUpload, style: 'height:40px', size: 38}, {type: 'fileButton', id: 'uploadButton', filebrowser: 'info:txtUrl', label: b.lang.image.btnUpload, 'for': ['Upload', 'upload']}]}, {id: 'advanced', label: b.lang.common.advancedTab, elements: [{type: 'hbox', widths: ['50%', '25%', '25%'], children: [{type: 'text', id: 'linkId', label: b.lang.common.id, setup: function(B, C) {
												if (B == d)
													this.setValue(C.getAttribute('id'));
											}, commit: function(B, C) {
												if (B == d)
													if (this.getValue() || this.isChanged())
														C.setAttribute('id', this.getValue());
											}}, {id: 'cmbLangDir', type: 'select', style: 'width : 100px;', label: b.lang.common.langDir, 'default': '', items: [[b.lang.common.notSet, ''], [b.lang.common.langDirLtr, 'ltr'], [b.lang.common.langDirRtl, 'rtl']], setup: function(B, C) {
												if (B == d)
													this.setValue(C.getAttribute('dir'));
											}, commit: function(B, C) {
												if (B == d)
													if (this.getValue() || this.isChanged())
														C.setAttribute('dir', this.getValue());
											}}, {type: 'text', id: 'txtLangCode', label: b.lang.common.langCode, 'default': '', setup: function(B, C) {
												if (B == d)
													this.setValue(C.getAttribute('lang'));
											}, commit: function(B, C) {
												if (B == d)
													if (this.getValue() || this.isChanged())
														C.setAttribute('lang', this.getValue());
											}}]}, {type: 'text', id: 'txtGenLongDescr', label: b.lang.common.longDescr, setup: function(B, C) {
										if (B == d)
											this.setValue(C.getAttribute('longDesc'));
									}, commit: function(B, C) {
										if (B == d)
											if (this.getValue() || this.isChanged())
												C.setAttribute('longDesc', this.getValue());
									}}, {type: 'hbox', widths: ['50%', '50%'], children: [{type: 'text', id: 'txtGenClass', label: b.lang.common.cssClass, 'default': '', setup: function(B, C) {
												if (B == d)
													this.setValue(C.getAttribute('class'));
											}, commit: function(B, C) {
												if (B == d)
													if (this.getValue() || this.isChanged())
														C.setAttribute('class', this.getValue());
											}}, {type: 'text', id: 'txtGenTitle', label: b.lang.common.advisoryTitle, 'default': '', onChange: function() {
												l(this.getDialog());
											}, setup: function(B, C) {
												if (B == d)
													this.setValue(C.getAttribute('title'));
											}, commit: function(B, C) {
												var D = this;
												if (B == d) {
													if (D.getValue() || D.isChanged())
														C.setAttribute('title', D.getValue());
												} else if (B == f)
													C.setAttribute('title', D.getValue());
												else if (B == g)
													C.removeAttribute('title');
											}}]}, {type: 'text', id: 'txtdlgGenStyle', label: b.lang.common.cssStyle, validate: CKEDITOR.dialog.validate.inlineStyle(b.lang.common.invalidInlineStyle), 'default': '', setup: function(B, C) {
										if (B == d) {
											var D = C.getAttribute('style');
											if (!D && C.$.style.cssText)
												D = C.$.style.cssText;
											this.setValue(D);
											var E = C.$.style.height, F = C.$.style.width, G = (E ? E : '').match(h), H = (F ? F : '').match(h);
											this.attributesInStyle = {height: !!G, width: !!H};
										}
									}, onChange: function() {
										o.call(this, ['info:cmbFloat', 'info:cmbAlign', 'info:txtVSpace', 'info:txtHSpace', 'info:txtBorder', 'info:txtWidth', 'info:txtHeight']);
										l(this);
									}, commit: function(B, C) {
										if (B == d && (this.getValue() || this.isChanged()))
											C.setAttribute('style', this.getValue());
									}}]}]};
			};
			CKEDITOR.dialog.add('image', function(b) {
				return a(b, 'image');
			});
			CKEDITOR.dialog.add('imagebutton', function(b) {
				return a(b, 'imagebutton');
			});
		})();
