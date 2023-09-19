import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a connector definition
 * Azure REST API version: 2018-08-01-preview.
 */
export function getConnector(args: GetConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement:getConnector", {
        "connectorName": args.connectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectorArgs {
    /**
     * Connector Name.
     */
    connectorName: string;
    /**
     * Azure Resource Group Name.
     */
    resourceGroupName: string;
}

/**
 * The Connector model definition
 */
export interface GetConnectorResult {
    /**
     * Collection information
     */
    readonly collection: types.outputs.ConnectorCollectionInfoResponse;
    /**
     * Connector definition creation datetime
     */
    readonly createdOn: string;
    /**
     * Credentials authentication key (eg AWS ARN)
     */
    readonly credentialsKey?: string;
    /**
     * Connector DisplayName (defaults to Name)
     */
    readonly displayName?: string;
    /**
     * Connector id
     */
    readonly id: string;
    /**
     * Connector kind (eg aws)
     */
    readonly kind?: string;
    /**
     * Connector location
     */
    readonly location?: string;
    /**
     * Connector last modified datetime
     */
    readonly modifiedOn: string;
    /**
     * Connector name
     */
    readonly name: string;
    /**
     * Connector providerAccountId (determined from credentials)
     */
    readonly providerAccountId: string;
    /**
     * Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
     */
    readonly reportId?: string;
    /**
     * Connector status
     */
    readonly status?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Connector type
     */
    readonly type: string;
}
/**
 * Get a connector definition
 * Azure REST API version: 2018-08-01-preview.
 */
export function getConnectorOutput(args: GetConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectorResult> {
    return pulumi.output(args).apply((a: any) => getConnector(a, opts))
}

export interface GetConnectorOutputArgs {
    /**
     * Connector Name.
     */
    connectorName: pulumi.Input<string>;
    /**
     * Azure Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
}
