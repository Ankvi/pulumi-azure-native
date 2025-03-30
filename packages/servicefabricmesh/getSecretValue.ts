import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the information about the specified named secret value resources. The information does not include the actual value of the secret.
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getSecretValue(args: GetSecretValueArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretValueResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabricmesh:getSecretValue", {
        "resourceGroupName": args.resourceGroupName,
        "secretResourceName": args.secretResourceName,
        "secretValueResourceName": args.secretValueResourceName,
    }, opts);
}

export interface GetSecretValueArgs {
    /**
     * Azure resource group name
     */
    resourceGroupName: string;
    /**
     * The name of the secret resource.
     */
    secretResourceName: string;
    /**
     * The name of the secret resource value which is typically the version identifier for the value.
     */
    secretValueResourceName: string;
}

/**
 * This type describes a value of a secret resource. The name of this resource is the version identifier corresponding to this secret value.
 */
export interface GetSecretValueResult {
    /**
     * Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of the resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * The actual value of the secret.
     */
    readonly value?: string;
}
/**
 * Get the information about the specified named secret value resources. The information does not include the actual value of the secret.
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getSecretValueOutput(args: GetSecretValueOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSecretValueResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicefabricmesh:getSecretValue", {
        "resourceGroupName": args.resourceGroupName,
        "secretResourceName": args.secretResourceName,
        "secretValueResourceName": args.secretValueResourceName,
    }, opts);
}

export interface GetSecretValueOutputArgs {
    /**
     * Azure resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the secret resource.
     */
    secretResourceName: pulumi.Input<string>;
    /**
     * The name of the secret resource value which is typically the version identifier for the value.
     */
    secretValueResourceName: pulumi.Input<string>;
}