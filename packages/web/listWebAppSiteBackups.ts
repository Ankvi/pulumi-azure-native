import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets existing backups of an app.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppSiteBackups(args: ListWebAppSiteBackupsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppSiteBackupsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppSiteBackups", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppSiteBackupsArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Collection of backup items.
 */
export interface ListWebAppSiteBackupsResult {
    /**
     * Link to next page of resources.
     */
    readonly nextLink: string;
    /**
     * Collection of resources.
     */
    readonly value: types.outputs.BackupItemResponse[];
}
/**
 * Description for Gets existing backups of an app.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppSiteBackupsOutput(args: ListWebAppSiteBackupsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppSiteBackupsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppSiteBackups", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppSiteBackupsOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}