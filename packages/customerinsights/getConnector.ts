import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a connector in the hub.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getConnector(args: GetConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getConnector", {
        "connectorName": args.connectorName,
        "hubName": args.hubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectorArgs {
    /**
     * The name of the connector.
     */
    connectorName: string;
    /**
     * The name of the hub.
     */
    hubName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The connector resource format.
 */
export interface GetConnectorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * ID of the connector.
     */
    readonly connectorId: number;
    /**
     * Name of the connector.
     */
    readonly connectorName?: string;
    /**
     * The connector properties.
     */
    readonly connectorProperties: {[key: string]: any};
    /**
     * Type of connector.
     */
    readonly connectorType: string;
    /**
     * The created time.
     */
    readonly created: string;
    /**
     * Description of the connector.
     */
    readonly description?: string;
    /**
     * Display name of the connector.
     */
    readonly displayName?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * If this is an internal connector.
     */
    readonly isInternal?: boolean;
    /**
     * The last modified time.
     */
    readonly lastModified: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * State of connector.
     */
    readonly state: string;
    /**
     * The hub name.
     */
    readonly tenantId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a connector in the hub.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getConnectorOutput(args: GetConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:customerinsights:getConnector", {
        "connectorName": args.connectorName,
        "hubName": args.hubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectorOutputArgs {
    /**
     * The name of the connector.
     */
    connectorName: pulumi.Input<string>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}