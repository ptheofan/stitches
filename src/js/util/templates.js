/**
 * # util/templates
 *
 * Utility methods for referencing js templates
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

define([
    "tpl!../../templates/stitches.tpl",
    "tpl!../../templates/downloads.tpl",
    "tpl!../../templates/sprite.tpl",
    "tpl!../../templates/css.tpl",
    "tpl!../../templates/css-markup.tpl",
    "tpl!../../templates/less.tpl",
    "tpl!../../templates/less-markup.tpl",
    "tpl!../../templates/scss.tpl",
    "tpl!../../templates/scss-markup.tpl",
    "tpl!../../templates/sass.tpl",
    "tpl!../../templates/sass-markup.tpl"
],
function (stitchesTemplate, downloadsTemplate, spriteTemplate, cssTemplate, cssMarkupTemplate, lessTemplate, lessMarkupTemplate, scssTemplate, scssMarkupTemplate, sassTemplate, sassMarkupTemplate) {

    "use strict";

    // **Module definition**
    return {
        /**
         * ### @stitches
         * Returns the app template
         *
         * @return string
         */
        stitches: function () {
            return stitchesTemplate.apply(this, arguments);
        },

        /**
         * ### @downloads
         * Returns the downloads template
         *
         * @return string
         */
        downloads: function () {
            return downloadsTemplate.apply(this, arguments);
        },

        /**
         * ### @sprite
         * Returns the sprite template
         *
         * @return string
         */
        sprite: function () {
            return spriteTemplate.apply(this, arguments);
        },

        /**
         * ### @css
         * Returns the css template
         *
         * @return string
         */
        css: function () {
            return cssTemplate.apply(this, arguments);
        },

        /**
         * ### @cssMarkup
         * Returns the css markup template
         *
         * @return string
         */
        cssMarkup: function () {
            return cssMarkupTemplate.apply(this, arguments);
        },

        /**
         * ### @less
         * Returns the less template
         *
         * @return string
         */
        less: function () {
            return lessTemplate.apply(this, arguments);
        },

        /**
         * ### @lessMarkup
         * Returns the less markup template
         *
         * @return string
         */
        lessMarkup: function () {
            return lessMarkupTemplate.apply(this, arguments);
        },

        /**
         * ### @less
         * Returns the less template
         *
         * @return string
         */
        scss: function () {
            return scssTemplate.apply(this, arguments);
        },

        /**
         * ### @lessMarkup
         * Returns the less markup template
         *
         * @return string
         */
        scssMarkup: function () {
            return scssMarkupTemplate.apply(this, arguments);
        },

        /**
         * ### @less
         * Returns the less template
         *
         * @return string
         */
        sass: function () {
            return sassTemplate.apply(this, arguments);
        },

        /**
         * ### @lessMarkup
         * Returns the less markup template
         *
         * @return string
         */
        sassMarkup: function () {
            return sassMarkupTemplate.apply(this, arguments);
        }
    };

});