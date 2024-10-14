# What's new in TB

## Version 2024.Q3.R5

### September 2024

- Added a flag to distinguish encounters created on BDE mode on the patient dashboard 
- Upgraded label printing implementation with Capacitor Label Printer Plugin, a feature that supports multiple printer settings: 
    - Web printing setting
    - Ocom devices with built-in printer setting 
    - Ocom devices using external printer (Zebra) setting
- Removed Examination option for Xpert MTB/RIF Ultra 
- Renaming Screen criteria to High Risk Group
- Added “None” button option to High Risk Group
- TB module now proceeds to appointment after dispensation 
- Remove ART references in Adherence Encounter 
- Filter only TB orders on the Patient dashboard 
- Fixed crushing TB visit summary when printing
- Fixed the crushing tb test types issue
- Corrected the tb drug adherence calculation
- Reorganized DR TB Reports into a folder for better user experience
- Enhanced Security features 
    - Password policy now mandatory 
        - Migrating to passphrases with at least a number and special character 
        - Mandatory maximum password expiry period set at 30 days 
    - Inactive screen time-out now mandatory and set at 15 minutes 