import { Component, OnInit } from "@angular/core";
import {BarcodeScanner} from "nativescript-barcodescanner";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private barcodeScanner: BarcodeScanner) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    scan() {
        this.barcodeScanner.scan({
            cancelLabel: "Close", // iOS only, default 'Close'
            cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
            message: "Scan the code", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
            // showFlipCameraButton: true,   // default false
            beepOnScan: true,             // Play or Suppress beep on scan (default true)
            openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
        }).then((result) => {
            // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
            console.log({
            title: "Scan result",
                message: "Format: " + result.format + ",\nValue: " + result.text,
                okButtonText: "OK"
            });
        }, (errorMessage) => {
        console.log("No scan. " + errorMessage);
        }
    );
    }
}
