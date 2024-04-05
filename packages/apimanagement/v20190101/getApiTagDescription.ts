import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get Tag description in scope of API
 */
export function getApiTagDescription(args: GetApiTagDescriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetApiTagDescriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20190101:getApiTagDescription", {
        "apiId": args.apiId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "tagId": args.tagId,
    }, opts);
}

export interface GetApiTagDescriptionArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * Tag identifier. Must be unique in the current API Management service instance.
     */
    tagId: string;
}

/**
 * Contract details.
 */
export interface GetApiTagDescriptionResult {
    /**
     * Description of the Tag.
     */
    readonly description?: string;
    /**
     * Tag name.
     */
    readonly displayName?: string;
    /**
     * Description of the external resources describing the tag.
     */
    readonly externalDocsDescription?: string;
    /**
     * Absolute URL of external resources describing the tag.
     */
    readonly externalDocsUrl?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
/**
 * Get Tag description in scope of API
 */
export function getApiTagDescriptionOutput(args: GetApiTagDescriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiTagDescriptionResult> {
    return pulumi.output(args).apply((a: any) => getApiTagDescription(a, opts))
}

export interface GetApiTagDescriptionOutputArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Tag identifier. Must be unique in the current API Management service instance.
     */
    tagId: pulumi.Input<string>;
}