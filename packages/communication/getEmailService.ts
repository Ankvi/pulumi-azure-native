import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the EmailService and its properties.
 * Azure REST API version: 2023-03-31.
 *
 * Other available API versions: 2023-04-01-preview, 2023-06-01-preview.
 */
export function getEmailService(args: GetEmailServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:communication:getEmailService", {
        "emailServiceName": args.emailServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEmailServiceArgs {
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A class representing an EmailService resource.
 */
export interface GetEmailServiceResult {
    /**
     * The location where the email service stores its data at rest.
     */
    readonly dataLocation: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
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
 * Get the EmailService and its properties.
 * Azure REST API version: 2023-03-31.
 *
 * Other available API versions: 2023-04-01-preview, 2023-06-01-preview.
 */
export function getEmailServiceOutput(args: GetEmailServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEmailServiceResult> {
    return pulumi.output(args).apply((a: any) => getEmailService(a, opts))
}

export interface GetEmailServiceOutputArgs {
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
