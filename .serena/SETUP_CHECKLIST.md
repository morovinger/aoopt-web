# Serena Setup Checklist for mySite

## ✅ Completed Setup Steps

### 1. Project Configuration
- [x] Created `.serena/` directory
- [x] Created `config.toml` with TypeScript/Vue language servers
- [x] Created `onboarding.md` with project overview
- [x] Created comprehensive setup guide
- [x] Created quick reference guide

### 2. Files Created
- `.serena/config.toml` - Project-specific Serena configuration
- `.serena/onboarding.md` - Project overview for AI agents
- `.serena/SERENA_SETUP_GUIDE.md` - Complete multi-project setup guide
- `.serena/QUICK_REFERENCE.md` - Quick reference for common tasks
- `.serena/SETUP_CHECKLIST.md` - This checklist

## 🔄 Next Steps (You Need to Do These)

### 1. Install UV Package Manager
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Verify:
```powershell
uv --version
```

### 2. Configure Cursor MCP Settings

**File to edit**: `%APPDATA%\Cursor\User\globalStorage\mcp.json`

**Add this configuration**:
```json
{
  "mcpServers": {
    "serena": {
      "command": "uvx",
      "args": [
        "--from",
        "git+https://github.com/oraios/serena",
        "serena",
        "start-mcp-server",
        "--project",
        "C:\\Users\\pc\\Desktop\\mySite"
      ]
    }
  }
}
```

### 3. Restart Cursor
After editing the MCP config, completely close and restart Cursor.

### 4. Test Serena
Ask your AI assistant:
- "Show me the symbols overview of app.vue"
- "Find the pages in this project"
- "List available Serena memories"

### 5. Update .gitignore
Add to your `.gitignore` (if not already there):
```
# Serena memories (keep config)
.serena/memories/
```

## 📋 For Other Projects

To set up Serena in another project:

1. **Create .serena directory**
   ```powershell
   mkdir .serena
   ```

2. **Copy template config**
   ```powershell
   cp C:\Users\pc\Desktop\mySite\.serena\config.toml .serena\
   ```

3. **Update config.toml**
   - Change `name` to your project name
   - Adjust `ignore_patterns` for your project type
   - Enable appropriate language servers

4. **Create onboarding.md**
   - Document project structure
   - List tech stack
   - Note key patterns and conventions

5. **Update Cursor MCP config** (if using project-specific setup)
   - Add new entry with different project path
   - Or use auto-detect mode

## 🎯 Verification Checklist

- [ ] UV installed and working (`uv --version`)
- [ ] Cursor MCP config file edited
- [ ] Cursor restarted
- [ ] Can see Serena tools in AI assistant
- [ ] Test query works (e.g., "get symbols overview")
- [ ] `.gitignore` updated

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| `SERENA_SETUP_GUIDE.md` | Complete setup for all projects |
| `QUICK_REFERENCE.md` | Common commands and workflows |
| `config.toml` | Project configuration |
| `onboarding.md` | Project overview for AI |

## 🔧 Troubleshooting

### Serena not showing up
1. Check UV is installed
2. Verify MCP config path
3. Check Cursor logs for errors
4. Restart Cursor

### Language server not working
- TypeScript/JavaScript: Usually works automatically
- Vue: May need additional setup
- Check `.serena/config.toml` has correct language servers enabled

### Performance issues
- Check `ignore_patterns` in config.toml
- Make sure `node_modules`, `.nuxt`, `.output` are excluded

## 📞 Resources

- **Serena GitHub**: https://github.com/oraios/serena
- **Documentation**: https://oraios.github.io/serena/
- **Language Support**: https://oraios.github.io/serena/language-support/

---

**Status**: ✅ Project configuration complete. Follow "Next Steps" to activate Serena.




