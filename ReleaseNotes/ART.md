# What's new in ART

## Version 2024.Q3.R5

### September 2024

##### IMPORTANT NOTE: Always run the MOH Cohort Report before running any other MOH or Pepfar reports to get the latest Patient outcomes per given period. If a different period from the run MOH cohort report is detected, the system will automatically rebuild outcomes for the new period which will stretch that report run-time by the MOH cohort report run-time.

>

- Added a flag to distinguish encounters created on BDE mode on the patient dashboard
- Upgraded label printing implementation with Capacitor Label Printer Plugin, a feature that supports multiple printer settings: 
    - Web printing setting 
    - Ocom devices with built-in printer setting
    - Ocom devices using external printer (Zebra) setting
- Updated the person confirmation page to show client’s hypertension status 
- Improved home page option organisation  
- Improved home page option organisation  
    - System preferences have been grouped for easy access and navigation
    - Clinic reports have been grouped for easy access and navigation
    - Breadcrumb navigation for the items grouping
- Restricting emergency supply dispensation to 1 month
- Upgraded ART Clinic Reports to use standard v2DataTable template
- Fixed the FCB results reference mismatch 
- Fixed the Lab Order printing error
- Added an FBC migration
- Included an option for selecting printing on a small label
- Introduced optional barcode scanning for Plasma VL samples
- Adding more combinations to 3rd line ARVs
- Resolved the Serum Crag result entry blank indicators
- Improved males with female observation data cleaning tool to drill down on visit date if client has female observations on multiple visits
- Enhanced Security features 
    - Password policy now mandatory 
        - Migrating to passphrases with at least a number and special character 
        - Mandatory maximum password expiry period set at 30 days 
    - Inactive screen time-out now mandatory and set at 15 minutes 