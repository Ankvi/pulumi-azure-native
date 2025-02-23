import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the CommunicationService and its properties.
 * Azure REST API version: 2023-03-31.
 *
 * Other available API versions: 2023-04-01, 2023-04-01-preview, 2023-06-01-preview, 2024-09-01-preview.
 */
export function getCommunicationService(args: GetCommunicationServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetCommunicationServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:communication:getCommunicationService", {
        "communicationServiceName": args.communicationServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCommunicationServiceArgs {
    /**
     * The name of the CommunicationService resource.
     */
    communicationServiceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A class representing a CommunicationService resource.
 */
export interface GetCommunicationServiceResult {
    /**
     * The location where the communication service stores its data at rest.
     */
    readonly dataLocation: string;
    /**
     * FQDN of the CommunicationService instance.
     */
    readonly hostName: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The immutable resource Id of the communication service.
     */
    readonly immutableResourceId: string;
    /**
     * List of email Domain resource Ids.
     */
    readonly linkedDomains?: string[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Resource ID of an Azure Notification Hub linked to this resource.
     */
    readonly notificationHubId: string;
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
    /**
     * Version of the CommunicationService resource. Probably you need the same or higher version of client SDKs.
     */
    readonly version: string;
}
/**
 * Get the CommunicationService and its properties.
 * Azure REST API version: 2023-03-31.
 *
 * Other available API versions: 2023-04-01, 2023-04-01-preview, 2023-06-01-preview, 2024-09-01-preview.
 */
export function getCommunicationServiceOutput(args: GetCommunicationServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCommunicationServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:communication:getCommunicationService", {
        "communicationServiceName": args.communicationServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCommunicationServiceOutputArgs {
    /**
     * The name of the CommunicationService resource.
     */
    communicationServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}