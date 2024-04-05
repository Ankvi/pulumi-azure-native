import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a ApplicationGroup definition.
 */
export class ApplicationGroup extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationGroup {
        return new ApplicationGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:desktopvirtualization/v20220909:ApplicationGroup';

    /**
     * Returns true if the given object is an instance of ApplicationGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationGroup.__pulumiType;
    }

    /**
     * Resource Type of ApplicationGroup.
     */
    public readonly applicationGroupType!: pulumi.Output<string>;
    /**
     * Is cloud pc resource.
     */
    public /*out*/ readonly cloudPcResource!: pulumi.Output<boolean>;
    /**
     * Description of ApplicationGroup.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. 
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Friendly name of ApplicationGroup.
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * HostPool arm path of ApplicationGroup.
     */
    public readonly hostPoolArmPath!: pulumi.Output<string>;
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
    /**
     * ObjectId of ApplicationGroup. (internal use)
     */
    public /*out*/ readonly objectId!: pulumi.Output<string>;
    public readonly plan!: pulumi.Output<types.outputs.ResourceModelWithAllowedPropertySetResponsePlan | undefined>;
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
     * Workspace arm path of ApplicationGroup.
     */
    public /*out*/ readonly workspaceArmPath!: pulumi.Output<string>;

    /**
     * Create a ApplicationGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.applicationGroupType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationGroupType'");
            }
            if ((!args || args.hostPoolArmPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostPoolArmPath'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationGroupName"] = args ? args.applicationGroupName : undefined;
            resourceInputs["applicationGroupType"] = args ? args.applicationGroupType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["hostPoolArmPath"] = args ? args.hostPoolArmPath : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedBy"] = args ? args.managedBy : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["cloudPcResource"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workspaceArmPath"] = undefined /*out*/;
        } else {
            resourceInputs["applicationGroupType"] = undefined /*out*/;
            resourceInputs["cloudPcResource"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["hostPoolArmPath"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workspaceArmPath"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:desktopvirtualization:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20190123preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20190924preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20191210preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20200921preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20201019preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20201102preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20201110preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20210114preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20210201preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20210309preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20210401preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20210712:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20210903preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20220210preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20220401preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20221014preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20230707preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20230905:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20231004preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20231101preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20240116preview:ApplicationGroup" }, { type: "azure-native:desktopvirtualization/v20240306preview:ApplicationGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApplicationGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApplicationGroup resource.
 */
export interface ApplicationGroupArgs {
    /**
     * The name of the application group
     */
    applicationGroupName?: pulumi.Input<string>;
    /**
     * Resource Type of ApplicationGroup.
     */
    applicationGroupType: pulumi.Input<string | types.enums.ApplicationGroupType>;
    /**
     * Description of ApplicationGroup.
     */
    description?: pulumi.Input<string>;
    /**
     * Friendly name of ApplicationGroup.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * HostPool arm path of ApplicationGroup.
     */
    hostPoolArmPath: pulumi.Input<string>;
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    sku?: pulumi.Input<types.inputs.ResourceModelWithAllowedPropertySetSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}