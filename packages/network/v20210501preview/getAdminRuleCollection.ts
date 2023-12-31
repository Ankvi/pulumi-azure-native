import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a network manager security admin configuration rule collection.
 */
export function getAdminRuleCollection(args: GetAdminRuleCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetAdminRuleCollectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20210501preview:getAdminRuleCollection", {
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
 * Defines the rule collection.
 */
export interface GetAdminRuleCollectionResult {
    /**
     * Groups for configuration
     */
    readonly appliesToGroups: types.outputs.NetworkManagerSecurityGroupItemResponse[];
    /**
     * A description of the rule collection.
     */
    readonly description?: string;
    /**
     * A display name of the rule collection.
     */
    readonly displayName?: string;
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
 */
export function getAdminRuleCollectionOutput(args: GetAdminRuleCollectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAdminRuleCollectionResult> {
    return pulumi.output(args).apply((a: any) => getAdminRuleCollection(a, opts))
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
