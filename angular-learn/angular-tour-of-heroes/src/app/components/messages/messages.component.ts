import { Component, OnInit } from '@angular/core';
import { MessageService } from './../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
messages: string[];

  constructor(private messageService: MessageService) {
    this.messages =  this.messageService.getMessages();

  }

  ngOnInit() {
  }

  clearMessages() {
    this.messageService.clear();
  }

}
