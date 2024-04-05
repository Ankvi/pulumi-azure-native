import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the custom resource provider manifest.
 */
export function getCustomResourceProvider(args: GetCustomResourceProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomResourceProviderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customproviders/v20180901preview:getCustomResourceProvider", {
        "resourceGroupName": args.resourceGroupName,
        "resourceProviderName": args.resourceProviderName,
    }, opts);
}

export interface GetCustomResourceProviderArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the resource provider.
     */
    resourceProviderName: string;
}

/**
 * A manifest file that defines the custom resource provider resources.
 */
export interface GetCustomResourceProviderResult {
    /**
     * A list of actions that the custom resource provider implements.
     */
    readonly actions?: types.outputs.CustomRPActionRouteDefinitionResponse[];
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The provisioning state of the resource provider.
     */
    readonly provisioningState: string;
    /**
     * A list of resource types that the custom resource provider implements.
     */
    readonly resourceTypes?: types.outputs.CustomRPResourceTypeRouteDefinitionResponse[];
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * A list of validations to run on the custom resource provider's requests.
     */
    readonly validations?: types.outputs.CustomRPValidationsResponse[];
}
/**
 * Gets the custom resource provider manifest.
 */
export function getCustomResourceProviderOutput(args: GetCustomResourceProviderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomResourceProviderResult> {
    return pulumi.output(args).apply((a: any) => getCustomResourceProvider(a, opts))
}

export interface GetCustomResourceProviderOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource provider.
     */
    resourceProviderName: pulumi.Input<string>;
}