import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the property specified by its identifier.
 */
export function getProperty(args: GetPropertyArgs, opts?: pulumi.InvokeOptions): Promise<GetPropertyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20190101:getProperty", {
        "propId": args.propId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetPropertyArgs {
    /**
     * Identifier of the property.
     */
    propId: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Property details.
 */
export interface GetPropertyResult {
    /**
     * Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
     */
    readonly displayName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Determines whether the value is a secret and should be encrypted or not. Default value is false.
     */
    readonly secret?: boolean;
    /**
     * Optional tags that when provided can be used to filter the property list.
     */
    readonly tags?: string[];
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
     */
    readonly value: string;
}
/**
 * Gets the details of the property specified by its identifier.
 */
export function getPropertyOutput(args: GetPropertyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPropertyResult> {
    return pulumi.output(args).apply((a: any) => getProperty(a, opts))
}

export interface GetPropertyOutputArgs {
    /**
     * Identifier of the property.
     */
    propId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}