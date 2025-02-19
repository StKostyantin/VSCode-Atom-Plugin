import * as vscode from 'vscode';

import BaseCommand from "@/common/baseCommand";
import { AccountsTreeView, AccountItem } from "@/trees";

export class RemoveAccountCommand extends BaseCommand {
    async run(item: AccountItem) {
        await this.substrate.removeAccount(item.label);
        await vscode.window.showInformationMessage(`Successfully removed account "${item.label}"`);

        const tree = this.trees.get('accounts') as AccountsTreeView;
        tree.refresh();
    }
}
