# What's new in ANC

## Version 2024.Q3.R3

### September 2024

- Added a flag to distinguish encounters created on BDE mode on the patient dashboard 
- Upgraded label printing implementation with Capacitor Label Printer Plugin, a feature that supports multiple printer settings: 
    - Web printing setting
    - Ocom devices with built-in printer setting 
    - Ocom devices using external printer (Zebra) setting
- ANC label printing optimisation
- Remove clinic days and appointment limits
- Adapted the ANC cohort report to mysql 8.0 run environment
- Removed the ANC Pepfar facility report
- Resolved last ANC visit date showing last lmp on client dashboard 
- Added a rebuild/Refresh function for all reports
- Today button on expected date of delivery window will only be active if the gestation weeks is equal to or greater than 30 
- Enhanced Security features 
    - Password policy now mandatory 
        - Migrating to passphrases with at least a number and special character 
        - Mandatory maximum password expiry period set at 30 days 
    - Inactive screen time-out now mandatory and set at 15 minutes 