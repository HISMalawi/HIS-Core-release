# What's new in AETC

## Version v2024.Q3.R3

### September 2024

- Added a flag to distinguish encounters created on BDE mode on the patient dashboard 
- Upgraded label printing implementation with Capacitor Label Printer Plugin, a feature that supports multiple printer settings: 
    - Web printing setting
    - Ocom devices with built-in printer setting 
    - Ocom devices using external printer (Zebra) setting
- Redesigned the prescription page to display minimal items initially and introduces a dedicated summary page for better usability and navigation 
- Enhanced Security features 
    - Password policy now mandatory 
        - Migrating to passphrases with at least a number and special character 
        - Mandatory maximum password expiry period set at 30 days 
    - Inactive screen time-out now mandatory and set at 15 minutes 