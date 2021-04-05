import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

//    data  =[ {
//       "categories" : [ "Canadian Startup News", "COVID-19", "report" ],
//       "date" : "Mon, 18 Jan 2021 19:22:38 +0000",
//       "link" : "https://betakit.com/report-as-optimism-increases-among-canadian-entrepreneurs-tech-sector-spending-expected-to-decline/",
//       "title" : "Report: As optimism increases among Canadian entrepreneurs tech sector spending expected to decline"

//   },
//   {
//       "categories" : [ "Canadian Startup News", "AI", "funding", "impact", "saas", "toronto" ],
//       "date" : "Mon, 18 Jan 2021 16:34:24 +0000",
//       "link" : "https://betakit.com/hopeful-raises-400000-to-help-nonprofits-harness-data/",
//       "title" : "Hopeful raises 400000 to help nonprofits harness data"

//     }

// ]
data : Data = [
  {
    title: 'Rogers-Shaw merger offers chance for Ottawa to insist on better deal for cellphone customers',
    link: 'https://www.cbc.ca/news/business/rogers-buys-shaw-prices-consumers-1.5950879?cmp=rss',
    date: 'Tue, 16 Mar 2021 04:00:00 EDT',
    categories: [ 'News/Business' ],
    author: 'Don Pittis',
    content: "A proposed merger between Rogers and Shaw that would produce Canada's second largest telecom company may actually be an opportunity for the government to create rules to open up competition in the cellphone service market with what are known as mobile virtual network operators. Don Pittis explains."
  },
  {
    title: 'Elliot Page talks of fully embracing transgender identity',
    link: 'https://www.cbc.ca/news/entertainment/elliot-page-transgender-time-magazine-1.5951424?cmp=rss',
    date: 'Tue, 16 Mar 2021 10:26:12 EDT',
    categories: [ 'News/Entertainment' ],
    author: 'CBC News',
    content: "Canadian actor Elliot Page, in a cover story for Time magazine, says he's excited for the future after embracing his transgender identity."
  },
  {
    title: "'It gave me chills': Letter tossed into ocean 25 years ago lands in Cape Breton",
    link: 'https://www.cbc.ca/news/canada/nova-scotia/message-bottle-cheticamp-magdalen-islands-1.5950174?cmp=rss',
    date: 'Tue, 16 Mar 2021 05:00:00 EDT',
    categories: [ 'News/Canada/Nova Scotia' ],
    author: 'Erin Pottie',
    content: 'The Mitchell family from Chéticamp believes the glass bottle made its way into their yard after a recent storm.'
  },
  {
    title: 'New Dead Sea scrolls found hidden in desert cave in Israel',
    link: 'https://www.cbc.ca/news/technology/new-dead-sea-scrolls-1.5951332?cmp=rss',
    date: 'Tue, 16 Mar 2021 09:26:54 EDT',
    categories: [ 'News/Technology & Science' ],
    author: 'The Associated Press',
    content: 'Israeli archaeologists on Tuesday announced the discovery of dozens of new Dead Sea scroll fragments bearing a biblical text found in a desert cave and believed hidden during a Jewish revolt against Rome nearly 1,900 years ago.'
  },

]
  //   "-MRNBG0Rkt1nxaV805jG" : {
  //     "categories" : [ "Canadian Startup News" ],
  //     "date" : "Mon, 18 Jan 2021 11:00:19 +0000",
  //     "link" : "https://betakit.com/canadian-startup-news-of-the-week-1-17-21/",
  //     "title" : "Canadian startup news of the week 1/17/21"
  //   },
  //   "-MRNBG0S2sxx-PJkVs1H" : {
  //     "categories" : [ "Canadian Startup News", "FinTech" ],
  //     "date" : "Mon, 18 Jan 2021 11:00:17 +0000",
  //     "link" : "https://betakit.com/ft-the-fintech-times-the-money-experience/",
  //     "title" : "FT: The FinTech Times – The money experience"
  //   },
  //   "-MRNEwLg8G27QywWbq-i" : {
  //     "categories" : [ "Canadian Startup News", "COVID-19", "report" ],
  //     "date" : "Mon, 18 Jan 2021 19:22:38 +0000",
  //     "link" : "https://betakit.com/report-as-optimism-increases-among-canadian-entrepreneurs-tech-sector-spending-expected-to-decline/",
  //     "title" : "Report: As optimism increases among Canadian entrepreneurs tech sector spending expected to decline"
  //   },
  //   "-MRNEwLlDTXzZl_zpCrm" : {
  //     "categories" : [ "Canadian Startup News", "AI", "funding", "impact", "saas", "toronto" ],
  //     "date" : "Mon, 18 Jan 2021 16:34:24 +0000",
  //     "link" : "https://betakit.com/hopeful-raises-400000-to-help-nonprofits-harness-data/",
  //     "title" : "Hopeful raises 400000 to help nonprofits harness data"
  //   },
  //   "-MRNEwLlDTXzZl_zpCrn" : {
  //     "categories" : [ "Canadian Startup News" ],
  //     "date" : "Mon, 18 Jan 2021 11:00:19 +0000",
  //     "link" : "https://betakit.com/canadian-startup-news-of-the-week-1-17-21/",
  //     "title" : "Canadian startup news of the week 1/17/21"
  //   }
  // }

   keys = Object.keys(this.data);

   display() : void {
    //  console.log(this.keys)


   }






  constructor() { }

  ngOnInit(): void {
  }



}
