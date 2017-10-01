# Ionic Firebase Storage

1. Create new project `ionic start FirebaseStorage blank`

2. Install firebase `npm install firebase --save`

3. Create FirebaseProvider `ionic g provider Firebase`

4. Install File plugin, run:
 - `ionic cordova plugin add cordova-plugin-file`
 - `npm install --save @ionic-native/file`
 
5. Install FileChooser, run:
 - `ionic cordova plugin add cordova-plugin-filechooser`
 - `npm install --save @ionic-native/file-chooser`

6. Install FilePath, run:
 - `ionic cordova plugin add cordova-plugin-filepath`
 - `npm install --save @ionic-native/file-path`

7. Install Camera, run:
 - `ionic cordova plugin add cordova-plugin-camera`
 - `npm install --save @ionic-native/camera`

8. Install `path` library `npm install --save path`
 

Inpect Device: `chrome://inspect/#devices`

Note: If error on compile, run `npm install promise-polyfill`.