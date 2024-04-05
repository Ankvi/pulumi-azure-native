import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Return the Bastion Shareable Links for all the VMs specified in the request.
 */
export function getBastionShareableLink(args: GetBastionShareableLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetBastionShareableLinkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230501:getBastionShareableLink", {
        "bastionHostName": args.bastionHostName,
        "resourceGroupName": args.resourceGroupName,
        "vms": args.vms,
    }, opts);
}

export interface GetBastionShareableLinkArgs {
    /**
     * The name of the Bastion Host.
     */
    bastionHostName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * List of VM references.
     */
    vms?: types.inputs.BastionShareableLink[];
}

/**
 * Response for all the Bastion Shareable Link endpoints.
 */
export interface GetBastionShareableLinkResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink?: string;
    /**
     * List of Bastion Shareable Links for the request.
     */
    readonly value?: types.outputs.BastionShareableLinkResponse[];
}
/**
 * Return the Bastion Shareable Links for all the VMs specified in the request.
 */
export function getBastionShareableLinkOutput(args: GetBastionShareableLinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBastionShareableLinkResult> {
    return pulumi.output(args).apply((a: any) => getBastionShareableLink(a, opts))
}

export interface GetBastionShareableLinkOutputArgs {
    /**
     * The name of the Bastion Host.
     */
    bastionHostName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * List of VM references.
     */
    vms?: pulumi.Input<pulumi.Input<types.inputs.BastionShareableLinkArgs>[]>;
}