import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MachineState, RegistredPrescription} from "../../models/machine-state";
import {MachineStateService} from "../../services/machine-state.service";

@Component({
  selector: 'app-machine-state',
  templateUrl: './machine-state.component.html',
  styleUrls: ['./machine-state.component.scss']
})
export class MachineStateComponent implements OnInit {
  // @ts-ignore
  public machineState: MachineState;
  // @ts-ignore
  public selectedPrescription: RegistredPrescription | undefined;
  // @ts-ignore
  @ViewChild('prescriptionModalButton') prescriptionModalButton: ElementRef<HTMLElement>;
  // @ts-ignore
  public machineStateRefreshedTime: string;

  constructor(private machineStateService: MachineStateService) {
  }

  ngOnInit(): void {
    this.refreshMachineState();
  }

  refreshMachineState(): void {
    this.machineStateService.getMachineState().subscribe(state => {
      this.machineState = state;
    });

    this.machineStateRefreshedTime = Date.now().toString();
  }

  getPrescriptionDetails(prescriptionId: number): void {
    this.selectedPrescription = this.machineState.registredPrescriptions
      .find(prescription => prescription.id == prescriptionId);

    this.openPrescriptionModal();
  }

  openPrescriptionModal(): void {
    this.prescriptionModalButton.nativeElement.click();
  }

  changeAdaptorState(): void {

  }

  clearDrugPack(): void {

  }
}
