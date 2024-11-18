import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns a sandbox custom image
 * Azure REST API version: 2023-08-15.
 *
 * Other available API versions: 2024-04-13.
 */
export function getSandboxCustomImage(args: GetSandboxCustomImageArgs, opts?: pulumi.InvokeOptions): Promise<GetSandboxCustomImageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto:getSandboxCustomImage", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "sandboxCustomImageName": args.sandboxCustomImageName,
    }, opts);
}

export interface GetSandboxCustomImageArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the sandbox custom image.
     */
    sandboxCustomImageName: string;
}

/**
 * Class representing a Kusto sandbox custom image.
 */
export interface GetSandboxCustomImageResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The language name, for example Python.
     */
    readonly language: string;
    /**
     * The version of the language.
     */
    readonly languageVersion: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The requirements file content.
     */
    readonly requirementsFileContent?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns a sandbox custom image
 * Azure REST API version: 2023-08-15.
 *
 * Other available API versions: 2024-04-13.
 */
export function getSandboxCustomImageOutput(args: GetSandboxCustomImageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSandboxCustomImageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kusto:getSandboxCustomImage", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "sandboxCustomImageName": args.sandboxCustomImageName,
    }, opts);
}

export interface GetSandboxCustomImageOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the sandbox custom image.
     */
    sandboxCustomImageName: pulumi.Input<string>;
}