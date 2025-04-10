import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Schema for App Attach Package properties.
 *
 * Uses Azure REST API version 2023-10-04-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-03, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview.
 */
export class AppAttachPackage extends pulumi.CustomResource {
    /**
     * Get an existing AppAttachPackage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppAttachPackage {
        return new AppAttachPackage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:desktopvirtualization:AppAttachPackage';

    /**
     * Returns true if the given object is an instance of AppAttachPackage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppAttachPackage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppAttachPackage.__pulumiType;
    }

    /**
     * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. 
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly identity!: pulumi.Output<types.outputs.ResourceModelWithAllowedPropertySetResponseIdentity | undefined>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
     */
    public readonly managedBy!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly plan!: pulumi.Output<types.outputs.ResourceModelWithAllowedPropertySetResponsePlan | undefined>;
    /**
     * Detailed properties for App Attach Package
     */
    public readonly properties!: pulumi.Output<types.outputs.AppAttachPackagePropertiesResponse>;
    public readonly sku!: pulumi.Output<types.outputs.ResourceModelWithAllowedPropertySetResponseSku | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AppAttachPackage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppAttachPackageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appAttachPackageName"] = args ? args.appAttachPackageName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedBy"] = args ? args.managedBy : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:desktopvirtualization/v20231004preview:AppAttachPackage" }, { type: "azure-native:desktopvirtualization/v20231101preview:AppAttachPackage" }, { type: "azure-native:desktopvirtualization/v20240116preview:AppAttachPackage" }, { type: "azure-native:desktopvirtualization/v20240306preview:AppAttachPackage" }, { type: "azure-native:desktopvirtualization/v20240403:AppAttachPackage" }, { type: "azure-native:desktopvirtualization/v20240408preview:AppAttachPackage" }, { type: "azure-native:desktopvirtualization/v20240808preview:AppAttachPackage" }, { type: "azure-native:desktopvirtualization/v20241101preview:AppAttachPackage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AppAttachPackage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AppAttachPackage resource.
 */
export interface AppAttachPackageArgs {
    /**
     * The name of the App Attach package arm object
     */
    appAttachPackageName?: pulumi.Input<string>;
    identity?: pulumi.Input<types.inputs.ResourceModelWithAllowedPropertySetIdentityArgs>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    kind?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
     */
    managedBy?: pulumi.Input<string>;
    plan?: pulumi.Input<types.inputs.ResourceModelWithAllowedPropertySetPlanArgs>;
    /**
     * Detailed properties for App Attach Package
     */
    properties: pulumi.Input<types.inputs.AppAttachPackagePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    sku?: pulumi.Input<types.inputs.ResourceModelWithAllowedPropertySetSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}