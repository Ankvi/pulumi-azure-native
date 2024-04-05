import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties for an Azure Dev Spaces Controller.
 */
export function getController(args: GetControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetControllerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devspaces/v20190401:getController", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetControllerArgs {
    /**
     * Name of the resource.
     */
    name: string;
    /**
     * Resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

export interface GetControllerResult {
    /**
     * DNS name for accessing DataPlane services
     */
    readonly dataPlaneFqdn: string;
    /**
     * DNS suffix for public endpoints running in the Azure Dev Spaces Controller.
     */
    readonly hostSuffix: string;
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * Region where the Azure resource is located.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the Azure Dev Spaces Controller.
     */
    readonly provisioningState: string;
    /**
     * Model representing SKU for Azure Dev Spaces Controller.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Tags for the Azure resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * DNS of the target container host's API server
     */
    readonly targetContainerHostApiServerFqdn: string;
    /**
     * Resource ID of the target container host
     */
    readonly targetContainerHostResourceId: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the properties for an Azure Dev Spaces Controller.
 */
export function getControllerOutput(args: GetControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetControllerResult> {
    return pulumi.output(args).apply((a: any) => getController(a, opts))
}

export interface GetControllerOutputArgs {
    /**
     * Name of the resource.
     */
    name: pulumi.Input<string>;
    /**
     * Resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}