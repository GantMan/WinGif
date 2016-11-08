using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Reactlibrary.RNWinGif
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNWinGifModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNWinGifModule"/>.
        /// </summary>
        internal RNWinGifModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNWinGif";
            }
        }
    }
}
