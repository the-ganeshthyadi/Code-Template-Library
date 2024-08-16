import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    const templatesDir = path.join(vscode.workspace.rootPath || '', 'templates');

    
    if (!fs.existsSync(templatesDir)) {
        fs.mkdirSync(templatesDir);
    }

    
    context.subscriptions.push(vscode.commands.registerCommand('code-template-library.createTemplate', async () => {
        const editor = vscode.window.activeTextEditor;
        const selectedText = editor?.document.getText(editor.selection);
        const templateName = await vscode.window.showInputBox({ prompt: 'Enter the template name' });

        if (templateName) {
            const templatePath = path.join(templatesDir, `${templateName}.txt`);
            
            if (selectedText) {
                fs.writeFileSync(templatePath, selectedText);
                vscode.window.showInformationMessage(`Template '${templateName}' created from selected text.`);
            } else {
                const newTemplateUri = vscode.Uri.file(templatePath);
                const document = await vscode.workspace.openTextDocument(newTemplateUri);
                await vscode.window.showTextDocument(document);
                vscode.window.showInformationMessage(`Template '${templateName}' created. Please add content.`);
            }
        }
    }));

    
    context.subscriptions.push(vscode.commands.registerCommand('code-template-library.listTemplates', async () => {
        const templateFiles = fs.readdirSync(templatesDir).filter(file => file.endsWith('.txt'));
        if (templateFiles.length === 0) {
            vscode.window.showInformationMessage('No templates available.');
            return;
        }

        const selectedTemplate = await vscode.window.showQuickPick(templateFiles, { placeHolder: 'Select a template to insert' });
        if (selectedTemplate) {
            const templateContent = fs.readFileSync(path.join(templatesDir, selectedTemplate), 'utf8');
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const position = editor.selection.active;
                editor.edit(editBuilder => {
                    editBuilder.insert(position, templateContent);
                });
                vscode.window.showInformationMessage(`Template '${selectedTemplate}' inserted.`);
            }
        }
    }));

    
    context.subscriptions.push(vscode.commands.registerCommand('code-template-library.deleteTemplate', async () => {
        const templateFiles = fs.readdirSync(templatesDir).filter(file => file.endsWith('.txt'));
        if (templateFiles.length === 0) {
            vscode.window.showInformationMessage('No templates available.');
            return;
        }

        const selectedTemplates = await vscode.window.showQuickPick(templateFiles, { placeHolder: 'Select templates to delete', canPickMany: true });
        if (selectedTemplates && selectedTemplates.length > 0) {
            selectedTemplates.forEach(template => fs.unlinkSync(path.join(templatesDir, template)));
            vscode.window.showInformationMessage(`Deleted ${selectedTemplates.length} template(s).`);
        }
    }));
}

export function deactivate() {}
