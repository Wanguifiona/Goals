import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[''];
  repos:any[''];
  username:any['string'];


  constructor(private githubService:GithubService) { 
    this.githubService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile=profile;
    }); 
     this.githubService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos=repos;
     })
  }

  findProfile(){
    this.githubService.updateProfile(this.username);
    this.githubService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile=profile;
    }); 
     this.githubService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos=repos;
     })
  }
 
  ngOnInit() {
  }

}
