import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the access keys of the CommunicationService resource.
 */
export function listCommunicationServiceKeys(args: ListCommunicationServiceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListCommunicationServiceKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:communication/v20230601preview:listCommunicationServiceKeys", {
        "communicationServiceName": args.communicationServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListCommunicationServiceKeysArgs {
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
 * A class representing the access keys of a CommunicationService.
 */
export interface ListCommunicationServiceKeysResult {
    /**
     * CommunicationService connection string constructed via the primaryKey
     */
    readonly primaryConnectionString?: string;
    /**
     * The primary access key.
     */
    readonly primaryKey?: string;
    /**
     * CommunicationService connection string constructed via the secondaryKey
     */
    readonly secondaryConnectionString?: string;
    /**
     * The secondary access key.
     */
    readonly secondaryKey?: string;
}
/**
 * Get the access keys of the CommunicationService resource.
 */
export function listCommunicationServiceKeysOutput(args: ListCommunicationServiceKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListCommunicationServiceKeysResult> {
    return pulumi.output(args).apply((a: any) => listCommunicationServiceKeys(a, opts))
}

export interface ListCommunicationServiceKeysOutputArgs {
    /**
     * The name of the CommunicationService resource.
     */
    communicationServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
