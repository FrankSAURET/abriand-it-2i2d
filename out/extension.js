"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const cp = require("child_process");
const semver = require("semver");
const CURRENT_VERSION = '2026.10.0';
async function detectAndSetPythonPath() {
    return new Promise((resolve) => {
        try {
            const proc = cp.spawn('python', ['-c', 'import sys; print(sys.executable)']);
            let output = '';
            proc.stdout.on('data', (data) => {
                output += data.toString();
            });
            proc.on('close', async () => {
                const pythonPath = output.trim();
                if (pythonPath) {
                    try {
                        await vscode.workspace.getConfiguration('python').update('defaultInterpreterPath', pythonPath, vscode.ConfigurationTarget.Global);
                    }
                    catch (err) {
                        console.log('detectAndSetPythonPath update error:', err);
                    }
                }
                resolve();
            });
            proc.on('error', (err) => {
                console.log('detectAndSetPythonPath spawn error:', err);
                resolve();
            });
        }
        catch (err) {
            console.log('detectAndSetPythonPath error:', err);
            resolve();
        }
    });
}
async function configurer(context) {
    try {
        await detectAndSetPythonPath();
        // Télémétrie coupée par défaut (élèves, dont des mineurs) — voir « Confidentialité » dans le README
        await vscode.workspace.getConfiguration('telemetry').update('telemetryLevel', 'off', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('ABriand IT-2I2D : configuration terminée.');
        await context.globalState.update('numVersionPre', CURRENT_VERSION);
    }
    catch (err) {
        console.log('configurer error:', err);
    }
}
function activate(context) {
    const numVersionPre = context.globalState.get('numVersionPre', '0.0.0');
    const configurerCmd = vscode.commands.registerCommand('abriand-it-2i2d.configurer', () => configurer(context));
    context.subscriptions.push(configurerCmd);
    if (semver.gt(CURRENT_VERSION, numVersionPre)) {
        configurer(context);
    }
}
function deactivate() { }
//# sourceMappingURL=extension.js.map