import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account map.
 * Azure REST API version: 2019-05-01.
 *
 * Other available API versions: 2015-08-01-preview.
 */
export function getIntegrationAccountMap(args: GetIntegrationAccountMapArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountMapResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:getIntegrationAccountMap", {
        "integrationAccountName": args.integrationAccountName,
        "mapName": args.mapName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationAccountMapArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The integration account map name.
     */
    mapName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The integration account map.
 */
export interface GetIntegrationAccountMapResult {
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
     * The resource id.
     */
    readonly id: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The map type.
     */
    readonly mapType: string;
    /**
     * The metadata.
     */
    readonly metadata?: any;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The parameters schema of integration account map.
     */
    readonly parametersSchema?: types.outputs.IntegrationAccountMapPropertiesResponseParametersSchema;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
/**
 * Gets an integration account map.
 * Azure REST API version: 2019-05-01.
 *
 * Other available API versions: 2015-08-01-preview.
 */
export function getIntegrationAccountMapOutput(args: GetIntegrationAccountMapOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationAccountMapResult> {
    return pulumi.output(args).apply((a: any) => getIntegrationAccountMap(a, opts))
}

export interface GetIntegrationAccountMapOutputArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The integration account map name.
     */
    mapName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}