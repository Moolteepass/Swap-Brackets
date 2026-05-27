const vscode = require("vscode")

// Swap map to determine which brackets should be changed
const SWAP_MAP = {
  "(": ["{", "}"],
  "{": ["(", ")"],
}

function activate(context) {
  // Push the command to the command palette
  context.subscriptions.push(
    // The command itself
    vscode.commands.registerCommand("swapBrackets.swap", async function () {
      // Get active window
      const editor = vscode.window.activeTextEditor

      // Return if no editor
      if (!editor) return

      // Get current position
      const { line, character } = editor.selection.active

      // Get current character
      const char = editor.document.lineAt(line).text[character]

      // Get array from swap map
      const pair = SWAP_MAP[char]

      // Success
      // Return warning if no pair found
      if (!pair) return vscode.window.showWarningMessage("Cursor not on ( or {")

      // Select to end bracket
      await vscode.commands.executeCommand("editor.action.selectToBracket")

      // Get current selection
      const selection = editor.selection

      // Get inner blob
      const inner = editor.document.getText(selection).slice(1, -1)

      // Get start position
      const startPos = selection.start

      // Make swap
      await editor.edit((edit) =>
        edit.replace(selection, pair[0] + inner + pair[1]),
      )

      // Move cursor to start
      editor.selection = new vscode.Selection(startPos, startPos)
    }),
  )
}

function deactivate() {}

module.exports = { activate, deactivate }
