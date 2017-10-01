import { Component } from "@angular/core";
import { AlertController, NavController } from "ionic-angular";
import { Entry, File } from "@ionic-native/file";
import { FileChooser } from "@ionic-native/file-chooser";
import { FirebaseProvider } from "../../providers/firebase/firebase";
import { FilePath } from "@ionic-native/file-path";
import { Camera, DestinationType } from "@ionic-native/camera";
import * as path from "path";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  providers: [File, FileChooser, FilePath, Camera]
})
export class HomePage {
  imageUri: string = "";

  constructor (
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public file: File,
    public filePath: FilePath,
    public fileChooser: FileChooser,
    public firebase: FirebaseProvider,
    public camera: Camera
  ) {
  }

  selectFile () {
    // trigger file chooser
    this.fileChooser
      .open()
      // resolve uri given by filechooser
      .then(uri => this.filePath.resolveNativePath(uri))
      .then(filePath => this.handlePreviewAndResolveFileUrl(filePath))
      .then(file => this.handleFileUpload(file))
      .catch(error => {
        console.log(error);
      });
  }

  takePicture () {
    this.camera.getPicture({
        quality: 80
      })
      .then(uri => this.handlePreviewAndResolveFileUrl(uri))
      .then(file => this.handleFileUpload(file))
      .catch(error => console.log(error));
  }

  handlePreviewAndResolveFileUrl (filePath) {
    // set image uri to preview image
    this.imageUri = filePath;

    // get filesystem path
    return this.file.resolveLocalFilesystemUrl(filePath);
  }

  handleFileUpload (file: Entry) {
    const dirname = path.dirname(file.nativeURL);
    const filename = file.name;

    // convert file as data_url
    return this.file.readAsDataURL(dirname, filename).then(dataUrl => {
      // upload to firebase
      return this.firebase.uploadFile(dataUrl, filename);
    }).then(snapshot => {
      console.log("File uploaded to Firebase!");
    });
  }
}
