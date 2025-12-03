# Serena Quick Reference

## Common Serena Tools

### Code Navigation
| Tool | Purpose | Example |
|------|---------|---------|
| `find_symbol` | Find classes, functions, methods | Find `UserController` class |
| `find_referencing_symbols` | Find all uses of a symbol | Find all calls to `login()` |
| `get_symbols_overview` | Get file structure overview | See all exports in `utils.ts` |

### Code Editing
| Tool | Purpose | Example |
|------|---------|---------|
| `replace_symbol_body` | Replace entire function/class | Update `login()` method logic |
| `insert_after_symbol` | Add code after a symbol | Add new method after `logout()` |
| `insert_before_symbol` | Add code before a symbol | Add import before first function |
| `rename_symbol` | Rename across codebase | Rename `getUserData` to `fetchUser` |

### File Operations
| Tool | Purpose | Example |
|------|---------|---------|
| `search_for_pattern` | Regex search in files | Find all TODO comments |
| `read_file` | Read file contents | Read `config.ts` |
| `list_dir` | List directory contents | See all files in `components/` |
| `replace_content` | Regex-based replacement | Update API endpoints |

### Memory
| Tool | Purpose | Example |
|------|---------|---------|
| `write_memory` | Save project knowledge | Store API structure info |
| `read_memory` | Retrieve saved knowledge | Read saved patterns |
| `list_memories` | See all memories | View available memories |

## Asking for Help

Instead of asking Serena to:
- ❌ "Search the codebase for login function"
- ❌ "Show me all files"

Ask:
- ✅ "Find the login function implementation"
- ✅ "Show me the structure of the auth module"
- ✅ "Find all places where we call the API"
- ✅ "Refactor the UserService class to use async/await"

## Efficiency Tips

1. **Use symbolic tools first**: Don't read entire files, use `find_symbol` to get just what you need
2. **Be specific**: "Find the authentication logic" is better than "show me the code"
3. **Let Serena navigate**: It knows how to find related code
4. **Trust the tools**: Serena's edits are reliable, no need to verify manually each time

## Project-Specific Patterns (mySite)

### Nuxt 3 Conventions
- Pages are auto-routed from `app/pages/`
- Components are auto-imported
- Composables in `composables/` are auto-imported
- Use `useContent()` for content queries

### File Locations
- **Pages**: `app/pages/*.vue`
- **Components**: `app/components/*.vue`
- **Content**: `content/*.md`
- **Config**: `nuxt.config.ts`

### Common Tasks
- **Add new page**: Create file in `app/pages/`
- **Add component**: Create file in `app/components/`
- **Update content**: Edit files in `content/`
- **Configure Nuxt**: Edit `nuxt.config.ts`

## Workflow Example

### Typical Feature Development with Serena

1. **Understand existing code**
   - "Show me the overview of pages/index.vue"
   - "Find the authentication composable"

2. **Make changes**
   - "Add a new method to handle form submission"
   - "Refactor the login function to use the new API"

3. **Verify relationships**
   - "Find all references to the old API function"
   - "Update all calls to use the new signature"

4. **Save knowledge**
   - Serena automatically saves important patterns to memory
   - Review with "List available memories"

## Configuration Reminder

Your `.serena/config.toml` controls:
- Which language servers are active
- Which directories to ignore
- Which tools are enabled
- Memory settings

Update it when your project structure changes significantly.



