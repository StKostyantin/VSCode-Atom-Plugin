import * as vscode from 'vscode';

import BaseCommand from "@/common/baseCommand";
import { NodeItem } from "@/trees";

export class ConnectToNodeCommand extends BaseCommand {
    async run(item: NodeItem) {
        // Todo: Do nothing if alreaddy connected
        await this.substrate.connectTo(item.label, item.description);
        await vscode.commands.executeCommand('nodes.refresh');
    }
}
