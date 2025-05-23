import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a disaster recovery configuration.
 *
 * Uses Azure REST API version 2014-04-01.
 */
export function getDisasterRecoveryConfiguration(args: GetDisasterRecoveryConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetDisasterRecoveryConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getDisasterRecoveryConfiguration", {
        "disasterRecoveryConfigurationName": args.disasterRecoveryConfigurationName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetDisasterRecoveryConfigurationArgs {
    /**
     * The name of the disaster recovery configuration.
     */
    disasterRecoveryConfigurationName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * Represents a disaster recovery configuration.
 */
export interface GetDisasterRecoveryConfigurationResult {
    /**
     * Whether or not failover can be done automatically.
     */
    readonly autoFailover: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * How aggressive the automatic failover should be.
     */
    readonly failoverPolicy: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Location of the server that contains this disaster recovery configuration.
     */
    readonly location: string;
    /**
     * Logical name of the server.
     */
    readonly logicalServerName: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Logical name of the partner server.
     */
    readonly partnerLogicalServerName: string;
    /**
     * Id of the partner server.
     */
    readonly partnerServerId: string;
    /**
     * The role of the current server in the disaster recovery configuration.
     */
    readonly role: string;
    /**
     * The status of the disaster recovery configuration.
     */
    readonly status: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a disaster recovery configuration.
 *
 * Uses Azure REST API version 2014-04-01.
 */
export function getDisasterRecoveryConfigurationOutput(args: GetDisasterRecoveryConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDisasterRecoveryConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getDisasterRecoveryConfiguration", {
        "disasterRecoveryConfigurationName": args.disasterRecoveryConfigurationName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetDisasterRecoveryConfigurationOutputArgs {
    /**
     * The name of the disaster recovery configuration.
     */
    disasterRecoveryConfigurationName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}