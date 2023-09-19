import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Contact
 * Azure REST API version: 2022-12-01-preview.
 */
export function getContact(args: GetContactArgs, opts?: pulumi.InvokeOptions): Promise<GetContactResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:voiceservices:getContact", {
        "communicationsGatewayName": args.communicationsGatewayName,
        "contactName": args.contactName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContactArgs {
    /**
     * Unique identifier for this deployment
     */
    communicationsGatewayName: string;
    /**
     * Unique identifier for this contact
     */
    contactName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Contact resource
 */
export interface GetContactResult {
    /**
     * Full name of contact
     */
    readonly contactName: string;
    /**
     * Email address of contact
     */
    readonly email: string;
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
     * Telephone number of contact
     */
    readonly phoneNumber: string;
    /**
     * Resource provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Job title of contact
     */
    readonly role: string;
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
 * Get a Contact
 * Azure REST API version: 2022-12-01-preview.
 */
export function getContactOutput(args: GetContactOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContactResult> {
    return pulumi.output(args).apply((a: any) => getContact(a, opts))
}

export interface GetContactOutputArgs {
    /**
     * Unique identifier for this deployment
     */
    communicationsGatewayName: pulumi.Input<string>;
    /**
     * Unique identifier for this contact
     */
    contactName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
