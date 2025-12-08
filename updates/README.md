# Version Release Updates

This directory contains markdown files for version release notes that are displayed to users upon login if they haven't acknowledged the current version updates.

## How to Add a New Version Release File

### File Naming Convention

Version release files should be named using the following format:

```
v{VERSION}.md
```

**Examples:**
- `v2025.Q3.R2.md` - for version 2025.Q3.R2
- `v2.0.0.md` - for version 2.0.0
- `v1.5.0-alpha.md` - for version 1.5.0-alpha

The version in the filename **must exactly match** the version specified in `/package.json`.

### File Content Format1

Each release file should contain a bulleted list of updates. The parser extracts lines starting with a dash (`-`):

```markdown
- Feature description or update
- Bug fix description
- Enhancement details
- Performance improvement
```

**Example:**
```markdown
- Added new patient dashboard with real-time notifications
- Fixed data sync issues on slow connections
- Improved form validation performance by 40%
- Enhanced security with two-factor authentication support
- Updated user interface for better accessibility
```

### File Location

All version release files must be placed in:
```
/public/updates/
```

## How the Update System Works

### 1. **Version Detection**
   - On login, the system reads the current version from `package.json`
   - It checks if the user has a stored acknowledgment in `user_properties` table with property `his_core_update_acknowledged`

### 2. **Version Comparison**
   - The system compares the current version with the version the user last acknowledged
   - If versions don't match → User is redirected to the update flashcards page
   - If versions match → User proceeds normally to location selection

### 3. **Displaying Updates**
   - The UpdateFlashCards component loads the markdown file matching the current version
   - It displays a welcome banner, update items (3 per page with pagination), and an acknowledgment banner
   - Updates are shown with colorful cards and icons for better readability

### 4. **Acknowledgment Tracking**
   - When the user clicks "Finish" and confirms the acknowledgment dialog
   - The system stores: `version|timestamp` in `user_properties`
   - Example: `2025.Q3.R2|2025-12-03T14:30:45.123Z`

## Creating a New Release File

### Step-by-Step Guide

1. **Update package.json version**
   ```json
   {
     "version": "2025.Q4.R1"
   }
   ```

2. **Create the markdown file**
   ```bash
   touch /public/updates/v2025.Q4.R1.md
   ```

3. **Add release notes**
   ```markdown
   - New appointment scheduling system
   - Improved patient search functionality
   - Fixed patient demographics sync
   - Enhanced reporting module with charts
   - Security updates and bug fixes
   ```

4. **Deploy**
   - Commit and push changes
   - The next time users log in, they will see the new update flashcards

## Important Notes

- The version string in the filename must **exactly match** `package.json` version
- Only lines starting with `-` followed by a space are parsed as update items
- Empty files will show "No update details available"
- If a file is missing for the current version, the system will display "No update details available"
- Users can cancel the update view and return to login without acknowledging updates
- The system will always show updates if there's an error during version checking (safe default)

## File Structure Example

```
/public/updates/
├── README.md
├── v2025.Q3.R1.md
├── v2025.Q3.R2.md
└── v2025.Q4.R1.md
```

## Testing Your Updates

1. Modify your local `package.json` version
2. Create/update the corresponding markdown file in `/public/updates/`
3. Clear your browser cache or use incognito mode
4. Clear any stored user properties in the database for testing
5. Log in and verify the update flashcards are displayed correctly

## Related Files

- **UpdateFlashCards.vue** - Component that displays the update interface
- **LoginCustomPage.vue** - Login page with update check logic
- **AuthService.ts** - Handles user authentication and property storage
- **package.json** - Contains the current version number
