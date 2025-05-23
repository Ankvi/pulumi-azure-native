import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the resourceSyncRule with a specified resource group, subscription id Custom Location resource name and Resource Sync Rule name.
 *
 * Uses Azure REST API version 2021-08-31-preview.
 */
export function getResourceSyncRule(args: GetResourceSyncRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceSyncRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:extendedlocation:getResourceSyncRule", {
        "childResourceName": args.childResourceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetResourceSyncRuleArgs {
    /**
     * Resource Sync Rule name.
     */
    childResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Custom Locations name.
     */
    resourceName: string;
}

/**
 * Resource Sync Rules definition.
 */
export interface GetResourceSyncRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Priority represents a priority of the Resource Sync Rule
     */
    readonly priority?: number;
    /**
     * Provisioning State for the Resource Sync Rule.
     */
    readonly provisioningState: string;
    /**
     * A label selector is composed of two parts, matchLabels and matchExpressions. The first part, matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The second part, matchExpressions is a list of resource selector requirements. Valid operators include In, NotIn, Exists, and DoesNotExist. The values set must be non-empty in the case of In and NotIn. The values set must be empty in the case of Exists and DoesNotExist. All of the requirements, from both matchLabels and matchExpressions must all be satisfied in order to match.
     */
    readonly selector?: types.outputs.ResourceSyncRulePropertiesResponseSelector;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * For an unmapped custom resource, its labels will be used to find matching resource sync rules. If this resource sync rule is one of the matching rules with highest priority, then the unmapped custom resource will be projected to the target resource group associated with this resource sync rule. The user creating this resource sync rule should have write permissions on the target resource group and this write permission will be validated when creating the resource sync rule.
     */
    readonly targetResourceGroup?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the resourceSyncRule with a specified resource group, subscription id Custom Location resource name and Resource Sync Rule name.
 *
 * Uses Azure REST API version 2021-08-31-preview.
 */
export function getResourceSyncRuleOutput(args: GetResourceSyncRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetResourceSyncRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:extendedlocation:getResourceSyncRule", {
        "childResourceName": args.childResourceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetResourceSyncRuleOutputArgs {
    /**
     * Resource Sync Rule name.
     */
    childResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Custom Locations name.
     */
    resourceName: pulumi.Input<string>;
}