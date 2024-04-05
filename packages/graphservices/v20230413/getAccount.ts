import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns account resource for a given name.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:graphservices/v20230413:getAccount", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * Account details
 */
export interface GetAccountResult {
    /**
     * Azure resource ID.
     */
    readonly id: string;
    /**
     * Location of the resource.
     */
    readonly location?: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * Property bag from billing account
     */
    readonly properties: types.outputs.AccountResourceResponseProperties;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.AccountResourceResponseSystemData;
    /**
     * resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
}
/**
 * Returns account resource for a given name.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult> {
    return pulumi.output(args).apply((a: any) => getAccount(a, opts))
}

export interface GetAccountOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}