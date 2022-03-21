import {Component, OnInit} from '@angular/core';
import {MachineState} from "../../models/machine-state";
import {MachineStateService} from "../../services/machine-state.service";

@Component({
  selector: 'app-machine-state',
  templateUrl: './machine-state.component.html',
  styleUrls: ['./machine-state.component.scss']
})
export class MachineStateComponent implements OnInit {
  // @ts-ignore
  public machineState: MachineState;

  constructor(private machineStateService: MachineStateService) {
  }

  ngOnInit(): void {
    this.refreshMachineState();
  }

  refreshMachineState(): void {
    this.machineStateService.getMachineState().subscribe(state => {
      console.log(state);
      this.machineState = state;
    })
  }

}
