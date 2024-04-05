import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified network security perimeter by the name.
 */
export function getNetworkSecurityPerimeter(args: GetNetworkSecurityPerimeterArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkSecurityPerimeterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230801preview:getNetworkSecurityPerimeter", {
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkSecurityPerimeterArgs {
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The Network Security Perimeter resource
 */
export interface GetNetworkSecurityPerimeterResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * perimeter guid of the network security perimeter.
     */
    readonly perimeterGuid: string;
    /**
     * The provisioning state of the scope assignment resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified network security perimeter by the name.
 */
export function getNetworkSecurityPerimeterOutput(args: GetNetworkSecurityPerimeterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkSecurityPerimeterResult> {
    return pulumi.output(args).apply((a: any) => getNetworkSecurityPerimeter(a, opts))
}

export interface GetNetworkSecurityPerimeterOutputArgs {
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}