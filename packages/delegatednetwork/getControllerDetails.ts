import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets details about the specified dnc controller.
 * Azure REST API version: 2021-03-15.
 *
 * Other available API versions: 2023-05-18-preview, 2023-06-27-preview.
 */
export function getControllerDetails(args: GetControllerDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetControllerDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:delegatednetwork:getControllerDetails", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetControllerDetailsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
     */
    resourceName: string;
}

/**
 * Represents an instance of a DNC controller.
 */
export interface GetControllerDetailsResult {
    /**
     * dnc application id should be used by customer to authenticate with dnc gateway.
     */
    readonly dncAppId: string;
    /**
     * dnc endpoint url that customers can use to connect to
     */
    readonly dncEndpoint: string;
    /**
     * tenant id of dnc application id
     */
    readonly dncTenantId: string;
    /**
     * An identifier that represents the resource.
     */
    readonly id: string;
    /**
     * Location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The current state of dnc controller resource.
     */
    readonly provisioningState: string;
    /**
     * Resource guid.
     */
    readonly resourceGuid: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of resource.
     */
    readonly type: string;
}
/**
 * Gets details about the specified dnc controller.
 * Azure REST API version: 2021-03-15.
 *
 * Other available API versions: 2023-05-18-preview, 2023-06-27-preview.
 */
export function getControllerDetailsOutput(args: GetControllerDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetControllerDetailsResult> {
    return pulumi.output(args).apply((a: any) => getControllerDetails(a, opts))
}

export interface GetControllerDetailsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
     */
    resourceName: pulumi.Input<string>;
}
