const malware_download = document.querySelector("#malware");
const malware_alert_random = Math.round((Math.random() * 9) + 2);

malware_download.addEventListener("click", function() {
    for (let i = 0; i < malware_alert_random; i++) {
        setTimeout(function() {
            alert("Error 0x5A2-QL8T: Flux anomaly in sector 9G. Phase drift detected. Protocol mismatch. Recalibrate tensor array. Contact SysAdmin.");
        }, 300 + (i * 300));
    }

    alert("Error 0xD4C-VIR8: Antiviral protocol mismatch. Quarantine phase disrupted. Viral strain 7F9X unrecognized. Subsystem integrity compromised. Immediate decryption and scan required. Contact Cybernetic Diagnostics for resolution.");
    alert("Error 0x8F7-VX9: Malware vector anomaly detected. Strain 5Q3Z unlogged. Isolation matrix breach. Initiate retroviral recalibration and alert SecOps.");
    malware_download.classList.add("disabled");
});
