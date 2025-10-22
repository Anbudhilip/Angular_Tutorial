import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Topics {
  topic: string;
  question: string;
  answer: string;
}
@Component({
  selector: 'app-content-page',
  imports: [CommonModule],
  templateUrl: './content-page.html',
  styleUrl: './content-page.css'
})
export class ContentPage {
Topiecs = [
    'Modules (NgModules)',
    'Components',
    'DataBinding',
    'Directives (Structural & Attribute)',
  ]
  dataBindingTypes = [
    'Interpolation (Bind component data to HTML) {{title}}',
    'Property Binding (Bind data to an element property) [src]=\"imageUrl\"',
    'Event Binding (Bind events to component) (click) =\"onClick()\"',
    'Two-way Binding (Bind data both ways) [(ngModel)]=\"username\"'
  ]
  topicList: Topics[] = [{
    topic: 'Components',
    question: 'What are Components in Angular ?',
    answer: 'A Components is the building block of any Angular application. It controls a part of the user interface(UI) -like a widget or a page section.'
  },
  {
    topic: 'DataBinding',
    question: 'What are Components in Angular ?',
    answer: 'A Components is the building block of any Angular application. It controls a part of the user interface(UI) -like a widget or a page section.'
  }
  ]
  selectedTopic: Topics | null = null;

  selectTopic(topic: string) {
    debugger;
    const found = this.topicList.find(element => element.topic === topic);
    if (found) {
      this.selectedTopic = found;
    } else {
      this.selectedTopic = null;
    }
  }
}
