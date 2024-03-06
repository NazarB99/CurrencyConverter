# *React Native Converter App*

## Demo
[Demo GIF](https://ibb.co.com/nPk2h1T)
[APK file](https://drive.google.com/file/d/1u67KorywXzW4fzEXEBW2dr1nZWOYqzyL/view?usp=sharing)

To run this app run following commands:

    yarn install
    
**To run on IOS you need to run these commands:**
   

	npx pod-install ios
    npx react-native run-ios

**To run on Android run this command:**

    npx react-native run-android

**Architecture and technologies of the app**:


For store management I'm using `React Context`
For navigation `React Navigation`

In `assets` folder there is images folder for storing static images. And `currency.json` for storing a list of currencies locally.

Code is in `src` folder there is `navigation` directory for storing `screens` and navigation components like `MainStack`
In `components` directory there is components that are commonly using throughout the app.
In utils folder there are `constants` and some useful common functions
In `providers` folder there is only one provider which handles Currencies store management

  

