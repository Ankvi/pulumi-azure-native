import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified networkServiceDesign group.
 */
export function getNetworkServiceDesignGroup(args: GetNetworkServiceDesignGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkServiceDesignGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork/v20230901:getNetworkServiceDesignGroup", {
        "networkServiceDesignGroupName": args.networkServiceDesignGroupName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkServiceDesignGroupArgs {
    /**
     * The name of the network service design group.
     */
    networkServiceDesignGroupName: string;
    /**
     * The name of the publisher.
     */
    publisherName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * network service design group resource.
 */
export interface GetNetworkServiceDesignGroupResult {
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
     * network service design group properties.
     */
    readonly properties: types.outputs.NetworkServiceDesignGroupPropertiesFormatResponse;
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
 * Gets information about the specified networkServiceDesign group.
 */
export function getNetworkServiceDesignGroupOutput(args: GetNetworkServiceDesignGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkServiceDesignGroupResult> {
    return pulumi.output(args).apply((a: any) => getNetworkServiceDesignGroup(a, opts))
}

export interface GetNetworkServiceDesignGroupOutputArgs {
    /**
     * The name of the network service design group.
     */
    networkServiceDesignGroupName: pulumi.Input<string>;
    /**
     * The name of the publisher.
     */
    publisherName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
