import { Injectable } from '@angular/core';

export interface PostModel {
  id: number,
  title: string,
  author: string,
  content: string,
  date: string,
  comments: any
 }
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  post: PostModel[] = [
    {
        id: 1,
        title: 'Dummy content',
        author: "Abc",
        content: 'Loreum epsiom testing.',
        date: '04-08-2022',
        comments: [
          {
            id: '1',
            comment: "test1",

          },
          {
            id: '2',
            comment: "test2",

          },
          {
            id: '3',
            comment: "test3",

          },
          {
            id: '4',
            comment: "test4",

          },
        ]
    },
    {
      id: 2,
      title: 'Test',
      author: "Abc",
      content: 'Loreum epsiom testing.',
      date: '04-08-2022',
        comments: [
          {
            id: '5',
            comment: "test5",

          },
          {
            id: '6',
            comment: "test6",

          },
          {
            id: '7',
            comment: "test7",

          },
          {
            id: '8',
            comment: "test8",

          },
        ]
    },{
      id: 3,
      title: 'Test-1234',
      author: "Abc",
      content: 'Loreum epsiom testing.',
      date: '04-08-2022',
        comments: [
          {
            id: '9',
            comment: "test9",

          },
          {
            id: '10',
            comment: "test0",

          },
          {
            id: '11',
            comment: "testing",

          },
          {
            id: '12',
            comment: "testw",

          },
        ]
    },
  ]
}

