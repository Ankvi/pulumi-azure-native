import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets entity type (profile or interaction) image upload URL.
 * Azure REST API version: 2017-04-26.
 */
export function getImageUploadUrlForEntityType(args: GetImageUploadUrlForEntityTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetImageUploadUrlForEntityTypeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getImageUploadUrlForEntityType", {
        "entityType": args.entityType,
        "entityTypeName": args.entityTypeName,
        "hubName": args.hubName,
        "relativePath": args.relativePath,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetImageUploadUrlForEntityTypeArgs {
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
export interface GetImageUploadUrlForEntityTypeResult {
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
 * Gets entity type (profile or interaction) image upload URL.
 * Azure REST API version: 2017-04-26.
 */
export function getImageUploadUrlForEntityTypeOutput(args: GetImageUploadUrlForEntityTypeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImageUploadUrlForEntityTypeResult> {
    return pulumi.output(args).apply((a: any) => getImageUploadUrlForEntityType(a, opts))
}

export interface GetImageUploadUrlForEntityTypeOutputArgs {
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
