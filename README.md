# M2A Field Selector Display Extension

A Directus display extension that provides a clean and intuitive way to display M2A (Many-to-Any) field selector values in your Directus interface.

## Features

- **Clean Display**: Shows selected items as compact tags with initials
- **Multiple Display Formats**: Support for raw, formatted, related values, and labels
- **Tooltip Support**: Hover tooltips show full item names
- **Responsive Design**: Adapts to different screen sizes and container widths
- **Empty State Handling**: Graceful display when no items are selected
- **Directus UI Integration**: Uses Directus theme variables for consistent styling
- **Flexible Input**: Handles various data formats (JSON, arrays, objects, strings)

## Installation

### From NPM (Recommended)

```bash
npm install directus-extension-m2a-field-selector-display
```

### Manual Installation

1. Download or clone this repository
2. Install dependencies with `npm install`
3. Build the extension with `npm run build`
4. Move the built extension to your Directus extensions folder

## Configuration

The display extension has the following configuration options:

### Display Format
Choose how the selected items should be displayed:

- **Raw**: Shows the raw data as received
- **Formatted**: Shows items as compact tags with initials (default)
- **Related Values**: Displays related field values
- **Labels**: Shows item labels in a clean format

## Usage

1. **Field Setup**:
   - Create a field with type `json` or `alias`
   - Use the M2A Field Selector interface for input
   - Select "M2A Field Selector Display" as the display interface

2. **Configuration**:
   - Choose your preferred display format
   - The display will automatically handle different data structures

3. **Display Behavior**:
   - Single items show as initials with tooltips
   - Multiple items display as a horizontal list of tags
   - Empty states show "No items selected"

## Example Data Formats

The display extension handles various data formats:

### Array of Objects
```json
[
  {
    "collection": "articles",
    "field": "title",
    "value": "Getting Started with Directus",
    "id": 123
  },
  {
    "collection": "categories",
    "field": "name", 
    "value": "Tutorials",
    "id": 456
  }
]
```

### Simple Array
```json
["Item 1", "Item 2", "Item 3"]
```

### Single Object
```json
{
  "title": "Sample Article",
  "id": 789
}
```

### String Values
```json
"Single Item"
```

## Display Examples

### Multiple Items
```
[GE] [TU] [SA] [NE]
```
Where hovering shows:
- GE → "Getting Started with Directus"
- TU → "Tutorials" 
- SA → "Sample Article"
- NE → "New Features"

### Single Item
```
[GE]
```

### Empty State
```
No items selected
```

## Integration with M2A Field Selector

This display extension is designed to work seamlessly with the [M2A Field Selector](https://www.npmjs.com/package/directus-extension-m2a-field-selector) interface extension:

1. **Input**: Use M2A Field Selector to select items from multiple collections
2. **Display**: Use this display extension to show the selected items cleanly
3. **Consistent Experience**: Both extensions work together for a complete M2A solution

## Customization

### Styling
The extension uses Directus theme variables for consistent styling:

```css
.m2a-field-display {
  color: var(--theme-foreground);
  font-size: var(--theme-font-size-base);
}

.item-tag {
  background: var(--theme-background-subdued);
  border: var(--theme-border-width) solid var(--theme-border-color);
  border-radius: var(--theme-border-radius);
}
```

### Custom Display Logic
You can extend the display logic by modifying the component:

```javascript
const getFirstTwoLetters = (text) => {
  if (!text) return '';
  // Custom logic for generating initials
  const alphanumericOnly = text.toString().replace(/[^a-zA-Z0-9]/g, '');
  return alphanumericOnly.substring(0, 2).toUpperCase();
};
```

## Compatibility

- Directus 10.x and later
- Field types: json, alias
- Node.js >= 16.0.0

## Development

### Project Setup

The project requires `@directus/extensions-sdk` to be installed as a development dependency:

```bash
npm install --save-dev @directus/extensions-sdk
```

### Build Commands

```bash
# Build for production
npm run build

# Build for development (watch mode)
npm run dev

# Prepare for publishing
npm run prepublishOnly
```

### Project Structure

```
src/
├── display.vue        # Main display component
└── index.ts           # Extension entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
