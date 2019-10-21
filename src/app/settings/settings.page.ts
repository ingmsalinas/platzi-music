import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  userImage = 'assets/img/user.jpg';
  photo: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  async takePhoto() {
    const image = await Plugins.camera.getPhoto({
      quality: 100,
      alowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.dataUrl);
    console.log(image);
  }
}
