import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the Visual Studio Team Services account resource details.
 * Azure REST API version: 2017-11-01-preview.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:visualstudio:getAccount", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * Name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the resource.
     */
    resourceName: string;
}

/**
 * The response to an account resource GET request.
 */
export interface GetAccountResult {
    /**
     * Unique identifier of the resource.
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
     * Resource properties.
     */
    readonly properties: {[key: string]: string};
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
 * Gets the Visual Studio Team Services account resource details.
 * Azure REST API version: 2017-11-01-preview.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult> {
    return pulumi.output(args).apply((a: any) => getAccount(a, opts))
}

export interface GetAccountOutputArgs {
    /**
     * Name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the resource.
     */
    resourceName: pulumi.Input<string>;
}