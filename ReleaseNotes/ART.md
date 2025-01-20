# What's new in ART

## Version 2024.Q4.R3

### January 2025

##### IMPORTANT NOTE: Always run the MOH Cohort Report before running any other MOH or Pepfar reports to get the latest Patient outcomes per given period. If a different period from the run MOH cohort report is detected, the system will automatically rebuild outcomes for the new period which will stretch that report run-time by the MOH cohort report run-time.

>

- Improved the print experience from OCOM POS computers to OCOM or Zebra printers.
- Can now print multiple labels for Lab orders on OCOM device
- Improved the National ID integration feature
    - Improved National ID validation on characters and numbers of the National ID code 
    - Allow users to either proceed or scan the document again
    - The user can now see which information is missing after scanning a document
    - During registration the user will add the missing values
    - Block all scanned documents which do not have a National ID code 
    - Improved barcode scan accuracy on the application dashboard. 
    - Implemented a national ID reminder for clients registered without a national ID
    - Resolves the issue of failing to validate certain national id codes because their missing numbers 
    - Resolves the issues of showing middle name together with first name as one when National ID is scanned
    - Resolved the issue of double/multiple scanning of ID documents
- Improve text input user experience for the find by art number page and National ID capture page 
- BP diagnosis date now using single input field and provides a “Today” button for convenience
- Implemented a manual NPID search for clients
- Added conditional mandatory BP screening for HTN active sites
- Updated the BP management actions list  
    - Removed "Did not take prescribed drugs"
    - Removed "Not yet stable on ART"
    - Added "Medication not available"
    - Moved radio buttons and the checkboxes to precede the labels to improve readability of Action options
    - Allow multiple actions for potential hypertensive clients
    - Added an enrollment date capture for HTN 
- Updated the lab orders section of the patient dashboard:
    - Dedicated print order button
    - Dedicated void button 
- Improved the printing small label function to print vertically on the small label 
- Implemented an emergency supply feature accessible from “Printouts/Other”
- Added National ID reports under the clinic reports:
    - Cumulative report 
    - Utilization report
- Added a new Pepfar report, "TX_HIV_HTN report"
- Resolved the ART transfer-out label not displaying downloaded information issue 
- Resolved the ART Lab order printout not displaying downloaded information issue 
- Fixed a bug preventing some labels from being printed on OCOM devices 
- Fixed the select all button in the art stock enter receipt's window 
- Corrected drug name from HCZ to HCTZ
- Ignore printing labels for VL orders with RSB and FBS tests included
- Fixed the pepfar reports TX_Curr_MMD and TX PVLS missing allocating clients on the desegregations from "FP" and "FBf" to "FNP".
- Updated the ART number suggession feature to only suggest numbers in the current quater sequence.
- Added a lab audit trail for lab activities
- Known limitatons:
    - The Dedicated edit button on the lab orders page of the patient dashboard is not yet active.