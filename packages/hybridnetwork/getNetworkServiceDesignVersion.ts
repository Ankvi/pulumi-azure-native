import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a network service design version.
 * Azure REST API version: 2023-09-01.
 */
export function getNetworkServiceDesignVersion(args: GetNetworkServiceDesignVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkServiceDesignVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:getNetworkServiceDesignVersion", {
        "networkServiceDesignGroupName": args.networkServiceDesignGroupName,
        "networkServiceDesignVersionName": args.networkServiceDesignVersionName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkServiceDesignVersionArgs {
    /**
     * The name of the network service design group.
     */
    networkServiceDesignGroupName: string;
    /**
     * The name of the network service design version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
     */
    networkServiceDesignVersionName: string;
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
 * network service design version.
 */
export interface GetNetworkServiceDesignVersionResult {
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
     * network service design version properties.
     */
    readonly properties: types.outputs.NetworkServiceDesignVersionPropertiesFormatResponse;
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
 * Gets information about a network service design version.
 * Azure REST API version: 2023-09-01.
 */
export function getNetworkServiceDesignVersionOutput(args: GetNetworkServiceDesignVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkServiceDesignVersionResult> {
    return pulumi.output(args).apply((a: any) => getNetworkServiceDesignVersion(a, opts))
}

export interface GetNetworkServiceDesignVersionOutputArgs {
    /**
     * The name of the network service design group.
     */
    networkServiceDesignGroupName: pulumi.Input<string>;
    /**
     * The name of the network service design version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
     */
    networkServiceDesignVersionName: pulumi.Input<string>;
    /**
     * The name of the publisher.
     */
    publisherName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
