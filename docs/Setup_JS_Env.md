# Install
### node.js
[node.js](https://nodejs.org/en/)
If using Windows, installing using the MSI and have chocol installed run before the MSI: `choco upgrade`.
In root directory run: `npm update`.

I need node >= 15 because it has support for ES modules, see https://stackoverflow.com/a/31367852/2938519

## Jest
Install it globally with, See [Docs](https://jestjs.io/docs/getting-started#running-from-command-line):
```
npm install jest --global
```

## Typescript
[Install the TypeScript compiler](https://code.visualstudio.com/docs/typescript/typescript-tutorial#_install-the-typescript-compiler).
```
npm install -g typescript
tsc --version
```

# VisualStudio
All these changes are already in the Workspace Settings file in `.vscode/settings.json`.
Last tested in 1.64.2

## Change the default terminal for `Git Bash`
Add `"terminal.integrated.defaultProfile.windows": "Git Bash"` to `settings.json` fiel, [See Terminal Profile](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-profiles).

## Open terminal in current folder
Setting `"terminal.integrated.cwd": "${fileDirname}"`, [taken form here](https://stackoverflow.com/a/68085549/2938519).

## Keyboard Shortcuts
`Ctrl + D` to duplicate line.
By default it is reserverd for the [Add Selection To Next Find Match](https://code.visualstudio.com/docs/getstarted/keybindings#_basic-editing) feature.
I cannot use one in Visual Studio [Edit.InsertNextMatchingCaret](https://docs.microsoft.com/en-us/visualstudio/ide/finding-and-replacing-text?view=vs-2022#commands) (`Alt+Shift+.`), because there are conflicts. I have to use `Ctrl + Alt + D`.

I don't know how to add this to settings.json so I just added a backup in `.vscode` directory.
