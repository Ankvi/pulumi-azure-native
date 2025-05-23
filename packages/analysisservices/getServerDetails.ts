import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details about the specified Analysis Services server.
 *
 * Uses Azure REST API version 2017-08-01.
 */
export function getServerDetails(args: GetServerDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetServerDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:analysisservices:getServerDetails", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerDetailsArgs {
    /**
     * The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: string;
    /**
     * The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
     */
    serverName: string;
}

/**
 * Represents an instance of an Analysis Services resource.
 */
export interface GetServerDetailsResult {
    /**
     * A collection of AS server administrators
     */
    readonly asAdministrators?: types.outputs.ServerAdministratorsResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The SAS container URI to the backup container.
     */
    readonly backupBlobContainerUri?: string;
    /**
     * The gateway details configured for the AS server.
     */
    readonly gatewayDetails?: types.outputs.GatewayDetailsResponse;
    /**
     * An identifier that represents the Analysis Services resource.
     */
    readonly id: string;
    /**
     * The firewall settings for the AS server.
     */
    readonly ipV4FirewallSettings?: types.outputs.IPv4FirewallSettingsResponse;
    /**
     * Location of the Analysis Services resource.
     */
    readonly location: string;
    /**
     * The managed mode of the server (0 = not managed, 1 = managed).
     */
    readonly managedMode?: number;
    /**
     * The name of the Analysis Services resource.
     */
    readonly name: string;
    /**
     * The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning.
     */
    readonly provisioningState: string;
    /**
     * How the read-write server's participation in the query pool is controlled.<br/>It can have the following values: <ul><li>readOnly - indicates that the read-write server is intended not to participate in query operations</li><li>all - indicates that the read-write server can participate in query operations</li></ul>Specifying readOnly when capacity is 1 results in error.
     */
    readonly querypoolConnectionMode?: string;
    /**
     * The full name of the Analysis Services resource.
     */
    readonly serverFullName: string;
    /**
     * The server monitor mode for AS server
     */
    readonly serverMonitorMode?: number;
    /**
     * The SKU of the Analysis Services resource.
     */
    readonly sku: types.outputs.ResourceSkuResponse;
    /**
     * The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning.
     */
    readonly state: string;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the Analysis Services resource.
     */
    readonly type: string;
}
/**
 * Gets details about the specified Analysis Services server.
 *
 * Uses Azure REST API version 2017-08-01.
 */
export function getServerDetailsOutput(args: GetServerDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:analysisservices:getServerDetails", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerDetailsOutputArgs {
    /**
     * The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
     */
    serverName: pulumi.Input<string>;
}