import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Stack Versions that this version can upgrade to
 * Azure REST API version: 2023-06-01.
 *
 * Other available API versions: 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview.
 */
export function listUpgradableVersionDetails(args: ListUpgradableVersionDetailsArgs, opts?: pulumi.InvokeOptions): Promise<ListUpgradableVersionDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:listUpgradableVersionDetails", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListUpgradableVersionDetailsArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group to which the Elastic resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Stack Versions that this version can upgrade to
 */
export interface ListUpgradableVersionDetailsResult {
    /**
     * Current version of the elastic monitor
     */
    readonly currentVersion?: string;
    /**
     * Stack Versions that this version can upgrade to
     */
    readonly upgradableVersions?: string[];
}
/**
 * Stack Versions that this version can upgrade to
 * Azure REST API version: 2023-06-01.
 *
 * Other available API versions: 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview.
 */
export function listUpgradableVersionDetailsOutput(args: ListUpgradableVersionDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListUpgradableVersionDetailsResult> {
    return pulumi.output(args).apply((a: any) => listUpgradableVersionDetails(a, opts))
}

export interface ListUpgradableVersionDetailsOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the Elastic resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
