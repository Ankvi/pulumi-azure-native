import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account schema.
 */
export function getIntegrationAccountSchema(args: GetIntegrationAccountSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountSchemaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20150801preview:getIntegrationAccountSchema", {
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

export interface GetIntegrationAccountSchemaResult {
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The content.
     */
    readonly content?: any;
    /**
     * The content link.
     */
    readonly contentLink: types.outputs.IntegrationAccountContentLinkResponse;
    /**
     * The content type.
     */
    readonly contentType?: string;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The resource id.
     */
    readonly id?: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The metadata.
     */
    readonly metadata?: any;
    /**
     * The resource name.
     */
    readonly name?: string;
    /**
     * The schema type.
     */
    readonly schemaType?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The target namespace.
     */
    readonly targetNamespace?: string;
    /**
     * The resource type.
     */
    readonly type?: string;
}
/**
 * Gets an integration account schema.
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
