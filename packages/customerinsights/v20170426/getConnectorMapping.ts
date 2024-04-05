import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a connector mapping in the connector.
 */
export function getConnectorMapping(args: GetConnectorMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectorMappingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights/v20170426:getConnectorMapping", {
        "connectorName": args.connectorName,
        "hubName": args.hubName,
        "mappingName": args.mappingName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectorMappingArgs {
    /**
     * The name of the connector.
     */
    connectorName: string;
    /**
     * The name of the hub.
     */
    hubName: string;
    /**
     * The name of the connector mapping.
     */
    mappingName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The connector mapping resource format.
 */
export interface GetConnectorMappingResult {
    /**
     * The connector mapping name
     */
    readonly connectorMappingName: string;
    /**
     * The connector name.
     */
    readonly connectorName: string;
    /**
     * Type of connector.
     */
    readonly connectorType?: string;
    /**
     * The created time.
     */
    readonly created: string;
    /**
     * The DataFormat ID.
     */
    readonly dataFormatId: string;
    /**
     * The description of the connector mapping.
     */
    readonly description?: string;
    /**
     * Display name for the connector mapping.
     */
    readonly displayName?: string;
    /**
     * Defines which entity type the file should map to.
     */
    readonly entityType: string;
    /**
     * The mapping entity name.
     */
    readonly entityTypeName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The last modified time.
     */
    readonly lastModified: string;
    /**
     * The properties of the mapping.
     */
    readonly mappingProperties: types.outputs.ConnectorMappingPropertiesResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The next run time based on customer's settings.
     */
    readonly nextRunTime: string;
    /**
     * The RunId.
     */
    readonly runId: string;
    /**
     * State of connector mapping.
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
 * Gets a connector mapping in the connector.
 */
export function getConnectorMappingOutput(args: GetConnectorMappingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectorMappingResult> {
    return pulumi.output(args).apply((a: any) => getConnectorMapping(a, opts))
}

export interface GetConnectorMappingOutputArgs {
    /**
     * The name of the connector.
     */
    connectorName: pulumi.Input<string>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the connector mapping.
     */
    mappingName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}