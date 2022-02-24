# VisualStudio
All these changes are already in the Workspace Settings file in `.vscode/settings.json`.
Last tested in 1.64.2

## Change the default terminal for `Git Bash`
Add `"terminal.integrated.defaultProfile.windows": "Git Bash"` to `settings.json` fiel, [See Terminal Profile](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-profiles).

## Open terminal in current folder
Setting `"terminal.integrated.cwd": "${fileDirname}"`, [taken form here](https://stackoverflow.com/a/68085549/2938519).