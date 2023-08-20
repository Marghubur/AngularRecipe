import { AfterViewChecked, Component, OnInit } from '@angular/core';
declare var $:any;
import 'bootstrap';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent implements OnInit, AfterViewChecked {
  showingSourceCode: boolean = false;
  isInEditMode: boolean = true;
  richTextField: any;
  imageURL: string = "";
  rows: number = 0;
  columns: number = 0;

  ngAfterViewChecked(): void {
    $('[data-bs-toggle="tooltip"]').tooltip({
      trigger: 'hover'
    });

    $('[data-bs-toggle="tooltip"]').on('click', function () {
      $(this).tooltip('dispose');
    });
  }

  ngOnInit() {
    this.richTextField = document.getElementById("richTextField");
    this.enableEditMode();
  }


  enableEditMode (){
    this.richTextField.contentDocument.designMode  = 'On';
  }

  execCmd (command) {
      this.richTextField.contentDocument.execCommand(command, false, null);
  }

  execCommandWithArg (command, arg) {
    let value = arg.target.value;
      this.richTextField.contentDocument.execCommand(command, false, value);
  }
  toggleSource () {
      if(this.showingSourceCode){
          this.richTextField.contentDocument.getElementsByTagName('body')[0].innerHTML =
          this.richTextField.contentDocument.getElementsByTagName('body')[0].textContent;
          this.showingSourceCode = false;
      }else{
          this.richTextField.contentDocument.getElementsByTagName('body')[0].textContent =
          this.richTextField.contentDocument.getElementsByTagName('body')[0].innerHTML;
          this.showingSourceCode = true;
      }
  }

  toggleEdit() {
      if(this.isInEditMode){
          this.richTextField.contentDocument.designMode = 'Off';
          this.isInEditMode = false;
      }else{
          this.richTextField.contentDocument.designMode = 'On';
          this.isInEditMode = true;
      }
  }
  toggleDarkLight() {
      var element = document.getElementById("richtextcontainer");
      element.classList.toggle("dark-mode");
  }

  uploadProfilePicture(event: any) {
    this.imageURL = "";
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.imageURL = event.target.result;
      };
      this.richTextField.contentDocument.execCommand('insertImage', false, this.imageURL);

      // this.employeeForm.patchValue({
      //   ProfileImgPath: event.target.result,
      // });
    }
  }

  fireBrowserFile() {
    $("#uploarichimage").click();
  }

  tabelPopUp() {
    $('#tableModal').modal('show');
  }

  addTable() {
    var html = this.generateTable();
    this.richTextField.contentDocument.execCommand('insertHTML', false, html.toString());
    $('#tableModal').modal('hide');
  }

  generateTable() {
    let myRows = this.rows;
    let myColumns = this.columns;
    var html = '<table style="border-collapse: collapse; width: 100%;"><tbody>';
    for (let i = 0; i <myRows; i++) {
      html += "<tr>";
      for (let j = 0; j <myColumns; j++) {
        html += "<td style='padding: 15px; border: 1px solid #222; vertical-align: middle;'>&nbsp;</td>"
      }
      html += "</tr>";
    }
    html += "</tbody></table>";
    return html;
  }

}
