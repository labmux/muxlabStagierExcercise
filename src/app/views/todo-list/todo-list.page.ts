import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  todoList: [{
    title: string;
    description: string;
    id: number;
  }];
  doneList: [{
      title: string;
      description: string;
      id: number;
  }];
  id: number;

  constructor(private alertController: AlertController) {
      this.id = 0;
      this.todoList = [
          {title: 'TITLE', description: 'YYYYYYEEEEEEEEEDKJksdjfckjx sfksdbfkjsdn jsnfks d ksjndfks lsdf ksdiofnsdifnsd ln',  id: 1}
      ];
      this.doneList = [
          {title: 'Example', description: 'YYYYYYEEEEEEEEEDKJksdjfckjx sfksdbfkjsdn jsnfks d ksjndfks lsdf ksdiofnsdifnsd ln',  id: 1}

      ];

      console.log('pls');
  }

  ngOnInit() {

    // this.done = [{}];
  }

  getId(): number {
    this.id = this.id + 1;
    return this.id;
  }

    async delete(index: number, list = 'todo') {

        const alert = await this.alertController.create({
            header: 'Are you sure you wish to delete?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary'
                },
                {
                    text: 'Delete',
                    handler: data => {
                        // this.todoList.pop(index);
                        if (list === 'todo') {
                            this.todoList.splice(index, 1);
                        } else {
                            this.doneList.splice(index, 1);
                        }
                    }

                }
            ]
        });

        await alert.present();

    }

  async editTodo(index: number){
      const alert = await this.alertController.create({
          header: 'Add New Todo',
          inputs: [
              {
                  // title: 'title',
                  // type: 'text',
                  id: 'title',
                  value: this.todoList[index].title
              },
              {
                  // description: 'descr',
                  // type: 'text',
                  id: 'descr',
                  value: this.todoList[index].description
              },
          ],
          buttons: [
              {
                  text: 'Cancel',
                  role: 'cancel',
                  cssClass: 'secondary'
              },
              {
                  text: 'OK',
                  handler: data => {
                      this.todoList[index] = {
                          title: data[0],
                          description: data[1],
                          id: this.todoList[index].id
                      };
                      // this.todoList.push({title: data[0], description: data[1], isdone: false, id: this.getId()});
                  }

              }
          ]
      });

      await alert.present();

  }

  async addTodo() {
      const alert = await this.alertController.create({
          header: 'Add New Todo',
          inputs: [
              {
                  // title: 'title',
                  // type: 'text',
                  id: 'title',
                  placeholder: 'Title'
              },
              {
                  // description: 'descr',
                  // type: 'text',sdf
                  id: 'descr',
                  placeholder: 'Details...'
              },
          ],
          buttons: [
              {
                  text: 'Cancel',
                  role: 'cancel',
                  cssClass: 'secondary'
              },
              {
                  text: 'OK',
                  handler: data => {
                    this.todoList.push({title: data[0], description: data[1],  id: this.getId()});
                  }

              }
          ]
      });

      await alert.present();
  }

  done(index: number) {

        let temp = this.todoList.splice(index, 1);
        console.log(temp);
        this.doneList.push(temp[0]);

        console.log(this.doneList);



  }
}
