import React, { PropTypes } from 'react'
import { View, requireNativeComponent } from 'react-native'
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'


export default class WinGif extends React.Component {

  static propTypes = {
    src: PropTypes.object,
    ...View.propTypes
  }

  render () {
    const source = resolveAssetSource(this.props.source || {})

    let uri = source.uri
    if (uri && uri.match(/^\//)) {
      uri = `file://${uri}`
    }

    const nativeProps = {
      ...this.props,
      src: {uri}
    }

    return (
        <WinGifNative
          {...nativeProps}
        />
    )
  }
}

var WinGifNative = requireNativeComponent('WinGif', WinGif)
