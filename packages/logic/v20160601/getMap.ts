import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account map.
 */
export function getMap(args: GetMapArgs, opts?: pulumi.InvokeOptions): Promise<GetMapResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20160601:getMap", {
        "integrationAccountName": args.integrationAccountName,
        "mapName": args.mapName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMapArgs {
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
export interface GetMapResult {
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
 */
export function getMapOutput(args: GetMapOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMapResult> {
    return pulumi.output(args).apply((a: any) => getMap(a, opts))
}

export interface GetMapOutputArgs {
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