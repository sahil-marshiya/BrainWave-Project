import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  services = [
    {
      icon: '/assets/images/Designer-rafiki.svg',
      title: 'Graphic Design',
      description:
        'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
      bgImage: '/assets/images/BG.svg',
    },
    {
      icon: '/assets/images/Programming-rafiki.svg',
      title: 'Web Development',
      description:
        'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
      bgImage: '/assets/images/BG (1).svg',
    },
    {
      icon: '/assets/images/Notes-rafiki.svg',
      title: 'Content Writing',
      description:
        'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
      bgImage: '/assets/images/BG (2).svg',
    },
  ];

  statistics = [
    {
      value: '1M+',
      description:
        'Customers visit Omega every month to get their service done.',
    },
    {
      value: '92%',
      description: 'Satisfaction rate comes from our awesome customers.',
    },
    {
      value: '4.9/5.0',
      description: 'Average customer ratings we have got all over internet.',
    },
  ];

  features = [
    {
      icon: '/assets/images/Icon1.svg',
      title: 'Dedicated project manager',
      description:
        'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    },
    {
      icon: '/assets/images/Icon2.svg',
      title: 'Organized tasks',
      description:
        'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    },
    {
      icon: '/assets/images/icon3.svg',
      title: 'Easy feedback sharing',
      description:
        'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    },
    {
      icon: '/assets/images/icon4.svg',
      title: 'Never miss deadline',
      description:
        'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    },
  ];

  caseStudies = [
    {
      image: '/assets/images/Img.svg',
      category: 'Graphic Design',
      title: 'Aura Branding Design',
    },
    {
      image: '/assets/images/Img (2).svg',
      category: 'Graphic Design',
      title: 'AB.S Snack Packaging',
    },
    {
      image: '/assets/images/Img2.svg',
      category: 'Web Development',
      title: 'Gradient Website Development',
    },
    {
      image: '/assets/images/Img4.svg',
      category: 'Content Writing',
      title: 'Magazine Content Writing',
    },
  ];
}
