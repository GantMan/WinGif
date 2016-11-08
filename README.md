
# react-native-win-gif

## Getting started

`$ npm install react-native-win-gif --save`

### Mostly automatic installation

`$ react-native link react-native-win-gif`

### Manual installation


#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNWinGif.sln` in `node_modules/react-native-win-gif/windows/RNWinGif.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Cl.Json.RNWinGif;` to the usings at the top of the file
  - Add `new RNWinGifPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNWinGif from 'react-native-win-gif';

// TODO: What do with the module?
RNWinGif;
```
  