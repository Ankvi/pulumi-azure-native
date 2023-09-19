import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the named public certificate for an app (or deployment slot, if specified).
 */
export function getWebAppPublicCertificateSlot(args: GetWebAppPublicCertificateSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppPublicCertificateSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:getWebAppPublicCertificateSlot", {
        "name": args.name,
        "publicCertificateName": args.publicCertificateName,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppPublicCertificateSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Public certificate name.
     */
    publicCertificateName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API the named binding for the production slot.
     */
    slot: string;
}

/**
 * Public certificate object
 */
export interface GetWebAppPublicCertificateSlotResult {
    /**
     * Public Certificate byte array
     */
    readonly blob?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Public Certificate Location
     */
    readonly publicCertificateLocation?: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Certificate Thumbprint
     */
    readonly thumbprint: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Get the named public certificate for an app (or deployment slot, if specified).
 */
export function getWebAppPublicCertificateSlotOutput(args: GetWebAppPublicCertificateSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppPublicCertificateSlotResult> {
    return pulumi.output(args).apply((a: any) => getWebAppPublicCertificateSlot(a, opts))
}

export interface GetWebAppPublicCertificateSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Public certificate name.
     */
    publicCertificateName: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API the named binding for the production slot.
     */
    slot: pulumi.Input<string>;
}
