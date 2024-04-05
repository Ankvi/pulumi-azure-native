import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a link to download the run logs.
 */
export function listRunLogSasUrl(args: ListRunLogSasUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListRunLogSasUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20190601preview:listRunLogSasUrl", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "runId": args.runId,
    }, opts);
}

export interface ListRunLogSasUrlArgs {
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
    /**
     * The run ID.
     */
    runId: string;
}

/**
 * The result of get log link operation.
 */
export interface ListRunLogSasUrlResult {
    /**
     * The link to logs in registry for a run on a azure container registry.
     */
    readonly logArtifactLink?: string;
    /**
     * The link to logs for a run on a azure container registry.
     */
    readonly logLink?: string;
}
/**
 * Gets a link to download the run logs.
 */
export function listRunLogSasUrlOutput(args: ListRunLogSasUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListRunLogSasUrlResult> {
    return pulumi.output(args).apply((a: any) => listRunLogSasUrl(a, opts))
}

export interface ListRunLogSasUrlOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The run ID.
     */
    runId: pulumi.Input<string>;
}