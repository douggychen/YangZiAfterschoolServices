import { ActionSheetController } from 'ionic-angular';
import { Component } from '@angular/core';
@Component(
  {
    selector: 'page-action-sheet',
    templateUrl: 'action-sheet.html'
  }
)
export class ActionSheetPage {
  constructor(public actionSheetCtr: ActionSheetController) {

  }
  presentActionSheet(){
    const actionSheet=this.actionSheetCtr.create({
      title: "Modify Your Album",
      buttons: [
        {
          text: "Desctructive",
          role: "destructive",
          handler: () => {
            console.log("destructive clicked");
          }
        }, {
          text: "Archive",
          handler: () => {
            console.log("Archive clicked");
          }
        }, {
          text: "Cancel",
          role: "cancel",
          handler: ()=> {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


}
