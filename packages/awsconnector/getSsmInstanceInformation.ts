import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SsmInstanceInformation
 *
 * Uses Azure REST API version 2024-12-01.
 */
export function getSsmInstanceInformation(args: GetSsmInstanceInformationArgs, opts?: pulumi.InvokeOptions): Promise<GetSsmInstanceInformationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:awsconnector:getSsmInstanceInformation", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSsmInstanceInformationArgs {
    /**
     * Name of SsmInstanceInformation
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Microsoft.AwsConnector resource
 */
export interface GetSsmInstanceInformationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.SsmInstanceInformationPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a SsmInstanceInformation
 *
 * Uses Azure REST API version 2024-12-01.
 */
export function getSsmInstanceInformationOutput(args: GetSsmInstanceInformationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSsmInstanceInformationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:awsconnector:getSsmInstanceInformation", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSsmInstanceInformationOutputArgs {
    /**
     * Name of SsmInstanceInformation
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}