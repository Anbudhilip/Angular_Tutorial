import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
interface Topics {
  topic: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  standalone: true
})
export class HomePage {
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
    const found = this.topicList.find(element => element.topic === topic);
    if (found) {
      this.selectedTopic = found;
    } else {
      this.selectedTopic = null;
    }
  }

}


