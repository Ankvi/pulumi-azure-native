import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account schema.
 * Azure REST API version: 2019-05-01.
 */
export function getIntegrationAccountSchema(args: GetIntegrationAccountSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountSchemaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:getIntegrationAccountSchema", {
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "schemaName": args.schemaName,
    }, opts);
}

export interface GetIntegrationAccountSchemaArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The integration account schema name.
     */
    schemaName: string;
}

/**
 * The integration account schema.
 */
export interface GetIntegrationAccountSchemaResult {
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The content.
     */
    readonly content?: string;
    /**
     * The content link.
     */
    readonly contentLink: types.outputs.ContentLinkResponse;
    /**
     * The content type.
     */
    readonly contentType?: string;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The document name.
     */
    readonly documentName?: string;
    /**
     * The file name.
     */
    readonly fileName?: string;
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The metadata.
     */
    readonly metadata?: any;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The schema type.
     */
    readonly schemaType: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The target namespace of the schema.
     */
    readonly targetNamespace?: string;
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
/**
 * Gets an integration account schema.
 * Azure REST API version: 2019-05-01.
 */
export function getIntegrationAccountSchemaOutput(args: GetIntegrationAccountSchemaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationAccountSchemaResult> {
    return pulumi.output(args).apply((a: any) => getIntegrationAccountSchema(a, opts))
}

export interface GetIntegrationAccountSchemaOutputArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The integration account schema name.
     */
    schemaName: pulumi.Input<string>;
}
