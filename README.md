# Swap Brackets

Quickly swap the bracket type wrapping a block of code — toggle between `( )` and `{ }` with a single command.

## Usage

1. Place your cursor **on an opening bracket** — either `(` or `{`
2. Run **Swap Brackets** from the Command Palette (`Cmd+Shift+P` → `Swap Brackets`)
3. The bracket pair and all content inside will be swapped to the other bracket type

## Keybindings / Hotkeys
- Alt + Cmd + B on MacOS
- Alt + Ctrl + B on Windows

### Example

```js
// Cursor on `(`
foo(a, b, c)
// → becomes
foo{a, b, c}

// Cursor on `{`
foo{a, b, c}
// → becomes
foo(a, b, c)
```

## Notes

- If the cursor is not on a `(` or `{`, a warning message will appear
- The cursor is returned to the opening bracket position after the swap