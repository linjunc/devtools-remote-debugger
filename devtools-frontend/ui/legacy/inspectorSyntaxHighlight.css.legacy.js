// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
export default {
  cssContent: `/*
 * Copyright (C) 2009 Apple Inc.  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

.webkit-css-property {
  color: var(--webkit-css-property-color, var(--color-syntax-1)); /* stylelint-disable-line plugin/use_theme_colors */ /* See: crbug.com/1152736 for color variable migration. */
}

.webkit-html-comment {
  color: var(--color-token-comment);
}

.webkit-html-tag {
  color: var(--color-token-tag);
}

.webkit-html-tag-name,
.webkit-html-close-tag-name {
  /* Keep this in sync with view-source.css (.webkit-html-tag) */
  color: var(--color-token-tag);
}

.webkit-html-pseudo-element {
  /* This one is non-standard. */
  color: var(--color-token-pseudo-element);
}

.webkit-html-js-node,
.webkit-html-css-node {
  color: var(--color-text-primary);
  white-space: pre-wrap;
}

.webkit-html-text-node {
  color: var(--color-text-primary);
  unicode-bidi: -webkit-isolate;
}

.webkit-html-entity-value {
  /* This one is non-standard. */
  background-color: rgb(0 0 0 / 15%); /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
  unicode-bidi: -webkit-isolate;
}

.webkit-html-doctype {
  /* Keep this in sync with view-source.css (.webkit-html-doctype) */
  color: rgb(192 192 192); /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
}

.webkit-html-attribute-name {
  /* Keep this in sync with view-source.css (.webkit-html-attribute-name) */
  color: var(--color-token-attribute);
  unicode-bidi: -webkit-isolate;
}

.webkit-html-attribute-value {
  /* Keep this in sync with view-source.css (.webkit-html-attribute-value) */
  color: var(--color-token-attribute-value);
  unicode-bidi: -webkit-isolate;
  word-break: break-all;
}

.devtools-link {
  color: var(--color-link);
  text-decoration: underline;
  outline-offset: 2px;
}

.elements-disclosure .devtools-link {
  color: var(--color-link);
}

.devtools-link [is="ui-icon"] {
  vertical-align: middle;
}

.devtools-link [is="ui-icon"].icon-mask {
  background-color: var(--color-link);
}

:focus .selected .devtools-link [is="ui-icon"].icon-mask {
  background-color: var(--legacy-item-selection-bg-color);
}

.devtools-link:focus-visible {
  outline-width: unset;
}

.devtools-link:not(.devtools-link-prevent-click) {
  cursor: pointer;
}

@media (forced-colors: active) {
  .devtools-link:not(.devtools-link-prevent-click) {
    forced-color-adjust: none;
    color: linktext;
  }

  .devtools-link:focus-visible {
    background: Highlight;
    color: HighlightText;
  }
}
`
};
