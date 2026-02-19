# Troubleshooting Hubspot Changes

## ✅ Uploads Are Working
- Confirmed: Module HTML is updated in Hubspot (fetched and verified)
- Confirmed: Module CSS is updated in Hubspot (fetched and verified)
- Confirmed: Module fields.json is updated in Hubspot

## Why Changes Might Not Be Visible

### 1. **Page Not Published** (Most Common)
- In Design Manager, after making changes to a module, the **page** containing that module must be **published**
- Look for "Publish" button in top-right of Design Manager
- Status should change from "Draft" to "Published"

### 2. **Browser Cache**
- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Clear browser cache entirely
- Try in incognito/private browsing mode

### 3. **Module Instance Needs Refresh**
- If you edited the module code, sometimes the page needs to:
  - Save and close the page
  - Re-open the page
  - Or delete the module instance and re-add it

### 4. **CSS Selector Issues**
- Module CSS uses: `[data-module-id="{{name}}"]`
- This gets replaced with actual module ID at runtime
- If selector isn't matching, check browser DevTools (F12) to verify data attribute

## Next Steps
1. **Publish the page** in Hubspot Design Manager
2. **Hard refresh** your browser
3. **Check browser DevTools** (F12) to inspect:
   - Is the CSS being loaded?
   - Are the styles being applied?
   - Any console errors?

## Uploads Still Working
To continue uploading changes, use:
```bash
cd /Users/James/KIC2HUB
hs cms upload --src hubspot/modules/KICA-Testimonials-module.module --dest /KICA-Testimonials-module.module
```

## Verification
To verify what's actually in Hubspot, fetch the module:
```bash
hs fetch KICA-Testimonials-module.module --src .
```
Then check the files in `/KICA-Testimonials-module.module/`
