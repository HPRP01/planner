export class Task {
  id:          number;
  title:       string;
  description: string;
  dateDue:     Date;
  status:      string;
  userId:      number;

  constructor(id: number, title: string, description: string, dateDue: Date, status: string, userId: number)
  {
    this.id          = id;
    this.title       = title;
    this.description = description;
    this.dateDue     = dateDue;
    this.status      = status;
    this.userId      = userId;
  }
}