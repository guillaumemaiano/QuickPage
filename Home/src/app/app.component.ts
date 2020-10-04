import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';
  pages = [
    {
    "url": "https://www.blenderguru.com",
    "image": "https://static1.squarespace.com/static/58586fa5ebbd1a60e7d76d3e/t/5858700a15d5dbbdad609686/1595202646008/?format=1500w",
    "title": "Blender Guru",
    "description": "A teaching site about Blender"
  }, {
    "url": "https://semantic-ui.com",
    "image": "https://semantic-ui.com/images/logo.png",
    "title": "Semantic UI",
    "description": "Documentation for the Semantic UI CSS Library"
  }, {
    "url": "https://openconnectivity.org/developer/",
    "image": "https://openconnectivity.org/wp-content/uploads/2017/05/footer-logo-new.png",
    "title": "Open Connectivity",
    "description": "Open Connectivity Developer Site"
  },
  {
    "url": "https://developer.apple.com",
    "image": "",
    "title": "Apple Dev",
    "description": "Apple Developer Site"
  },
  {
    "url": "https://docs.unrealengine.com",
    "image": "",
    "title": "UE4",
    "description": "Unreal Developer Site"
  },
  {
    "url": "https://dev.epicgames.com/portal/en-US/flying-fortress-games/organization/people",
    "image": "https://cdn2.unrealengine.com/Dev+EG%2Fhome%2FEOS-logo-400x406-1266f05efbfc02deb16695c9fcad6a9b56394bb7.png",
    "title": "Epic",
    "description": "Epic's API devsite"
  },
  ]
}
