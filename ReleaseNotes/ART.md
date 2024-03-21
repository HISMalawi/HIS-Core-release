# What's new in ART

## Version 1.14.0-alpha

### March 2024

- Hypertension report modifications (#948)  
    * Added due for screening column
    * Added Captopril column
    * Added Nifedipine column
- Prompting reason for no tpt for new clients
- Disable TPT option for clients on TB (#950)  
    * Selecting On tb treatment on the form disables TPT options on medication orders
- Disable TPT option for clients on TB (#950)
    * Selecting On tb treatment on the form disables TPT options on medication orders
- Fixes double dispensation modal (#952)
    ### Features
    * Lock the system from launching another dispensation modal wh
en dispensing medication
    * Unlock once modal is closed or dispensation is done
    
    ### How to verify fix
    * Test dispensation module with an older version of the EMR
    * Use two fingers or double tap when clicking drug input ..
    These actions will launch the dispensation modal
- Military site Pepfar report filters (#953)  
    Updated endpoints which were missing this filter
