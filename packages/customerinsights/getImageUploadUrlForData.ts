import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets data image upload URL.
 * Azure REST API version: 2017-04-26.
 */
export function getImageUploadUrlForData(args: GetImageUploadUrlForDataArgs, opts?: pulumi.InvokeOptions): Promise<GetImageUploadUrlForDataResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getImageUploadUrlForData", {
        "entityType": args.entityType,
        "entityTypeName": args.entityTypeName,
        "hubName": args.hubName,
        "relativePath": args.relativePath,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetImageUploadUrlForDataArgs {
    /**
     * Type of entity. Can be Profile or Interaction.
     */
    entityType?: string;
    /**
     * Name of the entity type.
     */
    entityTypeName?: string;
    /**
     * The name of the hub.
     */
    hubName: string;
    /**
     * Relative path of the image.
     */
    relativePath?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The image definition.
 */
export interface GetImageUploadUrlForDataResult {
    /**
     * Content URL for the image blob.
     */
    readonly contentUrl?: string;
    /**
     * Whether image exists already.
     */
    readonly imageExists?: boolean;
    /**
     * Relative path of the image.
     */
    readonly relativePath?: string;
}
/**
 * Gets data image upload URL.
 * Azure REST API version: 2017-04-26.
 */
export function getImageUploadUrlForDataOutput(args: GetImageUploadUrlForDataOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImageUploadUrlForDataResult> {
    return pulumi.output(args).apply((a: any) => getImageUploadUrlForData(a, opts))
}

export interface GetImageUploadUrlForDataOutputArgs {
    /**
     * Type of entity. Can be Profile or Interaction.
     */
    entityType?: pulumi.Input<string>;
    /**
     * Name of the entity type.
     */
    entityTypeName?: pulumi.Input<string>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * Relative path of the image.
     */
    relativePath?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}