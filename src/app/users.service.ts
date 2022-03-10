import { EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class UserServices {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    activeToInactive: number = 0
    inactiveToActive: number = 0

    userToInactive = new EventEmitter<number>()
    userToActive = new EventEmitter<number>()
  
    onSetToInactive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.userToInactive.emit(this.activeToInactive + 1)
      this.activeToInactive++
    }
  
    onSetToActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.userToActive.emit(this.inactiveToActive + 1)
      this.inactiveToActive++
    }
}