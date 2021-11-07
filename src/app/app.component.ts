import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.tabActive();
    this.userActive();
    this.sidebarActive();
  }

  tabActive() {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach((item) => {
      item.addEventListener('click', () => {
        tabItems.forEach((items) => {
          items.classList.remove('active');
        });
        item.classList.add('active');
      });
    });
  }

  userActive() {
    const users = document.querySelectorAll('.user');
    const usersMsg = document.querySelectorAll('.user-message');
    users.forEach((user) => {
      user.addEventListener('click', () => {
        const userNameAttr = user.getAttribute('name');

        usersMsg.forEach((userMsg) => {
          userMsg.classList.remove('active');
          if (userMsg.getAttribute('name') === userNameAttr) {
            userMsg.classList.add('active');
          }
        });
        users.forEach((users) => {
          users.classList.remove('active');
        });
        user.classList.add('active');
      });
    });
  }

  sidebarActive() {
    const sidebar: any = document.querySelector('.sidebar');
    const itemSection2 = document.querySelectorAll('.sidebar-section2 .item');

    sidebar.addEventListener('mouseover', () => {
      setTimeout(() => {sidebar.classList.add('active');}, 200);
      
    });
    sidebar.addEventListener('mouseout', () => {
      setTimeout(() => {sidebar.classList.remove('active');}, 200);  
    });


    itemSection2.forEach(item => {
      item.addEventListener('click',()=>{
        itemSection2.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
      })
    })
  }
}
