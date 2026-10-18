import * as vscode from 'vscode';
import * as cp from 'child_process';
import * as semver from 'semver';

const CURRENT_VERSION = '2026.10.0';

async function detectAndSetPythonPath(): Promise<void> {
    return new Promise((resolve) => {
        try {
            const proc = cp.spawn('python', ['-c', 'import sys; print(sys.executable)']);

            let output = '';
            proc.stdout.on('data', (data: Buffer) => {
                output += data.toString();
            });

            proc.on('close', async () => {
                const pythonPath = output.trim();
                if (pythonPath) {
                    try {
                        await vscode.workspace.getConfiguration('python').update(
                            'defaultInterpreterPath',
                            pythonPath,
                            vscode.ConfigurationTarget.Global
                        );
                    } catch (err) {
                        console.log('detectAndSetPythonPath update error:', err);
                    }
                }
                resolve();
            });

            proc.on('error', (err) => {
                console.log('detectAndSetPythonPath spawn error:', err);
                resolve();
            });
        } catch (err) {
            console.log('detectAndSetPythonPath error:', err);
            resolve();
        }
    });
}

async function configurer(context: vscode.ExtensionContext): Promise<void> {
    try {
        await detectAndSetPythonPath();
        // Télémétrie coupée par défaut (élèves, dont des mineurs) — voir « Confidentialité » dans le README
        await vscode.workspace.getConfiguration('telemetry').update('telemetryLevel', 'off', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('ABriand IT-2I2D : configuration terminée.');
        await context.globalState.update('numVersionPre', CURRENT_VERSION);
    } catch (err) {
        console.log('configurer error:', err);
    }
}

export function activate(context: vscode.ExtensionContext): void {
    const numVersionPre: string = context.globalState.get('numVersionPre', '0.0.0');

    const configurerCmd = vscode.commands.registerCommand(
        'abriand-it-2i2d.configurer',
        () => configurer(context)
    );
    context.subscriptions.push(configurerCmd);

    if (semver.gt(CURRENT_VERSION, numVersionPre)) {
        configurer(context);
    }
}

export function deactivate(): void {}
