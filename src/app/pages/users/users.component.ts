import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { UserMockData, usersData } from '../../mockdata';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  editCache: { [key: string]: { edit: boolean; data: UserMockData } } = {};

  listOfData: UserMockData[] = [];

  loading = signal(true);

  constructor() {
    setTimeout(() => {
      this.loading.set(false);
      this.listOfData = usersData;

      for (const item of this.listOfData) {
        this.editCache[item.id] = {
          edit: false,
          data: { ...item },
        };
      }
    }, 500);
  }

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false,
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  delete(id: string): void {
    this.listOfData = this.listOfData.filter(item => item.id !== id);
  }
}
