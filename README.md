
## Code Template Library

### Description

The **Code Template Library** is a Visual Studio Code extension that allows developers to manage and use custom code templates efficiently. With this extension, you can simply create (editing and deleting can be done just by accessing the file in the templates folder) and insert code templates directly from the VS Code editor.

### Features

- Create Template: Save selected text or create a new template with custom content.
- Template Library: Access and insert your templates with the by a click.


### Installation

1. **Clone the Repository**

```
   git clone https://github.com/the-ganeshthyadi/code-template-library
   cd code-template-library
```

2. **Install Dependencies**

   Make sure you have Node.js and npm installed. Then, run:

   ```bash
   npm install
   ```

3. **Build the Extension**

   Compile the TypeScript code:

   ```bash
   npm run compile
   ```

4. **Package the Extension**

   Install `vsce` if you haven't already:

   ```bash
   npm install -g vsce
   ```

   Package the extension into a `.vsix` file:

   ```bash
   vsce package
   ```

   This will generate a `.vsix` file that you can install in VS Code.

5. **Install the Extension**

   You can install the extension directly from the `.vsix` file:

   ```bash
   code --install-extension <path-to-file>.vsix
   ```

## Usage
### Commands

1. **Create Template**

   - **Command**: `templates.createTemplate`
   - **Usage**: Select text and run this command to save the selected text as a new template. You can also manually create a template in the template folder then later access and insert through the template library.

2. **Template Library**

   - **Command**: `templates.listTemplates`
   - **Usage**: Open the template library to view and insert templates into your code.


### Right-Click Menu

1. **Create Template**: Save selected text or create a new template.
2. **Template Library**: Access the list of templates, with options to edit, delete, or insert.

## Configuration

The extension stores templates in a folder named `templates` located in the root of your workspace. Each template is saved as a `.txt` file.

## Contributing

Feel free to contribute to the project by submitting pull requests or issues. Please ensure that your code follows the existing style and includes relevant tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Visual Studio Code](https://code.visualstudio.com) for providing a powerful and extensible editor platform.
- [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com) for the JavaScript runtime and package management.

## Contact

For questions or feedback, please open an issue or contact us via [email](the.ganeshthyadi@gmail.com).

```
Feel free to modify the content to better fit your specific needs or add any additional sections as needed.