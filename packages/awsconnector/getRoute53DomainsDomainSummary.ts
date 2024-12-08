import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Route53DomainsDomainSummary
 * Azure REST API version: 2024-12-01.
 */
export function getRoute53DomainsDomainSummary(args: GetRoute53DomainsDomainSummaryArgs, opts?: pulumi.InvokeOptions): Promise<GetRoute53DomainsDomainSummaryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:awsconnector:getRoute53DomainsDomainSummary", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRoute53DomainsDomainSummaryArgs {
    /**
     * Name of Route53DomainsDomainSummary
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
export interface GetRoute53DomainsDomainSummaryResult {
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
    readonly properties: types.outputs.Route53DomainsDomainSummaryPropertiesResponse;
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
 * Get a Route53DomainsDomainSummary
 * Azure REST API version: 2024-12-01.
 */
export function getRoute53DomainsDomainSummaryOutput(args: GetRoute53DomainsDomainSummaryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRoute53DomainsDomainSummaryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:awsconnector:getRoute53DomainsDomainSummary", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRoute53DomainsDomainSummaryOutputArgs {
    /**
     * Name of Route53DomainsDomainSummary
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}