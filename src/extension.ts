import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  let disposable = vscode.commands.registerCommand('django-helper.insertStaticUrls', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("File not found!");
      return;
    }

    const document = editor.document;
    const text = document.getText();

    if (!text.includes('{% load static %}')) {
      editor.edit(editBuilder => {
        editBuilder.insert(new vscode.Position(0, 0), '{% load static %}\n');
      });
    }

    const confirm = await vscode.window.showQuickPick(
      ['Yes, wrap all relative files in {% static %}'],
      { placeHolder: 'Should all relative files be automatically wrapped?' }
    );

    if (!confirm) return;

    editor.edit(editBuilder => {
      let fullText = editor.document.getText();

      const linkRegex = /(<link[^>]+href=["'])(?!https?:\/\/)(?!\{%\s*static)([^"']+)(["'][^>]*>)/g;
      fullText = fullText.replace(linkRegex, '$1{% static \'$2\' %}$3');

      const scriptRegex = /(<script[^>]+src=["'])(?!https?:\/\/)(?!\{%\s*static)([^"']+)(["'][^>]*>)/g;
      fullText = fullText.replace(scriptRegex, '$1{% static \'$2\' %}$3');

      const imgRegex = /(<img[^>]+src=["'])(?!https?:\/\/)(?!\{%\s*static)([^"']+)(["'][^>]*>)/g;
      fullText = fullText.replace(imgRegex, '$1{% static \'$2\' %}$3');

      const mediaRegex = /(<(?:audio|video)[^>]+src=["'])(?!https?:\/\/)(?!\{%\s*static)([^"']+)(["'][^>]*>)/g;
      fullText = fullText.replace(mediaRegex, '$1{% static \'$2\' %}$3');

      const start = new vscode.Position(0, 0);
      const end = new vscode.Position(editor.document.lineCount, 0);
      editBuilder.replace(new vscode.Range(start, end), fullText);
    });

    vscode.window.showInformationMessage('Relative files have been wrapped in {% static %}!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }
