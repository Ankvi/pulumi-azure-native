import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a S3ControlMultiRegionAccessPointPolicyDocument
 *
 * Uses Azure REST API version 2024-12-01.
 */
export function getS3ControlMultiRegionAccessPointPolicyDocument(args: GetS3ControlMultiRegionAccessPointPolicyDocumentArgs, opts?: pulumi.InvokeOptions): Promise<GetS3ControlMultiRegionAccessPointPolicyDocumentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:awsconnector:getS3ControlMultiRegionAccessPointPolicyDocument", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetS3ControlMultiRegionAccessPointPolicyDocumentArgs {
    /**
     * Name of S3ControlMultiRegionAccessPointPolicyDocument
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
export interface GetS3ControlMultiRegionAccessPointPolicyDocumentResult {
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
    readonly properties: types.outputs.S3ControlMultiRegionAccessPointPolicyDocumentPropertiesResponse;
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
 * Get a S3ControlMultiRegionAccessPointPolicyDocument
 *
 * Uses Azure REST API version 2024-12-01.
 */
export function getS3ControlMultiRegionAccessPointPolicyDocumentOutput(args: GetS3ControlMultiRegionAccessPointPolicyDocumentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetS3ControlMultiRegionAccessPointPolicyDocumentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:awsconnector:getS3ControlMultiRegionAccessPointPolicyDocument", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetS3ControlMultiRegionAccessPointPolicyDocumentOutputArgs {
    /**
     * Name of S3ControlMultiRegionAccessPointPolicyDocument
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}