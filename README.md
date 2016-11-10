Great for learning Windows native bridging

# react-native-win-gif
Animated GIFs for React Native Windows
![Imgur](http://i.imgur.com/ZBSHpd1.gif)

## Getting started

`$ npm install react-native-win-gif --save`

### Mostly automatic installation

`$ react-native link react-native-win-gif`

### Manual installation


#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio, right click solution > Add > Existing Proj and add the `RNWinGif.csproj` in `node_modules/react-native-win-gif/windows/RNWinGif/RNWinGif.csproj`.
2. Right click the project > Add > Reference > RNWinGif checkmark
3. Open up your `MainPage.cs` app
  - Add `using Com.Reactlibrary.RNWinGif;;` to the usings at the top of the file
  - Add `new RNWinGifPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import WinGIf from 'react-native-win-gif'
...
render() {
  return (
    <WinGif source={require('../Images/meow.gif')} style={{width: 200, height: 200}} />
    <WinGif source={{ uri: 'http://i.imgur.com/ZBSHpd1.gif'}} style={{width: 200, height: 200}} />
  )
}
```
  
