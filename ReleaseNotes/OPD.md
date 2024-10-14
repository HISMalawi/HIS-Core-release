# What's new in OPD

## Version 2024.Q3.R5

### September 2024

- Added a flag to distinguish encounters created on BDE mode on the patient dashboard 
- Upgraded label printing implementation with Capacitor Label Printer Plugin, a feature that supports multiple printer settings: 
    - Web printing setting
    - Ocom devices with built-in printer setting 
    - Ocom devices using external printer (Zebra) setting
- Fixed the issue on lab ordering page, where deleting one of the tests during a lab order the system hangs on a white screen. 
- Maintained the registration NID workflow and removed the duplicate one
- Imbedded TB screening in the OPD workflow
- Redesigned the prescription page to display minimal items initially and introduces a dedicated summary page for better usability and navigation
- Removed "Other" from sub complaints categories
- Added an OPD Disaggregated report under clinic reports
- Enhanced Security features 
    - Password policy now mandatory 
        - Migrating to passphrases with at least a number and special character 
        - Mandatory maximum password expiry period set at 30 days 
    - Inactive screen time-out now mandatory and set at 15 minutes 