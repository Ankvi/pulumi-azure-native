import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a network manager security admin configuration rule collection.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-02-01-preview, 2021-05-01-preview, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-01-01-preview, 2024-03-01.
 */
export function getAdminRuleCollection(args: GetAdminRuleCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetAdminRuleCollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getAdminRuleCollection", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionName": args.ruleCollectionName,
    }, opts);
}

export interface GetAdminRuleCollectionArgs {
    /**
     * The name of the network manager Security Configuration.
     */
    configurationName: string;
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the network manager security Configuration rule collection.
     */
    ruleCollectionName: string;
}

/**
 * Defines the admin rule collection.
 */
export interface GetAdminRuleCollectionResult {
    /**
     * Groups for configuration
     */
    readonly appliesToGroups: types.outputs.NetworkManagerSecurityGroupItemResponse[];
    /**
     * A description of the admin rule collection.
     */
    readonly description?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Unique identifier for this resource.
     */
    readonly resourceGuid: string;
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a network manager security admin configuration rule collection.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-02-01-preview, 2021-05-01-preview, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-01-01-preview, 2024-03-01.
 */
export function getAdminRuleCollectionOutput(args: GetAdminRuleCollectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAdminRuleCollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getAdminRuleCollection", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionName": args.ruleCollectionName,
    }, opts);
}

export interface GetAdminRuleCollectionOutputArgs {
    /**
     * The name of the network manager Security Configuration.
     */
    configurationName: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the network manager security Configuration rule collection.
     */
    ruleCollectionName: pulumi.Input<string>;
}