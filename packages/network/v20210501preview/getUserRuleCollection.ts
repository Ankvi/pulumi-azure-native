import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a network manager security user configuration rule collection.
 */
export function getUserRuleCollection(args: GetUserRuleCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetUserRuleCollectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20210501preview:getUserRuleCollection", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionName": args.ruleCollectionName,
    }, opts);
}

export interface GetUserRuleCollectionArgs {
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
export interface GetUserRuleCollectionResult {
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
 * Gets a network manager security user configuration rule collection.
 */
export function getUserRuleCollectionOutput(args: GetUserRuleCollectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserRuleCollectionResult> {
    return pulumi.output(args).apply((a: any) => getUserRuleCollection(a, opts))
}

export interface GetUserRuleCollectionOutputArgs {
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
