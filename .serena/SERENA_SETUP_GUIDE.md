# Serena Setup Guide - Multi-Project Configuration

This guide explains how to set up Serena for use across all your projects.

## 1. Global Prerequisites

### Install UV (Python Package Manager)
```powershell
# Windows PowerShell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### Verify Installation
```powershell
uv --version
```

## 2. Configure Serena in Cursor

### Option A: Global Configuration (All Projects)
Edit your Cursor MCP settings file:

**File**: `%APPDATA%\Cursor\User\globalStorage\mcp.json`

```json
{
  "mcpServers": {
    "serena": {
      "command": "uvx",
      "args": [
        "--from",
        "git+https://github.com/oraios/serena",
        "serena",
        "start-mcp-server"
      ],
      "env": {
        "SERENA_AUTO_DETECT_PROJECT": "true"
      }
    }
  }
}
```

### Option B: Project-Specific Configuration
If you want different Serena settings per project, you can specify the project path:

```json
{
  "mcpServers": {
    "serena-mysite": {
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

## 3. Per-Project Setup

For each project where you want to use Serena:

### Create .serena Directory
```powershell
mkdir .serena
```

### Create config.toml
Create `.serena/config.toml` with project-specific settings:

```toml
[project]
name = "your-project-name"
root_path = "."
ignore_patterns = [
    "node_modules/**",
    "dist/**",
    "build/**",
    ".git/**",
    "coverage/**"
]

[language_servers]
# Enable language servers based on your project type
typescript = { enabled = true }  # For JS/TS projects
python = { enabled = true }       # For Python projects
# Add others as needed

[tools]
# All symbolic tools enabled
find_symbol = { enabled = true }
find_referencing_symbols = { enabled = true }
get_symbols_overview = { enabled = true }
replace_symbol_body = { enabled = true }
insert_after_symbol = { enabled = true }
insert_before_symbol = { enabled = true }
rename_symbol = { enabled = true }
search_for_pattern = { enabled = true }
read_file = { enabled = true }
list_dir = { enabled = true }
find_file = { enabled = true }
replace_content = { enabled = true }

[memory]
enabled = true
max_memories = 50
```

### Create onboarding.md
Create `.serena/onboarding.md` with project overview:

```markdown
# Project Name

## Overview
Brief description of what this project does

## Tech Stack
- List key technologies
- Frameworks
- Libraries

## Project Structure
```
project/
├── src/           # Source code
├── tests/         # Test files
└── docs/          # Documentation
```

## Key Features
- Feature 1
- Feature 2

## Architecture Notes
- Important patterns used
- Conventions to follow
```

## 4. Language-Specific Setup

### JavaScript/TypeScript/Node.js Projects
```toml
[language_servers]
typescript = { enabled = true }

[project]
ignore_patterns = [
    "node_modules/**",
    "dist/**",
    "build/**",
    ".next/**",
    ".nuxt/**",
    ".output/**"
]
```

### Python Projects
```toml
[language_servers]
python = { enabled = true }

[project]
ignore_patterns = [
    "venv/**",
    ".venv/**",
    "__pycache__/**",
    "*.pyc",
    ".pytest_cache/**",
    "dist/**",
    "build/**"
]
```

### Rust Projects
```toml
[language_servers]
rust = { enabled = true }

[project]
ignore_patterns = [
    "target/**",
    "Cargo.lock"
]
```

### Go Projects
```toml
[language_servers]
go = { enabled = true }

[project]
ignore_patterns = [
    "vendor/**",
    "bin/**"
]
```

## 5. Serena Commands & Usage

### Basic Commands
Once configured, Serena provides these capabilities through your AI assistant:

- **Find Symbol**: `find_symbol` - Locate classes, functions, methods by name
- **Find References**: `find_referencing_symbols` - Find all uses of a symbol
- **Get Overview**: `get_symbols_overview` - Get file structure
- **Replace Symbol**: `replace_symbol_body` - Edit entire functions/classes
- **Insert Code**: `insert_after_symbol`, `insert_before_symbol`
- **Rename**: `rename_symbol` - Refactor symbol names across codebase
- **Pattern Search**: `search_for_pattern` - Regex-based code search

### Memory System
Serena can store project knowledge in memory files:
- Automatically maintained in `.serena/memories/`
- Persistent across sessions
- Helps maintain context about your codebase

## 6. Best Practices

### .gitignore
Add to your `.gitignore`:
```
.serena/memories/
```
(Keep config.toml and onboarding.md in git)

### Onboarding Updates
Update `.serena/onboarding.md` when:
- Major architectural changes occur
- New key features are added
- Dependencies change significantly

### Memory Management
- Let Serena create memories automatically
- Review memories periodically
- Delete outdated memory files manually if needed

## 7. Troubleshooting

### Serena Not Working
1. Check UV installation: `uv --version`
2. Verify MCP config path
3. Restart Cursor after config changes
4. Check Cursor logs for errors

### Language Server Issues
Some languages need additional setup:
- **TypeScript**: Usually works out of the box
- **Python**: May need `pyright` or `pylsp`
- **C/C++**: May need `clangd`

See [Serena Language Support](https://oraios.github.io/serena/language-support/) for details.

### Performance Issues
If Serena is slow:
- Check `ignore_patterns` in config.toml
- Exclude large build artifacts and dependencies
- Reduce `max_memories` setting

## 8. Updating Serena

Serena updates automatically when using `uvx` since it fetches from GitHub.

To force update:
```powershell
uvx --refresh --from git+https://github.com/oraios/serena serena --version
```

## 9. Resources

- [Serena GitHub](https://github.com/oraios/serena)
- [Official Documentation](https://oraios.github.io/serena/)
- [User Guide](https://oraios.github.io/serena/user-guide/)
- [Language Support](https://oraios.github.io/serena/language-support/)

## 10. Multi-Project Workflow

### Register Multiple Projects
You can register multiple projects with Serena:

```powershell
# Activate different projects
uvx --from git+https://github.com/oraios/serena serena --project /path/to/project1
uvx --from git+https://github.com/oraios/serena serena --project /path/to/project2
```

### Switching Projects
Serena can detect the current project based on your workspace in Cursor. Just open the project folder and Serena will automatically load the appropriate configuration.

### Shared Configuration
You can create a template `.serena/config.toml` and copy it to new projects:

```powershell
# Create template
mkdir C:\Users\pc\serena-templates
# Copy your config there
cp .serena\config.toml C:\Users\pc\serena-templates\

# For new projects
cd new-project
mkdir .serena
cp C:\Users\pc\serena-templates\config.toml .serena\
# Edit as needed
```

---

**Remember**: Serena works best with well-structured, modular codebases. Follow OOP principles, keep files under 1000 lines, and maintain clear separation of concerns for optimal AI assistance.



