import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  items = [
    {
      id: 1,
      img: '../../../assets/image/Lesson.svg',
      title: 'Lesson',
      notify: false,
    },
    {
      id: 2,
      img: '../../../assets/image/HomeWork.svg',
      title: 'HomeWork',
      notify: false,
    },
    {
      id: 3,
      img: '../../../assets/image/Notes.svg',
      title: 'Notes',
      notify: false,
    },
    {
      id: 4,
      img: '../../../assets/image/Notes.svg',
      title: 'Extra practice',
      notify: false,
    },
    {
      id: 5,
      img: '../../../assets/image/Class.svg',
      title: 'Class forum',
      notify: true,
      valueNotify: 12,
    },
  ];

  data = [
    {
      id: 1,
      title: 'Your current Writing skill is critically low',
      describe:
        'Here are some of our suggested practice activities for you to improve your skill',
      practice:
        'Start your practice now by choosing 1 of the 3 suggested activities',
      percent: 20,
    },
    {
      id: 2,
      title: 'Your current Speaking skill is average',
      describe:
        'Here are some of our suggested practice activities for you to improve your skill',
      practice:
        'Start your practice now by choosing 1 of the 3 suggested activities',
      percent: 60,
    },
    {
      id: 3,
      title: 'Your current Writing skill is critically low',
      describe:
        'Here are some of our suggested practice activities for you to improve your skill',
      practice:
        'Start your practice now by choosing 1 of the 3 suggested activities',
      percent: 80,
    },
  ];

  showClass = true;

  constructor() {}

  ngOnInit(): void {}
}
