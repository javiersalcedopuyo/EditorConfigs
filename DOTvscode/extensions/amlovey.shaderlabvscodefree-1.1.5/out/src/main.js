"use strict";function activate(e){e.subscriptions.push(vscode.languages.registerCompletionItemProvider(SHADERLAB_MODE,new SLCompletionItemProvider_1.default,...SLCompletionItemProvider_1.default.triggerCharacters)),e.subscriptions.push(vscode.languages.registerSignatureHelpProvider(SHADERLAB_MODE,new SLSignatureHelpProvider_1.default,...SLSignatureHelpProvider_1.default.triggerChars))}Object.defineProperty(exports,"__esModule",{value:!0});const vscode=require("vscode"),SLCompletionItemProvider_1=require("./SLCompletionItemProvider"),SLSignatureHelpProvider_1=require("./SLSignatureHelpProvider"),SHADERLAB_MODE={language:"shaderlab",scheme:"file"};exports.activate=activate;