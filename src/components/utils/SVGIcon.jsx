import React from 'react';
import includes from 'lodash/collection/includes';
import keys from 'lodash/object/keys';
import style from 'styles/components/utils/SVGIcon.less' // eslint-disable-line

const cleanups = {
  // some useless stuff for us
  // that svgo doesn't remove
  title: /<title>.*<\/title>/gi,
  desc: /<desc>.*<\/desc>/gi,
  comment: /<!--.*-->/gi,
  defs: /<defs>.*<\/defs>/gi,
  style: /<style>.*<\/style>/gi,

  // remove hardcoded dimensions
  width: / +width="\d+(\.\d+)?(px)?"/gi,
  height: / +height="\d+(\.\d+)?(px)?"/gi,

  // remove fill
  fill: / +fill=\"(none|#[0-9a-fA-F]+)\"/gi,

  // Sketch.app shit
  sketchMSShapeGroup: / +sketch:type=\"MSShapeGroup\"/gi,
  sketchMSPage: / +sketch:type=\"MSPage\"/gi,
  sketchMSLayerGroup: / +sketch:type=\"MSLayerGroup\"/gi
};

class SVGIcon extends React.Component {

  static defaultProps = {
    component: 'div',
    classSuffix: '-svg',
    cleanup: true,
    cleanupExceptions: []
  }

  static PropTypes = {
    component: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.func
    ]),
    svg: React.PropTypes.string.isRequired,
    fill: React.PropTypes.string,
    cleanup: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.array
    ]),
    width: React.PropTypes.string,
    height: React.PropTypes.string
  }

  static cleanupSvg(svg, cleanup = []) {
    return keys(cleanups)
      .filter(key => includes(cleanup, key))
      .reduce((acc, key) => {
        return acc.replace(cleanups[key], '');
      }, svg)
      .trim();
  }

  render() {
    const { className, component, svg, fill } = this.props;

    let cleanup = this.props.cleanup;
    if (
      // simple way to enable entire cleanup
      cleanup === true ||
      // passing cleanupExceptions enable cleanup as well
      (
        this.props.cleanup.length === 0 &&
        this.props.cleanupExceptions.length > 0
      )
    ) {
      cleanup = keys(cleanups);
    }
    cleanup = cleanup.filter(
      key => {
        return !includes(this.props.cleanupExceptions, key);
      }
    );

    let { width, height } = this.props;

    if (width && height === undefined) {
      height = width;
    }

    const props = {...this.props, svg: null, fill: null, width: null, height: null};

    let classes = 'SVGICon';

    if (cleanup.length) {
      classes += ' SVGIcon--cleaned';
    }
    if (className) {
      classes += ' ' + className;
    }

    const svgClasses = classes
      .split(' ')
      .join(this.props.classSuffix + ' ') + this.props.classSuffix;

    return (
      React.createElement(
        component,
        {
          ...props, // take most props
          className: classes,
          dangerouslySetInnerHTML: {
            __html: SVGIcon.cleanupSvg(svg, cleanup).replace(
              /<svg/,
              `<svg class="${ svgClasses }"` +
              (
                fill
                ? ` fill="${ fill }"`
                : ``
              ) +
              (
                width || height
                ? (
                  ` style="` +
                    (width ? `width: ${width};` : ``) +
                    (height ? `height: ${height};` : ``) +
                  `"`
                )
                : ''
              )
            )
          }
        }
      )
    );
  }
}

export default SVGIcon;
