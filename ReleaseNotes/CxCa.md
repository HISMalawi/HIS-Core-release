# What's new in CxCa

## Version 2024.Q3.R5

### September 2024

- Added a flag to distinguish encounters created on BDE mode on the patient dashboard 
- Upgraded label printing implementation with Capacitor Label Printer Plugin, a feature that supports multiple printer settings:  
    - Web printing setting
    - Ocom devices with built-in printer setting 
    - Ocom devices using external printer (Zebra) setting
- Benign Warts option under Histology results after Punch Biopsy is now able to save when selected. 
- Removed treatment encounter when VIA results are negative.
- Improved HIV status check validation to accurately show positive or Negative on clients’ dashboard.
- Existing clients from the ART program can enroll and go through the CxCa workflow
- Fixed the breaking workflow, with users having to select tasks from the patient dashboard. 
- Enhanced Security features 
    - Password policy now mandatory 
        - Migrating to passphrases with at least a number and special character 
        - Mandatory maximum password expiry period set at 30 days 
    - Inactive screen time-out now mandatory and set at 15 minutes 