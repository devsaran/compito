import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from 'libs/web/ui/src/components/icon/icon.module';
import { DropListConnectionPipe } from 'libs/web/ui/src/components/task-list/pipes/drop-list-connection.pipe';
import { UsersToAvatarGroupModule } from '../../pipes/users-to-avatar-group/users-to-avatar-group.module';
import { TaskCardModule } from '../task-card/task-card.module';
import { TaskListComponent } from './task-list.component';
@NgModule({
  declarations: [TaskListComponent, DropListConnectionPipe],
  imports: [CommonModule, DragDropModule, IconModule, TaskCardModule, UsersToAvatarGroupModule],
  exports: [TaskListComponent, DropListConnectionPipe],
})
export class TaskListModule {}