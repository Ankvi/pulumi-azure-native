import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets guest diagnostics association settings.
 */
export function getGuestDiagnosticsSettingsAssociation(args: GetGuestDiagnosticsSettingsAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestDiagnosticsSettingsAssociationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights/v20180601preview:getGuestDiagnosticsSettingsAssociation", {
        "associationName": args.associationName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetGuestDiagnosticsSettingsAssociationArgs {
    /**
     * The name of the diagnostic settings association.
     */
    associationName: string;
    /**
     * The fully qualified ID of the resource, including the resource name and resource type.
     */
    resourceUri: string;
}

/**
 * Virtual machine guest diagnostic settings resource.
 */
export interface GetGuestDiagnosticsSettingsAssociationResult {
    /**
     * The guest diagnostic settings name.
     */
    readonly guestDiagnosticSettingsName: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Gets guest diagnostics association settings.
 */
export function getGuestDiagnosticsSettingsAssociationOutput(args: GetGuestDiagnosticsSettingsAssociationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGuestDiagnosticsSettingsAssociationResult> {
    return pulumi.output(args).apply((a: any) => getGuestDiagnosticsSettingsAssociation(a, opts))
}

export interface GetGuestDiagnosticsSettingsAssociationOutputArgs {
    /**
     * The name of the diagnostic settings association.
     */
    associationName: pulumi.Input<string>;
    /**
     * The fully qualified ID of the resource, including the resource name and resource type.
     */
    resourceUri: pulumi.Input<string>;
}
